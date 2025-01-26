import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import './Projects.css';
import React, { useState } from 'react';

export default function Projects() {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpand = (title) => {
        setExpandedProjects(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    const [selection, setSelection] = useState([' ']);

    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    <div className='Projects-wrapper'>
                        <div>
                            <h1>Projects</h1>
                            <h5>My recent projects and work</h5>
                        </div>
                        {tagSelector(selection, setSelection)}
                        {renderProjects(selection, expandedProjects, toggleExpand)}
                    </div>
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}

const tagSelector = (selection, setSelection) => {
    return (
        <div className='Tag-Selector'>
            <h4>Filter by tag:</h4>
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => {
                        if (selection.includes(tag)) {
                            setSelection(selection.filter(t => t !== tag));
                        } else {
                            setSelection([...selection, tag]);
                        }
                    }}
                    className={`Tag-button ${selection.includes(tag) ? 'selected' : ''}`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}

const renderProjects = (tags, expandedProjects, toggleExpand) => {


    return projects
        .filter(project => tags.every(tag => project.tags.includes(tag)))
        .map(project => {
            const projectImage = require(`./projectImages/${project.image}`);
            const isExpanded = expandedProjects[project.title];

            return (
                <button onClick={() => toggleExpand(project.title)} className='Project' key={project.title}>
                    <img src={projectImage} alt={project.title} />
                    <div className={`Description ${isExpanded ? 'expanded' : ''}`}>
                        <h2>{project.title}</h2>
                        <h4>{project.subtitle}</h4>
                        <div className='Tags'>
                            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>
                    {isExpanded && (
                        <div className='Expanded-Content'>
                            <p>{project.description}</p>
                            <div className='Project-Detail'>
                                <h5>{project.title}</h5>
                                {project.date}
                                {project.link !== 'null' &&
                                    <a href={project.link}>Learn more</a>
                                }
                                
                            </div>
                        </div>
                    )}
                    <button  className={`Arrow-Button ${isExpanded ? 'expanded' : ''}`}>
                        <img src={require('./assets/chevron.png')} alt='Expand' />
                    </button>
                </button>
            );
        });
}

const tags = ['React', 'JavaScript', 'API', 'Web Development', 'Python', 'TensorFlow', 'Machine Learning', 'GUI', 'C', 'Systems Programming', 'Networking', 'Java', 'OOP', 'SQL', 'Memory Management'];

const projects = [

    {
        title: 'Tic-Tac-Joe',
        subtitle: 'Exploring Machine Learning Through Tic-Tac-Toe',
        description: 'In this collaborative project with Benjamin Rodgers, we developed an AI-driven Tic-Tac-Toe game to explore and apply machine learning concepts using TensorFlow. Our objective was to implement a neural network capable of learning and improving its gameplay strategies through iterative training. We started with a deep-learning model featuring three hidden layers, later optimizing it to a simpler architecture with one 15-neuron hidden layer to mitigate overfitting and enhance performance. The training process involved a combination of Q-learning and backpropagation, allowing the model to refine its strategies by playing against a "smart-random" opponent. The project not only solidified our understanding of machine learning principles but also demonstrated the potential of AI in game-based learning environments. The results showed significant improvement in the AI\'s performance, underscoring the effectiveness of our approach and paving the way for future, more complex machine learning endeavors.',
        date: 'May 2024',
        image: 'tictacjoe.jpg',
        link: 'https://github.com/tedtasman/tic-tac-joe',
        tags: ['Python', 'TensorFlow', 'Machine Learning', 'GUI', ' ']
    },
    {
        title: 'Spotify ShuffleTrue',
        subtitle: 'A Web Application for Truly Shuffled Playlists',
        description: 'Spotify ShuffleTrue is a web application that solves a frustrating problem with Spotify\'s shuffle feature. By leveraging the Spotify API, ShuffleTrue allows users to create a new playlist that is truly shuffled, ensuring that no song is repeated until all songs have been played. The application authenticates users through the Spotify API, enabling them to select a playlist from their library and generate a new, shuffled playlist. The user can then listen to the shuffled playlist on Spotify, providing a seamless and enjoyable listening experience. ShuffleTrue was built using React and JavaScript, with the Spotify API handling the backend functionality. The project not only showcases my web development skills but also demonstrates my ability to work with APIs and create user-friendly applications.',
        date: 'July 2024',
        image: 'shuffletrue.jpg',
        link: 'https://github.com/tedtasman/spotify-true-shuffle',
        tags: ['React', 'JavaScript', 'API', 'Web Development', ' ']
    },
    {
        title: 'PSUSNAPS.org',  
        subtitle: 'A Club Website for the Student Nurses\' Association at Penn State',
        description: 'The SNAPS website serves as a center for information and resources for the SNAPS club. The website is built using React and JavaScript, and leverages various google drive APIs to provide club members up to date details on club events and access the meeting slides.',
        date: 'September 2024',
        image: 'snaps.png',
        link: 'https://github.com/tedtasman/psu-snap-website',
        tags: ['React', 'JavaScript', 'API', 'Web Development', ' ']
    },
    {
        title: 'Malloc Implementation',  
        subtitle: 'A custom memory allocator written in C',
        description: 'I created a custom memory allocator in C that mimics the functionality of malloc and free. The allocator uses a segregated free list to manage memory blocks of varying sizes. The allocator is able to allocate memory blocks of any size, and free them when they are no longer needed. The allocator is also able to coalesce adjacent free blocks to prevent memory fragmentation. Footer-optimization was used to further improve memory utilization. This project has given me a deep understanding of memory management and low-level programming in C.',
        date: 'October 2024',
        image: 'malloc.jpg',
        link: 'null',
        tags: ['C', 'Systems Programming', 'Memory Management', ' ']
    },
    {
        title: 'Channel Implementation',
        subtitle: 'A concurrent channel implementation in C',
        description: 'I created a concurrent channel implementation in C that allows for communication between threads. The channel is thread-safe and can be used to send and receive messages between threads. The implementation uses mutexes, condition variables, and semaphores to ensure that messages are sent and received in the correct order. The channel supports multiple senders and receivers, allowing for flexible communication patterns between threads. This project has given me a deep understanding of concurrent programming and synchronization in C.',
        date: 'November 2024',
        image: 'channel.jpg',
        link: 'null',
        tags: ['C', 'Systems Programming', 'Concurrency', ' ']
    },
    {
        title: 'GPSLocator',
        subtitle: 'A Python program for converting pixel coordinates to GPS coordinates',
        description: 'This project was created as part of the Penn State Unmanned Aerial Systems Club. In participation with Vlad Roiban, we developed a Python program that converts pixel coordinates from an image to GPS coordinates. The program takes in an image with known GPS coordinates, and given a pixel coordinate, calculates the corresponding GPS coordinate. This program slots into a larger system that uses image processing to locate objects in the real world. This project has given me experience with programming in a team and working with real-world data.',
        date: 'November 2024',
        image: 'placeholder.png',
        link: 'null',
        tags: ['Python', 'OOP', ' ']
    },
    {
        title: 'JBOD Controller',
        subtitle: 'MDADM implementation written in C',
        description: 'This program implements MDADM functionality for a virtual JBOD. Over the duration of a semester, I incrementally added various features to enable reading and writing to the JBOD. Primarily, the program uses logic to enable seemless reading and writing to and from the JBOD, including across multiple disks. The virtual JBOD operates with the constraint that only a full block can be written or read at once, so complex logic was needed to ensure proper functionality. Additionally, a cache was added to improve performance. The cache is implemented with an LRU algorithm enabling a balance of size and performance. Finally, networking functionality was added to enable reading and writing without a physical connection to the JBOD. This project has given me a strong foundation in low-level systems programming in C.',
        date: 'April 2024',
        image: 'jbodController.jpeg',
        link: 'null',
        tags: ['C', 'Systems Programming', 'Networking', 'Memory Management', ' ']
    },
    {
        title: 'Course Scheduler',
        subtitle: 'Java application for course scheduling',
        description: 'Built in Java, this application serves as a course scheduling program for a hypothetical college. A SQL database was used to store data on semesters, classes, students, and student enrollment. The admin page allows users to create new semesters, add courses, add sections of courses, and manage students. In the student page, users can enroll in classes and see their schedules. SQL statements are used in the implementation of these features, efficiently accessing entries from the database. This project gave me experience using and managing SQL databases and with Java Swing GUIs.',
        date: 'December 2023',
        image: 'scheduler.jpg',
        link: 'null',
        tags: ['Java', 'OOP', 'SQL', 'GUI', ' ']
    },
]