import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Regal Rexnord Risk Learning Website",
    description:
      "We worked with Regal Rexnord to make a website that teaches employees about risks in the workplace with Unity 2D Games .",
    image: "/RegalRexnordImage.jpg",
    github: "https://github.com/WatchMakker/Construccion_software_proyecto",
    link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/RO8nmDQuQO4oUwewzq",
  },
  {
    name: "Expense Tracker",
    description: "This Expense Tracker lets you add expenses with date and amount to a list and visualizes the expenses by month in a bar graph.",
    image: "/ExpenseTrackerImage.jpg",
    github: "https://github.com/Jdanielcode1/Expense_Tracker",
    link: "",
  },
  {
    name: "Math test for Elementary Students",
    description:
      "In my python class we built a simple program that tests students in their math skills for learning purposes.",
    image: "/MathTestImage.png",
    github: "",
    link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/OYXbAONC0BnkCV8dw",
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
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
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
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
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
  )
}

export default ProjectsSection
