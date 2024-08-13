import React from "react";
import { ChipIcon } from "@heroicons/react/solid";
import styled from 'styled-components';
import { skills } from "../../data.js";

// Import all images
import mlImage from '../images/ml.jpg';
import cppImage from '../images/c++.png';
import dsaImage from '../images/dsa.png';
import reactImage from '../images/react.png';
import nodeImage from '../images/node.png';
import jsImage from '../images/js.png';
import jpImage from '../images/jp.png';
import phpImage from '../images/php.png';
import pythonImage from '../images/python.png';
import numpyImage from '../images/numpy.png';
import pandasImage from '../images/pandas.png';
import htmlImage from '../images/html.png';
import cssImage from '../images/css.png';
import fbImage from '../images/fb.png';
import mongodbImage from '../images/mongodb.png';
import flutterImage from '../images/flutter.png';
import dartImage from '../images/dart.png';
import javaImage from '../images/java.jpeg';
import kotlinImage from '../images/kotlin.png';

// Create an object to map skill titles to imported images
const skillImages = {
  ML: mlImage,
  'C++': cppImage,
  DSA: dsaImage,
  React: reactImage,
  Node: nodeImage,
  Javascript: jsImage,
  Jupyter: jpImage,
  PHP: phpImage,
  Python: pythonImage,
  NumPy: numpyImage,
  Pandas: pandasImage,
  HTML: htmlImage,
  CSS: cssImage,
  Firebase: fbImage,
  MongoDb: mongodbImage,
  Flutter: flutterImage,
  Dart: dartImage,
  Java: javaImage,
  Kotlin: kotlinImage
};


const StyledSection = styled.section`
  color: var(--color-text);
  margin-top: 140px;
  width: 80%; 
  max-width: 100%; 
  margin-left: 150px;
  box-sizing: border-box;

  .title {
    color: var(--color-text);
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    text-align: center;
  }

  .skill-title {
    color: #000000; // Change this to your desired color
    font-weight: bold; // Optional: make the text bold
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;
  }

  .skills {
    display: grid; 
    grid-template-columns: repeat(6, 1fr);
    gap: 20px; 
    width: 100%;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
    width: 150px;
  }

  .skillImageContainer {
    background-color: var(--color-secondary);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
  }

  .skillImageContainer img {
    width: 100px;
  }

  .skill p {
    font-size: 25px;
    font-family: var(--font-roboto);
    font-weight: 500;
  }

  .skill-title {
    color: var(--color-text-primary); /* Default color, change this to desired color */
  }


  @media screen and (max-width: 830px) {
    margin-top: 50px;
    width: 90%;
    margin-left: 40px;

    .content {
      flex-direction: column;
      align-items: center;
      gap: 34px;
    }

    .skills {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .skill {
      width: 120px;
    }

    .skillImageContainer {
      width: 120px;
      height: 120px;
    }

    .skillImageContainer img {
      width: 80px;
    }

    .skill p {
      font-size: 20px;
    }
  }
`;




export default function Skills() {
  return (
    <StyledSection id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills - Languages &amp; Technologies
          </h1>
          
        </div>

        <div className="content bg-indigo-100 mb-2">
          <div className="mt-5 pt-5">
          <p className="text-base leading-relaxed xl:w-4/4 lg:w-4/4 ">
            I have a good command on different programming languages, technologies, frameworks and interfaces which are 
            mentioned below;
          </p>
          </div>
          <div className="grid grid-cols-3 p-4 ml-10 mr-10 skills">
            {skills.map((skill, id) => (
              <div key={id} className="bg-gradient-to-r from-indigo-300 to-slate-300 m-4 rounded-md p-4 hover:bg-slate-500">
                <img 
                  src={skillImages[skill.title]}
                  className="mx-auto" 
                  alt={skill.title} 
                  width="50px" 
                 
                />
                <h2 className="text-center text-lg skill-title">{skill.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledSection>
  );
}