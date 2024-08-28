import React from "react";
import "./skills.css";
import html from "../asset/icons8-html-480.png"
import css from "../asset/icons8-css-480.png"
import js from "../asset/icons8-javascript-480.png"
import react from "../asset/icons8-react-js-480.png"
import node from "../asset/icons8-nodejs-480.png"
import express from "../asset/icons8-express-js-480.png"
import mongo from "../asset/icons8-mongo-db-96.png"
import java from "../asset/icons8-java-480.png"

const skills = [
  { name: "HTML", description: "Markup language for creating web pages.", icon: html, backgroundColor: "#E34F26", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", description: "Style sheet language for designing web pages.", icon: css, backgroundColor: "#1572B6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", description: "Programming language for web development.", icon: js, backgroundColor: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", description: "JavaScript library for building user interfaces.", icon: react, backgroundColor: "#61DAFB", link: "https://reactjs.org/" },
  { name: "Node.js", description: "JavaScript runtime for server-side development.", icon: node, backgroundColor: "#339933", link: "https://nodejs.org/" },
  { name: "Express.js", description: "Web application framework for Node.js.", icon: express, backgroundColor: "#000000", link: "https://expressjs.com/" },
  { name: "MongoDB", description: "NoSQL database for modern web applications.", icon: mongo, backgroundColor: "#47A248", link: "https://www.mongodb.com/" },
  { name: "Java", description: "High-level programming language.", icon: java, backgroundColor: "#007396", link: "https://www.oracle.com/java/" },
];



const SkillCard = ({ skill, description, icon, backgroundColor, link }) => {
  return (
    <div className="skill-card">
        <div className="card-front" style={{ backgroundColor }}>
          <img src={icon} className="icon" />
          <h3>{skill}</h3>
        </div>
      <div className="card-back" style={{ borderColor: backgroundColor }}>
      <p style={{ color: backgroundColor }}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-front-link"><button className="skills-btn" style={{ backgroundColor: backgroundColor }}>More Info</button></a> 
      </div>
    </div>
  );
};



const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-head">Skills</h1>
      <div className="skills">
      {skills.map((skill) => (
        <SkillCard 
          key={skill.name} 
          description={skill.description} 
          icon={skill.icon}
          skill={skill.name}  
          backgroundColor={skill.backgroundColor} 
          link={skill.link} 
        />
      ))}
      </div>
     
    </div>
  );
};



export default Skills;
