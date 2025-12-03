# Google Drive Setup Guide for Adyapana

Simple setup guide for storing educational content on Google Drive.

## 1. Create Folder Structure

Create this folder structure in Google Drive:

```
📁 Adyapana/
├── 📁 O-Level/
│   ├── 📁 Mathematics/
│   ├── 📁 Science/
│   ├── 📁 English/
│   ├── 📁 Sinhala/
│   ├── 📁 Tamil/
│   ├── 📁 History/
│   ├── 📁 Commerce/
│   └── 📁 ICT/
│
└── 📁 A-Level/
    ├── 📁 Biology/
    ├── 📁 Chemistry/
    ├── 📁 Physics/
    ├── 📁 Combined-Maths/
    ├── 📁 Commerce/
    └── 📁 ICT/
```

## 2. Share the Main Folder

1. Right-click on the **Adyapana** folder
2. Click **Share**
3. Click **"Anyone with the link"**
4. Set permission to **Editor** (so people can upload)
5. Copy the folder link

## 3. Update the Website

### Step 1: Update the Upload Page

Open `src/app/[locale]/upload/page.tsx` and find this line:

```typescript
const GOOGLE_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID';
```

Replace `YOUR_FOLDER_ID` with your actual folder ID from the share link.

### Step 2: Add Subject Folder Links

Open `src/data/courses.ts` and add your folder links:

```typescript
{
  id: 'ol-math-en',
  title: 'O Level Mathematics',
  description: 'Complete O Level Mathematics notes, past papers, and video lessons.',
  level: 'o-level',
  subject: 'mathematics',
  language: 'en',
  driveUrl: 'https://drive.google.com/drive/folders/YOUR_MATH_FOLDER_ID',
},
```

## 4. How to Get Folder Links

1. Open Google Drive
2. Navigate to the subject folder (e.g., O-Level → Mathematics)
3. Right-click the folder → **Get link**
4. Copy the link

The link will look like:
```
https://drive.google.com/drive/folders/1ABC123xyz789
```

## 5. File Naming Convention

Recommend contributors name files like:
- `2023_OL_Mathematics_PastPaper.pdf`
- `Chemistry_Unit1_Notes.pdf`
- `Physics_Mechanics_Video.mp4`

---

## Quick Checklist

- [ ] Create folder structure in Google Drive
- [ ] Share main folder with "Anyone with the link" (Editor access)
- [ ] Copy main folder link to upload page
- [ ] Copy each subject folder link to courses.ts
- [ ] Test that links work

---

Need help? Open an issue on GitHub.
