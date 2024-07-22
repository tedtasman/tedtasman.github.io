import './App.css';
import './Footer.css'

export function Footer({ className }) {
    return (
        <div className={className}>
            <h4>This site was built by Theodore Tasman in React.js</h4>
            <div className='Footer-buttons'>
                <div className='Page-category'>
                    <button><h5>About Me</h5></button>
                    <button>Skills</button>
                    <button>Interests</button>
                    <button>Documents</button>
                </div>
                <div className='Page-category'>
                    <button><h5>Experience</h5></button>
                    <button>Technical Work</button>
                    <button>Extracurriculars</button>
                    <button>Non-Technical Work</button>
                </div>
                <div className='Page-category'>
                    <button><h5>Projects</h5></button>
                    <button>Back-End</button>
                    <button>Front-End</button>
                    <button>Machine Learning</button>
                </div>
            </div>
        </div>
    )
}