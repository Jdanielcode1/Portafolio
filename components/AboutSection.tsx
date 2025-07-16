
import React from "react"

const techStack = {
  Languages: [
    "Swift",
    "Python",
    "JavaScript",
    "TypeScript",
    "Objective-C",
    "SQL",
    "C++"
  ],
  "Frameworks/Tools": [
    "SwiftUI",
    "Xcode",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "TestFlight",
    "Git/GitHub",
    "Langchain",
    "React Native",
    "AVFoundation/Speech Framework",
    "OpenAI API",
    "Claude API",
    "Google Cloud"
  ],
  Testing: [
    "Cypress",
    "Jest",
    "Unit/Integration/E2E Testing"
  ],
  Other: [
    "Agile/Scrum",
    "Product Management",
    "Figma",
    "Jira",
    "Slack"
  ]
};

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
              I'm a senior Computer Science student graduating in December 2025, 
              and I've just finished my exchange semester at UC Berkeley. During my time at Berkeley, 
              I got to build several MVPs and pitch to VCs, where I learned a lot about 
              solving the right problems and building fast. I'm currently working as a 
              Software Engineer intern on mobile for{" "}
              <a 
                href="https://banter.to/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline font-semibold"
              >
                Banter
              </a>
              , an AI Messenger startup. 
              I love building things that make people's lives easier and I'm passionate about creating 
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
            <div className="space-y-4">
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category}>
                  <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    {category}:
                  </h2>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start mb-4">
                    {skills.map((skill, idx) => (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection