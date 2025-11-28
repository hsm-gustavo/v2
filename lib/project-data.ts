interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sócio FutZAP Website",
    description:
      "Frontend of the official website of Sócio FutZAP, a platform that connects football fans with their favorite clubs through digital memberships and exclusive benefits. I built the site using Next.js, TypeScript, and TailwindCSS to ensure a responsive and engaging user experience.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "shadcn/ui",
      "React Hook Forms",
    ],
    imageUrl: "/futzap.png",
  },
  {
    title: "CDL Arapiraca Chat App",
    description:
      "A chat application developed for CDL Arapiraca to facilitate real-time communication between members, enhancing collaboration and engagement within the organization. I built the back end using FastAPI and integrated it with the WhatsApp API for seamless messaging.",
    tags: ["Python", "FastAPI", "WhatsApp API"],
    imageUrl: "/cdl.png",
  },
  {
    title: "Cachaça Brejo dos Bois Website",
    description:
      "I rebuilt the brand's web presence with a clean, mobile-first UI using Next.js, TypeScript, TailwindCSS, and shadcn/ui, ensuring accessibility and alignment with their visual identity.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Motion/Framer",
      "shadcn/ui",
      "React Hook Forms",
    ],
    imageUrl: "/brejo.png",
    projectUrl: "https://brejodosbois.com.br",
  },
  {
    title: "Rápido Infoshop Website",
    description:
      "I built the production frontend using Next.js (TypeScript) and converted high-fidelity Figma designs into a reusable, modular UI library. Using TailwindCSS + shadcn/ui, I delivered a highly responsive, accessible, and easily extensible interface.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "shadcn/ui",
      "React Hook Forms",
    ],
    imageUrl: "/rpd.png",
    projectUrl: "https://rapidoinfoshop.com.br",
  },
  {
    title: "WhatsApp AI Chatbot - RAI",
    description:
      "An AI-powered WhatsApp chatbot using OpenAI's GPT-4o mini and Retrieval Augmented Generation (RAG) to provide accurate and business-specific answers to users. The bot leverages LangChain for efficient document retrieval and context management. I developed the back end using FastAPI and integrated it with the Twilio API for seamless user interaction.",
    tags: ["Python", "FastAPI", "LangChain", "Twilio API", "OpenAI GPT-4o"],
    imageUrl: "/rai.png",
    projectUrl:
      "https://api.whatsapp.com/send?phone=558235300071&text=Ol%C3%A1",
  },
];

const sideProjects: Project[] = [
  {
    title: "MonaAI",
    description:
      "A front-end application developed to convert PDFs to Markdown and answer questions based on the document's content.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "React Hook Forms",
      "Docker",
    ],
    codeUrl: "https://github.com/hsm-gustavo/mona-ai-front",
    imageUrl: "/mona.png",
  },
  {
    title: "BookMuse",
    description:
      "A social media platform for book lovers. I developed both the front end and back end of the application, using OpenLibrary API and caching the data with Redis for improved performance.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
    ],
    codeUrl: "https://github.com/hsm-gustavo/book-muse-backend",
    imageUrl: "/book-muse.png",
  },
  {
    title: "auth-go",
    description:
      "A simple authentication service built with Go, using JWT and refresh tokens. I made this project to learn more about Go and authentication best practices.",
    tags: ["Go", "JWT", "Docker", "MySQL"],
    codeUrl: "https://github.com/hsm-gustavo/auth-go",
    imageUrl: "/auth-go.png",
  },
  {
    title: "This Website",
    description:
      "My personal website built with Next.js, TypeScript, and TailwindCSS. It showcases my projects, skills, and contact information.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Motion/Framer",
    ],
    codeUrl: "https://github.com/hsm-gustavo/v2",
    imageUrl: "/v2.png",
  },
];

export { projects, sideProjects };
