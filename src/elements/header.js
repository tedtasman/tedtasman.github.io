import texts from '../content/texts.json';

export function Header() {
    
    return (
        <div className='Header'>
            <button className='Home-button'>{texts.bio.name}</button>
        </div>
    );
}