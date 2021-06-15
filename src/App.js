import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import ImageCount from './components/imageCounters'
import About from './components/about'
import Offer from './components/offer';
import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Home></Home>
          <About />
          <Offer />
          <Skills />
          <Education />
          <Experience />
					<ImageCount/>
          <Contact />
					
          	</div>
      	</div>
      </div>
  );
}

export default App;
