// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex h-20 bg-gradient-to-r from-orange-400 to-amber-200 items-center w-full'>
      <div className='flex items-center gap-2 ml-10'>
        <h1 className='text-black font-extrabold text-2xl'>PORTFOLIO</h1>
        <img className='w-12 h-12' src='https://www.svgrepo.com/show/521261/web.svg' alt="Web Icon" />
      </div>
      <div className='ml-80'>
        <ul className='text-black h-14 flex w-full gap-8 font-bold text-2xl items-center place-content-center ml-28'>
          <li><Link to="/home" className='butt'>ABOUT</Link></li>
          <li><Link to="/projects" className='butt'>PROJECTS</Link></li>
          <li><Link to="/contact" className='butt'>CONTACT ME</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;