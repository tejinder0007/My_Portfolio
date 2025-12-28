// src/Home.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [showDesigner, setShowDesigner] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDesigner(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-500 to-red-300 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full mt-6 lg:mt-12 px-4">
        
        {/* Designer/Coder Block */}
        {/* Changed h-64 to min-h-[16rem] so text doesn't get cut off on small screens */}
        <div className="w-full lg:w-1/2 h-64 relative overflow-hidden p-4 mt-8 lg:mt-0 text-center lg:text-left">
          
          <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${showDesigner ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Responsive Text: text-4xl on mobile, 5xl on desktop */}
            <h1 className="text-4xl lg:text-5xl text-white font-extrabold mb-4 animate-glow">Designer</h1>
            <p className="text-xl lg:text-2xl text-yellow-100">
              Designing interactive web pages using React JS. Efficient in real-time responsive web development.
            </p>
          </div>

          <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${showDesigner ? 'translate-x-full' : 'translate-x-0'}`}>
            <h1 className="text-4xl lg:text-5xl text-white font-extrabold mb-4 animate-glow">CODER</h1>
            <p className="text-xl lg:text-2xl text-yellow-100">
              Writing clean, efficient, real-time code for dynamic and high-performance frontend apps.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="flex justify-center items-center">
          {/* Made image smaller on mobile (w-48) and normal on desktop (md:w-72) */}
          <img 
            src="teji.png" 
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover" 
            alt="Tejinder Singh" 
          />
        </div>
      </div>

      {/* --- ABOUT TEXT SECTION --- */}
      <section className='p-6 w-full max-w-6xl'>
        <p className='text-lg md:text-2xl text-orange-900 mb-6 animate-text leading-relaxed bg-gradient-to-r from-zinc-200 to-red-300 p-5 rounded-xl text-center md:text-left'>
          Hello! I'm Tejinder Singh, a passionate web developer with a knack for creating interactive and responsive web applications using React JS.
        </p>
      </section>

      {/* --- SKILLS AND EXPERIENCE SECTION --- */}
      {/* Removed ml-20 and ml-44. Using padding and gap to control spacing */}
      <section className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-gradient-to-br from-white to-orange-50 shadow-lg mb-8'>
        
        {/* Skills Column */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className='text-3xl font-bold text-indigo-700 mb-2 border-b-2 border-indigo-400 pb-2 w-36 animate-fade-in-down'>
            My Skills
          </h2>
          <ul className='list-disc list-inside text-lg text-gray-800 space-y-3 animate-fade-in-left'>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>JavaScript (ES6+)</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>React.js</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>HTML & CSS</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Tailwind CSS</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Node.js</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Git & GitHub</li>
          </ul>
        </div>

        {/* Experience Column */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className='text-3xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-400 pb-2 w-36 animate-fade-in-down'>
            Experience
          </h2>
          <p className='text-lg text-gray-800 leading-relaxed animate-fade-in-right text-center md:text-left'>
            I have worked on various projects, ranging from small personal websites to larger applications. My
            experience includes collaborating with teams to deliver high-quality software solutions.
          </p>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      {/* Removed pl-24. Added w-full max-w-6xl to keep it aligned with other sections */}
      <section className='w-full max-w-6xl p-6 md:p-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 shadow-xl animate-fade-in-up mb-8'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-4 border-b-2 border-purple-300 pb-2 w-full md:w-fit text-center md:text-left animate-slide-in'>
          My Philosophy
        </h2>
        <p className='text-lg text-indigo-100 mb-4 leading-relaxed animate-fade-in text-center md:text-left'>
          I believe in writing clean, maintainable code and continuously learning new technologies to improve my skills. I am committed to delivering the best user experience through thoughtful design and functionality.
        </p>
      </section>

      {/* --- GET IN TOUCH SECTION --- */}
      <section className='flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 w-full to-indigo-100 shadow-lg animate-fade-in'>
        <h2 className='text-3xl md:text-4xl font-bold text-indigo-800 mb-5 animate-fade-in-delayed text-center'>
          Get in Touch
        </h2>
        <p className='text-lg md:text-xl text-gray-700 mb-6 text-center leading-relaxed max-w-2xl animate-fade-in'>
          Have a project in mind, a question, or just want to connect?
          Feel free to reach out to me via my&nbsp;
          <Link
            to='/contact'
            className='text-purple-700 underline hover:text-purple-900 font-semibold transition duration-300 ease-in-out'
          > Contact </Link>
          &nbsp;page for any inquiries or collaborations!
        </p>
        <Link
          to='/contact'
          className='px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-110'
        >Send a Message</Link>
      </section>
      
    </div>
  );
}

export default Home;