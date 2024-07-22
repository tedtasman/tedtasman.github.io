import './App.css';
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import { Homepage } from './Homepage';
import React, { useState } from 'react';

export default function App() {

  const [welcome, setWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleBegin = () => {
    setFadeOut(true);
    setTimeout(() => setWelcome(true, 500))
  }

  return (
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
  );
}