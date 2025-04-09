"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/danicantu.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            <TypeAnimation
              sequence={[
                "Hi, I'm Daniel!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={0}
              style={{ display: 'inline-block' }}
            />
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <TypeAnimation
              sequence={[
                // Wait for the first animation to complete
                1500,
                "I'm ",
                200,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={0}
              style={{ display: 'inline' }}
            />
            <TypeAnimation
              sequence={[
                // Wait for previous animations
                2000,
                "a CS student",
                500,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={0}
              className="font-semibold text-teal-600"
              style={{ display: 'inline' }}
            />
            <TypeAnimation
              sequence={[
                // Wait for previous animations
                3000,
                " based in Berkeley. Learning and creating software to make peoples life better.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={0}
              style={{ display: 'inline' }}
            />
          </p>
          <div className="opacity-0 animate-fadeIn animation-delay-2000">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection