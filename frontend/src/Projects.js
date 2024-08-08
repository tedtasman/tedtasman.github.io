import { Header } from './PageHeader';
import './Header.css'
import { Footer } from './PageFooter';
import './Footer.css'
import './App.css'
import './Projects.css'
import github from './content/github.png'
import joePhoto from './content/joePhoto.png'

export function Projects() {
    return(
        <>
            <Header className={'Header-bg expanded'}/>
            <div className='Wrapper'>
                <div className='Projects-wrapper'>
                    <div className='Project-container'>
                        <div className='Project-description'>
                            <h2>Tic-Tac-Joe</h2>
                            <h4>Exploring Machine Learning Through Tic-Tac-Toe</h4>
                            <h5>Co-authored with <a href='https://www.linkedin.com/in/benjamin-rodgers-aa9464293/'>Benjamin Rodgers</a></h5>
                            <p>In this project, we developed an AI-driven Tic-Tac-Toe game to explore and apply machine learning concepts using TensorFlow. Our objective was to implement a neural network capable of learning and improving its gameplay strategies through iterative training. We started with a deep-learning model featuring three hidden layers, later optimizing it to a simpler architecture with one 15-neuron hidden layer to mitigate overfitting and enhance performance. The training process involved a combination of Q-learning and backpropagation, allowing the model to refine its strategies by playing against a "smart-random" opponent. Additionally, we designed a graphical user interface (GUI) to provide an intuitive and interactive user experience. The project not only solidified our understanding of machine learning principles but also demonstrated the potential of AI in game-based learning environments. The results showed significant improvement in the AI's performance, underscoring the effectiveness of our approach and paving the way for future, more complex machine learning endeavors.</p>
                            <a href='https://github.com/tedtasman/tic-tac-joe' className='Github-link'>
                                <img src={github} alt='GitHub' style={{maxHeight: '1.5em'}}/>
                                View on GitHub
                            </a>
                        </div>
                        <div className='Project-image'>
                            <img src={joePhoto} alt='placeholder'/>
                        </div>
                    </div>
                    <div className='Project-container'>
                        <div className='Project-description'>
                            <h2>Spotify ShuffleTrue</h2>
                            <h4>A Web Application Built with the Spotify API</h4>
                            <p>Spotify ShuffleTrue is a web application designed to enhance the shuffle experience on Spotify. Built using React and powered by the Spotify Web API, ShuffleTrue addresses the common issue where Spotify's default shuffle algorithm tends to repeat certain tracks more frequently than others. By allowing users to randomize the order of their playlists and create new shuffled playlists, ShuffleTrue provides a truly randomized listening experience. Users can seamlessly authenticate with their Spotify accounts, select playlists, and enjoy a more diverse selection of music tailored to their preferences.</p>
                            <p>Key Features:</p>
                            <ul>
                                <li>Authenticate with your Spotify account to access playlists.</li>
                                <li>Select any playlist and shuffle its order randomly.</li>
                                <li>Create a new playlist with the shuffled order for an improved listening experience.</li>
                            </ul>
                            <a href='https://github.com/tedtasman/tic-tac-joe' className='Github-link'>
                                <img src={github} alt='GitHub' style={{maxHeight: '1.5em'}}/>
                                View on GitHub
                            </a>
                        </div>
                        <div className='Project-image'>
                            <img src='https://via.placeholder.com/200' alt='placeholder'/>
                        </div>
                    </div>

                </div>
            </div>
            <Footer className={'Footer-bg expanded'}/>
        </>
    )
}