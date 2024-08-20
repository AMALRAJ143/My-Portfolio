import "./about.css";

import resume from "../../asset/Amalraj_resume.pdf";

export default function About() {
    return (
      <>
      <div id="about-container">
        <h1 className="about-container-head">About Me</h1>
        <div id="about-content">
          <div id="about-details">
            <p>I'am Full Stack Developer who loves building responsive and user-friendly web applications.</p>
              <p>I started with the basics like HTML, CSS, and JavaScript, and now I'm into more advanced stuff like React.js and Node.js.</p>
              <p>I've worked on creating cool and responsive websites, and I also know about server-side development using Express.js and MongoDB.</p>
              <p>Uses Git to manage and share code with teams.</p>
              <p>Focused on creating easy-to-use and visually appealing designs.Always aims to finish projects on time and with high quality.</p>
              <p> I like solving problems and learning new things in the tech world. Let's make awesome things together!</p> 
              
          </div>
        <div id="qualification">
          <h1 className="qualification-head">Accademic Qualification</h1>
          <div className="accademy">
            <h1 className="accademy-head">Bachelor of Engineering</h1>
            <p className="specialization">Computer Science and Engineering</p>
            <p className="descriptions">I have successfully completed my Bachelor of Engineering in Computer Science and Engineering at this college with a <span className="b">CGPA of " 7.63 "</span></p>
          </div>
          <div className="accademy">
            <h1 className="accademy-head">Higher Secondary School(12th)</h1>
            <p className="specialization">Computer Science</p>
            <p className="descriptions">I have successfully completed my Higher Secondary Certificate (HSC) at this school, and I achieving a<span className="b"> score of " 342 "</span></p>
          </div>
          <div className="accademy">
            <h1 className="accademy-head">Secondary School(10th)</h1>
            <p className="specialization">Stateboard</p>
            <p className="descriptions">I have successfully completed my SSLC(10th) at this school, and I achieving a<span className="b"> score of " 440 "</span></p>
          </div>
        <a href={resume} target="_blank" className="cv">View CV</a>
        <a href={resume} download="resume.pdf" className="cv">Download CV</a>
        </div>
        </div>
      </div>
      </>
    )
}
        