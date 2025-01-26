import './App.css';
import './Homepage.css'
import { Posts } from './Posts'
import landingImage from './content/landing-image.jpeg'

export function Homepage() {
    return(
        <div className='Homepage-wrapper'>
            <div className='Homepage-column'>
                <div className='Intro'>
                    <div>
                        <h1>I'm Ted Tasman,</h1>
                        <h3>a dedicated computer science student at The Pennsylvania State University.</h3>
                    </div>
                    <p>
                        I'm passionate about leveraging technology to create a positive impact on the world. 
                        My mission is to provide tangible value to users through innovative and practical solutions.
                    </p>
                </div>
                
                <h3>
                        What's in store?
                </h3>
                <div className='Guide-wrapper'>
                    <p className='guide1'>
                        The purpose of this site is to provide insight into my skills and experiences,
                        as well as on me as a person.
                    </p>
                    <ul className='guide2'>
                        <li><div className='List-title'>About me - </div>
                        Learn more about my background, interests, and the journey that has shaped my aspirations in the tech industry.
                        </li>
                        <li><div className='List-title'>Experience - </div>
                        Discover my diverse experiences, including technical work, non-technical roles, and extracurricular activities. 
                        </li>
                        <li><div className='List-title'>Projects - </div>
                        Explore my completed works, from software applications to collaborative projects, demonstrating my problem-solving abilities and technical expertise.
                        </li>
                    </ul>
                    <p className='guide3'>
                        When you're done exploring, use the "Contact" button at the top right to get in touch and embark on our exciting journey together!
                    </p>
                </div>
                <img src={landingImage} alt='Photo of me' className='Landing-image'/>
            </div>
            <Posts />
        </div>
    )
}