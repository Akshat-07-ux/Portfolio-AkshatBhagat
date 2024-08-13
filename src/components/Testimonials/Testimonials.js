import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../../data.js";


export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center mt-40 mb-10">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="testimonial bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4 mx-auto" />
                <img
                  alt="testimonial"
                  src={testimonial.image}
                  className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center mx-auto mb-4"
                />
                <div className="text-center">
                  <span className="block text-lg font-medium text-white mb-1">{testimonial.name}</span>
                  <span className="block text-gray-500 text-sm uppercase">{testimonial.company}</span>
                  <span className="block text-gray-500 ">{testimonial.duration}</span>
                </div>
                <p className="leading-relaxed my-4">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
