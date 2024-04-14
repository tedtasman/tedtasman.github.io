import './header2.modules.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import linkedin from './home-page/content/linkedin.png'
import github from './content/github.png'
import email from './home-page/content/email.png'

export function Header() {

    const [expanded, setExpanded] = useState(false);

    const expandHeader = () => {
        setExpanded(false); // SET TO TRUE TO UNLOCK HEADER EXPANSION
    }

    const closeHeader = () => {
        setExpanded(false)
    }

    return (
        <>
            <div className={`Header ${expanded ? 'expanded' : ''}`} onMouseLeave={closeHeader}>
                <div className='Left-header'>
                    <PagesButton className={'Home-button'} title='Ted Tasman' page={'/'} />
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '2em'}}>
                    <div className='Pages-section'>
                        <PagesButton className ={'Tab-button'} title={'About Me'} page={'/about'} action={expandHeader} />
                        <SubPageButton title={'test'} page={'/about'} />
                    </div>
                    <div className='Pages-section'>
                        <PagesButton className={'Tab-button'} title={'Experience'} page={'/experience'} action={expandHeader} />
                        <SubPageButton title={'test'} page={'/about'} />
                    </div>
                    <div className='Pages-section'>
                        <PagesButton className={'Tab-button'} title={'Projects'} page={'/projects'} action={expandHeader} />
                        <SubPageButton title={'test'} page={'/about'} />
                    </div>
                </div>
                <div className='Right-header'>
                    <a href='https://www.linkedin.com/in/theodore-tasman/'><img src={linkedin} alt='LinkedIn' style={{height: 'calc(14px + 1vmin)'}}/></a>
                    <a href='https://github.com/tedtasman'><img src={github} alt='GitHub' style={{height: 'calc(13px + 1vmin)', backgroundColor: '#F6F8FA', padding: '1px', borderRadius: '20px'}}/></a>
                    <a href='mailto:contact@ttasman.com'><img src={email} alt='Email' style={{height: 'calc(15px + 1vmin)'}}/></a>
                </div>
            </div>
        </>
    );

}

const PagesButton = ( { className, title, page, action} ) => {
    
    const handleClick = () => {
        // Scroll to the top of the page when the link is clicked
        window.scrollTo({ top: 0 });
    };
    
    return (
        <>
            <Link to={page} onClick={handleClick}>
                <button className={className} onMouseEnter={action}>{title}</button>
            </Link>
        </>
    );
}

const SubPageButton = ( { title, page } ) => {

    const handleClick = () => {
        // Scroll to the top of the page when the link is clicked
        window.scrollTo({ top: 0 });
    };

    return (
        <Link to={page} onClick={handleClick}>
            <button className='Sub-page-button'>{title}</button>
        </Link>
    );
}