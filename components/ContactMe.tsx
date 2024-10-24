"use client"
import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-center justify-center md:space-y-8 md:p-4">
          <div className="flex flex-col items-center justify-center space-y-6 w-full md:w-1/2">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/jos%C3%A9-daniel-cant%C3%BA-cant%C3%BA-8a5910242"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-4 hover:text-teal-500 transition-colors duration-300 w-full max-w-md"
            >
              <div className="bg-gray-200 p-4 rounded-full dark:bg-stone-600">
                <FaLinkedin size={25} />
              </div>
              <span className="font-semibold text-lg">Let's connect on LinkedIn</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:A01284664@tec.mx"
              className="flex items-center space-x-4 hover:text-teal-500 transition-colors duration-300 w-full max-w-md"
            >
              <div className="bg-gray-200 p-4 rounded-full dark:bg-stone-600">
                <MdEmail size={25} />
              </div>
              <span className="font-semibold text-lg">A01284664@tec.mx</span>
            </a>

            {/* Additional Contact Info */}
            <div className="flex items-center space-x-4 w-full max-w-md cursor-default">
              <div className="bg-gray-200 p-4 rounded-full dark:bg-stone-600">
                <BsFillTelephoneFill size={25} />
              </div>
              <span className="font-semibold text-lg">+52 8124661139</span>
            </div>

            {/* Contact Message */}
            <p className="text-center text-lg mt-8 max-w-md">
              Feel free to reach out! I'm always interested in hearing about new 
              opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe