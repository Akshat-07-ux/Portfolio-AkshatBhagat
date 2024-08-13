import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay when component mounts
    const timeout = setTimeout(() => {
      setAnimateText(true);
    }, 500); // Adjust delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run effect only once on component mount

  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  

 

  // CSS for the animated text
  const animatedTextStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
    opacity: 0,
    animation: `${animateText ? "animateText 2s forwards" : ""}`,
    marginTop: "10px", // Adjust spacing between lines
  };

  // CSS keyframes for the animation
  const keyframes = `
    @keyframes animateText {
      0% {
        opacity: 0;
        transform: translateY(10px); /* Start position (off screen) */
      }
      100% {
        opacity: 1;
        transform: translateY(0); /* End position (on screen) */
      }
    }
    @keyframes floating {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 10px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  `;

  const imageStyle = {
    height: "350px",
    zIndex: 1,
    marginLeft: "30px",
    border: "2px solid #ccc",
    width: "80%",
    borderRadius: "50%",
    animationName: "floating",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  };

  // Media query to adjust the margin for inspected view
  const mediaQueryStyle = `
    @media (min-width: 1024px) {
      .floating-image {
        margin-right: 60px;
      }
    }
    @media (max-width: 768px) {
      .profile-image {
        width: 30% !important;
        height: auto !important;
        margin: 20px auto !important;
      }
    }
  `;

  return (
    <section id="about">
      <style>{keyframes}</style>
      <style>{mediaQueryStyle}</style>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" style={{ paddingTop: '80px', paddingLeft: '-40px' }}>
            Hi, I'm Akshat Bhagat.
            <br className="hidden lg:inline-block" />
           <span style={{ ...animatedTextStyle, fontSize: '20px', fontFamily: 'cursive' }} className="responsive-text">
  I am a soon to be Engineer,
  <br className="mobile-break" />
  specialised in ML and Data Science
</span>
          </h1>
          
          <div className="flex justify-center">
            
            <a
              href="#social-profiles"
              onClick={toggleSocialIcons}
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg"
            >
              See Social Profiles
            </a>
            <a
  href="https://drive.google.com/file/d/15_woXCgUrV5t2On7oxguu_aPxbAS08WM/view?usp=sharing"
  className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-lg"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
          </div>
          {showSocialIcons && (
  <div className="mt-4 flex justify-center space-x-4">
    <a
      href="https://www.linkedin.com/in/akshat-bhagat-9a5552248/"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-20"
    >
      <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 icon-hover" />
    </a>
    <a
      href="https://github.com/Akshat-07-ux"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} className="h-8 w-8 icon-hover" />
    </a>
    <a
      href="https://www.instagram.com/akshat16302/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 icon-hover" />
    </a>
    <a
      href="mailto:your-email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8 icon-hover" />
    </a>
  </div>
)}

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col items-center">
          
          <img
            src="https://media.giphy.com/media/lWLyoA3zQ8Awbdsk6a/giphy.gif"
            alt=""
            style={imageStyle}
            className="floating-image" // Add this class to target with media query
          />
        </div>
      </div>
    </section>
  );
}
