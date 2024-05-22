// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const IndexPage: React.FC = () => {
  const [scrollBelowHomePage, setScrollBelowHomePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position relative to the Home section
      const homeSectionHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollY = window.scrollY;
      const scrolledBelowHome = scrollY > homeSectionHeight;

      setScrollBelowHomePage(scrolledBelowHome);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Navbar scrollBelowHomePage={scrollBelowHomePage} />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
