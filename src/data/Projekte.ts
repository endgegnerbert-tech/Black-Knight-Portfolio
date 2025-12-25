import { Project } from "@/types/Project";

export const Projekte: Project[] = [
  {
    id: 1,
    slug: "school-project",
    title: "School Project Website",
    description:
      "A website for a school project about French history, designed to present historical information and educational content.",
    longDescription:
      "This comprehensive school project website was created to showcase French history in an engaging and educational format. The site features interactive timelines, historical documents, and multimedia content that brings history to life for students and educators alike.",
    status: "in-progress",
    projectUrl: "/",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      "Interactive timeline of French history",
      "Multimedia content integration",
      "Responsive design for all devices",
      "Educational quiz sections",
    ],
    // Screenshots hinzufügen:
    // screenshots: ["/screenshots/school-project-1.png"],
  },
  {
    id: 2,
    slug: "invoice-app",
    title: "Invoice Web App",
    description:
      "A web application for managing invoices and billing processes, helping users track and organize their financial documents.",
    longDescription:
      "A full-featured invoice management system that streamlines billing processes for small businesses and freelancers. The application provides tools for creating, sending, and tracking invoices with automated reminders and payment status updates.",
    status: "in-progress",
    projectUrl: "/",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    features: [
      "Create and manage invoices",
      "Automated payment reminders",
      "PDF export functionality",
      "Client management system",
      "Financial reporting dashboard",
    ],
    // screenshots: ["/screenshots/invoice-app-1.png", "/screenshots/invoice-app-2.png"],
  },
  {
    id: 3,
    slug: "cropclear",
    title: "Cropclear App",
    description:
      "A web application designed to improve communication and transparency for companies in Africa, facilitating better business operations. The project is now in closed beta test.",
    longDescription:
      "Cropclear is an innovative platform built to enhance transparency and communication within agricultural supply chains in Africa. The application connects farmers, distributors, and retailers, providing real-time tracking and verification of agricultural products from farm to market.",
    status: "beta-test",
    projectUrl: "https://cropclear.vercel.app",
    techStack: ["Next.js", "Supabase", "Clerk Auth", "Tailwind CSS", "TypeScript"],
    features: [
      "Supply chain tracking",
      "Real-time communication tools",
      "Verification system for products",
      "Multi-language support",
      "Mobile-first responsive design",
    ],
    screenshots: [
      "/screenshots/cropclear1.png",
      "/screenshots/cropclear2.png",
      "/screenshots/cropclear3.png",
      "/screenshots/cropclear4.png",
      "/screenshots/cropclear5.png",
      "/screenshots/cropclear6.png",
      "/screenshots/cropclear7.png",
      "/screenshots/cropclear8.png",
    ],
  },
  {
    id: 4,
    slug: "ai-app",
    title: "AI App",
    description:
      "A context-aware AI application that focuses on understanding the user through natural language processing and personalized interactions.",
    longDescription:
      "An advanced AI-powered application that learns from user interactions to provide increasingly personalized and context-aware responses. The system utilizes cutting-edge natural language processing to understand user intent and deliver meaningful, helpful interactions.",
    status: "planned",
    projectUrl: "/",
    techStack: ["Next.js", "OpenAI API", "Supabase", "TypeScript"],
    features: [
      "Context-aware conversations",
      "Personalized user experience",
      "Natural language understanding",
      "Memory and learning capabilities",
    ],
  },
  {
    id: 5,
    slug: "scrimba-scoreboard",
    title: "Scrimba Scoreboard",
    description:
      "A minimalist scoreboard app built to strengthen fundamental web development skills and demonstrate proficiency without AI assistance.",
    longDescription:
      "A lightweight and interactive scoreboard project inspired by a Scrimba course, developed entirely without AI assistance to deepen core front-end understanding. This project focuses on mastering JavaScript logic, DOM manipulation, and layout structure using only HTML, CSS, and JavaScript. It serves as a practical demonstration of solid technical fundamentals and independent coding ability beyond AI-driven development.",
    status: "completed",
    projectUrl: "https://score-board-smoky.vercel.app",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time score tracking",
      "Reset and increment functions",
    ],
    screenshots: [
      "/screenshots/scrimbaScoreboard.png",
    ],
  },
];
