// src/Components/Projects.js
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce platform with user authentication, product listings, shopping cart, and secure checkout.',
    imageUrl: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-business-concept-of-online-shopping-e-commerce-png-image_5345089.jpg', // Placeholder image
    liveUrl: 'https://e-commerce-theta-ivory-90.vercel.app/', 
    githubUrl: 'https://github.com/tejinder0007/e_commerce.git', 
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive web application for managing daily tasks, featuring drag-and-drop functionality and progress tracking.',
    imageUrl: 'https://www.meistertask.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F289344%2F1521x1001%2F61554d4bfc%2Fui-image_project-management.png%3Fv%3D3&w=1920&q=75', // Placeholder image
    liveUrl: 'https://task-management-app-lime-eight.vercel.app/',
    githubUrl: 'https://github.com/tejinder0007/Task_management_app_.git',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Displays current weather and a 5-day forecast for any city using a third-party API.',
    imageUrl: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/96871810feedc87997a8410cb473a937d2777914', // Placeholder image
    liveUrl: 'https://weather-dashboard-chi-hazel.vercel.app/',
    githubUrl: 'https://github.com/tejinder0007/weather_Dashboard.git',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'Search for recipes based on ingredients or meal type, with detailed instructions and nutritional information.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E12AQGXNk6g7o6R3Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1638904437200?e=2147483647&v=beta&t=5dEkAy0HVNEV0kkVsiNT66oqadP6ZWDSJAs6V2l52M0', // Placeholder image
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing skills, projects, and contact information. Built with React and Tailwind CSS.',
    imageUrl: '/portfolio.png', 
    liveUrl: 'https://my-portfolio-one-beta-17.vercel.app/',
    githubUrl: "https://github.com/tejinder0007/My_Portfolio.git"
  },
];

function Projects() {
  return (
    // Changed padding to be smaller on mobile (px-4) and larger on desktop
    <section className='px-4 sm:px-10 lg:px-16 bg-gray-50 py-12 shadow-inner animate-fade-in'>
      
      <div className='text-center mb-12'>
        {/* Responsive Text: text-3xl on mobile, 5xl on desktop */}
        <h1 className='text-3xl md:text-5xl font-extrabold text-indigo-800 mb-4 animate-slide-down'>
          My Projects
        </h1>
        <p className='text-lg md:text-xl text-gray-700 animate-fade-in-delayed'>
          Here you can explore some of my recent work and creations.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className='bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col'
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className='w-full h-52 object-cover'
            />
            
            {/* Added flex-col and justify-between to make sure buttons stay at the bottom if descriptions vary in length */}
            <div className='p-6 flex flex-col flex-grow justify-between'>
              <div>
                <h3 className='text-2xl font-bold text-indigo-700 mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-700 text-base mb-6'>
                  {project.description}
                </p>
              </div>

              {/* Button Container: wraps on very small screens if needed */}
              <div className='flex flex-wrap gap-3 justify-between items-center mt-auto'>
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  // Responsive button text and padding
                  className='flex-1 flex justify-center items-center space-x-2 px-3 py-2 bg-purple-600 text-white text-sm md:text-base rounded-lg hover:bg-purple-700 transition duration-300 transform hover:-translate-y-1 min-w-[120px]'
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex justify-center items-center space-x-2 px-3 py-2 bg-gray-800 text-white text-sm md:text-base rounded-lg hover:bg-gray-900 transition duration-300 transform hover:-translate-y-1 min-w-[100px]'
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;