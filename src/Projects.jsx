import "./App.jsx";
import { Header } from "./PageHeader.jsx";
import { Footer } from "./PageFooter.jsx";
import "./Projects.css";
import React, { useState, useEffect } from "react";
import Modal from "./Modal.tsx";

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleExpand = (title) => {
    setExpandedProjects((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const [selection, setSelection] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header className="Header-bg expanded" />
      <div className="Wrapper">
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          <h4>{selectedProject?.subtitle}</h4>
          <br />
          <div className="Expanded-Content">
            {selectedProject?.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            <div className="Project-Detail">
              {selectedProject?.date}
              {selectedProject?.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Learn-more"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
        </Modal>
        <div className="Inner">
          <div className="Projects-wrapper">
            <div>
              <h1>Projects</h1>
              <h5>My recent projects and work</h5>
            </div>
            {tagSelector(selection, setSelection)}
            {renderProjects(
              selection.length ? selection : tags,
              expandedProjects,
              setSelectedProject
            )}
          </div>
        </div>
      </div>
      <Footer className="Footer-bg expanded" />
    </div>
  );
}

const tagSelector = (selection, setSelection) => {
  return (
    <div className="Tag-Selector">
      <h4>Filter by tag:</h4>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => {
            if (selection.includes(tag)) {
              setSelection(selection.filter((t) => t !== tag));
            } else {
              setSelection([...selection, tag]);
            }
          }}
          className={`Tag-button ${selection.includes(tag) ? "selected" : ""}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

const renderProjects = (selectedTags, expandedProjects, setSelectedProject) => {
  return (
    <div className="Projects-list">
      {Object.entries(projects)
        .filter(([, project]) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        )
        .map(([title, project]) => {
          const projectImage = `/${project.image}`;

          return (
            <button
              onClick={() => setSelectedProject({ title, ...project })}
              className="Project"
              key={title}
            >
              <img src={projectImage} alt={title} />
              <div className={`Description`}>
                <h3>{title}</h3>
                <h5>{project.subtitle}</h5>

                <div className="Date">{project.date}</div>
                <div className="Tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* <div className={`Arrow-Button`}>
            <img src={"/chevron.png"} alt="Expand" />
          </div> */}
            </button>
          );
        })}
    </div>
  );
};

const tags = [
  "React",
  "JavaScript",
  "Web Development",
  "Python",
  "TensorFlow",
  "Machine Learning",
  "C",
  "Systems Programming",
  "Networking",
  "Java",
  "OOP",
  "SQL",
  "Memory Management",
  "Flask",
  "Aerospace",
  "Package",
];

const projects = {
  MAVez: {
    subtitle: "An Intuitive MAVLink Flight Control Package",
    description:
      "Ted developed MAVez, a Python package that streamlines drone application development by wrapping complex MAVLink commands in high-level, intuitive APIs. Designed with modularity in mind, MAVez enables developers to integrate advanced flight features without digging into the protocol's intricate details. Available via pip, it lowers the barrier for building robust, mission-ready UAV software. The project reflects Ted's expertise in API design, software architecture, and aerospace applications.",
    date: "April 2025, Ongoing",
    image: "mavez.png",
    link: "https://github.com/UnmannedAerialSystems/MAVez",
    tags: ["Python", "OOP", "Aerospace", "Package"],
  },
  "Nittany Business": {
    subtitle: "A B2B Marketplace connecting Suppliers to Businesses",
    description:
      "In a team project, Ted helped build Nittany Business, a marketplace where suppliers can showcase products and businesses can purchase them directly. The platform features a React.js front end, a Flask back end, and a SQLite database, all tied together with a clean, user-friendly interface. Ted's work spanned full-stack development, from front-end design to database management, and demonstrated his ability to collaborate effectively in a shared codebase.",
    date: "May 2025",
    image: "nittany_business.png",
    link: null,
    tags: ["Python", "Flask", "Web Development", "SQL", "React", "JavaScript"],
  },
  "Tic-Tac-Joe": {
    subtitle: "Exploring Machine Learning Through Tic-Tac-Toe",
    description:
      "Partnering with Benjamin Rodgers, Ted created an AI-driven Tic-Tac-Toe game to explore neural networks and reinforcement learning in TensorFlow. The model evolved from a deep network with three hidden layers to a streamlined 15-neuron architecture, reducing overfitting and improving performance. By combining Q-learning with backpropagation, the AI learned to outplay a “smart-random” opponent, showcasing both the potential of game-based machine learning and Ted's growing skills in AI model design.",
    date: "May 2024",
    image: "tictacjoe.jpg",
    link: "https://github.com/tedtasman/tic-tac-joe",
    tags: ["Python", "TensorFlow", "Machine Learning"],
  },
  "Spotify ShuffleTrue": {
    subtitle: "A Web Application for Truly Shuffled Playlists",
    description:
      "Ted built ShuffleTrue to solve a familiar frustration: Spotify's shuffle feature often repeats songs before playing the whole list. Using the Spotify API, he created a tool that generates truly randomized playlists without repeats until all songs have played. Developed in React and JavaScript, ShuffleTrue integrates seamlessly with users’ Spotify accounts and highlights Ted’s ability to work with APIs and craft smooth, user-friendly web apps.",
    date: "July 2024",
    image: "shuffletrue.jpg",
    link: "https://github.com/tedtasman/spotify-true-shuffle",
    tags: ["React", "JavaScript", "Web Development"],
  },
  "PSUSNAPS.org": {
    subtitle:
      "A Club Website for the Student Nurses' Association at Penn State",
    description:
      "Ted designed and maintains the SNAPS club website, a React-based platform that keeps members informed on events and meeting resources. By integrating Google Drive, the site automatically updates with the latest slides and announcements, providing a central hub for the organization's communications.",
    date: "September 2024, Ongoing",
    image: "snaps.png",
    link: "https://github.com/tedtasman/psu-snap-website",
    tags: ["React", "JavaScript", "Web Development"],
  },
  "Malloc Implementation": {
    subtitle: "A custom memory allocator written in C",
    description:
      "To deepen his understanding of low-level programming, Ted wrote a custom memory allocator in C, replicating malloc and free functionality using a segregated free list. The allocator supports variable block sizes, coalesces adjacent free blocks to reduce fragmentation, and uses footer optimization for better memory utilization.",
    date: "October 2024",
    image: "malloc.jpg",
    link: null,
    tags: ["C", "Systems Programming", "Memory Management"],
  },
  "Channel Implementation": {
    subtitle: "A concurrent channel implementation in C",
    description:
      "Ted implemented a thread-safe channel in C for inter-thread communication, supporting multiple senders and receivers. Using mutexes, condition variables, and semaphores, the design guarantees correct message order and safe concurrent access, reinforcing his skills in synchronization and concurrency.",
    date: "November 2024",
    image: "channel.jpg",
    link: null,
    tags: ["C", "Systems Programming", "Concurrency"],
  },
  "JBOD Controller": {
    subtitle: "MDADM implementation written in C",
    description:
      " This project saw Ted build a virtual “Just a Bunch of Disks” controller that mimics MDADM functionality. The program handles block-level reads and writes across multiple disks, implements an LRU-based cache for performance, and adds networking capabilities for remote operation. It strengthened his knowledge in systems programming, caching strategies, and network I/O.",
    date: "April 2024",
    image: "jbodController.jpeg",
    link: null,
    tags: ["C", "Systems Programming", "Networking", "Memory Management"],
  },
  "Course Scheduler": {
    subtitle: "Java application for course scheduling",
    description:
      " Ted developed a Java application to manage course scheduling for a hypothetical college. Backed by a SQL database, the system allows admins to create semesters, add courses, and manage student records, while students can enroll and view schedules. The project blended database management with object-oriented Java development, building Ted's skills in backend-driven UI design.",
    date: "December 2023",
    image: "scheduler.jpg",
    link: null,
    tags: ["Java", "OOP", "SQL"],
  },
};
