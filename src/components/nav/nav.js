import { useRef, useEffect } from "react";
import "./nav.css";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../asset/logo-modified.png";

export default function Nav() {
  const navRef = useRef();
  const progressCircleRef = useRef(null);

  // Responsive nav toggle
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = Math.round((scrollPosition / totalHeight) * 100);

      const progressCircle = progressCircleRef.current;
      const progressText = document.getElementById('progress-text');

      if (progress > 0) {
        progressCircle.style.display = 'flex';
        progressCircle.style.background = `conic-gradient(#18b1a6 ${progress}%, #e0e0e0 ${progress}%)`;
        progressText.textContent = `${progress}%`;
      } else {
        progressCircle.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <div id="progress-container" onClick={scrollToTop}>
            <div id="progress-circle" ref={progressCircleRef} style={{ display: 'none' }}>
              <div className="circle-inner">
                <span id="progress-text">0%</span>
              </div>
            </div>
          </div>

          <Link
            onClick={() => showNavBar()}
            to="container-1"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            activeClass="active"
          >
            <div className="logo"><img src={logo} className="lo" /></div>
          </Link>
        </div>
        <div className="nav-links" ref={navRef}>
          <Link
            onClick={() => showNavBar()}
            to="container-1"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            activeClass="active"
          >
            Home
          </Link>
          <Link
            onClick={() => showNavBar()}
            to="about-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            activeClass="active"
          >
            About
          </Link>
          <Link
            onClick={() => showNavBar()}
            to="skills-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            activeClass="active"
          >
            Skills
          </Link>
          <Link
            onClick={() => showNavBar()}
            to="project-container"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}
            activeClass="active"
          >
            Projects
          </Link>
          <Link
            onClick={() => showNavBar()}
            to="contact-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            activeClass="active"
          >
            Contact
          </Link>
          <button className="navv-btn" id="close-nav" onClick={() => showNavBar()}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <button className="navv-btn" id="open-nav" onClick={() => showNavBar()}><i className="fa-solid fa-bars"></i></button>
      </div>
    </>
  );
}
