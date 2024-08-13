import React from "react";
import About from "./components/About/About.js";
import Information from "./components/Information/Information.js";
import Contact from "./components/Contact/Contact.js";
import Navbar from "./components/Navbar/Navbar.js";
import Projects from "./components/Projects/Projects.js";
import Skills from "./components/Skills/Skills.js";
import Testimonials from "./components/Testimonials/Testimonials.js";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Information />
      <Testimonials />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}