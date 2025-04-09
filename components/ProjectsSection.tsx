import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";


interface Skill {
  skill: string;
}

interface Project {
  name: string;
  description: string | string[];
  image?: string;
  videos?: string[];  // New field for multiple videos
  video?: string;     // Keep for backwards compatibility
  showVideo?: boolean;
  github: string;
  link: string;
  skills: Skill[];
}


const projects = [
  {
    name: "TestBuilder Platform",
    description: [
      "Developed a comprehensive test management platform using Next.js 14, TypeScript, and Supabase, enabling organizations to create, assign, and evaluate assessments through an intuitive interface.",
      "Implemented real-time test building functionality with drag-and-drop module management, dynamic question types (multiple-choice, true/false, open-ended), and automated grading capabilities.",
      "Developed a scalable testing platform with group assignments and customizable templates using Tailwind CSS and shadcn/ui, implemented React API for notifications and secure authentication, delivering streamlined experience for administrators and test-takers.",
    ],
    video: "/testbuilder.mp4",
    showVideo: true,
    github: "",
    link: "",
    skills: [
      { skill: "Next.js 14" },
      { skill: "TypeScript" },
      { skill: "Supabase" },
      { skill: "PostgreSQL" },
      { skill: "Tailwind CSS" },
      { skill: "shadcn/ui" },
      { skill: "React Query" },
    ],
  },

  {
    name: "AI-Powered Presales Management Platform (Neoris)",
    description: [
      "Developed a full-stack AI solution to streamline presales software workflows, leveraging PostgreSQL, Supabase, Langchain, and vector embeddings with pg_vector for RAG (Retrieval-Augmented Generation), integrated with Ollama for LLMs.",
      "Built a robust frontend using Next.js and TypeScript, while focusing on advanced backend engineering with PostgreSQL, including procedures, triggers, RLS, and Supabase Storage for file management.",
      "Collaborated within an Agile team to enhance performance and security, actively participating in sprint planning, iterative development, and team reviews. Integrated Microsoft Teams API for seamless collaboration.",
    ],
    videos: [
      "/AIProject.mov",
      "/Proposal.mov",
      "/Teams_chat.mov",
      "/Todo_list.mov"
    ],
    showVideo: true,
    github: "https://github.com/CaarloosDC/Softie",
    link: "",
    skills: [
      { skill: "Next.js" },
      { skill: "TypeScript" },
      { skill: "PostgreSQL" },
      { skill: "Supabase" },
      { skill: "Langchain" },
      { skill: "RAG" },
      { skill: "Ollama" },
      { skill: "Agile Development" },
      { skill: "Microsoft Teams API" },
    ],
  },
  {
    name: "Recursive AI",
    description: [
      "Engineered the frontend interface of a startup platform for AI Agents to create a hierarchy of tasks, delegating to multiple agents such as Sales, Recruiting and General.",
      "Implemented a detailed view of each AI Agent's status and data using React, TypeScript, Next.js 15, and React Flow.",
      "Built an intuitive drag-and-drop interface for task management and agent configuration, with real-time updates and state management.",
    ],
    video: "/recursive.mp4",
    showVideo: true,
    github: "",
    link: "",
    skills: [
      { skill: "React" },
      { skill: "TypeScript" },
      { skill: "Next.js" },
      { skill: "React Flow" },
      { skill: "Tailwind CSS" },
    ],
  },

  {
    name: "Spatial Computing learning Platform for Medical Students",
    description: [
      "Developed an innovative VisionOS application for medical students, featuring 3D organ visualization and interactive quizzes.",
      "Utilized Swift, SwiftUI, RealityKit, and ARKit, with a MySQL backend and RESTful API for efficient data management.",
      "Collaborated with a multidisciplinary team to ensure accuracy and educational value.",
      "Presented the project at the computer science program's 50th anniversary, demonstrating its potential impact on medical education.",
    ],
    video: "/vision_doc_vid.mp4", // Add this line
    showVideo: true, // Add this line
    github: "https://github.com/EugenioPedraza/VisionDoc",
    link: "https://www.youtube.com/watch?v=tR1tP5SS5fU",
    skills: [
      { skill: "VisionOS" },
      { skill: "SwiftUI" },
      { skill: "Swift" },
      { skill: "ARKit" },
      { skill: "MySQL Server" },
      { skill: "Oracle Cloud Infrastructure" },
    ],
  },

  {
    name: "PlayVision Landing Page",
    description: [
      "Developed and Designed PlayVision's landing page using Next.js, TypeScript, and Tailwind CSS, featuring interactive team cards and dynamic scroll-based animations.",
      "Implemented key components including an auto-playing video showcase, custom UI elements with gradient animations, and a responsive navigation system.",
      "Optimized performance through Next.js Image optimization and lazy loading while maintaining a modern, responsive design across all devices.",
    ],
    video: "/playvision-vid.mp4", // You'll need to add this image to your public folder
    showVideo: true, 
    github: "https://playvision.io",
    link: "https://playvision.io", // Update with actual link
    skills: [
      { skill: "Next.js" },
      { skill: "TypeScript" },
      { skill: "Tailwind CSS" },
      { skill: "React" },
      { skill: "Animation" },
      { skill: "Responsive Design" },
    ],
  },



  {
    name: "Video Processing Cloud Platform (YouTube Clone)",
    description: [
      "Engineered a scalable video processing platform using Google Cloud services, implementing a microservices architecture with Cloud Storage, Pub/Sub, and Cloud Run for video handling and transcoding.",
      "Developed a responsive frontend using Next.js and TypeScript, integrated with Firebase Authentication for secure user management, and implemented Docker containerization for consistent deployment.",
      "Built an event-driven video processing pipeline using FFmpeg for transcoding, Cloud Pub/Sub for message queuing, and Firestore for metadata management, ensuring reliable video processing and delivery.",
    ],
    image: "/yt_clone_logo2.png", // Add your project screenshot
    github: "https://github.com/Jdanielcode1/Video-Processing-WebAPP-GC",
    link: "", // Add if you have a live demo
    skills: [
      { skill: "Next.js" },
      { skill: "TypeScript" },
      { skill: "Google Cloud Platform" },
      { skill: "Cloud Run" },
      { skill: "Cloud Storage" },
      { skill: "Cloud Pub/Sub" },
      { skill: "Firebase" },
      { skill: "Docker" },
      { skill: "FFmpeg" },
      { skill: "Express.js" },
      { skill: "Microservices" },
      { skill: "Event-Driven Architecture" },
    ],
  },



  {
    name: "Github Issues Clone",
    description: [
      "Created a Fullstack Github Issues Clone using NextJS 14, Supabase with PostgreSQL as a Backend Service utilizing, added realtime commments, AI semantic search for tickets, added file storage for view images with previews, multitenancy for different tenants, implemented Row Level Security to ensure data safety",
    ],
    video: "/Better_video.mp4", // Add this line
    showVideo: true, // Add this line
    github: "https://github.com/Jdanielcode1/Expense_Tracker",
    link: "",
    skills: [{ skill: "Next.js" },
      { skill: "TypeScript" },
      { skill: "PostgreSQL" },
      { skill: "Supabase" },
      { skill: "Semantic Search" },
      { skill: "OpenAI API"}],
  },
  {
    name: "Regal Rexnord Risk Learning Website",
    description:
      "Developed a workplace safety training platform featuring Unity/C# educational games integrated with a React/Material-UI analytics dashboard, utilizing Django backend for user authentication and game metrics processing.",
    image: "/RegalRexnordImage.png",
    github: "https://github.com/Jdanielcode1/regal_rexnord_project",
    link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/RO8nmDQuQO4oUwewzq",
    skills: [
      { skill: "React" },
      { skill: "Django" },
      { skill: "MaterialUI" },
      { skill: "CSS" },
      { skill: "Unity2D" },
      { skill: "C#" },
    ],
  },
  {
    name: "Order Management System (Subsidine)",
    description: [
      "Developed a multi-tenant order management SaaS platform for food service providers, reducing order processing time by 75% and eliminating 95% of errors from lost physical tickets.",
      "Implemented a full-stack solution using NextJS, JavaScript, Supabase, PostgreSQL, and PostgREST, with realtime functionality for ticket creation and responsive design for cross-device compatibility.",
      "Utilized Vercel and GitHub Actions for CI/CD, demonstrating expertise in modern web development, database management, and DevOps practices for a scalable SaaS startup.",
    ],
    image: "/subsidine_pic.png",
    github: "https://github.com/EugenioPedraza/VisionDoc",
    link: "https://www.youtube.com/watch?v=tR1tP5SS5fU",
    skills: [
      { skill: "Next.js" },
      { skill: "TypeScript" },
      { skill: "PostgreSQL" },
      { skill: "Supabase" },
    ],
  },

  {
    name: "Traffic Simulation to improve local traffic ",
    description: [
      "Developed an advanced traffic simulation system using Python and Unity, combining data analysis with 3D visualization to model urban traffic patterns and optimize flow efficiency in real-time.",
      "Implemented AI-driven vehicle behavior and pathfinding algorithms in C#, along with Matplotlib visualizations for traffic density analysis, resulting in actionable insights for reducing congestion and improving traffic management",
    ],
    image: "/multiphoto.png",
    github: "https://github.com/EugenioPedraza/MultiAgentesUnity",
    link: "https://www.youtube.com/watch?v=hU_7ieUsnwY&t=4s&ab_channel=DiegoEmilioRodr%C3%ADguezOrozco",
    skills: [
      { skill: "Python" },
      { skill: "Matplotlib" },
      { skill: "Unity" },
      { skill: "C#" },
      { skill: "Rest API" },
    ],
  },

  {
    name: "Expense Tracker",
    description: [
      "A dynamic expense tracking app that helps users monitor their finances through intuitive data input and interactive bar graph visualizations. Features include monthly expense breakdowns, customizable date filtering, and spending pattern analysis.",
      "Built with React hooks for state management and Chart.js for data visualization, focusing on responsive design and user experience.",
    ],
    image: "/ExpenseTrackerImage.png",
    github: "https://github.com/Jdanielcode1/Expense_Tracker",
    link: "",
    skills: [{ skill: "HTML" }, { skill: "CSS" }, { skill: "React" }],
  },

  
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center max-w-4xl mx-auto">
                  {/* Media Container */}
                  <div className="w-full mb-8">
                    <Link href={project.link}>
                      {project.showVideo && project.videos ? (
                        <div className="flex flex-col gap-8">
                          <h1 className="text-4xl font-bold text-center">{project.name}</h1>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.videos.map((videoSrc, index) => (
                              <div key={index} className="aspect-video w-full">
                                <video
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="rounded-xl shadow-xl hover:opacity-70 w-full h-full object-contain">
                                  <source src={videoSrc} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : project.showVideo && project.video ? (
                        <div className="aspect-video w-full max-w-3xl mx-auto">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="rounded-xl shadow-xl hover:opacity-70 w-full h-full object-contain">
                            <source
                              src={project.video}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : project.image ? (  
                        <Image
                          src={project.image}
                          alt={project.name}  
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70 w-full"
                        />
                      ) : null}  
                    </Link>
                  </div>

                  {/* Rest of your component remains the same */}
                  <div className="text-center w-full">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    {Array.isArray(project.description) ? (
                      <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        {project.description.map((bullet, index) => (
                          <li
                            key={index}
                            className="text-xl leading-7 mb-2 text-left">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        {project.description}
                      </p>
                    )}

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.skills.map((item, idx) => (
                        <p
                          key={idx}
                          className="bg-gray-200 px-4 py-2 text-gray-500 rounded font-semibold">
                          {item.skill}
                        </p>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
