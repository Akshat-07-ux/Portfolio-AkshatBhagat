import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data.js";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 mt-20 mb-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Having a vast knowledge of different programming concepts, technologies, and frameworks, I have
            worked on a variety of different projects, which are displayed below:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4" key={project.image}>
              <div className="block relative">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
              <a
  href={project.github}
  className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-300 rounded text-lg mr-2"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Github
</a>
                <a
                  href={project.live}
                  className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-300 rounded text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
