import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import './Projects.css';
import React, { useState } from 'react';

export function Projects() {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpand = (title) => {
        setExpandedProjects(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    <div className='Projects-wrapper'>
                        {renderProjects([' '], expandedProjects, toggleExpand)}
                    </div>
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}

const renderProjects = (tags, expandedProjects, toggleExpand) => {


    return projects
        .filter(project => tags.every(tag => project.tags.includes(tag)))
        .map(project => {
            const projectImage = require(`./projectImages/${project.image}`);
            const isExpanded = expandedProjects[project.title];

            return (
                <div className='Project' key={project.title}>
                    <img src={projectImage} alt={project.title} />
                    <div className={`Description ${isExpanded ? 'expanded' : ''}`}>
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <div className='Tags'>
                            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>
                    {isExpanded && (
                        <div className='Expanded-Content'>
                            <p>{project.description}</p>
                            <div className='Project-Detail'>
                                {project.date}
                                <a href={project.link}>Learn more</a>
                            </div>
                        </div>
                    )}
                    <button onClick={() => toggleExpand(project.title)} className={`Arrow-Button ${isExpanded ? 'expanded' : ''}`}>
                        <img src={require('./assets/chevron.png')} alt='Expand' />
                    </button>
                </div>
            );
        });
}

const projects = [
    {
        title: 'Spotify ShuffleTrue',
        subtitle: 'A Web Application for Truly Shuffled Playlists',
        description: 'Spotify ShuffleTrue is a web application that solves a frustrating problem with Spotify\'s shuffle feature. By leveraging the Spotify API, ShuffleTrue allows users to create a new playlist that is truly shuffled, ensuring that no song is repeated until all songs have been played. The application authenticates users through the Spotify API, enabling them to select a playlist from their library and generate a new, shuffled playlist. The user can then listen to the shuffled playlist on Spotify, providing a seamless and enjoyable listening experience. ShuffleTrue was built using React and JavaScript, with the Spotify API handling the backend functionality. The project not only showcases my web development skills but also demonstrates my ability to work with APIs and create user-friendly applications.',
        date: 'July 2024',
        image: 'placeholder.png',
        link: 'https://github.com/tedtasman/spotify-true-shuffle',
        tags: ['React', 'JavaScript', 'API', 'Web Development', ' ']
    },
    {
        title: 'Tic-Tac-Joe',
        subtitle: 'Exploring Machine Learning Through Tic-Tac-Toe',
        description: 'In this collaborative project with Benjamin Rodgers, we developed an AI-driven Tic-Tac-Toe game to explore and apply machine learning concepts using TensorFlow. Our objective was to implement a neural network capable of learning and improving its gameplay strategies through iterative training. We started with a deep-learning model featuring three hidden layers, later optimizing it to a simpler architecture with one 15-neuron hidden layer to mitigate overfitting and enhance performance. The training process involved a combination of Q-learning and backpropagation, allowing the model to refine its strategies by playing against a "smart-random" opponent. Additionally, we designed a graphical user interface (GUI) to provide an intuitive and interactive user experience. The project not only solidified our understanding of machine learning principles but also demonstrated the potential of AI in game-based learning environments. The results showed significant improvement in the AI\'s performance, underscoring the effectiveness of our approach and paving the way for future, more complex machine learning endeavors.',
        date: 'May 2024',
        image: 'placeholder.png',
        link: 'https://github.com/tedtasman/tic-tac-joe',
        tags: ['Python', 'TensorFlow', 'Machine Learning', 'GUI', ' ']
    },
    {
        title: 'JBOD Controller',
        subtitle: 'MDADM implementation written in C',
        description: 'This program implements MDADM functionality for a virtual JBOD. Over the duration of a semester, I incrementally added various features to enable reading and writing to the JBOD. Primarily, the program uses logic to enable seemless reading and writing to and from the JBOD, including across multiple disks. The virtual JBOD operates with the constraint that only a full block can be written or read at once, so complex logic was needed to ensure proper functionality. Additionally, a cache was added to improve performance. The cache is implemented with an LRU algorithm enabling a balance of size and performance. Finally, networking functionality was added to enable reading and writing without a physical connection to the JBOD. This project has given me a strong foundation in low-level systems programming in C.',
        date: 'April 2024',
        image: 'placeholder.png',
        link: 'AI',
        tags: ['C', 'Systems Programming', 'Networking', ' ']
    },
    {
        title: 'Course Scheduler',
        subtitle: 'Java application for course scheduling',
        description: 'Built in Java, this application serves as a course scheduling program for a hypothetical college. A SQL database was used to store data on semesters, classes, students, and student enrollment. The admin page allows users to create new semesters, add courses, add sections of courses, and manage students. In the student page, users can enroll in classes and see their schedules. SQL statements are used in the implementation of these features, efficiently accessing entries from the database. This project gave me experience using and managing SQL databases and with Java Swing GUIs.',
        date: 'December 2023',
        image: 'placeholder.png',
        link: 'AI',
        tags: ['Java', 'OOP', 'SQL', 'GUI', ' ']
    },
]