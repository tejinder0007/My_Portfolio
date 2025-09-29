// src/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home'); // Navigate to the home page when clicked
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-no-repeat bg-center animate-zoom-in'
        style={{ backgroundImage: 'url("https://www.corelangs.org/wp-content/uploads/2024/05/image-19.png")' }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      <div className='relative z-10 flex flex-col justify-center items-center w-full h-full text-center p-4'>
        <h1 className='text-6xl sm:text-7xl lg:text-8xl text-white font-extrabold tracking-tight drop-shadow-2xl animate-fade-slide-in'>
          Welcome to My Portfolio
        </h1>
        <p className='mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-200 font-medium drop-shadow-xl animate-fade-in-delayed'>
          Showcasing My Passion for Web Development
        </p>
        <button
          className='mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 animate-pop-in'
          onClick={handleExploreClick}
        >
          Explore My Work
        </button>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow'>
        
      </div>
    </div>
  );
}

export default Welcome;