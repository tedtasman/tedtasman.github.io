import { useState } from 'react';
import { Link } from 'react-router-dom';
import texts from './home-page/content/texts.json';
import links from './home-page/content/links.png'
import linkedin from './home-page/content/linkedin.png'
import github from './content/github.png'
import email from './home-page/content/email.png'

export function Header() {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "space-between", height: "7vh"}}>
                <div style={{height: '0px'}}></div>
                <div className='Header'>
                    <div className='Left-header'>
                        <PagesButton className={'Home-button'} title={texts.bio.name} page={'/'} />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <PagesButton className={'Tab-button'} title={'About Me'} page={'/'}/>
                        <PagesButton className={'Tab-button'} title={'Work Experience'} page={'/'}/>
                        <PagesButton className={'Tab-button'} title={'Projects'} page={'/projects'}/>
                    </div>
                    <div className='Right-header'>
                        <LinksButton />
                    </div>
                </div>
                <div className='Header-bar'></div>
            </div>
            <div className='Construction-banner'>This site is under construction. Some buttons may not be functional.</div>
        </div>
    );
}

const PagesButton = ( {className, title, page} ) => {
    return (
        <Link to={page}>
            <button className={className}>{title}</button>
        </Link>
    );
}

function LinksButton() {

    const [expanded, setExpanded] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleExpand = () => {

        setExpanded(!expanded);

        // if button is currently hidden
        if (!isButtonVisible) {
            setTimeout(() => {
                setIsButtonVisible(true);
            }, 200); // delay reveal to wait for icons to close
        }
        else {
            setIsButtonVisible(false);
        }

    }

    return (
        <div className='Links-container'>
                {isButtonVisible ? (
                    <button className='Links-button' onClick={toggleExpand}>
                        <img src={links} style={{height: 'calc(10px + 1vw)'}}/>
                        Connect
                    </button>
                ):(
                    <button className='Links-button' onClick={toggleExpand} style={{fontWeight:'bold'}}>
                        &#10148; {/* code for right arrow*/}
                    </button>
                )}
                <div className={`Links ${expanded ? 'expanded' : ''}`}>
                    <a href='https://www.linkedin.com/in/theodore-tasman/'><img src={linkedin} alt='LinkedIn' style={{height: 'calc(15px + 1vmin)'}}/></a>
                    <a href='https://github.com/tedtasman'><img src={github} alt='GitHub' style={{height: 'calc(15px + 1vmin)'}}/></a>
                    <a href='mailto:contact@ttasman.com'><img src={email} alt='Email' style={{height: 'calc(15px + 1vmin)'}}/></a>
                </div>
        </div>
    );
}