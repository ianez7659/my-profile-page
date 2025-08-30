import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "Jobflow",
    title: "Jobflow - Job Tracker",
    description:
      "A job tracking application built with Next.js and TypeScript, featuring a responsive design and smooth animations using Framer Motion. It allows users to manage job applications efficiently.",
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
          "A job tracking application built with Next.js and TypeScript, featuring a responsive design and smooth animations using Framer Motion. It allows users to manage job applications efficiently.",
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
        title: "Status Management",
        content:
          "Each job application can be categorized by status like Applied, Interviews, Offer, and Rejected.",
        image: ["/images/jobflow-2.png"],
        align: "right",
      },
      {
        type: "textImage" as const,
        title: "Data Visualization",
        content:
          "The dashboard provides a visual representation of job application statistics using charts, helping users quickly assess their application progress.",
        image: ["/images/jobflow-6.png"],
        align: "left",
      },
      {
        type: "textImage" as const,
        title: "Code Snippet",
        content: `The application is built with Next.js and TypeScript, ensuring type safety and modern web development practices. Prisma is used for database management, providing an intuitive ORM for interacting with the PostgreSQL database. 
                  Here is a sample code snippet demonstrating how to create a new job application using Prisma:`,
        image: [
          "/images/jobflow-7.png",
          "/images/jobflow-5.png",
          "/images/jobflow-snip1.png",
          "/images/jobflow-snip2.png",
        ],
        align: "left",
      },
    ],
  },

  {
    slug: "TEZUKURI-VAN",
    title: "TEZUKURI VAN – Client E-commerce Platform",
    description:
      "A fully commissioned e-commerce platform built for a real client, featuring a custom admin dashboard, real-time content management via Supabase, and a sleek, responsive design.",
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
        content: `Client-commissioned e-commerce platform for a handmade goods business, built with Next.js and Supabase for real-time content management. 
          
          Features a custom admin dashboard for easy updates.`,
      },
      {
        type: "image" as const,
        image: [
          "/images/tezukuri-2.png",
          "/images/tezukuri-3.png",
          "/images/tezukuri-admin.png",
        ],
      },

      {
        type: "textImage" as const,
        title: "Dark Mode",
        content:
          "This website supports dark mode. You can toggle it using the button in the navbar.",
        image: ["/images/tezukuri-3.png", "/images/tezukuri-3-dark.png"],
        align: "right",
      },
      {
        type: "textImage" as const,
        title: "Admin Dashboard",
        content: `The custom admin dashboard allows real-time content management. The client can easily update products, categories, and orders. 
          
        It is built with Next.js and Supabase for seamless data handling.`,
        image: ["/images/tezukuri-admin.png", "/images/tezukuri-admin2.png"],
        align: "left",
      },
    ],
  },

  {
    slug: "Nicte-snacks",
    title: "NICTE — Alegria Bites Website",
    description:
      "Client-commissioned, responsive brand website built on a scalable Next.js architecture—combining motion-rich UX and optimized media to elevate storytelling and product discovery.",
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
          "Client-commissioned brand website for NICTE Snacks, built with Next.js and Tailwind CSS. Features a responsive design, motion-rich UX with Framer Motion, and optimized media for storytelling and product discovery.",
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
        title: "Visual Storytelling",
        content:
          "Based on the client's branding, I created a vibrant and engaging website. The use of colors, typography, and imagery reflects the brand's identity and appeals to the target audience.",
        image: ["/images/nicte-5.png", "/images/nicte-3.png"],
        align: "right",
      },
      {
        type: "textImage" as const,
        title: "Product focus with Image Slider",
        content:
          "The product section features an image slider built with Swiper, allowing users to easily browse through different products. This interactive element enhances user engagement and showcases the products effectively.",
        image: ["/images/nicte-6.png"],
        align: "left",
      },
    ],
  },
];
