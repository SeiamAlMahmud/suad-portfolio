import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import imag from '../assets/sunday.png'
const HeroSection = () => {
  const words = [' Suad', ' a graphic designer']
  const [text] = useTypewriter({
    words: words,
    loop: 0
  })
  return (
    <>
      <div>
        <div className="flex justify-between items-center    flex-col sm:flex-row px-4 bg-[#000] pb-16 pt-10">
          <div className="flex-1 flex items-center text-2xl text-white">
            <h1 style={{ margin: '50px' }} className='sm:text-5xl'>
              I'm
              <span style={{ fontWeight: "bold", color: 'green' }}>
                {text}
              </span>
              <span className='text-red-700'>
              <Cursor />
              </span>
            </h1>

          </div>
          <div className="flex-shrink-0 flex items-center rounded-[50%] bg-[#0000005d] overflow-hidden  border-teal-400 border-4 shadow-lg shadow-teal-400 md:mr-20">
            <img src={imag} alt="Description" className="w-52 h-52 rounded-full sm:h-72 sm:w-72 md:w-96 md:h-96" /> {/* Adjust size as needed */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection