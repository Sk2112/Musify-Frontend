import React from "react";
import Navbar from "../Components/Navbar";
import MusicIcon1 from "../assets/Images/Music-Icon.png";
import BoyDancing from "../assets/Images/Boy-Dancing.png";
import GirlDancing from "../assets/Images/Girl-Dancing.png";
import MusicIcon2 from "../assets/Images/Music-Icon2.png";
import MusicIcon3 from "../assets/Images/Music-Icon3.png";
import Headphone from "../assets/Images/Headphone.png";
import { TypewriterEffectSmooth } from "../Components/TypeWriter";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Home = () => {

const words = [
    {
      text: "Music",
      className: "text-blue-500 font-bold",
    },
    {
      text: " ",
      className: "text-red-500",
    },
    {
      text: "WebApp",
      className: "text-red-500",
    },
  ];

  return (
    <div className="relative h-screen bg-[#fcc6c2] overflow-hidden cursor-default">
      <Navbar />
{/* <HeroMusicVisuals/> */}
<div className="w-full flex justify-center  py-6">
   <div className='flex flex-col'>
  <div className="flex items-center justify-center  ">
        <h1 className="text-6xl text-white/90 font-bold font-serif">
        <TypewriterEffectSmooth words={words} className="text-3xl"  cursorClassName="bg-red-400"/>
        </h1>
      </div>

   <div className="flex items-center justify-center max-w-7xl w-full relative ">
        
        {/* Girl Image (left) */}
        <div className="flex-shrink-0 ">
          <img
            src={GirlDancing}
            alt="Girl Dancing"
            width={550}
            className="object-contain animate-sway"
          />
        </div>

        {/* Big Music Note Icon (center) */}
       <div className='flex flex-col space-y-8 '>
         <div className="flex-shrink-0 flex items-center justify-center  relative  rounded-full p-2 border-3 border-[#436ba3]">
          <div className="w-72 h-72 rounded-full bg-[#fe7a7a]   flex items-center justify-center shadow-[0_2px_50px_rgba(254,122,122,0.6)]  ">
            <img
              src={MusicIcon1}
              alt="Big Music Note"
              className="w-85 h-85 object-contain animate-spin [animation-duration:20s] "
            />
          </div>

          <div>
          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <div className="flex-shrink-0 flex items-center justify-center  relative  rounded-full p-4  bg-red-300">
         
            <h1
            className=' text-4xl md:text-3xl font-extrabold text-[#436ba3] uppercase  '
            >Feel The Beat </h1>
          <div>
          </div>
        </div>

        <p
        className='mt-3 text-lg md:text-xl text-gray-800 text-center'
        > Let the rhythm take over and dance your heart out! </p>
        </div>
        
<div className='flex justify-evenly '>
  
  <SignedIn>
    <UserButton/>
  </SignedIn>
  <SignedOut>

           <div className='bg-[#436ba3] rounded-full px-5 py-1  text-white flex items-center hover:bg-white hover:text-blue-500 w-max transition-colors duration-300 ease-in-out'>
            <SignedOut>
    <button className='cursor-pointer font-serif'>
      <SignInButton/>
    </button>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
  </div>
  </SignedOut>

           <div className='rounded-full px-5 py-1 text-gray-900 font-semibold flex items-center w-max '>
    <a href="/contact">CONTACT DEV</a>
  </div>

</div>
       </div>



        {/* Boy Image (right, flipped) */}
        <div className="flex-shrink-0">
          <img
            src={BoyDancing}
            alt="Boy Dancing"
            width={550}
            className="object-contain scale-x-[-1] animate-sway"
          />
        </div>
      </div>

   </div>
    </div>



<div className="absolute top-2/14 right-4/18  animate-sway-icon ">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-1/5  right-4/7 animate-sway-icon">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-8/15 left-1/19  animate-sway-icon  rotate-25">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-2/5  left-11/12  animate-sway-icon rotate-40">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-4/5 right-7/8 animate-sway-icon rotate-3">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-4/5  left-7/8 animate-sway-icon rotate-22">
    <img src={MusicIcon3} alt="Small Music Icon" width={70} />
</div>
<div className="absolute top-1/10 left-[-10px]    rotate-180">
    <img src={Headphone} alt="Small Music Icon" width={100} />
</div>
<div className="absolute top-7/10 right-[-10px]">
    <img src={Headphone} alt="Small Music Icon" width={100} />
</div>
 
      <div className="absolute top-5/20 left-1/20 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-300 opacity-70 "></div>
      <div className="absolute top-27/28 left-9/26 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-300 opacity-70 "></div>
      <div className="absolute top-28 left-6/20 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-70  "></div>
      <div className="absolute bottom-10 right-30 w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-70"></div>
     
    </div>
  );
};

export default Home;
