import { Header } from '../header2';
import './projects.modules.css';
import sitePhoto from './content/sitePhoto.jpg';
import projects from './content/projects.json';
import github from '../content/github.png';
import scheduler from './content/scheduler.jpg'
import { Footer } from '../footer';
import jbodCode from './content/jbodCode.jpeg'


export default function Projects() {
    return(
        <>
            <Header />
            <div className='Projects-landing'>
                <div className='Page-title'>
                    <h1>Projects</h1>
                    <h2>A catalog of completed and ongoing projects</h2>
                    <h1><i class="fa-solid fa-chevron-down fa-xl"></i></h1>
                </div>
            </div>
            <div className='Project-container'>
                <img src={sitePhoto} alt='Website Home Page' className='Project-image'/>
                <div className='Project-description'>
                    <h1>{projects.site.title}</h1>
                    <h2>{projects.site.subtitle}</h2>
                    <div className='Development-banner'>under active development</div>
                    <p>{projects.site.body}</p>
                    <a href='https://github.com/tedtasman/tedtasman.github.io' className='Github-link'>
                        <img src={github} alt='GitHub' style={{maxHeight: '1.5em'}}/>
                        View on GitHub
                    </a>
                </div>
            </div>
            <div className='Project-container'>
                <div className='Project-description-inv'>
                    <h1>{projects.jbod.title}</h1>
                    <h2>{projects.jbod.subtitle}</h2>
                    <p>{projects.jbod.body}</p>
                    <div className='AI-disclaimer'>Due to academic integrity policies, specifics of this project's implementation cannot be shared publicly.</div>
                </div>
                <img src={jbodCode} alt='Website code' className='Project-image'/>
            </div>
            <div className='Project-container'>
                <img src={scheduler} alt='Website code' className='Project-image'/>
                <div className='Project-description'>
                    <h1>{projects.scheduler.title}</h1>
                    <h2>{projects.scheduler.subtitle}</h2>
                    <p>{projects.scheduler.body}</p>
                    <div className='AI-disclaimer'>Due to academic integrity policies, specifics of this project's implementation cannot be shared publicly.</div>
                </div>
            </div>
            <div className='More-soon'>
                More project descriptions coming soon!
            </div>
            <Footer />
        </>
    );
}