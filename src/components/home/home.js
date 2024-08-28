import "./home.css"
import gif from "../../asset/coding.gif";
import React from 'react';
import Typed from 'typed.js';

export default function Home() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Developer","Web Developer","Tech Enthusiast"],
      typeSpeed: 50,
      loop:true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="container-1">
        <div id="content">
          <div id="left-content">
            <h1>Hello,</h1>
            <h1><span className="name">I'm Amalraj</span></h1>
            <span ref={el} className="profession" />
            <p className="quote">"Your Future is Created by What You Do Today Not Tomorrow!"</p>
            <div id="icons">
           <a href="https://www.linkedin.com/in/amalraj1710/" target="_blank" > <i class="fa-brands fa-linkedin"></i></a>
           <a href="https://github.com/AMALRAJ143" target="_blank"><i class="fa-brands fa-github"></i></a>
           <a href="https://www.instagram.com/amalraj143_?igsh=MXQzN3hrcHR4NnE1aA==" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            {/* <i class="fa-brands fa-facebook"></i> */}
            
            </div>
          </div>
          <div id="right-content">
            <div id="gif-container">
              <img src={gif} id="gif"  alt="gif" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

