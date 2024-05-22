import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const roles = ["Web Developer", "Certified Scrum Master"];

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
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Omotoyosi Kemi-Obabi</div>
          <div className="text-3">
            And I&apos;m a{" "}
            <span className="typing">
              Web Developer <span className="and">and</span> <span className="scrum">Certified Scrum Master</span>
            </span>
          </div>
          <a href="#contact">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
