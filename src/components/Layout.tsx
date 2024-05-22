// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import '../app/style.css';

import ScrollUpButton from "./Scroll"

import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS here
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Omotoyosi Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      {children}

      <ScrollUpButton />
      <footer>
        <span>Created By <a href="https://www.linkedin.com/in/omotoyosi-kemi-obabi-a4464113b" target="_blank">Omotoyosi Kemi-Obabi</a></span>
      </footer>
    </>
  );
};

export default Layout;

