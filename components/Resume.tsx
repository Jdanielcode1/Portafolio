import React from 'react';
import { FaFileAlt, FaLink } from 'react-icons/fa';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/18zBJQs0CUMyKT3dzCrJzIPm_ZlIabReR/view?usp=sharing'; // replace with your resume link

  return (
    <section id="resume" className="mb-10">
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <FaFileAlt size={50} className="mr-4" />
        <h2 className="text-2xl font-bold">My Resume</h2>
      </div>
      <a 
        href={resumeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-blue-500 hover:underline"
      >
        Open my Resume <FaLink className="ml-2" />
      </a>
    </div>
    </section>
  );
};

export default Resume;