import './App.css';
import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header({ className }) {
    const [expandMenu, setExpandMenu] = useState(false);
    const toggleMenu = () => setExpandMenu(!expandMenu);

    return (
        <>
            <div className={className}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h3 className='Title'>Ted Tasman</h3>
                </Link>
                <div className='Page-buttons'>
                    <Link to='/about'>
                        <button>About Me</button>
                    </Link>
                    <Link to='/experience'>
                        <button>Experience</button>
                    </Link>
                    <Link to='/projects'>
                        <button>Projects</button>
                    </Link>
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
                    <Link to='/about'>
                        <button>About Me</button>
                    </Link>
                    <Link to='/experience'>
                        <button>Experience</button>
                    </Link>
                    <Link to='/projects'>
                        <button>Projects</button>
                    </Link>
                </div> 
            </div>
        </>
    )
}