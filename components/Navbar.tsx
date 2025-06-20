import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8 bg-[rgb(38,38,89)] text-white font-bold text-3xl'>
      <div className="left ml-50 text-white hover:text-blue-300">Toujar's Protfolio</div>
      <div className="right">
        <ul className='flex space-x-18 p-3  text-white'>
            <a href="/" className=' hover:text-blue-300'> <li>Home</li></a>
            <a href="/about" className=' hover:text-blue-300'><li>About</li></a>
            <a href="/projects" className=' hover:text-blue-300'><li>Projects</li></a>
            <a href="/contact" className=' hover:text-blue-300'> <li>Contact Me</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
