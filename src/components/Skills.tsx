import React from 'react';

interface Skill {
  name: string;
  className: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "HTML", className: "html", percentage: 90 },
  { name: "CSS", className: "css", percentage: 85 },
  { name: "JavaScript", className: "js", percentage: 80 },
  { name: "Reactjs", className: "reactjs", percentage: 80 },
  
  { name: "Source Control - Git", className: "git", percentage: 80 },
  { name: "Voiceover", className: "voiceover", percentage: 95 },
];

const creativeSkills: string[] = [
  "Certified Scrum Master: I lead development teams with an agile mindset, ensuring efficient project delivery.",
  "Front-End Web Development (React.js): I craft user-friendly and responsive web applications utilizing React.js, best practices, and modern libraries.",
  "Web3 & DeFi Enthusiast: I actively participate in the Web3 and DeFi space, exploring the potential of blockchain technology and decentralized finance.",
  "NFT Connoisseur: I have a keen eye for identifying valuable NFTs and enjoy the evolving landscape of digital art.",
  "Solidity Apprentice: I'm actively learning Solidity, the programming language for building smart contracts on the Ethereum blockchain."
];

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Technical skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My technical skills & experiences.</div>
            <ul>
              {creativeSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <a href="#about">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              {skillsData.map((skill, index) => (
                <div className="info" key={index}>
                  <div className="top">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className={`line ${skill.className}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
