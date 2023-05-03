/** @format */

import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import './Video.css';

const VideoList = ({ videoSrc }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  const videos = [
    {
      index: 1,
      title: 'Royal Kebab',
      url: 'src/videos/0013.mp4',
      description: 'This is the first video',
    },
    {
      id: 2,
      title: 'Royal Kebab',
      url: 'src/videos/0012.mp4',
      description: 'This is the first 21231321o',
    },
    { id: 3, title: 'Handbreak', url: 'src/videos/0011.mp4' },
    { id: 4, title: 'Grand Kebab', url: 'src/videos/0010.mp4' },
    { id: 5, title: 'Grand Kebab', url: 'src/videos/0009.mp4' },
    { id: 6, title: 'Double Red Car Múzeum', url: 'src/videos/0008.mp4' },
    { id: 7, title: 'Coffe Time', url: 'src/videos/0007.mp4' },
    { id: 8, title: 'Hrad Bojnice', url: 'src/videos/0006.mp4' },
    { id: 9, title: 'Vrch Marhát', url: 'src/videos/0005.mp4' },
    { id: 10, title: 'Hrad Hrušov', url: 'src/videos/0004.mp4' },
    { id: 11, title: 'Vianočná Bratislava', url: 'src/videos/0003.mp4' },
    { id: 12, title: 'Huricane Lemonade', url: 'src/videos/0002.mp4' },
    { id: 13, title: 'Drum&Bass Wear', url: 'src/videos/0001.mp4' },
  ];

  return (
    <article className='articleDiv '>
      <div className='headerText'>
        <h1>Portfolio</h1>
      </div>

      <div className='containerDiv'>
        {videos.map((video) => (
          <div
            className='wrapperDiv'
            key={video.id}
            onClick={() => handleVideoClick(video)}>
            <video
              title={video.title}
              style={{ objectFit: 'cover', aspectRatio: 1 / 1 }}
              src={video.url}
            />
          </div>
        ))}

        {currentVideo && (
          <div className='mainDiv '>
            <div
              className='closePopUp'
              onClick={() => setCurrentVideo(null)}></div>

            <div className='popUp '>
              <button onClick={() => setCurrentVideo(null)}>
                <i
                  style={{ cursor: 'pointer', color: 'white' }}
                  className='fas fa-times'></i>
              </button>
              <div
                id='video-container'
                className='videoPlayer '>
                <VideoPlayer
                  class='min-w-0 w-full'
                  videoSrc={currentVideo.url}
                />
              </div>

              <div className='text-left text-white m-20 flex flex-col content-start'>
                <h2 className='mb-5'>{currentVideo.title}</h2>
                <p>{currentVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default VideoList;
