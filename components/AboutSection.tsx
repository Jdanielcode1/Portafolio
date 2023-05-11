import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "C++" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "C#" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Daniel and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> CS student @
              Tecnologico de Monterrey Campus MTY
            </p>
            <br />
            <p>
              I am currently enrolled in the BS Computer Science Program at
              Tecnologico de Monterrey University Campus Monterrey, I am
              currently in my 3rd Semester, coursing Data Structures and
              Algorithms and Interconextion of devices.
            </p>
            <br />
            <p>
              I have many hobbies from playing sports such as Table Tennis and
              Basketball, to participating in Competive Programming at ICPC
              competetions. I also love reading, hearing to music and traveling
              since I've been young. I'm always trying to learn new things and
              seeking experiences that put me out of my comfort zone.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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
          <div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
