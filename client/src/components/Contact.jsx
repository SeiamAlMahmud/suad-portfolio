import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        (res) => {
          console.log(res)
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
console.log(import.meta.env.VITE_YOUR_PUBLIC_KEY)
  return (
    <div className='flex justify-center items-center bg-red-100 h-screen flex-col'>
      
      <form ref={form} onSubmit={sendEmail}>
    <div className='flex flex-col pt-96 md:pt-80 pb-10 gap-3'>

      <label htmlFor='name' className='text-xl font-semibold'>Name</label>
      <input type="text" name="name" id='name' className='h-10 sm:w-[27rem] outline-none p-1 text-lg rounded-md' />
      <label htmlFor='email' className='text-xl font-semibold'>Email</label>
      <input type="email" name="email" id='email' className='h-10 outline-none p-1 text-lg rounded-md' />
      <label htmlFor='subject' className='text-xl font-semibold'>Subject</label>
      <input type="text" name="subject" id='subject' className='h-10 outline-none px-1 py-2 text-lg rounded-md' />
      <label htmlFor='msg' className='text-xl font-semibold'>Message</label>
      <textarea name="message" id='msg' className='h-40 outline-none p-1 text-lg rounded-md resize-none'  />
      <input type="submit" value="Send" className='bg-blue-500 px-2 py-2 rounded-md mt-5 cursor-pointer' />
    </div>
    </form>
    <Footer/>
    </div>
  )
}

export default Contact