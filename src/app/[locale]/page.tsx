import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Heart,
  ArrowRight, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center hero-pattern overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-in border border-primary-200">
              <Sparkles className="w-4 h-4" />
              <span>Free for all students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-800 mb-6 animate-slide-up">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-dark-500 mb-4 animate-slide-up animate-delay-100">
              {t('hero.subtitle')}
            </p>

          
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-200">
              <Link href={`/${locale}/courses`} className="btn-primary gap-2">
                <BookOpen className="w-5 h-5" />
                {t('hero.exploreButton')}
              </Link>
              <Link href={`/${locale}/upload`} className="btn-secondary gap-2">
                {t('hero.uploadButton')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Levels Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('examLevels.title')}</h2>
            <p className="section-subtitle">{t('examLevels.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* O Level Card */}
            <div className="card p-6 border-l-4 border-l-primary-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 flex-shrink-0">
                  <span className="text-xl font-bold text-white">O</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-800 mb-1">
                    {t('examLevels.oLevel.title')}
                  </h3>
                  <p className="text-dark-500 text-sm">{t('examLevels.oLevel.description')}</p>
                </div>
              </div>
              <p className="text-xs text-dark-400 mb-4 pl-[4.5rem]">
                {t('examLevels.oLevel.subjects')}
              </p>
              <div className="pl-[4.5rem]">
                <Link
                  href={`/${locale}/courses?level=o-level`}
                  className="btn-primary gap-2 text-sm"
                >
                  {t('examLevels.viewCourses')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* A Level Card */}
            <div className="card p-6 border-l-4 border-l-secondary-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary-500/25 flex-shrink-0">
                  <span className="text-xl font-bold text-white">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-800 mb-1">
                    {t('examLevels.aLevel.title')}
                  </h3>
                  <p className="text-dark-500 text-sm">{t('examLevels.aLevel.description')}</p>
                </div>
              </div>
              <p className="text-xs text-dark-400 mb-4 pl-[4.5rem]">
                {t('examLevels.aLevel.subjects')}
              </p>
              <div className="pl-[4.5rem]">
                <Link
                  href={`/${locale}/courses?level=a-level`}
                  className="btn-accent gap-2 text-sm"
                >
                  {t('examLevels.viewCourses')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to help?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Share your notes, contribute to the platform, or spread the word to help students in need.
          </p>
          <Link href={`/${locale}/contribute`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 gap-2 shadow-lg">
            <Heart className="w-5 h-5" />
            Contribute
          </Link>
        </div>
      </section>
    </div>
  );
}
