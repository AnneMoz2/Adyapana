import { google } from 'googleapis';
import { Readable } from 'stream';

// Folder IDs for each subject - these come from environment variables
const FOLDER_IDS: Record<string, Record<string, string>> = {
  'o-level': {
    mathematics: process.env.DRIVE_OL_MATH || '',
    science: process.env.DRIVE_OL_SCIENCE || '',
    english: process.env.DRIVE_OL_ENGLISH || '',
    sinhala: process.env.DRIVE_OL_SINHALA || '',
    tamil: process.env.DRIVE_OL_TAMIL || '',
    history: process.env.DRIVE_OL_HISTORY || '',
    commerceAccounting: process.env.DRIVE_OL_COMMERCE || '',
    ict: process.env.DRIVE_OL_ICT || '',
    civics: process.env.DRIVE_OL_CIVICS || '',
    drama: process.env.DRIVE_OL_DRAMA || '',
    easternMusic: process.env.DRIVE_OL_EASTERN_MUSIC || '',
    westernMusic: process.env.DRIVE_OL_WESTERN_MUSIC || '',
    health: process.env.DRIVE_OL_HEALTH || '',
    religion: process.env.DRIVE_OL_RELIGION || '',
    other: process.env.DRIVE_OL_OTHER || '',
  },
  'a-level': {
    scienceStream: process.env.DRIVE_AL_SCIENCE || '',
    commerce: process.env.DRIVE_AL_COMMERCE || '',
    artStream: process.env.DRIVE_AL_ART || '',
    other: process.env.DRIVE_AL_OTHER || '',
  },
};

// Initialize Google Drive API with service account
function getDriveClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  return google.drive({ version: 'v3', auth });
}

export async function uploadToDrive(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string,
  level: string,
  subject: string
): Promise<{ id: string; webViewLink: string }> {
  const drive = getDriveClient();
  
  // Get the folder ID for this level and subject
  const folderId = FOLDER_IDS[level]?.[subject];
  
  if (!folderId) {
    throw new Error(`No folder configured for ${level}/${subject}. Please set up environment variables.`);
  }

  // Convert buffer to readable stream
  const stream = new Readable();
  stream.push(fileBuffer);
  stream.push(null);

  // Upload file to Google Drive
  const response = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: mimeType,
      body: stream,
    },
    fields: 'id, webViewLink',
  });

  // Note: Files inherit sharing permissions from the parent folder
  // Make sure your folders are shared as "Anyone with link can view"

  return {
    id: response.data.id!,
    webViewLink: response.data.webViewLink || `https://drive.google.com/file/d/${response.data.id}/view`,
  };
}

export function getFolderId(level: string, subject: string): string | undefined {
  return FOLDER_IDS[level]?.[subject];
}
