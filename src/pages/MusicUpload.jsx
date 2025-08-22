import React from 'react';
import { Upload, Music, Video } from "lucide-react";
import Navbar from '../Components/Navbar';
import UplaodingImage from '../assets/Images/Uploading.png';
import SittingBoyImage from '../assets/Images/Sitting-boy.png';
import { FileUpload } from '../Components/file-upload';

const MusicUpload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fdc7e2] to-[#fdc7b2] overflow-hidden">
     <div className='sticky top-0'>
       <Navbar />
     </div>


      <div className=" relative lg:h-screen flex flex-col lg:flex-row justify-around items-center  px-6 gap-10 ">
        
        <div className="flex flex-col border-2 border-white/40 shadow-lg backdrop-blur-md bg-white/30 p-8 rounded-2xl w-full lg:w-2/5">
          <h2 className="text-3xl font-bold text-center mb-6">🎵 Song Upload Form</h2>
          
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Song Name"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Enter Song Description"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Enter Artist Name"
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* <button className="flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-pink-600 transition">
              <Upload size={20} /> Upload Song
            </button> */}

            <FileUpload/>
          </div>
        </div>

        {/* Right Side Images */}
        <div className=" flex md:flex-col lg:flex-col sm:flex-col-reverse mb-40">
          <img
            src={UplaodingImage}
            alt="Uploading Illustration"
            className="max-w-xs md:max-w-md  drop-shadow-lg lg:w-70 "
          />
          <img
            src={SittingBoyImage}
            alt="Sitting Boy Illustration"
            className="max-w-xs md:max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicUpload;
