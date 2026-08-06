import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "ticket-portal",
    title: "Ticket Portal 2025",
    description:
      "Production event ticketing platform hosting 5+ live events and $3000+ in sales. Dockerized and deployed via GitLab CI/CD with SonarQube, plus React Native Android/iOS ticket validator apps.",
    image:
      "https://i.ibb.co/hJ7126s9/Screenshot-12-2-2026-01334-ticket-hsenidmobile-com.jpg",
    link: "https://serendisco.rush.lk/",
    status: "Completed",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "React Native",
      "GitLab CI/CD",
      "SonarQube",
    ],
    featured: true,
    tags: ["developer", "devops", "full-stack"],
  },
  {
    id: "sheet-ninja",
    title: "Sheet Ninja 2025",
    description:
      "Enterprise bidirectional sync between Google Sheets and GitLab with 6+ integrations, encrypted credentials, Docker deployment, and log tracking for safe record syncing under Agile delivery.",
    image: "https://tobias-sell.com/wp-content/uploads/2020/10/header.jpg",
    link: "https://github.com/Lafarie/Sheet-Ninja",
    status: "Completed",
    tech: ["Next.js", "TypeScript", "Prisma", "Docker", "GitLab API", "NextAuth.js"],
    featured: true,
    tags: ["developer", "devops"],
  },
  {
    id: "appigo-retailer",
    title: "appiGo Retailer 2024",
    description:
      "Containerized Docker build pipeline for a production eCommerce website builder — staging and production releases via GitLab CI/CD, Apache optimization (35% faster responses), and load troubleshooting for strict SLAs.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "https://appigo.co/stores/",
    status: "In Progress",
    tech: ["Docker", "GitLab CI/CD", "Apache", "Linux", "Bash"],
    featured: true,
    tags: ["devops"],
  },
  {
    id: "aiducator",
    title: "AIducator 2024",
    description:
      "AI-powered 3D eLearning platform serving 500+ students — ChatGPT tutoring, 3D model viewer, and Sentry error tracking that cut MTTR by 45%. Led a team of 6 engineers.",
    image: "https://i.ibb.co/MSTKtD5/Screenshot-2024-07-11-at-9-22-37-AM.png",
    link: "https://aiducator.vercel.app/",
    status: "Completed",
    tech: ["React.js", "Node.js", "Express", "ChatGPT API", "Sentry"],
    featured: true,
    tags: ["developer", "content"],
  },
  {
    id: "uniconnect",
    title: "UniConnect 2024",
    description:
      "An ongoing project to connect students and lecturers in one place to share knowledge and help each other. Built with Flutter for cross-platform compatibility.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK21JiYnXoWX-FOTfqA7w8L3oXv1cq_9ZcVg&s",
    status: "In Progress",
    tech: ["Flutter", "Dart"],
    tags: ["developer", "mobile"],
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Bot 2022",
    description:
      "An automated bot for WhatsApp built with Node.js for efficient message handling and automation.",
    image:
      "https://play-lh.googleusercontent.com/MWV1erZURmTaeXGj29ZLWMSo_7DB92q3IL71lDSRooqbb3qidsa4c9DJ0_jEQgOeXEQ=w416-h235-rw",
    status: "Completed",
    tech: ["Node.js", "JavaScript"],
    tags: ["developer"],
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot 2022",
    description:
      "An automated bot for Telegram built with Python for smart message processing.",
    image:
      "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/08/1-1.webp?ssl=1&quality=80&w=f",
    status: "Completed",
    tech: ["Python", "Telegram API"],
    tags: ["developer"],
  },
  {
    id: "wordpress-movies",
    title: "WordPress Movies 2021",
    description:
      "A movie sharing website built using WordPress with custom themes and plugins for enhanced user experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRBmntSxZh99CBluc1Y-1vEERXQc9HqBbFg&s",
    status: "Completed",
    tech: ["WordPress", "PHP", "MySQL"],
    tags: ["developer", "content"],
  },
];
