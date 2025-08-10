import "./App.jsx";
import { Header } from "./PageHeader.jsx";
import { Footer } from "./PageFooter.jsx";
import yellowstoneMe from "/yellowStoneMe.jpeg";
import zion from "/zion.jpeg";
import lizardRock from "/lizardRock.jpeg";
import wyoming from "/wyoming.jpeg";
import "./About.css";

export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header className="Header-bg expanded" />
      <div className="Wrapper">
        <div className="Inner">
          <div className="About-wrapper">
            <div style={{ alignSelf: "flex-start" }}>
              <h1>About Me</h1>
              <h5>My background, skills, and interests</h5>
            </div>
            <div className="Content-entry-a">
              <div>
                <h3>Background</h3>
                <p>
                  Ted Tasman is a Computer Science student at Penn State with a
                  passion for using technology to make a positive impact. Driven
                  by curiosity and a love for problem-solving, he thrives on
                  tackling challenges, whether developing predictive models,
                  building web applications, or exploring the intricacies of
                  systems programming. Ted actively seeks opportunities to
                  learn, grow, and apply his skills in meaningful ways, always
                  eager to see where the next project will lead.
                </p>
                <p>
                  Outside of academics, Ted enjoys time in the outdoors, hiking
                  mountain trails, exploring national parks, and cycling
                  whenever he can. He's also an avid music enthusiast, playing
                  guitar and appreciating genres that span from acoustic to
                  experimental.
                </p>
              </div>
              <div>
                <img src={yellowstoneMe} alt="Yellowstone National Park" />
                <small>Yellowstone National Park, Wyoming</small>
              </div>
            </div>
            <div className="Content-entry-b">
              <div>
                <img src={zion} alt="Zion National Park" />
                <small>Zion National Park, Utah</small>
              </div>
              <div>
                <h3>Programming Languages</h3>
                <ul>
                  <li>
                    Go
                    <small>Multi-threaded Microservices, RESTful APIs</small>
                  </li>
                  <li>
                    Python
                    <small>Machine Learning, Object-Oriented Programming</small>
                  </li>
                  <li>
                    TypeScript/JavaScript
                    <small>Frontend Development</small>
                  </li>
                  <li>
                    Java
                    <small>Backend Development</small>
                  </li>
                  <li>
                    C<small>Systems Programming, Operating Systems</small>
                  </li>
                  <li>
                    SQL
                    <small>Database Management</small>
                  </li>
                  <li>
                    Swift
                    <small>iOS Development</small>
                  </li>
                </ul>
              </div>
            </div>

            <div className="Content-entry-a">
              <div>
                <h3>Software & Technologies</h3>
                <ul>
                  <li>
                    TensorFlow, PyTorch
                    <small>Machine Learning</small>
                  </li>
                  <li>
                    Kafka, Confluent, KSQLDB, SQLite
                    <small>Databases</small>
                  </li>
                  <li>
                    React.js, Go Gin, Spring Boot, Node.js
                    <small>Web Development</small>
                  </li>
                  <li>
                    Docker
                    <small>Containerization</small>
                  </li>
                  <li>
                    Git, GitLab, GitHub
                    <small>Other</small>
                  </li>
                </ul>
              </div>
              <div>
                <img src={wyoming} alt="Wyoming" />
                <small>South Fork Shoshone River, Wyoming</small>
              </div>
            </div>

            <div className="Content-entry-b">
              <div>
                <img src={lizardRock} alt="Lizard on a rock" />
                <small>Joshua Tree National Park, California</small>
              </div>
              <div>
                <h3>Areas & Concepts</h3>
                <ul>
                  <li>
                    Machine Learning
                    <small>Deep Learning, Neural Networks</small>
                  </li>
                  <li>
                    Web Development
                    <small>Frontend, Backend, Full Stack</small>
                  </li>
                  <li>
                    Systems Programming
                    <small>Networking, Memory Management</small>
                  </li>
                  <li>
                    Operating Systems
                    <small>Memory Management, Scheduling, Concurrency</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="Footer-bg expanded" />
    </div>
  );
}
