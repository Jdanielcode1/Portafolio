
import React from "react"
import Image from "next/image"

const skills = [
  // Core Skills
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Django" },
  { skill: "Next.js" },
  { skill: "Swift" },
  { skill: "PostgreSQL" },
  { skill: "Supabase" },
  { skill: "Firebase" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "Google Cloud" },
  { skill: "Vercel" },
  { skill: "React Native" },
  { skill: "Expo" },
  { skill: "C++" },
  { skill: "SwiftUI" },
  { skill: "Express.js" }

];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I'm a Computer Science student at UC Berkeley who loves building 
              things that make people's lives easier. I'm passionate about creating 
              innovative solutions and exploring new technologies.
            </p>
            <br />

            <br />
            <p>
              When I'm not coding, you can find me playing table tennis, getting lost in 
              interesting podcasts, or reading about new tech. Always up for learning new 
              things and meeting fellow developers!
            </p>
            <br />
            <br />
            <br />
   
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Tech Stack</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
              <div className="hidden md:block md:relative md:-bottom-10 md:left-15 md:z-0">
                <Image src="/programmer1.svg" alt="" width={700} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection