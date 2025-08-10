import "./App.css";
import "./Homepage.css";
import { Posts } from "./Posts";
import pinnacle from "/pinnacle.jpeg";

export function Homepage() {
  return (
    <div className="Homepage-wrapper">
      <div className="Homepage-column">
        <div className="Intro">
          <div>
            <h1>I'm Ted Tasman,</h1>
            <h3>
              a dedicated computer science student at The Pennsylvania State
              University.
            </h3>
          </div>
          <p>
            I'm passionate about leveraging technology to create a positive
            impact on the world. My mission is to provide tangible value to
            users through innovative and practical solutions.
          </p>
        </div>

        <h3>What's in store?</h3>
        <div className="Guide-wrapper">
          <p class="guide1">
            This site offers insight into my skills, experiences, and who I am
            beyond the code.
          </p>
          <ul class="guide2">
            <li>
              <div class="List-title">About Me -</div>
              Learn more about my background, interests, and the journey that's
              shaped my aspirations in the tech industry.
            </li>
            <li>
              <div class="List-title">Experience -</div>
              Explore my range of experiences, from technical work and
              leadership roles to extracurricular activities.
            </li>
            <li>
              <div class="List-title">Projects -</div>
              Dive into my completed works, from software applications to
              collaborative builds, showcasing problem-solving and technical
              expertise.
            </li>
          </ul>
          <p class="guide3">
            When you're ready, click the "Contact" button at the top right to
            get in touch — let's start something great together.
          </p>
        </div>
        <img
          src={pinnacle}
          alt="Photo Ted Tasman on a mountain peak"
          className="Landing-image"
        />
      </div>
      <Posts />
    </div>
  );
}
