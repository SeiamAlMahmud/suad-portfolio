import React from 'react'
import img1 from '../assets/open.png'
import img2 from '../assets/close.png'
const CardItems = ({ img,quote,feedbackName }) => {
    return (
        <div className='border py-10 border-pink-100  h-auto w-full flex justify-center items-center flex-col  card'>
          
                <img src={img} alt="" className='rounded-full bg-cover w-auto h-40 mb-4 z-20' />
            
            <div className='p-5 z-20'>
                <h3 className='px-42 text-sm md:text-lg'>
                <span>
                    <img src={img1} className='h-5 w-auto' alt="" />
                     </span>
                  <i>
                  {quote}
                    </i> 
                <span className='flex justify-end gap-7'>
                    <b className=''>-{feedbackName}</b>
                   <img src={img2} className='h-5 w-auto ' alt="" />
                </span>
                </h3>
            </div>
        </div>
    )
}

export default CardItems