import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './home-page/homepage';
import Projects from './projects-page/projects'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}