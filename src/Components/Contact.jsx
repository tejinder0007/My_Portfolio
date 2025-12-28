// src/Components/Contact.js
import React from 'react';

function Contact() {
  return (
    // MAIN CONTAINER
    <div className='bg-[url("https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg?semt=ais_hybrid&w=740")] w-full min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed px-4'>
      
      {/* FORM CONTAINER */}
      {/* Changed p-8 to p-6 for better spacing on mobile */}
      <form className='flex flex-col space-y-6 w-full max-w-md p-6 bg-slate-700/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden'>
        
        <h2 className='text-3xl text-white font-bold text-center mb-4'>Contact Me</h2>

        {/* INPUTS: Added 'w-full' to prevent them from sticking out */}
        <input 
          type="text" 
          placeholder="Your Name" 
          className='w-full rounded-xl p-3 outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-gray-800' 
          required 
        />
        
        <input 
          type="email" 
          placeholder="Your Email" 
          className='w-full rounded-xl p-3 outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-gray-800' 
          required 
        />
        
        <textarea 
          placeholder="Your Message" 
          rows="5"
          className='w-full rounded-xl p-3 outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-gray-800 resize-none' 
          required
        ></textarea>
        
        <button 
          type="submit" 
          className='w-full rounded-xl bg-red-500 text-white font-bold py-3 hover:bg-red-600 active:scale-95 transition-all shadow-lg animate-bounce'
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;