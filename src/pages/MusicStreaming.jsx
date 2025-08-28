import React, { useRef } from 'react';
import bgVideo from "../../src/assets/videos/bg.mp4.mp4";
import MusicPlayer from '../Components/MusicPlayer';
import { ListCard } from '../Components/songLayout/ListCard';

const MusicStreaming = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="p-7 relative z-10 flex flex-col h-full py-5">
        <div className='text-center'>
          <div>
            <h1 className="text-4xl font-bold text-white">Music Streaming</h1>
            <p className="mt-4 text-lg text-white">Enjoy your favorite songs with visuals</p>
          </div>
            <div className='mt-7'>
              <ListCard/>
            </div>

          <MusicPlayer videoRef={videoRef} />
        </div>
      </div>
    </div>
  );
};

export default MusicStreaming;
