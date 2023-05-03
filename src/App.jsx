/** @format */

import React, { useRef, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Video from './components/Portfolio/Video';
import VideoList from './components/Portfolio/Video';

const App = () => {
  // const [scrollPosition, setScrollPosition] = useState();
  // const headerRef = useRef(null);

  // const handleScroll = () => {
  //   const currentPosition = headerRef.current.getBoundingClientRect().top;
  //   setScrollPosition(currentPosition);
  // };

  // const headerStyle = {
  //   position: 'relative',
  //   // width: "10%",
  //   // height: "40vh",
  //   top: `${scrollPosition < 0 ? 0 : -scrollPosition}px`,
  //   transition: 'top 200ms ease-in-out',
  //   zIndex: '99',
  // };
  return (
    <main
      style={{
        textAlign: 'center',
        margin: 'auto'
      }}>
      <header>
        <Navbar />
      </header>
      <div>
        <Home />
      </div>

      <About />

      <VideoList/>
    </main>
  );
};

export default App;
