import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Heart,
  ArrowRight, 
  BookOpen, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  // O Level subjects
  const oLevelSubjects = [
    { key: 'mathematics', color: 'bg-blue-500' },
    { key: 'science', color: 'bg-green-500' },
    { key: 'english', color: 'bg-purple-500' },
    { key: 'sinhala', color: 'bg-yellow-500' },
    { key: 'tamil', color: 'bg-red-500' },
    { key: 'history', color: 'bg-amber-600' },
    { key: 'commerceAccounting', color: 'bg-orange-500' },
    { key: 'ict', color: 'bg-teal-500' },
    { key: 'civics', color: 'bg-indigo-500' },
    { key: 'drama', color: 'bg-pink-500' },
    { key: 'easternMusic', color: 'bg-rose-500' },
    { key: 'westernMusic', color: 'bg-violet-500' },
    { key: 'health', color: 'bg-emerald-500' },
    { key: 'religion', color: 'bg-cyan-500' },
    { key: 'other', color: 'bg-gray-500' },
  ];

  // A Level streams
  const aLevelStreams = [
    { key: 'scienceStream', color: 'bg-emerald-500' },
    { key: 'commerce', color: 'bg-orange-500' },
    { key: 'artStream', color: 'bg-pink-500' },
    { key: 'other', color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center hero-pattern overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Free for all students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-950 mb-6 animate-slide-up">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-dark-500 mb-8 animate-slide-up animate-delay-100">
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
      <section className="py-20 bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('examLevels.title')}</h2>
            <p className="section-subtitle">{t('examLevels.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* O Level Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                  <span className="text-xl font-bold text-white">O</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-900 mb-1">
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
            <div className="card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
                  <span className="text-xl font-bold text-white">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-900 mb-1">
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

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* O Level Subjects */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-dark-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">O</span>
              {t('nav.oLevel')} Subjects
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {oLevelSubjects.map((subject) => (
                <Link
                  key={subject.key}
                  href={`/${locale}/courses?level=o-level&subject=${subject.key}`}
                  className="group"
                >
                  <div className="card p-3 text-center hover:scale-105 transition-transform duration-300">
                    <div className={`w-8 h-8 mx-auto mb-2 ${subject.color} rounded-lg flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-dark-700 text-xs">
                      {t(`subjects.${subject.key}`)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* A Level Streams */}
          <div>
            <h3 className="text-xl font-semibold text-dark-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">A</span>
              {t('nav.aLevel')} Streams
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {aLevelStreams.map((stream) => (
                <Link
                  key={stream.key}
                  href={`/${locale}/courses?level=a-level&subject=${stream.key}`}
                  className="group"
                >
                  <div className="card p-4 text-center hover:scale-105 transition-transform duration-300">
                    <div className={`w-10 h-10 mx-auto mb-3 ${stream.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-dark-700 text-sm">
                      {t(`subjects.${stream.key}`)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Want to help?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Share your notes, contribute to the platform, or spread the word to help students in need.
          </p>
          <Link href={`/${locale}/contribute`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 gap-2">
            <Heart className="w-5 h-5" />
            Contribute
          </Link>
        </div>
      </section>
    </div>
  );
}
