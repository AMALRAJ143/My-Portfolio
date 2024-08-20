import { useState, useEffect } from "react";
import "./project.css";
import s1 from "../../asset/Swift Images/1.png";
import s2 from "../../asset/Swift Images/2.png";
import s3 from "../../asset/Swift Images/3.png";
import s4 from "../../asset/Swift Images/4.png";
import s5 from "../../asset/Swift Images/5.png";
import s6 from "../../asset/Swift Images/6.png";
import s7 from "../../asset/Swift Images/7.png";
import c1 from "../../asset/Career Images/1.png";
import c2 from "../../asset/Career Images/2.png";
import c3 from "../../asset/Career Images/3.png";
import c4 from "../../asset/Career Images/4.png";
import c5 from "../../asset/Career Images/5.png";
import c6 from "../../asset/Career Images/6.png";
import c7 from "../../asset/Career Images/7.png";
import c8 from "../../asset/Career Images/8.png";
import c9 from "../../asset/Career Images/9.png";
import c10 from "../../asset/Career Images/10.png";
import m1  from "../../asset/LMS images/1.png";
import m2  from "../../asset/LMS images/2.png";
import m3  from "../../asset/LMS images/3.png";
import m4  from "../../asset/LMS images/4.png";
import m5  from "../../asset/LMS images/5.png";
import m6  from "../../asset/LMS images/6.png";
import m7  from "../../asset/LMS images/7.png";
import m8  from "../../asset/LMS images/8.png";
import m9  from "../../asset/LMS images/9.png";
import m10  from "../../asset/LMS images/10.png";
import m11  from "../../asset/LMS images/11.png";
import m12  from "../../asset/LMS images/12.png";
import m13  from "../../asset/LMS images/13.png";
import m14  from "../../asset/LMS images/14.png";


export default function Projects() {
  const [textBox, setTextBox] = useState({});
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0]);

  const textBoxOpen = (id) => {
    setTextBox({ ...textBox, [id]: true });
  }

  const textBoxClose = (id) => {
    setTextBox({ ...textBox, [id]: false });
  }

  const imagees = [
    [s1,s2,s3,s4,s5,s6,s7], // Images for SwiftResume
    [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10], // Images for CareerCraze
    [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14], // Images for MindSpark
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndices((prevIndices) =>
        prevIndices.map((index, i) =>
          index === imagees[i].length - 1 ? 0 : index + 1
        )
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [imagees]);
  return (
    <>
      <div id="project-container">
        <h1>Projects</h1>
        <div id="project-inner">
          <div id="project-box">
            <div className="projects">
              <div className={`project-content ${textBox["p1"] ? "project-content-expanded" : ""}`}>
                <div className="project-head">
                  <h3>SwiftResume(resme-builder)</h3>
                  <div>
                    <span onClick={() => textBox["p1"] ? textBoxClose("p1") : textBoxOpen("p1")}>
                      <button>
                        <i className={`fa-solid ${textBox["p1"] ? "fa-caret-up" : "fa-caret-down"}`}></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="project-details">
                  <div className="project-img">
                      <img src={imagees[0][currentImageIndices[0]]} width="100%" height="100%" alt="Project Display" />
                    </div>
                  <div className="project-text">
                    <ul>
                      <li><span className="b">Overview:</span> SwiftResume is a user-friendly web application designed to help users create and manage professional resumes with ease. Built with React on the front-end and MongoDB for the back-end, SwiftResume offers a seamless experience from start to finish.</li>
                      <li><span className="b">Real-Time Preview:</span> Users can see how their resume looks as they build it, with instant updates.</li>
                      <li><span className="b">Custom Templates:</span> A variety of resume templates to choose from, catering to different professional needs.</li>
                      <li><span className="b">PDF Export:</span> Easily export resumes as PDF files for quick sharing and printing.</li>
                      <li><span className="b">User Authentication:</span> Secure login and resume management with MongoDB.</li>
                    </ul>
                    <p className="project-links">
                      <i className="fa-solid fa-link"></i><a href="https://swiftresume.vercel.app/" target="blank">SwiftResume</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="projects">
              <div className={`project-content ${textBox["p2"] ? "project-content-expanded" : ""}`}>
                <div className="project-head">
                  <h3>CareerCraze(job-listing)</h3>
                  <div>
                    <span onClick={() => textBox["p2"] ? textBoxClose("p2") : textBoxOpen("p2")}>
                      <button>
                        <i className={`fa-solid ${textBox["p2"] ? "fa-caret-up" : "fa-caret-down"}`}></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="project-details">
                <div className="project-img">
                      <img src={imagees[1][currentImageIndices[1]]} width="100%" height="100%" alt="Project Display" />
                    </div>
                  <div className="project-text">
                    <ul>
                      <li><span className="b">Overview:</span> CareerCraze is a comprehensive job listing platform designed to connect job seekers with employers seamlessly. Developed using modern web technologies, CareerCraze provides a robust and intuitive interface for both job seekers and recruiters.</li>
                      <li><span className="b">Advanced Job Search:</span> Filter job listings by location, industry, job type, and more.</li>
                      <li><span className="b">Custom Templates:</span> Create detailed profiles with resumes, cover letters, and skill assessments.</li>
                      <li><span className="b">Employer Dashboards:</span> Employers can post jobs, manage applications, and communicate with candidates.</li>
                      <li><span className="b">Real-Time Notifications:</span> Receive updates on new job postings, application statuses, and more.</li>
                    </ul>
                    <p className="project-links">
                      <i className="fa-solid fa-link"></i><a href="https://careercraze.vercel.app/login" target="blank">CareerCraze</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="projects">
              <div className={`project-content ${textBox["p3"] ? "project-content-expanded" : ""}`}>
                <div className="project-head">
                  <h3>MindSpark(LMS)</h3>
                  <div>
                    <span onClick={() => textBox["p3"] ? textBoxClose("p3") : textBoxOpen("p3")}>
                      <button>
                        <i className={`fa-solid ${textBox["p3"] ? "fa-caret-up" : "fa-caret-down"}`}></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="project-details">
                <div className="project-img">
                      <img src={imagees[2][currentImageIndices[2]]} width="100%" height="100%" alt="Project Display" />
                    </div>
                  <div className="project-text">
                    <ul>
                      <li><span className="b">Overview:</span> MindSpark is a dynamic Learning Management System (LMS) designed to enhance the educational experience for both instructors and students. It provides a comprehensive platform for course creation, content delivery, and student engagement, making online learning accessible and effective.</li>
                      <li><span className="b">Course Management:</span> Instructors can easily create, manage, and organize courses, modules, and assessments.</li>
                      <li><span className="b">Interactive Content:</span> Support for multimedia content, like videos to enhance learning.</li>
                      <li><span className="b">Technologies Used:</span> React, MongoDB, Node.js, Express.js</li>
                      <li><span className="b">Real-Time Notifications:</span> Receive updates on new students enrolled.</li>
                    </ul>
                    <p className="project-links">
                      <i className="fa-solid fa-link"></i><a href="https://mindsparkpro.vercel.app/login" target="blank">MindSpark</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

