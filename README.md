# Adyapana - අධ්‍යාපන - அத்யாபன

A free multilingual educational platform for O Level and A Level students in Sri Lanka.

## Features

- 🌐 **Multilingual Support** - Available in English, Sinhala (සිංහල), and Tamil (தமிழ்)
- 📚 **Course Materials** - Access notes and study materials for O Level and A Level
- 🎥 **Video Lessons** - Watch educational videos from experienced teachers
- 📄 **Downloadable Notes** - Download PDFs and study materials
- 📤 **Content Upload** - Teachers and students can contribute by uploading materials
- 💚 **Free Access** - All content is completely free for students

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   └── [locale]/           # Locale-based routing
│       ├── page.tsx        # Homepage
│       ├── courses/        # Courses listing & details
│       ├── upload/         # Upload content
│       └── contribute/     # Contribution page
├── components/             # Reusable components
├── data/                   # Sample data (courses)
├── messages/               # Translation files
│   ├── en.json            # English
│   ├── si.json            # Sinhala
│   └── ta.json            # Tamil
└── i18n.ts                # i18n configuration
```

## Contributing

We welcome contributions! You can help by:

1. **Sharing Notes** - Upload your study materials to help other students
2. **Code Contributions** - Help improve the platform
3. **Translations** - Help improve translations

## License

This project is open source and available for educational purposes.

---

Made with ❤️ for students in Sri Lanka

