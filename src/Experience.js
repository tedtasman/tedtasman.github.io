import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';
import './Experience.css';
import React, { useState } from 'react';

export function Experience() {

    const [expandWork, setExpandWork] = useState(true);
    const [expandEducation, setExpandEducation] = useState(true);
    const [expandExtracurriculars, setExpandExtracurriculars] = useState(true);


    const toggleExpandWork = () => {
        setExpandWork(!expandWork);
    }

    const toggleExpandEducation = () => {
        setExpandEducation(!expandEducation);
    }

    const toggleExpandExtracurriculars = () => {
        setExpandExtracurriculars(!expandExtracurriculars);
    }

    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    <div className='Experience-wrapper'>
                        <div>
                            <h1>Experience</h1>
                            <h5>My professional experience and background</h5>
                        </div>

                        <div className='Experience-category-header'>
                            <h2>Education</h2>
                            <button onClick={toggleExpandEducation}>
                                <img src={require('./assets/chevron.png')} alt='Expand' className={`Experience-category-header-arrow ${expandEducation ? 'expanded' : ''}`}/>
                            </button>
                        </div>
                        <div className={`Experience-category ${expandEducation ? 'expanded' : ''}`}>
                            <div className='Job-entry'>
                                <img src={require('./experienceImages/psu.jpg')} alt='PSU Logo'/>
                                <div>
                                    <h3>The Pennsylvania State University</h3>
                                    <h4>Bachelor of Science in Computer Science</h4>
                                    <h4>Minor in Statistics</h4>
                                    <h5>August 2022 - May 2026</h5>
                                    <p>
                                        Relevant Coursework: Data Structures, Discrete Mathematics, Systems Programming, Computer Organization and Architecture, Algorithms, Programming Languages, Operating Systems, Software Engineering, Machine Learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='Experience-category-header'>
                            <h2>Technical Work Experience</h2>
                            <button onClick={toggleExpandWork}>
                                <img src={require('./assets/chevron.png')} alt='Expand' className={`Experience-category-header-arrow ${expandWork ? 'expanded' : ''}`}/>
                            </button>
                        </div>
                        <div className={`Experience-category ${expandWork ? 'expanded' : ''}`}>
                            <div className='Job-entry'>
                                <img src={require('./experienceImages/psu.jpg')} alt='PSU Logo'/>
                                <div className='Job-role-list'>
                                    <h3>The Pennsylvania State University Computer Science</h3>
                                    <div className='Job-role'>
                                        <h4>Learning Assistant</h4>
                                        <h5>August 2024 - Present</h5>
                                        <p>
                                            Provide coding support to students during office hours, helping them troubleshoot, debug, and refine their programming skills. Lead recitation sessions, reinforcing core concepts and guiding students through complex topics in computer science. Locate errors in students’ programs based on test results, showcasing strong debugging and development skills. Practice technical communication by providing valuable feedback to students to help them improve coding skills. Leverage collaboration skills when discussing submissions with the grading team to ensure fair scores.
                                        </p>
                                    </div>
                                    <div className='Job-role'>
                                        <h4>Grader</h4>
                                        <h5>January 2024 - August 2024</h5>
                                        <p>
                                            Analyzed students’ code for correctness and quality, requiring a deep understanding of code and coding practices. Located errors in students’ programs based on test results, showcasing strong debugging and development skills. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='Experience-category-header'>
                            <h2>Extracurriculars</h2>
                            <button onClick={toggleExpandExtracurriculars}>
                                <img src={require('./assets/chevron.png')} alt='Expand' className={`Experience-category-header-arrow ${expandExtracurriculars ? 'expanded' : ''}`}/>
                            </button>
                        </div>
                        <div className={`Experience-category ${expandExtracurriculars ? 'expanded' : ''}`}>
                            <div className='Job-entry'>
                                <img src={require('./experienceImages/uas.png')} alt='PSU Logo'/>
                                <div>
                                    <h3>PSU Unmanned Aerial Systems Club</h3>
                                    <h4>Software Team Member</h4>
                                    <h4>SUAS Competition</h4>
                                    <h5>August 2024 - Present</h5>
                                    <p>
                                        Collaborated with a team of engineers to develop software for an autonomous drone capable of completing a series of tasks as part of the SUAS competition. Utilized tools such as OpenCV for image processing and MavLink for communication with the drone. Demonstrated strong problem-solving skills by debugging and optimizing code to ensure the drone’s successful operation. Participated in weekly meetings to discuss progress, assign tasks, and plan future development.
                                    </p>
                                </div>
                            </div> 
                            <div className='Job-entry'>
                                <img src={require('./experienceImages/sju.jpg')} alt='SJU Logo'/>
                                <div>
                                    <h3>HS Data Analytics Competition</h3>
                                    <h4>St. Joseph's University - Second Place Finish</h4>
                                    <h5>March 2022</h5>
                                    <p>
                                        Developed a comprehensive presentation addressing modern statistical challenges in the realm of blockchain technology. Exemplified strong teamwork and coordination within my team for a second-round presentation under tight time constraints. Exhibited exceptional presentation skills, effectively communicating innovative ideas to the judging panel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}