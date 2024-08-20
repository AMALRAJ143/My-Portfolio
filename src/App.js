import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Education from './components/education/education';
import Project from './components/project/project';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <div id='footer'>
      <i class="fa-regular fa-copyright"></i> amalraj-Portfolio
      </div>
    </div>
  );
}

export default App;
