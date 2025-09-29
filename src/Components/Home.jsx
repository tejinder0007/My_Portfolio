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
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-500 to-red-300">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-12">
        {/* Designer/Coder Block */}
        <div className="w-full lg:w-1/2 h-64 relative overflow-hidden p-4">
          <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${showDesigner ? 'translate-x-0' : '-translate-x-full'}`}>
            <h1 className="text-5xl text-white font-extrabold mb-4 animate-glow">Designer</h1>
            <p className="text-2xl text-yellow-100">
              Designing interactive web pages using React JS. Efficient in real-time responsive web development.
            </p>
          </div>
          <div className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ${showDesigner ? 'translate-x-full' : 'translate-x-0'}`}>
            <h1 className="text-5xl text-white font-extrabold mb-4 animate-glow">CODER</h1>
            <p className="text-2xl text-yellow-100">
              Writing clean, efficient, real-time code for dynamic and high-performance frontend apps.
            </p>
          </div>
        </div>
        {/* Image Block */}
        <div className="flex justify-center items-center">
          <img src="teji.png" className="w-72 h-72 rounded-full border-4 border-white shadow-2xl object-cover" alt="Tejinder Singh" />
        </div>
      </div>

      {/* About Text Section */}
      <section className='p-6 w-full'>
        <p className='text-2xl text-orange-900 mb-6 animate-text leading-relaxed bg-gradient-to-r from-zinc-200 to-red-300 p-5 rounded-xl'>
          Hello! I'm Tejinder Singh, a passionate web developer with a knack for creating interactive and responsive web applications using React JS.
        </p>
      </section>

      {/* Skills and Experience Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 p-6 bg-gradient-to-br from-white to-orange-50 shadow-lg'>
        <div>
          <h2 className='text-3xl font-bold text-indigo-700 mb-2 border-b-2 border-indigo-400 pb-2 w-36 animate-fade-in-down ml-20 '>
            My Skills
          </h2>
          <ul className='list-disc list-inside text-lg text-gray-800 space-y-3 animate-fade-in-left ml-20'>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>JavaScript (ES6+)</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>React.js</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>HTML & CSS</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Tailwind CSS</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Node.js</li>
            <li className='hover:text-indigo-600 transition duration-300 ease-in-out'>Git & GitHub</li>
          </ul>
        </div>
        <div>
          <h2 className='text-3xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-400 pb-2 w-36 animate-fade-in-down ml-44'>
            Experience
          </h2>
          <p className='text-lg text-gray-800 leading-relaxed animate-fade-in-right ml-44 text-wrap'>
            I have worked on various projects, ranging from small personal websites to larger applications. My
            experience includes collaborating with teams to deliver high-quality software solutions.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className='p-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-700 shadow-xl animate-fade-in-up pt-8 pl-24 '>
        <h2 className='text-4xl font-extrabold text-white mb-4 border-b-2 border-purple-300 pb-2 w-72 md:w-fit animate-slide-in'>
          My Philosophy
        </h2>
        <p className='text-lg text-indigo-100 mb-4 leading-relaxed animate-fade-in'>
          I believe in writing clean, maintainable code and continuously learning new technologies to improve my skills. I am committed to delivering the best user experience through thoughtful design and functionality.
        </p>
      </section>

      {/* Get in Touch Section */}
      <section className='flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 w-full to-indigo-100 shadow-lg animate-fade-in'>
        <h2 className='text-4xl font-bold text-indigo-800 mb-5 animate-fade-in-delayed'>
          Get in Touch
        </h2>
        <p className='text-xl text-gray-700 mb-6 text-center leading-relaxed max-w-2xl animate-fade-in'>
          Have a project in mind, a question, or just want to connect?
          Feel free to reach out to me via my&nbsp;
          <Link
            to='/contact'
            className='text-purple-700 underline hover:text-purple-900 font-semibold transition duration-300 ease-in-out'
          > Contact </Link>
          &page for any inquiries or collaborations!
        </p>
        <Link
          to='/contact'
          className='px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-150  '
        >Send a Message</Link>
      </section>
    </div>
  );
}

export default Home;