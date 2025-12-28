// src/Components/Footer.js
import React from 'react';

function Footer() {
  return (
    // Changed h-14 to py-4 so the height adjusts automatically if text wraps
    <div className='bg-slate-400 w-full flex items-center justify-center text-black py-4 mt-auto'>
      <p className='text-sm md:text-base font-medium text-center px-4'>
        {/* "new Date().getFullYear()" makes sure the year is always current */}
        &copy; {new Date().getFullYear()} Tejinder Singh. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;