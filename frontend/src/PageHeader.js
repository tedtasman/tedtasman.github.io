import './App.css';
import './Header.css'

export function Header({ className }) {
    return (
        <div className={className}>
            <a href='/'><h3 className='Title'>Ted Tasman</h3></a>
            <div className='Page-buttons'>
                <a href="about"><button>About Me</button></a>
                <a href="experience"><button>Experience</button></a>
                <a href="projects"><button>Projects</button></a>
            </div>
            <div className='Contact-div'>
                <button><h5>Contact</h5></button>
            </div>
        </div>
    )
}