import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './home-page/homepage';
import Projects from './projects-page/projects'
import About from './about-page/about';
import Experience from './experience-page/experience';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </Router>
  );
}