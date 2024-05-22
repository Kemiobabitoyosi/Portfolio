import React, { useEffect, useState } from "react";

import AboutImg from "../app/about.webp";

const About: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const roles = ["Frontend Web Developer", "Creative Storyteller"];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 100;
    let timeoutId: NodeJS.Timeout | undefined;

    const type = () => {
      const fullText = roles[currentIndex % roles.length];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setCurrentText(currentText + "|");

      let delta = typingSpeed;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && currentText === fullText) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex++;
        delta = 500;
      }

      timeoutId = setTimeout(type, delta);
    };

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [roles]);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={AboutImg.src} alt="" />
          </div>
          <div className="column right">
            <div className="text">
              I&apos;m Omotoyosi Kemi-Obabi and I&apos;m a{" "}
              <span className="typing-2">
                Frontend Web Developer & Creative Storyteller
              </span>
            </div>
            <p>
              I bring a unique blend of technical mastery and creative
              expression to the table. As a Frontend Web Developer & Creative
              Storyteller, I specialize in crafting visually stunning and highly
              interactive web experiences. My expertise lies in utilizing modern
              frontend technologies to create user-friendly interfaces that not
              only look great but also provide a seamless user experience. My
              journey in web development has equipped me with a robust
              understanding of HTML, CSS, JavaScript, and various frontend
              frameworks. I thrive on transforming complex ideas into intuitive
              and engaging digital products. My background in storytelling
              enhances my ability to design web content that resonates with
              users and effectively communicates the intended message. I am
              passionate about continuous learning and staying updated with the
              latest industry trends. This ensures that my projects are not only
              innovative but also adhere to best practices and modern standards.
              Collaboration and creativity are at the core of my work ethic, and
              I enjoy working with diverse teams to bring projects to life. Feel
              free to explore my portfolio and reach out if you&apos;re
              interested in collaborating or learning more about my work.
              Let&apos;s create something exceptional together!
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              download="Omotoyosi Kemi-Obabi.pdf"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
