import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [




  {
    name: "Spatial Computing learning Platform for Medical Students",
    description: [
        "Developed an innovative VisionOS application for medical students, featuring 3D organ visualization and interactive quizzes.",
        "Utilized Swift, SwiftUI, RealityKit, and ARKit, with a MySQL backend and RESTful API for efficient data management.",
        "Collaborated with a multidisciplinary team to ensure accuracy and educational value.",
        "Presented the project at the computer science program's 50th anniversary, demonstrating its potential impact on medical education."
      ],
    image: "/VisionPro.png",
    github: "https://github.com/EugenioPedraza/VisionDoc",
    link: "https://www.youtube.com/watch?v=tR1tP5SS5fU",
    skills: [
      { skill: "VisionOS" },
      { skill: "SwiftUI" },
      { skill: "Swift" },
      { skill: "ARKit" },
      { skill: "MySQL Server" },
      { skill: "Oracle Cloud Infrastructure" },
    ]
  },

  {
    name: "Order Managmennt System (Subsidine)",
    description: [
      "Developed a multi-tenant order management SaaS platform for food service providers, reducing order processing time by 75% and eliminating 95% of errors from lost physical tickets.",
      "Implemented a full-stack solution using NextJS, JavaScript, Supabase, PostgreSQL, and PostgREST, with realtime functionality for ticket creation and responsive design for cross-device compatibility.",
      "Utilized Vercel and GitHub Actions for CI/CD, demonstrating expertise in modern web development, database management, and DevOps practices for a scalable SaaS startup.",
    ],
    image: "/VisionPro.png",
    github: "https://github.com/EugenioPedraza/VisionDoc",
    link: "https://www.youtube.com/watch?v=tR1tP5SS5fU",
    skills: [
      { skill: "VisionOS" },
      { skill: "SwiftUI" },
      { skill: "Swift" },
      { skill: "ARKit" },
      { skill: "MySQL Server" },
      { skill: "Oracle Cloud Infrastructure" },
    ]
  },

  {
    name: "Traffic Simulation to improve local traffic ",
    description:
    "Bu",
    image: "/multiphoto.png",
    github: "https://github.com/EugenioPedraza/MultiAgentesUnity",
    link: "https://www.youtube.com/watch?v=hU_7ieUsnwY&t=4s&ab_channel=DiegoEmilioRodr%C3%ADguezOrozco",
    skills: [
      { skill: "Python" },
      { skill: "Unity" },
      { skill: "C#" },
      { skill: "Rest API" },
    ]
  },
  {
    name: "Regal Rexnord Risk Learning Website",
    description:
      "We worked with Regal Rexnord to make a website that teaches employees about risks in the workplace with Unity 2D Games .",
    image: "/RegalRexnordImage.png",
    github: "https://github.com/WatchMakker/Construccion_software_proyecto",
    link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/RO8nmDQuQO4oUwewzq",
    skills: [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "React" },
      { skill: "Unity2D" },
      { skill: "Django" }, 
      { skill: "C#" }, 
      { skill: "PostgreSQL" }, 
    ]
  },
  {
    name: "Expense Tracker",
    description: ["This Expense Tracker lets you add expenses with date and amount to a list and visualizes the expenses by month in a bar graph."],
    image: "/ExpenseTrackerImage.png",
    github: "https://github.com/Jdanielcode1/Expense_Tracker",
    link: "",
    skills: [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "React" },
    ]
  },

  {
    name: "Jira Clone NextJS and Supabase",
    description: ["Created a Fullstack Jira Like Clone with using NextJS 14, Supabase with PostgreSQL as a Backend Service utilizing, added realtime commments, AI semantic search for tickets, added file storage for view images with previews, multitenancy for different tenants, implemented Row Level Security to ensure data safety"],
    image: "/ExpenseTrackerImage.png",
    github: "https://github.com/Jdanielcode1/Expense_Tracker",
    link: "",
    skills: [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "React" },
    ]
  },







  {
    name: "Math test for Elementary Students",
    description:[
      "In my python class we built a simple program that tests students in their math skills for learning purposes.",
    ],
    image: "/MathTestImage.png",
    github: "",
    link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/OYXbAONC0BnkCV8dw",
    skills: [
      { skill: "Python" },
    ]
  },
]

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
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    {Array.isArray(project.description) ? (
                      <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description.map((bullet, index) => (
                          <li key={index} className="text-xl leading-7 mb-2">{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {project.skills.map((item, idx) => {
                        return (
                          <p
                            key={idx}
                            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                          >
                            {item.skill}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4 mt-5">
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
          )
        })}
      </div>
    </section>
  );
};

export default ProjectsSection