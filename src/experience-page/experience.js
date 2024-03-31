import { Header } from "../header";
import './experience.modules.css'
import experience from './content/experience.json'
import { Footer } from "../footer";
import psu from "./content/psu.png"
import dominos from "./content/dominos.png"
import ihb from "./content/ihb.jpg"
import counselor from "./content/counselor.jpg"
import sju from "./content/sju.jpg"

export default function Experience() {

    return (
        <>
            <div className='Experience-landing'>
                <Header />
                <div className='Experience-title'>
                    <h1>Experience</h1>
                    <h2>My technical and non-technical work experience</h2>
                    <h1><i class="fa-solid fa-chevron-down fa-xl"></i></h1>
                </div>
            </div>
            <div className="Experience-container">
                <img src={psu} alt='Penn State University Logo' className='Experience-image'/>
                <div className="Experience-description">
                    <h1>{experience.grader.title}</h1>
                    <h2>{experience.grader.subtitle}</h2>
                    <p>{experience.grader.body}</p>
                </div>
            </div>
            <div className="Experience-divider"></div>
            <div className="Experience-container">
                <img src={dominos} alt="Domino's Pizza Logo" className='Experience-image'/>
                <div className="Experience-description">
                    <h1>{experience.dominos.title}</h1>
                    <h2>{experience.dominos.subtitle}</h2>
                    <p>{experience.dominos.body}</p>
                </div>
            </div>
            <div className="Experience-divider"></div>
            <div className="Experience-container">
                <img src={sju} alt="St. Joseph's University Logo" className='Experience-image'/>
                <div className="Experience-description">
                    <h1>{experience.sjp.title}</h1>
                    <h2>{experience.sjp.subtitle}</h2>
                    <p>{experience.sjp.body}</p>
                </div>
            </div>
            <div className="Experience-divider"></div>
            <div className="Experience-container">
                <img src={ihb} alt='Iron Hill Brewery Logo' className='Experience-image'/>
                <div className="Experience-description">
                    <h1>{experience.ihb.title}</h1>
                    <h2>{experience.ihb.subtitle}</h2>
                    <p>{experience.ihb.body}</p>
                </div>
            </div>
            <div className="Experience-divider"></div>
            <div className="Experience-container">
                <img src={counselor} alt="St. Thomas Logo" className='Experience-image'/>
                <div className="Experience-description">
                    <h1>{experience.counselor.title}</h1>
                    <h2>{experience.counselor.subtitle}</h2>
                    <p>{experience.counselor.body}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}