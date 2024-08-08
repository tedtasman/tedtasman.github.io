import './App.css';
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import { Homepage } from './Homepage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';

export default function App() {

  const [welcome, setWelcome] = useState(() => {
    // Retrieve the welcome state from sessionStorage if it exists
    const savedWelcome = sessionStorage.getItem('welcome');
    return savedWelcome ? JSON.parse(savedWelcome) : false;
  });

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Store the welcome state in sessionStorage whenever it changes
    sessionStorage.setItem('welcome', JSON.stringify(welcome));
  }, [welcome]);

  const handleBegin = () => {
    setFadeOut(true);
    setTimeout(() => setWelcome(true, 500))
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className={`Header-bg ${welcome ? 'expanded' : ''}`}/>
            <div className="Wrapper">
              <div className={`${welcome ? 'hidden' : (fadeOut ? 'Welcome fade-out' : 'Welcome')}`}>
                <h1>Welcome to ttasman.com</h1>
                <h4>A portfolio site for Theodore Tasman</h4>
                <button className='Begin-button' onClick={ handleBegin }>Begin</button>
              </div>
              <div className={`${welcome ? 'Inner fade-in' : 'hidden'}`}>
                <Homepage />
              </div>
            </div>
            <Footer className={`Footer-bg ${welcome ? 'expanded' : ''}`}/>
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}