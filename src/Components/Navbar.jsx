import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <div className="flex justify-between py-7 px-7 font-semibold  ">
  <ul className="flex space-x-10 text-lg cursor-pointer">
    <li>Home</li>
    <li>Music Stream</li>
    <li>Music Upload</li>
  </ul>

  <div className='bg-white rounded-full px-4 text-blue-500 flex items-center hover:bg-blue-500 hover:text-white '>
    <button className='cursor-pointer'>SIGN IN</button>
  </div>
</div>

  )
}

export default Navbar