   import React from 'react';

   function Contact() {
     return (
       <div className='bg-[url("https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg?semt=ais_hybrid&w=740")]  w-full items-center justify-center flex flex-col bg-no-repeat bg-cover'>
        
         <form className=' flex flex-col  space-y-9 p-7 m-12 justify-center  bg-slate-700 rounded-2xl px-16'>
           <input type="text" placeholder="&nbsp;Your Name" className='rounded-xl 'required />
           <input type="email" placeholder="&nbsp;Your Email" className='rounded-xl' required />
           <textarea placeholder="&nbsp;Your Message" className='rounded-xl' required></textarea>
           <button type="submit" className='rounded-xl bg-red-500 animate-bounce'>Send</button>
         </form>
       </div>
     );
   }

   export default Contact;
   