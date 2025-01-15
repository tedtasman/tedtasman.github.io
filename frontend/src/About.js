import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import placeHolderImage from './content/landing-image.jpeg'
import './About.css'

export function About() {
    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    <div className='About-wrapper'>
                        <div className='Content-entry-a'>
                            <div>
                                <p>
                                    I'm Ted Tasman, a Computer Science student at Penn State who is passionate about using technology to make a positive impact in the world. My journey in tech has been driven by curiosity and a love for problem-solving, whether it’s through building predictive models or developing web applications.
                                </p>
                            </div>
                            <div>
                                <img src={placeHolderImage} alt='Photo of me'/>
                            </div>
                        </div>
                        <div className='Content-entry-b'>
                            <div>
                                <img src={placeHolderImage} alt='Photo of me'/>
                            </div>
                            <div>
                            Beyond the technical skills, I value the experiences that have shaped who I am today. Working in the food service industry taught me the importance of teamwork and communication, skills that are just as crucial in tech as they are in any other field. These experiences have underscored my commitment to collaboration and my ability to thrive in dynamic environments.
                            </div>
                        </div>
                        <div className='Content-entry-a'>
                            <div>
                            I'm a firm believer in the transformative power of technology and am eager to apply my skills to projects that can drive meaningful change. Whether it’s through an internship, a collaborative project, or just connecting with like-minded individuals, I’m excited about the opportunities ahead.
                            </div>
                            <div>
                                <img src={placeHolderImage} alt='Photo of me'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}