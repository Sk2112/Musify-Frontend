import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between py-7 px-7 font-semibold cursor-default ">
  <div className="flex space-x-10 text-lg  font-serif  bg-gradient-to-r from-[#fe7a7d] via-[#436] to-[#436ba8]  bg-clip-text text-transparent ">
    <a  href='/' className='cursor-pointer'>
      Home</a>

      <SignedIn>
    <a href='/stream' className='cursor-pointer'>Music Stream</a>
    <a href='/upload' className='cursor-pointer'>Music Upload</a>
      </SignedIn>
  </div>

  <SignedIn>
        <UserButton/>
      </SignedIn>

        <SignedOut>
    <div className='bg-[#436ba3] rounded-full w-max px-3 py-0.5  text-white flex items-center hover:bg-white hover:text-blue-500  transition-colors duration-300 ease-in-out justify-center'>
    <button className='cursor-pointer font-serif'>

        <SignInButton />
      </button>

  </div>
      </SignedOut>      
</div>

  )
}

export default Navbar