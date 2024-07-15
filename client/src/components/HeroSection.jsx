import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import imag from '../assets/sunday.png'
import bg001 from '../assets/bg-001.jpg'
const HeroSection = () => {
  const words = [' Suad', ' A Graphics Designer']
  const [text] = useTypewriter({
    words: words,
    loop: 0,
    typeSpeed: 250
  })
  return (
    <>
      <div className='relative w-full h-[30rem] bg-no-repeat bg-cover bg-center flex items-center justify-center '  style={{ backgroundImage: `url(${bg001})` }}>
        <div className="w-full h-full   text-center top-56  bg-black bg-opacity-80 pr-6 grid place-content-center">
        <h1 style={{ margin: '50px' }} className='text-5xl text-white'>
              I'm
              <span style={{ fontWeight: "bold", color: 'green' }}>
                {text}
              </span>
              <span className='text-red-700'>
              <Cursor />
              </span>
            </h1>
      
        </div>
      </div>
    </>
  )
}

export default HeroSection


