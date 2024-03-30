import texts from './content/texts.json';

export function Welcome() {
    
    return (
        <div className='Welcome'>
            <h1>Welcome!</h1>
            <h2>I'm Ted Tasman</h2>
            <p>{texts.bio.body}</p>
        </div>
    );
}