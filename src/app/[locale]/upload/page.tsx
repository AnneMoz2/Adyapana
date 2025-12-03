'use client';

import { useTranslations } from 'next-intl';
import { Upload, ExternalLink, FileText, CheckCircle } from 'lucide-react';

export default function UploadPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('upload');

  // Google Form for submissions
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdv82yykyyQTRN8yMtAA1-4M9hhhkEYlAQ7GUpu0wJ75GQNpQ/viewform';

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Upload className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            {t('title')}
          </h1>
          <p className="text-white/80">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits Card */}
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-bold text-dark-900 mb-4">📚 Share Your Knowledge</h2>
          <p className="text-dark-600 mb-6">
            Help students affected by the floods by sharing your notes, past papers, and educational videos.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-dark-700">Upload notes, past papers, or videos</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-dark-700">Select the subject and exam level</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-dark-700">We&apos;ll review and add it to the website</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-dark-700">Your contribution will help thousands of students!</span>
            </div>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center gap-2 text-lg py-4"
          >
            <FileText className="w-5 h-5" />
            Open Submission Form
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instructions */}
        <div className="card p-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-4">📝 How It Works</h3>
          <ol className="text-sm text-blue-700 space-y-3">
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
              <span>Click the button above to open the form</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
              <span>Fill in the title and select the subject</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
              <span>Upload your file (PDF, Word, Video, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
              <span>Submit! We&apos;ll review and add it to the correct section</span>
            </li>
          </ol>
        </div>

        {/* Accepted Files */}
        <div className="mt-6 text-center text-sm text-dark-500">
          <p className="mb-2">Accepted file types:</p>
          <p className="text-dark-400">
            PDF, Word (.doc, .docx), PowerPoint (.ppt, .pptx), Images, Videos (up to 10GB)
          </p>
        </div>
      </div>
    </div>
  );
}
