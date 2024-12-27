import './App.css';
import { Base } from './Base';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}