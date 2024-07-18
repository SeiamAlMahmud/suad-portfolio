import React from 'react'
import img from "../assets/sunday.png"
import SpeedDial from './SpeedDial'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <SpeedDial />
    <div className='flex flex-col items-center my-2 mt-20'>
      <div className='bg-black rounded-full overflow-hidden border-4 shadow-teal-300 border-teal-300 '>
      <img src={img} alt="suad" className=' w-72 h-72' />
      </div>
<div className='mx-6 mt-6 rounded-md flex flex-col justify-center  items-center w-4/5 pb-20'>
 <p className='p-5   bg-red-50 text-lg'>
  Hi, I am Suad ,
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsum at dicta id veritatis. Eum odio ab voluptas. Obcaecati vel voluptatibus aspernatur? Quae, reiciendis autem!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi architecto ratione, alias tempore asperiores, illo tempora quos, blanditiis provident reprehenderit nobis? Consequuntur, laudantium!
 <br /><br/>
  <strong className='text-lg p-3 bg-red-500 text-white rounded-md shadow-lg flex items-center justify-center hover:bg-red-600 my-5'>Contact With me </strong>
  <br></br>
 
 
 <b>Email:</b>   <a
            href="mailto:suadhasan2001@gmail.com"
            className=""
            aria-label="Email"
          >suadhasan2001@gmail.com</a><br />

<b>whatsApp: </b> <a href="tel:+8801962160452" className="" aria-label="Call">+880 1962160452</a>
 </p>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default About