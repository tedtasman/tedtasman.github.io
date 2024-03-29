import texts from '../content/texts.json';

export function Header() {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
            <div className='Header'>
                <div className='Left-header'>
                    <button className='Home-button'>{texts.bio.name}</button>
                </div>
                <div>
                    <button className='Tab-button'>About Me</button>
                    <button className='Tab-button'>Work Experience</button>
                    <button className='Tab-button'>Projects</button>
                </div>
                <div className='Right-header'>
                    <button className='Links-button'></button>
                </div>
            </div>
            <div className='Header-bar'></div>
            <div className='Construction-banner'>This site is under construction.</div>
        </div>
    );
}