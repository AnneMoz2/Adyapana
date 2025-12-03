export type ExamLevel = 'o-level' | 'a-level';
export type Subject = 
  // O Level subjects
  | 'mathematics' 
  | 'science' 
  | 'english' 
  | 'sinhala' 
  | 'tamil' 
  | 'history'
  | 'commerceAccounting'
  | 'ict'
  | 'civics'
  | 'drama'
  | 'easternMusic'
  | 'westernMusic'
  | 'health'
  | 'religion'
  | 'other'
  // A Level streams
  | 'scienceStream'
  | 'commerce'
  | 'artStream';

export interface Course {
  id: string;
  title: string;
  titleSi?: string;
  titleTa?: string;
  description: string;
  level: ExamLevel;
  subject: Subject;
  driveUrl: string;
}

export const courses: Course[] = [
  // ============ O LEVEL COURSES ============
  {
    id: 'ol-mathematics',
    title: 'O Level Mathematics',
    titleSi: 'සා/පෙළ ගණිතය',
    titleTa: 'சா/த கணிதம்',
    description: 'Complete Mathematics notes, past papers, and video lessons.',
    level: 'o-level',
    subject: 'mathematics',
    driveUrl: 'https://drive.google.com/drive/folders/1qKkbBBnWEx0qiJbl2KEYgYYZI5ixdZRw?usp=drive_link',
  },
  {
    id: 'ol-science',
    title: 'O Level Science',
    titleSi: 'සා/පෙළ විද්‍යාව',
    titleTa: 'சா/த அறிவியல்',
    description: 'Complete Science notes covering Physics, Chemistry, and Biology.',
    level: 'o-level',
    subject: 'science',
    driveUrl: 'https://drive.google.com/drive/folders/1TvVeNqHH85ZvMIU9SZZvh1mH2jaNRXio?usp=drive_link',
  },
  {
    id: 'ol-english',
    title: 'O Level English',
    titleSi: 'සා/පෙළ ඉංග්‍රීසි',
    titleTa: 'சா/த ஆங்கிலம்',
    description: 'English Language and Literature notes, grammar guides, and model essays.',
    level: 'o-level',
    subject: 'english',
    driveUrl: 'https://drive.google.com/drive/folders/1j1FW28SPk17aGbjl1_bVehlzSLXVux89?usp=drive_link',
  },
  {
    id: 'ol-sinhala',
    title: 'O Level Sinhala',
    titleSi: 'සා/පෙළ සිංහල',
    description: 'සිංහල භාෂාව සහ සාහිත්‍යය සටහන්, ව්‍යාකරණ මාර්ගෝපදේශ.',
    level: 'o-level',
    subject: 'sinhala',
    driveUrl: 'https://drive.google.com/drive/folders/1Eq7IJL9brb6z4IwrAhwlCFHfJ0b1DxVH?usp=drive_link',
  },
  {
    id: 'ol-tamil',
    title: 'O Level Tamil',
    titleTa: 'சா/த தமிழ்',
    description: 'தமிழ் மொழி மற்றும் இலக்கிய குறிப்புகள், இலக்கண வழிகாட்டிகள்.',
    level: 'o-level',
    subject: 'tamil',
    driveUrl: 'https://drive.google.com/drive/folders/1bLJUjYxxqmoym8yAaWUNdAaPxYgcbVFG?usp=drive_link',
  },
  {
    id: 'ol-history',
    title: 'O Level History',
    titleSi: 'සා/පෙළ ඉතිහාසය',
    titleTa: 'சா/த வரலாறு',
    description: 'Complete History notes and past paper answers.',
    level: 'o-level',
    subject: 'history',
    driveUrl: 'https://drive.google.com/drive/folders/15OUOqg7nW1De4i1RgkQ_oSTUB856OQ8d?usp=drive_link',
  },
  {
    id: 'ol-commerce',
    title: 'O Level Commerce and Accounting',
    titleSi: 'සා/පෙළ වාණිජ්‍යය සහ ගිණුම්කරණය',
    titleTa: 'சா/த வர்த்தகம் மற்றும் கணக்கியல்',
    description: 'Commerce and Accounting notes and past papers.',
    level: 'o-level',
    subject: 'commerceAccounting',
    driveUrl: 'https://drive.google.com/drive/folders/1tj8yvsguIEJVXYP-IQQH3HxQTriAPBtu?usp=drive_link',
  },
  {
    id: 'ol-ict',
    title: 'O Level ICT',
    titleSi: 'සා/පෙළ තොරතුරු තාක්ෂණය',
    titleTa: 'சா/த தகவல் தொழில்நுட்பம்',
    description: 'Information and Communication Technology notes and practical guides.',
    level: 'o-level',
    subject: 'ict',
    driveUrl: 'https://drive.google.com/drive/folders/1AJGUPzWUbUnIxQ_Kpsk4eOkKq4XXghm3?usp=drive_link',
  },
  {
    id: 'ol-civics',
    title: 'O Level Civics',
    titleSi: 'සා/පෙළ පුරවැසි අධ්‍යාපනය',
    titleTa: 'சா/த குடியியல்',
    description: 'Civics and citizenship education notes.',
    level: 'o-level',
    subject: 'civics',
    driveUrl: 'https://drive.google.com/drive/folders/1oJpQn1sUIubBrZdnVirknd6BBAHcITc0?usp=drive_link',
  },
  {
    id: 'ol-drama',
    title: 'O Level Drama',
    titleSi: 'සා/පෙළ නාට්‍ය හා රංග කලාව',
    titleTa: 'சா/த நாடகம்',
    description: 'Drama and Theatre Arts notes and guides.',
    level: 'o-level',
    subject: 'drama',
    driveUrl: 'https://drive.google.com/drive/folders/1ADD8t9yuzRR6aXAAnjsMRscm5uXE4mrd?usp=drive_link',
  },
  {
    id: 'ol-eastern-music',
    title: 'O Level Eastern Music',
    titleSi: 'සා/පෙළ පෙරදිග සංගීතය',
    titleTa: 'சா/த கிழக்கு இசை',
    description: 'Eastern Music theory and practical notes.',
    level: 'o-level',
    subject: 'easternMusic',
    driveUrl: 'https://drive.google.com/drive/folders/1AxpxPs5yxX-sGNXZ1api86WXmM9iUBU_?usp=drive_link',
  },
  {
    id: 'ol-western-music',
    title: 'O Level Western Music',
    titleSi: 'සා/පෙළ බටහිර සංගීතය',
    titleTa: 'சா/த மேற்கத்திய இசை',
    description: 'Western Music theory and practical notes.',
    level: 'o-level',
    subject: 'westernMusic',
    driveUrl: 'https://drive.google.com/drive/folders/1YIyBzwjrx5ybNrTB7EhpVtb5imq7s_W0?usp=drive_link',
  },
  {
    id: 'ol-health',
    title: 'O Level Health',
    titleSi: 'සා/පෙළ සෞඛ්‍ය විද්‍යාව',
    titleTa: 'சா/த சுகாதாரம்',
    description: 'Health and Physical Education notes.',
    level: 'o-level',
    subject: 'health',
    driveUrl: 'https://drive.google.com/drive/folders/1EeO9BVUVYWszWId04PiYZ4u-W3c7EMvj?usp=drive_link',
  },
  {
    id: 'ol-religion',
    title: 'O Level Religion',
    titleSi: 'සා/පෙළ ආගම',
    titleTa: 'சா/த சமயம்',
    description: 'Religious studies notes and guides.',
    level: 'o-level',
    subject: 'religion',
    driveUrl: 'https://drive.google.com/drive/folders/1sIazfuMUh3J1iygu4FqOfYBlTIw6fS-w?usp=drive_link',
  },
  {
    id: 'ol-other',
    title: 'O Level Other',
    titleSi: 'සා/පෙළ වෙනත්',
    titleTa: 'சா/த மற்றவை',
    description: 'Other O Level resources and materials.',
    level: 'o-level',
    subject: 'other',
    driveUrl: 'https://drive.google.com/drive/folders/1YngYl4PgbUaRSL26i0ptKm9LqQCZahGo?usp=drive_link',
  },

  // ============ A LEVEL STREAMS ============
  {
    id: 'al-science',
    title: 'A Level Science Stream',
    titleSi: 'උ/පෙළ විද්‍යා අංශය',
    titleTa: 'உ/த அறிவியல் பிரிவு',
    description: 'Biology, Chemistry, Physics, and Combined Mathematics notes and past papers.',
    level: 'a-level',
    subject: 'scienceStream',
    driveUrl: 'https://drive.google.com/drive/folders/16F-jLdMIXv6nJEqikDUIFpT4T87ilXHp?usp=drive_link',
  },
  {
    id: 'al-commerce',
    title: 'A Level Commerce',
    titleSi: 'උ/පෙළ වාණිජ්‍ය අංශය',
    titleTa: 'உ/த வர்த்தக பிரிவு',
    description: 'Business Studies, Accounting, and Economics notes and past papers.',
    level: 'a-level',
    subject: 'commerce',
    driveUrl: 'https://drive.google.com/drive/folders/12ypTCB-QqONNrMsgYs8DDDvheNmppCw9?usp=drive_link',
  },
  {
    id: 'al-art',
    title: 'A Level Art Stream',
    titleSi: 'උ/පෙළ කලා අංශය',
    titleTa: 'உ/த கலைப் பிரிவு',
    description: 'Art stream subjects including History, Geography, Languages, and more.',
    level: 'a-level',
    subject: 'artStream',
    driveUrl: 'https://drive.google.com/drive/folders/1oPZXbgxMhMqi_3GPnYRFvrfENqTdaxYy?usp=drive_link',
  },
  {
    id: 'al-other',
    title: 'A Level Other',
    titleSi: 'උ/පෙළ වෙනත්',
    titleTa: 'உ/த மற்றவை',
    description: 'Other A Level resources and materials.',
    level: 'a-level',
    subject: 'other',
    driveUrl: 'https://drive.google.com/drive/folders/1lUS8cksdCPZfdo_qIMa62R5hUV5cvV5Q?usp=drive_link',
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function filterCourses(filters: {
  level?: ExamLevel;
  subject?: Subject;
  search?: string;
}): Course[] {
  return courses.filter(course => {
    if (filters.level && course.level !== filters.level) return false;
    if (filters.subject && course.subject !== filters.subject) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        course.title.toLowerCase().includes(searchLower) ||
        course.description.toLowerCase().includes(searchLower) ||
        (course.titleSi && course.titleSi.toLowerCase().includes(searchLower)) ||
        (course.titleTa && course.titleTa.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });
}
