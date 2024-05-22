import React from "react";

import Project1 from "../app/tic-tac-toe.webp";
import Project2 from "../app/token-swap2.webp";
import Project3 from "../app/toshies-drumkit.webp";
import Project4 from "../app/whack-a-bear.webp";

interface Project {
  name: string;
  imageUrl: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    name: "Spooky Momoguro Tic-Tac-Toe Game",
    imageUrl: `${Project1.src}`,
    githubLink: "https://spooky-momoguro-tic-tac-toe.vercel.app",
  },
  {
    name: "Trade Secure Token Swap",
    imageUrl: `${Project2.src}`,
    githubLink: "https://github.com/Kemiobabitoyosi/Monad-dex.git",
  },
  {
    name: "Toshies DrumKit",
    imageUrl: `${Project3.src}`,
    githubLink: "https://kemiobabitoyosi.github.io/Toshies-Drumkit",
  },
  {
    name: "Whack a Bear Game",
    imageUrl: `${Project4.src}`,
    githubLink: "https://kemiobabitoyosi.github.io/whack-a-bear-bruh",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="carousel owl-carousel">
          {projectsData.map((project, index) => (
            <div className="card" key={index}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box">
                  <img src={project.imageUrl} alt={project.name} />
                  <div className="text">{project.name}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="githubDiv">
          <a
            href="https://github.com/kemiobabitoyosi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="github2">More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
