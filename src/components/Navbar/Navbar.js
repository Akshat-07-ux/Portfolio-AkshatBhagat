import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
const getImageUrl = (path) => {
  return require(`./${path}`);
};
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Update URL without adding a new entry in history
        window.history.replaceState(null, null, '#${id}');
    }
  };


export default function Navbar() {
  return (
    <header className="navbar bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about">
            <img
              src={getImageUrl("logo.png")}
              alt="Logo"
              className="h-16 w-20"
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#information" className="mr-5 hover:text-white">
            About 
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}