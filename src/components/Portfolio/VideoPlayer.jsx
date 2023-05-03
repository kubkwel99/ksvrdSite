/** @format */

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Video.css';

const VideoPlayer = ({ videoSrc, setCurrentVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  useLayoutEffect(() => {
    const body = document.querySelector('body');
    if (isPlaying) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'visible';
    };
  }, [isPlaying]);

  return (
    <div>
      <video
        id='video'
        onPlay={handlePlay}
        onPause={() => setIsPlaying(false)}
        controls
        autoPlay
        src={videoSrc}
        className='rounded-none shadow-none'
        style={{ width: ' 600px', minWidth: '300px' }}
      />
    </div>
  );
};

export default VideoPlayer;
