import { NextRequest, NextResponse } from 'next/server';
import { uploadToDrive } from '@/lib/google-drive';

// Max file size: 100MB
const MAX_FILE_SIZE = 100 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const file = formData.get('file') as File | null;
    const level = formData.get('level') as string;
    const subject = formData.get('subject') as string;
    const title = formData.get('title') as string;
    const contributor = formData.get('contributor') as string;

    // Validation
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!level || !subject) {
      return NextResponse.json({ error: 'Level and subject are required' }, { status: 400 });
    }

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large. Maximum size is 100MB' }, { status: 400 });
    }

    // Get file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create descriptive filename
    const timestamp = new Date().toISOString().split('T')[0];
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9\u0D80-\u0DFF\u0B80-\u0BFF\s-]/g, '').trim().replace(/\s+/g, '_');
    const extension = file.name.split('.').pop() || 'file';
    const contributorPart = contributor ? `_by_${contributor.replace(/\s+/g, '_')}` : '';
    const fileName = `${timestamp}_${sanitizedTitle}${contributorPart}.${extension}`;

    // Upload to Google Drive
    const result = await uploadToDrive(
      buffer,
      fileName,
      file.type,
      level,
      subject
    );

    console.log('✅ File uploaded successfully:', {
      fileName,
      level,
      subject,
      contributor: contributor || 'Anonymous',
      driveId: result.id,
      link: result.webViewLink,
    });

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      fileId: result.id,
      viewLink: result.webViewLink,
    });

  } catch (error) {
    console.error('❌ Upload error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Upload failed';
    
    // Check if it's a configuration error
    if (errorMessage.includes('No folder configured')) {
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
    
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 });
  }
}
