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
            <h1>Welcome,</h1>
            <h1>I'am<span className="name">Amalraj</span></h1>
            <span ref={el} className="profession" />
            <p className="quote">"Your Future is Created by What You Do Today Not Tomorrow!"</p>
            <div id="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
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

