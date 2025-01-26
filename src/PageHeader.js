import './App.css';
import './Header.css'
import React, { useState } from 'react';

export function Header({ className }) {
    const [expandMenu, setExpandMenu] = useState(false);
    const toggleMenu = () => setExpandMenu(!expandMenu);

    return (
        <>
            <div className={className}>
                <a href='/' style={{ textDecoration: 'none' }}>
                    <h3 className='Title'>Ted Tasman</h3>
                </a>
                <div className='Page-buttons'>
                    <a href='/about'>
                        <button>About Me</button>
                    </a>
                    <a href='/experience'>
                        <button>Experience</button>
                    </a>
                    <a href='/projects'>
                        <button>Projects</button>
                    </a>
                </div>
                <div className='Contact-div'>
                    <a href='mailto:contact@ttasman.com'>
                        <img src={require('./assets/email.png')} alt='Email' />
                    </a>
                    <a href='https://github.com/tedtasman'>
                        <img src={require('./assets/github.png')} alt='GitHub' />
                    </a>
                    <a href='https://www.linkedin.com/in/theodore-tasman/'>
                        <img src={require('./assets/linkedin.png')} alt='LinkedIn' />
                    </a>
                </div>
                <button className={`Menu-button ${expandMenu? 'expanded' : ''}`} onClick={toggleMenu}>
                    <img src={require('./assets/plus.png')} alt='Menu' />
                </button>
            </div>
            <div className={`Menu ${expandMenu ? 'expanded' : ''}`}>
                <div className='Contact-div-menu'>
                    <a href='mailto:contact@ttasman.com'>
                        <img src={require('./assets/email.png')} alt='Email' />
                    </a>
                    <a href='https://github.com/tedtasman'>
                        <img src={require('./assets/github.png')} alt='GitHub' />
                    </a>
                    <a href='https://www.linkedin.com/in/theodore-tasman/'>
                        <img src={require('./assets/linkedin.png')} alt='LinkedIn' />
                    </a>
                </div>
                <div className='Menu-buttons'>
                    <a href='/about'>
                        <button>About Me</button>
                    </a>
                    <a href='/experience'>
                        <button>Experience</button>
                    </a>
                    <a href='/projects'>
                        <button>Projects</button>
                    </a>
                </div> 
            </div>
        </>
    )
}