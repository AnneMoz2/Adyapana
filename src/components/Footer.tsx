'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { GraduationCap, Github, Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-dark-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold">Adyapana</span>
                <span className="text-xs text-dark-400">අධ්‍යාපන • அத்யாபன</span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm">{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/courses`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('courses')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/upload`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('upload')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contribute`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('contribute')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Exam Levels */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('examLevels')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/courses?level=o-level`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('oLevel')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/courses?level=a-level`} className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  {nav('aLevel')}
                </Link>
              </li>
            </ul>
            
            {/* GitHub Link */}
            <a 
              href="https://github.com/AnneMoz2/Adyapana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-dark-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Contribute on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-dark-500 text-sm flex items-center justify-center gap-1">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
