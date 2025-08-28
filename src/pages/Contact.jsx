import React from 'react'
import { Spotlight } from '../Components/ui/Spotlight'
import { Github, GithubIcon, Linkedin, LucideGithub } from 'lucide-react'

const Contact = () => {
  return (
    <div>
     <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-center">
  {/* Spotlight effect */}
  <Spotlight
    className="animate-[spotlightMove_15s_linear_infinite] -top-40 left-0 md:-top-20 md:left-60"
    fill="rgba(255, 105, 180, 1)"
  />

  {/* Main heading */}
  <h1 className="relative z-10 text-5xl font-bold text-white md:text-6xl">
    SUMIT KUMAR
  </h1>

  {/* Project stack / skills */}
  <p className="relative z-10 mt-4 text-xl text-gray-300 md:text-2xl max-w-3xl">
     I Like to Be in the Spotlight
  </p>
  <p className="relative z-10 mt-4 text-xl text-gray-300 md:text-2xl max-w-3xl  w-max">
    Java enthusiast ☕ | Full-Stack Developer 💻 | Building apps that shine 
  </p>

  <div className='flex mt-5 gap-10'>
    <a href="https://www.linkedin.com/in/21sk12/"><Linkedin color='pink' className='cursor-pointer ' /></a>
    <a href="https://github.com/Sk2112/"><LucideGithub color='pink' className='cursor-pointer'/></a>
  </div>
</div>
  

    </div>
  )
}

export default Contact