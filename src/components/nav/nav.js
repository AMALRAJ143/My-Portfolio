import { useRef } from "react";
import "./nav.css";
import { Link } from "react-scroll";
export default function Nav(){
  const navRef = useRef();
// responsive nav 
  const showNavBar = ()=>{
    navRef.current.classList.toggle("responsive-nav");
  }
//  responsive scroll bar
  // const body = document.body;
  // let lastScroll = 0;
  // window.addEventListener("scroll",()=>{
  //   const currentScroll = window.pageYOffset;
  //   if(currentScroll<=0){
  //     body.classList.remove("scroll-up")
  //   }
  //   if(currentScroll>lastScroll && !body.classList.contains("scroll-down")){
  //     body.classList.remove("scroll-up");
  //     body.classList.add("scroll-down")
  //   }
  //   if(currentScroll<lastScroll && body.classList.contains("scroll-down")){
  //     body.classList.remove("scroll-down");
  //     body.classList.add("scroll-up")
  //   }
  //   lastScroll=currentScroll
  // })

  return(
    <>
    <div className="nav-container">
      <div className="nav-logo">
      <Link  
      onClick={()=>showNavBar()}
      to="container-1" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={200} 
    >       <span><i class="fa-solid fa-crown" id="crown"></i>Amalraj</span>
    </Link>
      </div>
      <div className="nav-links" ref={navRef}>
      <Link  
      onClick={()=>showNavBar()}
      to="container-1" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={200} 
    >
      Home
    </Link>
      <Link  
      onClick={()=>showNavBar()}
      to="about-container" 
      spy={true} 
      smooth={true} 
      offset={-120} 
      duration={200} 
    >
      About
    </Link>
      <Link  
      onClick={()=>showNavBar()}
      to="container-2" 
      spy={true} 
      smooth={true} 
      offset={-80} 
      duration={200} 
    >
      Education
    </Link>
      <Link  
      onClick={()=>showNavBar()}
      to="project-container" 
      spy={true} 
      smooth={true} 
      offset={-85} 
      duration={200} 
    >
      Projects
    </Link>
    <span id="git"><a href="https://github.com/AMALRAJ143?tab=repositories" target="blank" ><i class="fa-brands fa-github" ></i></a></span>
    
      {/* <Link 
      onClick={()=>showNavBar()} 
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={200} 
    >
      Contact
    </Link> */}
        <button className="navv-btn" id="close-nav" onClick={()=>showNavBar()}><i class="fa-regular fa-circle-xmark"></i></button>
      </div>
      <button className="navv-btn" id="open-nav" onClick={()=>showNavBar()}><i class="fa-solid fa-bars"></i></button>
    </div>
    </>
  )
};
