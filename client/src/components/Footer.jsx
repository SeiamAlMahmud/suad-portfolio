import React from 'react'
import { Link } from 'react-router-dom/dist'
import img1 from "../assets/gr png.png"
import bkash from "../assets/BKash-bKash-Logo.wine.png"
import nagad from "../assets/Nagad-Logo.wine.png"
const Footer = () => {
  return (
    <>
    <div className='bg-black justify-evenly items-center grid grid-cols-1 sm:grid-cols-2 text-white w-full gap-20 px-10'>

      <div className='gap-10'>
        <img src={img1} className='h-auto w-36 ' />
        <h1 className='text-3xl font-bold lg:text-5xl'>Suad's Portfolio</h1>
        <div className="flex gap-5 py-5">

        <img src={bkash} alt="Bkash" className='bg-white w-36' />
        <img src={nagad} alt="Bkash" className='bg-white w-36' />
        </div>
      </div>
      <div> 
        <h1 className='text-3xl font-bold mt-24 md:text-5xl '>Find here more..</h1>
        <ul className='font-semibold gap-2 pt-4 text-lg flex flex-col'>
          <li>
            <Link to={"/about"}>About Me</Link>
          </li>
          <li>
          <Link to={"/contact"}>Contact with Me</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer