import React from 'react'
import promotion from '../assets/hero-img.svg'
const PromotionQuote = () => {
  return (
    <>
    <div className="h-auto mx-auto w-4/6">
       <div className='flex-col justify-center items-center flex py-10 lg:flex-row md:gap-20'>
        
            <img src={promotion} className='h-72 w-72 md:h-96 md:w-96 ' />
        
        <div className='py-7 md:text-2xl animate-scale'>
            <h2 className=' p-2 font-mono gradient-text  duration-300 border-pink-500 border-2 rounded-md shadow-sm shadow-pink-600 '>
            "Transforming ideas into visual masterpieces—where creativity meets clarity. Elevate your brand with bespoke graphic design that speaks volumes."
            </h2>
        </div>
       </div>
    </div>
    </>
  )
}

export default PromotionQuote