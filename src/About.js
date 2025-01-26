import './App.js';
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import yellowstoneMe from './content/yellowStoneMe.jpeg';
import zion from './content/zion.jpeg';
import lizardRock from './content/lizardRock.jpeg';
import oregon from './content/oregon.jpeg';
import yosemite from './content/yosemite.jpeg';
import './About.css';

export default function About() {
    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    <div className='About-wrapper'>
                        <div style={{alignSelf: 'flex-start'}}>
                            <h1>About Me</h1>
                            <h5>My background, skills, and interests</h5>
                        </div>
                        <div className='Content-entry-a'>
                            <div>
                                <h3>Background</h3>
                                <p>
                                    I'm Ted Tasman, a Computer Science student at Penn State who is passionate about using technology to make a positive impact in the world. My journey in computer science has been driven by curiosity and a love for problem-solving, whether that's through building predictive models, developing web applications, or diving into systems programming. I'm always looking for opportunities to learn and grow, and I'm excited to see where my journey takes me next.
                                </p>
                                <p>
                                    Aside from my studies, I enjoy spending time outdoors, whether that's hiking in the mountains, exploring national parks, or going cycling. I'm a big fan of music, and I love playing guitar and listening to a wide range of genres. 
                                </p>
                            </div>
                            <div>
                                <img src={yellowstoneMe} alt='Yellowstone National Park'/>
                                <small>Yellowstone National Park, Wyoming</small>
                            </div>
                        </div>
                        <div className='Content-entry-b'>
                            <div>
                                <img src={zion} alt='Zion National Park'/>
                                <small>Zion National Park, Utah</small>
                            </div>
                            <div>
                                <h3>Skills</h3>
                                <p>
                                    I have experience in a range of areas, and have utilized many programming languages and technologies to build projects and solve problems. I'm always seeking out opportunities to expand my skillset and learn new things, and I'm excited to continue growing as a developer and computer scientist. 
                                </p>
                                <p>
                                I've divided my skills into three categories below; areas and concepts, programming languages, and software and technologies. Feel free to explore each category to learn more about my skills and experience.
                                </p>
                            </div>
                        </div>
                        <div className='Content-entry-a'>
                            <div>
                                <h3>Areas & Concepts</h3>
                                <ul>
                                    <li>
                                        Machine Learning
                                        <small>
                                            Deep Learning, Neural Networks
                                        </small>
                                    </li>
                                    <li>
                                        Web Development
                                        <small>
                                            Frontend, Backend, Full Stack
                                        </small>
                                    </li>
                                    <li>
                                        Systems Programming
                                        <small>
                                            Networking, Memory Management
                                        </small>
                                    </li>
                                    <li>
                                        Operating Systems
                                        <small>
                                            Memory Management, Scheduling, Concurrency
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={lizardRock} alt='Lizard on a rock'/>
                                <small>Joshua Tree National Park, California</small>
                            </div>
                        </div>
                        <div className='Content-entry-b'>
                            <div>
                                <img src={oregon} alt='Ted Tasman in front of a tent'/>
                                <small>Somewhere in Oregon</small>
                            </div>
                            <div>
                                <h3>Programming Languages</h3>
                                <ul>
                                    <li>
                                        Python
                                        <small>
                                            Machine Learning, Object-Oriented Programming
                                        </small>
                                    </li>
                                    <li>
                                        JavaScript
                                        <small>
                                            Frontend, Backend
                                        </small>
                                    </li>
                                    <li>
                                        Java
                                        <small>
                                            Object-Oriented Programming
                                        </small>
                                    </li>
                                    <li>
                                        C
                                        <small>
                                            Systems Programming, Operating Systems
                                        </small>
                                    </li>
                                    <li>
                                        SQL
                                        <small>
                                            Database Management
                                        </small>
                                    </li>
                                    <li>
                                        Swift
                                        <small>
                                            iOS Development
                                        </small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='Content-entry-a'>
                            <div>
                                <h3>Software & Technologies</h3>
                                <ul>
                                    <li>
                                        TensorFlow
                                        <small>
                                            Machine Learning
                                        </small>
                                    </li>
                                    <li>
                                        React.js
                                        <small>
                                            Frontend Web Development
                                        </small>
                                    </li>
                                    <li>
                                        Node.js
                                        <small>
                                            Backend Web Development
                                        </small>
                                    </li>
                                    <li>
                                        MySQL
                                        <small>
                                            Database Management
                                        </small>
                                    </li>
                                    <li>
                                        Git
                                        <small>
                                            Version Control
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src={yosemite} alt='Yosemite national park'/>
                                <small>Yosemite National Park, California</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}