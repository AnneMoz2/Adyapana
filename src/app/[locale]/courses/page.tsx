'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Search, BookOpen, Filter, ExternalLink, FolderOpen } from 'lucide-react';
import { courses, ExamLevel, Subject, Course } from '@/data/courses';

export default function CoursesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();
  
  const levelParam = searchParams.get('level') as ExamLevel | null;
  const subjectParam = searchParams.get('subject') as Subject | null;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<ExamLevel | ''>(levelParam || '');
  const [selectedSubject, setSelectedSubject] = useState<Subject | ''>(subjectParam || '');

  // Sync state with URL params when they change
  useEffect(() => {
    setSelectedLevel(levelParam || '');
  }, [levelParam]);

  useEffect(() => {
    setSelectedSubject(subjectParam || '');
  }, [subjectParam]);

  // Get subjects based on selected level
  const oLevelSubjects: Subject[] = [
    'mathematics', 'science', 'english', 'sinhala', 'tamil', 'history', 
    'commerceAccounting', 'ict', 'civics', 'drama', 'easternMusic', 
    'westernMusic', 'health', 'religion', 'other'
  ];
  const aLevelSubjects: Subject[] = ['scienceStream', 'commerce', 'artStream', 'other'];
  
  // Show only relevant subjects in dropdown based on level
  const availableSubjects = selectedLevel === 'o-level' ? oLevelSubjects 
    : selectedLevel === 'a-level' ? aLevelSubjects 
    : [...new Set([...oLevelSubjects, ...aLevelSubjects])];

  // Get the display title based on locale
  const getDisplayTitle = (course: Course) => {
    if (locale === 'si' && course.titleSi) return course.titleSi;
    if (locale === 'ta' && course.titleTa) return course.titleTa;
    return course.title;
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedSubject && course.subject !== selectedSubject) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          (course.titleSi && course.titleSi.toLowerCase().includes(query)) ||
          (course.titleTa && course.titleTa.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedLevel, selectedSubject, searchQuery]);

  // Reset subject if it's not valid for the new level
  const handleLevelChange = (newLevel: ExamLevel | '') => {
    setSelectedLevel(newLevel);
    // Reset subject if current subject is not in new level
    if (newLevel === 'o-level' && selectedSubject && !oLevelSubjects.includes(selectedSubject)) {
      setSelectedSubject('');
    } else if (newLevel === 'a-level' && selectedSubject && !aLevelSubjects.includes(selectedSubject)) {
      setSelectedSubject('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-dark-800 to-dark-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            {selectedLevel === 'o-level' ? t('nav.oLevel') + ' ' + t('courses.title') : 
             selectedLevel === 'a-level' ? t('nav.aLevel') + ' ' + t('courses.title') : 
             t('courses.title')}
          </h1>
          <p className="text-dark-300">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} available
            {selectedSubject && ` in ${t(`subjects.${selectedSubject}`)}`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="card p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder={t('courses.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value as ExamLevel | '')}
                className="select-field pl-10 pr-8 min-w-[160px]"
              >
                <option value="">{t('courses.allLevels')}</option>
                <option value="o-level">{t('nav.oLevel')}</option>
                <option value="a-level">{t('nav.aLevel')}</option>
              </select>
            </div>

            {/* Subject Filter - Shows only relevant subjects */}
            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value as Subject | '')}
                className="select-field pl-10 pr-8 min-w-[180px]"
              >
                <option value="">{t('courses.allSubjects')}</option>
                {availableSubjects.map(subject => (
                  <option key={subject} value={subject}>
                    {t(`subjects.${subject}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card group overflow-hidden">
                {/* Thumbnail placeholder with subject icon */}
                <div className={`h-32 flex items-center justify-center ${
                  course.level === 'o-level' 
                    ? 'bg-gradient-to-br from-blue-100 to-blue-200' 
                    : 'bg-gradient-to-br from-purple-100 to-purple-200'
                }`}>
                  <BookOpen className={`w-12 h-12 ${
                    course.level === 'o-level' ? 'text-blue-400' : 'text-purple-400'
                  }`} />
                </div>

                <div className="p-5">
                  {/* Level badge */}
                  <div className="flex gap-2 mb-3">
                    <span className={`badge ${course.level === 'o-level' ? 'badge-primary' : 'badge-accent'}`}>
                      {course.level === 'o-level' ? t('nav.oLevel') : t('nav.aLevel')}
                    </span>
                    <span className="badge bg-dark-100 text-dark-600">
                      {t(`subjects.${course.subject}`)}
                    </span>
                  </div>

                  {/* Title - shows in user's language */}
                  <h3 className="font-semibold text-dark-900 mb-1 line-clamp-1">
                    {getDisplayTitle(course)}
                  </h3>
                  
                  {/* Show other language titles */}
                  {(course.titleSi || course.titleTa) && (
                    <p className="text-xs text-dark-400 mb-2">
                      {course.titleSi && locale !== 'si' && <span>{course.titleSi}</span>}
                      {course.titleSi && course.titleTa && locale !== 'si' && locale !== 'ta' && ' • '}
                      {course.titleTa && locale !== 'ta' && <span>{course.titleTa}</span>}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-dark-500 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Action Button */}
                  {course.driveUrl ? (
                    <a
                      href={course.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center gap-2 text-sm"
                    >
                      <FolderOpen className="w-4 h-4" />
                      Open in Drive
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <div className="text-center py-3 bg-dark-50 rounded-xl text-dark-400 text-sm">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-dark-300 mx-auto mb-4" />
            <p className="text-dark-500">{t('courses.noCourses')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
