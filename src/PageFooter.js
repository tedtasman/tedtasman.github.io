import './App.css';
import './Footer.css'

export function Footer({ className }) {
    return (
        <div className={className}>
            <div className='Footer-buttons'>
                <div className='Page-category'>
                    <a href='/'> 
                        <button>
                            <h5>Home</h5>
                        </button>
                    </a>
                </div>
                <div className='Page-category'>
                    <a href='/about'> 
                        <button>
                            <h5>About Me</h5>
                        </button>
                    </a>
                </div>
                <div className='Page-category'>
                    <a href='/experience'> 
                        <button>
                            <h5>Experience</h5>
                        </button>
                    </a>
                </div>
                <div className='Page-category'>
                    <a href='/projects'> 
                        <button>
                            <h5>Projects</h5>
                        </button>
                    </a>
                </div>
            </div>
            <p>Built by Theodore Tasman in React.js</p>
        </div>
    )
}