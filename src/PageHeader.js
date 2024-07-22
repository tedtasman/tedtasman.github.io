import './App.css';
import './Header.css'

export function Header({ className }) {
    return (
        <div className={className}>
            <h3 className='Title'>Ted Tasman</h3>
            <div className='Page-buttons'>
                <button>About Me</button>
                <button>Experience</button>
                <button>Projects</button>
            </div>
            <div className='Contact-div'>
                <button><h5>Contact</h5></button>
            </div>
        </div>
    )
}