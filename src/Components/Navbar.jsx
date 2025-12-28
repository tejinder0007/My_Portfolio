// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <div className='w-full bg-gradient-to-r from-orange-400 to-amber-200 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-0 md:h-20'>
      
     
      <div className='flex items-center gap-2 mb-4 md:mb-0'>
        <h1 className='text-black font-extrabold text-2xl'>PORTFOLIO</h1>
        <img 
          className='w-10 h-10 md:w-12 md:h-12' 
          src='https://www.svgrepo.com/show/521261/web.svg' 
          alt="Web Icon" 
        />
      </div>

    
      <div className='w-full md:w-auto'>
        <ul className='flex justify-center gap-6 md:gap-8 font-bold text-lg md:text-2xl text-black'>
          <li><Link to="/home" className='butt hover:text-white transition-colors'>ABOUT</Link></li>
          <li><Link to="/projects" className='butt hover:text-white transition-colors'>PROJECTS</Link></li>
          <li><Link to="/contact" className='butt hover:text-white transition-colors'>CONTACT ME</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;