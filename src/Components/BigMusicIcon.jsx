import React from 'react'
import MusicIcon2 from "../assets/Images/Music-Icon2.png";

const BigMusicIcon = () => {
  return (
    <div>
         <div className='flex-shrink-0 flex items-center justify-center mx-6'>
               <div className="border-3 rounded-full p-2  border-[#436ba3]">
          <img
            src={MusicIcon2}
            alt="Big Music Note" 
            className='rounded-full w-70 h-70 bg-[#fe7a7a]'
          />
        </div>
             </div>
    </div>
  )
}

export default BigMusicIcon