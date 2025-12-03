import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FileText, Code, Share2, Github, Upload, Heart } from 'lucide-react';

export default function ContributePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('contribute');

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Contribution Options */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {/* Share Notes */}
          <div className="card p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-dark-900 mb-2">{t('notes.title')}</h2>
                <p className="text-dark-500 mb-4">{t('notes.description')}</p>
                <Link href={`/${locale}/upload`} className="btn-primary gap-2">
                  <Upload className="w-5 h-5" />
                  {t('notes.button')}
                </Link>
              </div>
            </div>
          </div>

          {/* Help Build */}
          <div className="card p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-dark-900 mb-2">{t('development.title')}</h2>
                <p className="text-dark-500 mb-4">{t('development.description')}</p>
                <a
                  href="https://github.com/AnneMoz2/Adyapana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2"
                >
                  <Github className="w-5 h-5" />
                  {t('development.github')}
                </a>
              </div>
            </div>
          </div>

          {/* Spread the Word */}
          <div className="card p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-dark-900 mb-2">{t('spread.title')}</h2>
                <p className="text-dark-500">{t('spread.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

