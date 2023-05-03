/** @format */

import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import "./Portfolio.css"

// function VideoPlayer(props) {
//   return (
//     <div>
//       {videos.map((video, index) => (
//         <div key={index}>
//           <video
//             ref={videoRef}
//             src={video.url}
//             style={{ objectFit: 'cover', aspectRatio: 1 / 1 }}
//             onClick={() => handleOpenModal(index)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// function VideoPlayer(props) {
//   return (
//     <div>
//       <video src={currentVideo.url} autoPlay controls />
//     </div>
//   );
// }
// function VideoPlayer(props) {
//   return (
//     <div>
//       <video
//         src={props.src}
//         controls
//       />
//     </div>
//   );
// }

function VideoGallery(props) {
  const videoRef = useRef(null);

  const videos = [
    { index: 1, title: 'Royal Kebab', url: 'src/videos/0013.mp4' },
    { id: 2, title: 'Royal Kebab', url: 'src/videos/0012.mp4' },
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
    { id: 13, title: 'Royal Kebab', url: 'src/videos/0001.mp4' },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.addEventListener('play', () => {
        videos.forEach((otherVideo) => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });
  }, []);

  //   return (
  //     <main
  //       className='bg-black text-white'
  //       style={{
  //         padding: '15rem 0',
  //       }}>
  //       <h1>Portfólio</h1>
  //       <div>
  //         {videos.map((video) => (
  //           <div className='video'>
  //             <video
  //               title={video.title}
  //               controls
  //               ref={videoRef}
  //               width='auto'
  //               height='auto'
  //               style={{ objectFit: 'cover', aspectRatio: 1 / 1 }}
  //               src={video.url}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </main>
  //   );
  // }


  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handleOpenModal = (video) => {
    setCurrentVideoIndex(
    );
  };

  const handleCloseModal = (video) => {
    setCurrentVideoIndex(null);
  };

  const currentVideo = currentVideoIndex !== null && videos[currentVideoIndex];

  return (
    <div>
      {videos.map((video, index) => (
        <div>
          <video
          key={video.index}
            ref={videoRef}
            src={video.url}
            style={{ objectFit: 'cover', aspectRatio: 1 / 1 }}
            onClick={() => handleOpenModal(setCurrentVideoIndex)}
          />
        </div>
      ))}
      {currentVideo && (
        <Modal
          isOpen={currentVideo !== null}
          onRequestClose={handleCloseModal}
          contentLabel='Video Modal'>
          <div key={index}>
            <video src={currentVideo.url}
            autoPlay controls/>
          </div>
        </Modal>
      )}
    </div>
  );
}


export default VideoGallery;
