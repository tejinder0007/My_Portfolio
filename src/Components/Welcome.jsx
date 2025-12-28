// src/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home'); // Navigate to the home page when clicked
  };

  return (
    // changed h-screen to h-[100dvh] (dynamic viewport height) 
    // This fixes the issue on mobile browsers where the address bar covers the bottom buttons
    <div className='relative w-full h-[100dvh] overflow-hidden'>
      
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-no-repeat bg-center animate-zoom-in'
        style={{ backgroundImage: 'url("https://www.corelangs.org/wp-content/uploads/2024/05/image-19.png")' }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Content Container */}
      <div className='relative z-10 flex flex-col justify-center items-center w-full h-full text-center px-6'>
        
        {/* Title: Scaled down to text-4xl for mobile, 8xl for desktop */}
        <h1 className='text-4xl sm:text-6xl lg:text-8xl text-white font-extrabold tracking-tight drop-shadow-2xl animate-fade-slide-in leading-tight'>
          Welcome to My Portfolio
        </h1>
        
        {/* Subtitle: Scaled to text-lg for mobile */}
        <p className='mt-6 text-lg sm:text-2xl lg:text-3xl text-gray-200 font-medium drop-shadow-xl animate-fade-in-delayed max-w-2xl'>
          Showcasing My Passion for Web Development
        </p>
        
        <button
          className='mt-10 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 animate-pop-in'
          onClick={handleExploreClick}
        >
          Explore My Work
        </button>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow'>
        {/* If you add a scroll indicator icon here later, it will be centered perfectly */}
      </div>
    </div>
  );
}

export default Welcome;