'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Upload, Check, AlertCircle, FileText, X, Send, File } from 'lucide-react';
import { Subject } from '@/data/courses';

export default function UploadPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('upload');
  const subjectsT = useTranslations('subjects');
  const navT = useTranslations('nav');

  const [formData, setFormData] = useState({
    contributorName: '',
    title: '',
    examLevel: '',
    subject: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadedLink, setUploadedLink] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const oLevelSubjects: Subject[] = [
    'mathematics', 'science', 'english', 'sinhala', 'tamil', 'history', 
    'commerceAccounting', 'ict', 'civics', 'drama', 'easternMusic', 
    'westernMusic', 'health', 'religion', 'other'
  ];

  const aLevelSubjects: Subject[] = [
    'scienceStream', 'commerce', 'artStream', 'other'
  ];

  const currentSubjects = formData.examLevel === 'o-level' ? oLevelSubjects : 
                          formData.examLevel === 'a-level' ? aLevelSubjects : [];

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'image/jpeg',
    'image/png',
    'image/gif',
  ];

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        setErrorMessage('File too large. Maximum size is 100MB');
        return;
      }
      setSelectedFile(file);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.examLevel || !formData.subject || !formData.title || !selectedFile) {
      setErrorMessage('Please fill in all required fields and select a file');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const uploadData = new FormData();
      uploadData.append('file', selectedFile);
      uploadData.append('level', formData.examLevel);
      uploadData.append('subject', formData.subject);
      uploadData.append('title', formData.title);
      uploadData.append('contributor', formData.contributorName);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      setUploadedLink(result.viewLink);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Upload error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Upload failed. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      contributorName: '',
      title: '',
      examLevel: '',
      subject: '',
    });
    setSelectedFile(null);
    setSubmitStatus('idle');
    setErrorMessage('');
    setUploadedLink('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
        {/* Info Box */}
        <div className="card p-6 mb-8 bg-blue-50 border-blue-200">
          <h2 className="font-semibold text-blue-800 mb-2">📚 Automatic Upload</h2>
          <p className="text-sm text-blue-700">
            Your file will be automatically uploaded to the correct folder based on the level and subject you select. No manual review needed!
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="card p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-2">{t('success')}</h2>
            <p className="text-dark-500 mb-2">Thank you for contributing!</p>
            <p className="text-sm text-dark-400 mb-4">
              Your file has been added to <strong>{formData.examLevel === 'o-level' ? 'O Level' : 'A Level'}</strong> → <strong>{subjectsT(formData.subject as Subject)}</strong>
            </p>
            {uploadedLink && (
              <a
                href={uploadedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-sm underline mb-6 block"
              >
                View uploaded file →
              </a>
            )}
            <button onClick={resetForm} className="btn-primary">
              Upload Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-8 space-y-6">
            {/* Error Message */}
            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Contributor Name */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                Your Name (optional)
              </label>
              <input
                type="text"
                value={formData.contributorName}
                onChange={(e) => setFormData({ ...formData, contributorName: e.target.value })}
                placeholder="So we can credit you"
                className="input-field"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                Content Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., 2023 Past Paper, Chapter 1 Notes, Algebra Tutorial"
                className="input-field"
              />
            </div>

            {/* Exam Level */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                Exam Level *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, examLevel: 'o-level', subject: '' })}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                    formData.examLevel === 'o-level'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-dark-200 hover:border-dark-300'
                  }`}
                >
                  <span className="text-2xl font-bold block mb-1">O</span>
                  <span className="text-sm">{navT('oLevel')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, examLevel: 'a-level', subject: '' })}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                    formData.examLevel === 'a-level'
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-dark-200 hover:border-dark-300'
                  }`}
                >
                  <span className="text-2xl font-bold block mb-1">A</span>
                  <span className="text-sm">{navT('aLevel')}</span>
                </button>
              </div>
            </div>

            {/* Subject - Required */}
            {formData.examLevel && (
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Subject / Stream *
                </label>
                <div className={`grid gap-2 ${formData.examLevel === 'o-level' ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'}`}>
                  {currentSubjects.map(subject => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject })}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 text-xs sm:text-sm ${
                        formData.subject === subject
                          ? 'border-primary-500 bg-primary-50 text-primary-700 font-medium'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      {subjectsT(subject)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                Select File *
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
                  selectedFile
                    ? 'border-green-400 bg-green-50'
                    : 'border-dark-300 hover:border-primary-400 hover:bg-primary-50/30'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.webm,.mov,.jpg,.jpeg,.png,.gif"
                  className="hidden"
                />
                {selectedFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <File className="w-8 h-8 text-green-600" />
                    <div className="text-left">
                      <p className="font-medium text-dark-800">{selectedFile.name}</p>
                      <p className="text-sm text-dark-500">{formatFileSize(selectedFile.size)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      className="ml-2 p-1 hover:bg-dark-200 rounded-lg"
                    >
                      <X className="w-5 h-5 text-dark-500" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-dark-400 mx-auto mb-3" />
                    <p className="text-dark-600 font-medium">Click to select a file</p>
                    <p className="text-xs text-dark-400 mt-1">
                      PDF, Word, PowerPoint, Videos, Images (max 100MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Summary Box */}
            {formData.examLevel && formData.subject && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-800">
                  <strong>Will be uploaded to:</strong> {formData.examLevel === 'o-level' ? 'O Level' : 'A Level'} → {subjectsT(formData.subject as Subject)}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.examLevel || !formData.subject || !formData.title || !selectedFile}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Upload File
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
