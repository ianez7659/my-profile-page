import type { Project } from "@/types/project";

export const projects: Project[] = [  
  {
    slug: "Jobflow",
    title: "Jobflow - Job Tracker",
    description:
      "Job application tracking dashboard built with Next.js and PostgreSQL, featuring real-time analytics, authentication, and responsive UI.",
    image: "/images/jobflow-2.png",
    github: "https://github.com/ianez7659/job-tracker",
    demo: "https://job-tracker-wheat.vercel.app/",
    techStack: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "Render",
      "Tailwind CSS",
      "Framer Motion",
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content:
          `Jobflow is a job application tracking web application designed to help users organize and monitor their job applications across different hiring stages.

          The project focuses on providing a clear and intuitive dashboard to reduce the complexity of managing multiple applications.

          Key features include status-based job tracking, data visualization for application progress, and a fully responsive user interface.

          Built with Next.js and TypeScript, the application uses Prisma and PostgreSQL for data management and Framer Motion to enhance UI interaction.

          The project is deployed and accessible as a live demo, demonstrating a production-ready front-end architecture.
          `,
      },
      {
        type: "image" as const,
        image: [
          "/images/jobflow-5.png",
          "/images/jobflow-2.png",
          "/images/jobflow-7.png",
        ],
      },
      {
        type: "textImage" as const,
        title: "Key Features",
        content:
          `• Dashboard with real-time job application statistics and charts

            • Status-based job tracking (Resume → Interview → Offer / Rejected)

            • Job application management with search and filtering

            • Automatic information extraction from job posting URLs

            • Authentication with GitHub OAuth and email/password login

            • Responsive UI optimized for desktop and mobile`,
        image: ["/images/jobflow-2.png", "/images/jobflow-6.png"],
        align: "right",
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content:
          `• Built with Next.js (App Router) and TypeScript for scalable architecture

            • Used Prisma + PostgreSQL for structured data management

            • Implemented authentication with NextAuth.js

            • Applied Chart.js / Recharts for data visualization

            • Managed client state using Zustand

            • Enhanced UI interaction with Framer Motion`,
        image: ["/images/stack02.jpg"],
        align: "left",
      },
      {
        type: "text" as const,
        title: "Result",
        content: `• Fully deployed job tracking dashboard

                  • Clear visualization of job search progress

                  • Production-ready authentication and data management flow

                  • Responsive, user-friendly interface across devices`,
        
      },
    ],
  },

  {
    slug: "playtoon",
    title: "Playtoon - Webtoon Viewer",
    description:
      "Full-stack webtoon platform built with Next.js and Supabase, featuring three viewing modes and GSAP-powered animations with secure PostgreSQL RLS-based data management.",
    image: "/images/playtoon-1.png",
    github: "https://github.com/ianez7659/playtoon",
    demo: "https://playtoon-six.vercel.app//",
    techStack: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",      
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content:
          `Playtoon is a webtoon viewer web application designed to provide an immersive reading experience with dynamic page transitions and smooth animations.

          The project focuses on creating a modern, interactive interface that enhances the way users consume webtoon content through engaging visual transitions.

          Key features include GSAP-powered page transitions, responsive design for various screen sizes, and an intuitive navigation system.

          Built with Next.js and TypeScript, the application uses GSAP for advanced animations and Tailwind CSS for styling, creating a seamless and visually appealing user experience.

          The project demonstrates production-ready front-end development with a focus on user interaction and visual feedback.
          `,
      },
      {
        type: "image" as const,
        image: [
          "/images/playtoon-1.png",
          "/images/playtoon-2.png",
          "/images/playtoon-3.webp",
          "/images/playtoon-4.webp",
        ],
      },
      {
        type: "textImage" as const,
        title: "Key Features",
        content:
          `• Series → Episodes → Cuts content management system

            • Three viewing modes: Normal, Scroll, and Play (auto-animated)

            • Advanced GSAP animation system with per-cut animation control

            • Image management using Supabase Storage

            • View count tracking and basic analytics

            • Responsive UI with search and genre filtering
          `,
        image: ["/images/playtoon-2.png"],
        align: "left",  
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content:
          `• Built with Next.js (App Router) and TypeScript for scalable architecture

            • Used Supabase (PostgreSQL) with Row Level Security (RLS) for data protection

            • Implemented GSAP to enhance interaction and perceived performance

            • Optimized images and rendering using Next.js features

            • Deployed on Vercel with serverless configuration
          `,
        image: ["/images/stack01.jpg"],
        align: "right",
      },
      {
        type: "text" as const,
        title: "Result",
        content:
          `• Fully functional webtoon platform with flexible viewing experiences

            • Secure, database-driven content management

            • Smooth, interactive UI optimized for both desktop and mobile`,
      },
    ],
  },

  {
    slug: "TEZUKURI-VAN",
    title: "TEZUKURI VAN – Real Client Marketing Website",
    description:
      "A fully commissioned marketing website built for a real client, featuring a custom admin dashboard, real-time content management via Supabase, and a sleek, responsive design.",
    image: "/images/tezukuri-1.png",
    github: "https://github.com/ianez7659/tezukuri-van",
    demo: "https://tezukuri-van.vercel.app/",
    techStack: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Tailwind",
      "Supabase",
      "Resend",
      "Vercel",
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content: `TEZUKURI VAN is a fully commissioned e-commerce platform built for a real client specializing in handmade goods, providing a complete online shopping experience with real-time content management.

          The project focuses on creating a seamless shopping experience for customers while providing the client with an intuitive admin dashboard for managing products, orders, and inventory.

          Key features include a custom admin dashboard, real-time content management via Supabase, dark mode support, and a fully responsive design optimized for all devices.

          Built with Next.js and TypeScript, the application uses Supabase for backend services, Resend for email functionality, and is deployed on Vercel for optimal performance.

          The project demonstrates full-stack development capabilities, from front-end UI/UX design to backend integration and deployment, meeting real client requirements and production standards.
          `,
      },
      {
        type: "image" as const,
        image: [
          "/images/tezukuri-1.png",
          "/images/tezukuri-3.png",
          "/images/tezukuri-admin.png",
          "/images/tezukuri-admin2.png",
        ],
      },

      {
        type: "textImage" as const,
        title: "Key Features",
        content:
          `• Admin dashboard with CRUD for Home, Products, Events, and About
            • Secure authentication with role-based access control
            • Dynamic content management without code changes
            • Responsive UI with optimized performance
            • Contact system using email APIs`,
        image: ["/images/tezukuri-3.png", "/images/tezukuri-3-dark.png"],
        align: "left",
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content: `• Built with Next.js 15 and TypeScript for scalable front-end architecture
            • Used Supabase (Auth, Database, Storage) with Row Level Security (RLS)
            • Implemented secure admin access and protected routes
            • Applied Framer Motion and Swiper for smooth UI interactions
            • Deployed as a production-ready web service`,
        image: ["/images/stack01.jpg"],
        align: "right",
      },
      {
        type: "text" as const,
        title: "Result",
        content: `• Real client website in production
                  • Fully manageable admin system for non-developers
                  • Optimized performance and accessibility standards
                  Lighthouse: Performance 97 · Accessibility 100 · Best Practices 100 · SEO 100
                `,
      },
    ],
  },

  {
    slug: "ManageSmartr",
    title: "ManageSmartr - Steel Wall Delivery Management System",
    description:
      "A platform that streamlines steel wall delivery operations by centralizing orders, tracking, and team communication.",
    image: "/images/manage-smart01.png",
    github: "https://github.com/Cornerstone-CICCC/final-project-managesmartr-novasoft",
    demo: "https://playtoon-demo.vercel.app/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Supabase",
      "SMTP2Go",      
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content:
          `ManageSmartr is a full-stack delivery management platform developed for a real Canadian construction and manufacturing company specializing in prefabricated steel framing.
The application streamlines steel wall delivery workflows by coordinating administrators, clients, and employees through role-based portals and real-time order tracking.
          `,
      },
      {
        type: "image" as const,
        image: [
          "/images/manage-smart01.png",
          "/images/manage-smart02.png",
          "/images/manage-smart03.png",
          "/images/manage-smart04.png",
          "/images/manage-smart05.png",
          "/images/manage-smart06.png",                   
        ],
      },
      {
        type: "textImage" as const,
        title: "Key Features",
        content: `• Role-based portals for Admin, Client, and Employee users

                  • End-to-end order management from creation to delivery

                  • Public order tracking via order ID (no authentication required)

                  • PDF document upload and approval workflow

                  • Real-time status updates and notifications

                  • Responsive, mobile-first user interface`,
                  image: ["/images/manage-smart02.png"],
                  align: "left",
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content: `• Built with Next.js (App Router) and TypeScript for scalable architecture

                  • Implemented JWT-based authentication with role-based route protection

                  • Used Supabase (PostgreSQL) for relational data management and access control

                  • Managed client-side state using Zustand

                  • Built reusable UI components with Tailwind CSS and Shadcn UI

                  • Deployed with production-ready middleware and configuration`,
                  image: ["/images/stack02.jpg"],
                  align: "right",
      },
      {
        type: "text" as const,
        title: "Result",
        content:
          `• Delivered and used by a real-world Canadian construction company

            • Supports production-level delivery and document workflows

            • Secure access control across multiple user roles

            • Stable, responsive experience across desktop and mobile devices
          `,
      },
    ],
  },

  {
    slug: "InitialD",
    title: "InitialD – GSAP Animation",
    description:
      "An interactive web experience showcasing GSAP animations with Astro framework, featuring dynamic timeline animations and engaging visual storytelling.",
    image: "/images/inid02.webp",
    github: "https://github.com/ianez7659/tezukuri-van",
    demo: "https://astro-and-express-with-gsap-initial.vercel.app/",
    techStack: [
      "Astro",
      "Typescript",
      "Express",
      "Tailwind",      
      "GSAP",
      "Supabase",
      "Vercel",
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content: `Initial D is a full-stack web application focused on secure user authentication and interactive user experiences.
                  The project combines a modern authentication system with immersive UI animations, aiming to balance production-ready backend features and high-quality front-end interaction.

                  The goal was to build a real-world authentication flow while experimenting with GSAP-driven animations and smooth page transitions in a scalable web architecture.
          `,
      },
      {
        type: "image" as const,
        image: [          
          "/images/inid02.webp",
          "/images/inid03.webp",
          "/images/inid04.webp",
          "/images/inid05.webp",
          "/images/inid06.webp",
        ],
      },
      {
        type: "textImage" as const,
        title: "Key Features",
        content: `• JWT-based authentication with protected routes and password recovery

                  • User profile management with persistent database storage

                  • Interactive UI with GSAP animations and smooth page transitions

                  • Responsive layout optimized for both desktop and mobile devices`,
                  image: ["/images/inid01.png"],
                  align: "left",
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content: `• Built with Astro and TypeScript for fast, component-driven UI

                  • Implemented Express.js API with JWT authentication middleware

                  • Used Supabase (PostgreSQL) for persistent, production-ready data storage

                  • Applied GSAP timelines selectively to enhance interaction and perceived performance

                  • Deployed using Vercel serverless functions`,
                  image: ["/images/stack02.jpg"],
                  align: "right",
      },
      {
        type: "text" as const,
        title: "Result",
        content: `• Fully deployed full-stack application with secure authentication flow

            • Persistent database-backed user management

            • Production-ready deployment using serverless architecture

            • Clean separation between UI, API, and data layers`,

      },
    ],
  },

  {
    slug: "Nicte-snacks",
    title: "NICTE — Alegria Bites Website",
    description:
      "Marketing website built with Next.js, featuring responsive design, SEO optimization, and Lighthouse 100+ performance scores.",
    image: "/images/nicte-2.png",
    github: "https://github.com/ianez7659/nicte-snack",
    demo: "https://nicte-snack-pmgt.vercel.app/",
    techStack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Swiper",
      "Vercel",
    ],
    sections: [
      {
        type: "text" as const,
        title: "Project Description",
        content:
          `NICTE is a client-commissioned brand website for Alegria Bites, built on a scalable Next.js architecture that combines motion-rich UX and optimized media to elevate storytelling and product discovery.

          The project focuses on creating a vibrant and engaging brand experience that reflects the client's identity through thoughtful use of colors, typography, and imagery.

          Key features include a responsive design optimized for all devices, motion-rich UX with Framer Motion animations, interactive product sliders using Swiper, and optimized media for fast loading and visual impact.

          Built with Next.js and TypeScript, the application uses Framer Motion for smooth animations, Swiper for interactive image sliders, and Tailwind CSS for styling, creating a modern and visually appealing brand presence.

          The project demonstrates expertise in brand storytelling, UI/UX design, and modern web development practices, delivering a production-ready website that effectively showcases the client's products and brand identity.
          `,
      },
      {
        type: "image" as const,
        image: [
          "/images/nicte-4.png",
          "/images/nicte-5.png",
          "/images/nicte-3.png",
        ],
      },

      {
        type: "textImage" as const,
        title: "Key Features",
        content:
          `• Multi-page marketing website (Home, About, Product, FAQ, Gallery, Contact)

            • Responsive UI with smooth animations using Framer Motion

            • Contact form with serverless email delivery (Nodemailer)

            • Product showcase with tab-based information and pricing tables

            • FAQ system with modal-based Q&A interaction`,
        image: ["/images/nicte-5.png", "/images/nicte-3.png"],
        align: "right",
      },
      {
        type: "textImage" as const,
        title: "Technical Highlights",
        content:
          `• Multi-page marketing website (Home, About, Product, FAQ, Gallery, Contact)

            • Responsive UI with smooth animations using Framer Motion

            • Contact form with serverless email delivery (Nodemailer)

            • Product showcase with tab-based information and pricing tables

            • FAQ system with modal-based Q&A interaction`,
        image: ["/images/stack01.jpg"],
        align: "left",
      },

      {
        type: "text" as const,
        title: "Result",
        content:
          `• Lighthouse scores:
100 / 96 / 100 / 100 (Desktop)
84 / 96 / 100 / 100 (Mobile)

• Fully deployed live client website

• Improved performance, accessibility, and user experience
          `,
      },
    ],
  },
];
