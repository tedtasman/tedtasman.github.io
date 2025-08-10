import "./App.jsx";
import { Header } from "./PageHeader.jsx";
import { Footer } from "./PageFooter.jsx";
import "./Experience.css";
import React, { useState } from "react";

export default function Experience() {
  const [expandWork, setExpandWork] = useState(true);
  const [expandEducation, setExpandEducation] = useState(true);
  const [expandExtracurriculars, setExpandExtracurriculars] = useState(true);

  const toggleExpandWork = () => {
    setExpandWork(!expandWork);
  };

  const toggleExpandEducation = () => {
    setExpandEducation(!expandEducation);
  };

  const toggleExpandExtracurriculars = () => {
    setExpandExtracurriculars(!expandExtracurriculars);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header className="Header-bg expanded" />
      <div className="Wrapper">
        <div className="Inner">
          <div className="Experience-wrapper">
            <div>
              <h1>Experience</h1>
              <h5>My professional experience and background</h5>
            </div>

            <div className="Experience-category-header">
              <h2>Technical Work Experience</h2>
              <button onClick={toggleExpandWork}>
                <img
                  src={"/chevron.png"}
                  alt="Expand"
                  className={`Experience-category-header-arrow ${
                    expandWork ? "expanded" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`Experience-category ${expandWork ? "expanded" : ""}`}
            >
              <div className="Job-entry">
                <img src={"/peraton.jpg"} alt="PSU Logo" />
                <div className="Job-role-list">
                  <h3>Peraton</h3>
                  <div className="Job-role">
                    <h4>Software Engineering Intern</h4>
                    <h5>June 2025 - August 2025</h5>
                    <p>
                      At his internship, Ted worked with Confluent and Kafka to
                      power real-time, event-driven workflows across multiple
                      services. He developed microservices in Go, built and
                      integrated RESTful APIs, and used Docker to containerize
                      applications for smoother deployment. Working in an Agile
                      team, he contributed to sprint planning, iterative
                      releases, and system enhancements that improved
                      performance and scalability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="Job-entry">
                <img src={"/psu.jpg"} alt="PSU Logo" />
                <div className="Job-role-list">
                  <h3>The Pennsylvania State University Computer Science</h3>
                  <div className="Job-role">
                    <h4>Learning Assistant</h4>
                    <h5>August 2024 - Present</h5>
                    <p>
                      Ted supports computer science students by guiding them
                      through debugging challenges, explaining programming
                      concepts, and reinforcing class material in recitation
                      sessions. He excels at pinpointing errors in code from
                      test results, then walking students through fixes while
                      building their confidence. He also collaborates with the
                      grading team to ensure fair, consistent evaluation.
                    </p>
                  </div>
                  <div className="Job-role">
                    <h4>Grader</h4>
                    <h5>January 2024 - August 2024</h5>
                    <p>
                      Before becoming a Learning Assistant, Ted evaluated
                      student code for both accuracy and design quality. This
                      required careful debugging, an eye for clean coding
                      practices, and clear communication when returning
                      feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Experience-category-header">
              <h2>Extracurriculars</h2>
              <button onClick={toggleExpandExtracurriculars}>
                <img
                  src={"/chevron.png"}
                  alt="Expand"
                  className={`Experience-category-header-arrow ${
                    expandExtracurriculars ? "expanded" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`Experience-category ${
                expandExtracurriculars ? "expanded" : ""
              }`}
            >
              <div className="Job-entry">
                <img src={"/uas.png"} alt="PSU Logo" />
                <div>
                  <h3>PSU Unmanned Aerial Systems Club</h3>
                  <h4>Software Lead</h4>
                  <h4>SUAS Competition</h4>
                  <h5>August 2024 - Present</h5>
                  <p>
                    Ted works with a team of engineering students to design and
                    build autonomous aircraft for the RoboNation SUAS
                    competition. On the software side, he brings together tools
                    like OpenCV for image processing and MavLink for aircraft
                    communication to solve challenges such as autonomous
                    navigation, object detection, and data transmission.
                  </p>
                  <p>
                    As software lead, Ted shapes the system architecture, keeps
                    development on track, and makes sure the team's code meets
                    competition requirements. He also mentors newer members,
                    sharing best practices, debugging strategies, and helping
                    them pick up new technologies that push the project forward.
                  </p>
                  <p>
                    In 2025, the team's work earned them a 10th place finish out
                    of more than 50 teams.
                  </p>
                </div>
              </div>
              <div className="Job-entry">
                <img src={"/sju.jpg"} alt="SJU Logo" />
                <div>
                  <h3>HS Data Analytics Competition</h3>
                  <h4>St. Joseph's University - Second Place Finish</h4>
                  <h5>March 2022</h5>
                  <p>
                    Ted and his team tackled modern statistical challenges in
                    blockchain technology, crafting a comprehensive presentation
                    that advanced them to the competition's second round. With a
                    limited timeframe, they collaborated under pressure,
                    refining their analysis and building a clear, impactful
                    narrative for the judges. Ted's confident delivery and
                    ability to translate complex ideas into engaging insights
                    helped secure a second-place finish.
                  </p>
                </div>
              </div>
            </div>

            <div className="Experience-category-header">
              <h2>Education</h2>
              <button onClick={toggleExpandEducation}>
                <img
                  src={"chevron.png"}
                  alt="Expand"
                  className={`Experience-category-header-arrow ${
                    expandEducation ? "expanded" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`Experience-category ${
                expandEducation ? "expanded" : ""
              }`}
            >
              <div className="Job-entry">
                <img src={"/psu.jpg"} alt="PSU Logo" />
                <div>
                  <h3>The Pennsylvania State University</h3>
                  <h4>Bachelor of Science in Computer Science</h4>
                  <h4>Minor in Statistics</h4>
                  <h5>August 2022 - May 2026</h5>
                  <p>
                    Relevant Coursework: Data Structures, Discrete Mathematics,
                    Systems Programming, Computer Organization and Architecture,
                    Algorithms, Programming Languages, Operating Systems,
                    Software Engineering, Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="Footer-bg expanded" />
    </div>
  );
}
