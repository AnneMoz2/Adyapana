import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Import messages statically for Webpack
import enMessages from '@/messages/en.json';
import siMessages from '@/messages/si.json';
import taMessages from '@/messages/ta.json';

export const locales = ['en', 'si', 'ta'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  si: 'සිංහල',
  ta: 'தமிழ்',
};

export const defaultLocale: Locale = 'en';

const messages: Record<Locale, typeof enMessages> = {
  en: enMessages,
  si: siMessages,
  ta: taMessages,
};

export default getRequestConfig(async ({requestLocale}) => {
  // Get the locale from the request
  const locale = await requestLocale;
  
  // Validate that the incoming locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: messages[locale as Locale]
  };
});
