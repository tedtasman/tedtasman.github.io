import { Footer } from "../footer";
import { Header } from "../header2";
import './about.modules.css';
import about from './content/about.json'
import benji from './content/benji.jpg'
import guitar from './content/guitar.jpeg'
import bike from './content/bike.jpeg'


export default function About() {

    return (
        <>
            <Header />
            <div className="Page-background">
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
                        <img src={bike} alt='Image of bike'/>
                        <img src={guitar} alt='Image of guitar'/>
                        <img src={benji} alt='Image of dog'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}