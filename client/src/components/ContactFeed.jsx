import React from 'react'
import Lottie from "lottie-react";
import lottieAnimation from '../lottie/lottie.json'
import { useNavigate } from 'react-router-dom';
const ContactFeed = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full bg-pink-100 py-12'>
            <div className='flex flex-col justify-evenly items-center lg:flex-row lg:items-center'>

               <Lottie animationData={lottieAnimation} loop={true} />
            
            <div className='flex flex-col gap-4'>
             <h1 className='capitalize text-6xl line-clamp-4 text-center font-sans font-semibold mx-5'>Do you  
             <span className='text-pink-700'> Interest </span>
              to work with me?</h1>
              <div className=" mx-auto mb-10">

              <button onClick={()=> navigate('/contact')} className="btn border-[#3A82F3] border-2 px-4 py-2 rounded-md uppercase hover:shadow-blue-500 hover:shadow-lg cursor-pointer">
        <span className="text-black font-bold">Get Started</span>
    </button>
              </div>
            </div>
        </div>
            </div>
    )
}

export default ContactFeed