import { Footer } from "../footer";
import { Header } from "../header2";
import './about.modules.css';
import about from './content/about.json'


export default function About() {

    return (
        <>
            <Header />
            <div className='About-landing'>
                <div className='Page-title'>
                    <h1>About Me</h1>
                    <h2>Insight into my interests, motivations, and goals</h2>
                    <h1><i class="fa-solid fa-chevron-down fa-xl"></i></h1>
                </div>
            </div>
            <div className="About-background">
                <div className="About-core">
                    <h2 style={{fontWeight: 'bold'}}>{about.title}</h2>
                    <p>{about.introduction}</p>
                    <p>{about.personal_experiences}</p>
                    <p>{about.interests}</p>
                    <p>{about.conclusion}</p>
                    <p>{about.closing}</p>
                </div>
                <div className="About-photo-container">
                    <img src={psu} alt='Penn State University Logo' className='Experience-image'/>
                    <img src={psu} alt='Penn State University Logo' className='Experience-image'/>
                    <img src={psu} alt='Penn State University Logo' className='Experience-image'/>
                </div>
            </div>
            <Footer />
        </>
    );
}