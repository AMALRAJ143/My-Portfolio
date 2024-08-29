import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Project from './components/project/project';
import logo from "./asset/logo-modified.png";
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <div id='footer'>
      <div className='footer-pic-container'>
            <div>
              <div className='l'>
              <img src={logo} alt='logo' className='footer-pic'/>
              </div>
              <div className='dot'></div>
            </div>
          </div>
        <div className='footer-h1'>
      <i class="fa-regular fa-copyright"></i> Amalraj-Portfolio
        </div>
      </div>
    </div>
  );
}

export default App;
