import React from 'react'
import img1 from '../assets/open.png'
import img2 from '../assets/close.png'
const CardItems = ({ img,quote }) => {
    return (
        <div className='border py-10 border-pink-100  h-auto w-full flex justify-center items-center flex-col px-20 lg:px-40'>
            <div>

                <img src={img} alt="" className='rounded-full bg-cover w-auto h-40 mb-4' />
            </div>
            <div className='p-4'>
                <h3 className='px-42 text-sm md:text-lg'>
                <span>
                    <img src={img1} className='h-5 w-auto' alt="" />
                     </span>
                   {quote}
                <span className='flex justify-end'>
                   <img src={img2} className='h-5 w-auto ' alt="" />
                </span>
                </h3>
            </div>
        </div>
    )
}

export default CardItems