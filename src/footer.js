import './footer.modules.css'
import { Link } from 'react-router-dom';

export function Footer() {
    
    return (
        <div className="Footer">
            <div className='Footer-container'>
                site built by theodore tasman in react.js
            </div>
            <div className='Header-bar' style={{color:'#bbbbbb'}}></div>
            <div className="Footer-container">
                <div className="Footer-section">
                    <p>Pages</p>
                    <FooterButton title={'Home'} page={'/#top'}/>
                    <FooterButton title={'About Me'} page={'/#top'}/>
                    <FooterButton title={'Work Experience'} page={'/#top'}/>
                    <FooterButton title={'Projects'} page={'/projects#top'}/>
                </div>
                <div className="Footer-section">
                    <p>Connect</p>
                    <FooterButton title={'LinkedIn'} page={'https://www.linkedin.com/in/theodore-tasman/'}/>
                    <FooterButton title={'GitHub'} page={'https://github.com/tedtasman'}/>
                    <FooterButton title={'Email'} page={'mailto:contact@ttasman.com'}/>
                </div>
            </div>
        </div>
    );
}

const FooterButton = ( { title, page } ) => {

    const handleClick = () => {
        // Scroll to the top of the page when the link is clicked
        window.scrollTo({ top: 0 });
    };

    return (
        <Link to={page} onClick={handleClick}>
            <button className='Footer-button'>{title}</button>
        </Link>
    );
}