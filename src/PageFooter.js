import './App.css';
import './Footer.css'
import { Link } from 'react-router-dom';

export function Footer({ className }) {
    return (
        <div className={className}>
            <div className='Footer-buttons'>
                <div className='Page-category'>
                    <Link to='/'> 
                        <button>
                            <h5>Home</h5>
                        </button>
                    </Link>
                </div>
                <div className='Page-category'>
                    <Link to='/about'> 
                        <button>
                            <h5>About Me</h5>
                        </button>
                    </Link>
                </div>
                <div className='Page-category'>
                    <Link to='/experience'> 
                        <button>
                            <h5>Experience</h5>
                        </button>
                    </Link>
                </div>
                <div className='Page-category'>
                    <Link to='/projects'> 
                        <button>
                            <h5>Projects</h5>
                        </button>
                    </Link>
                </div>
            </div>
            <p>Built by Theodore Tasman in React.js</p>
        </div>
    )
}