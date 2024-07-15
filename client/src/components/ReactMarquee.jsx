import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from '../assets/photoshop.png'
import img2 from '../assets/graphic-design.png'
import img3 from '../assets/illustrator.png'
import img4 from '../assets/photoshop-lightroom.png'
import img5 from '../assets/premiere-pro.png'
const ReactMarquee = ({dir}) => {
  return (
    <div className='md:px-20 py-8 bg-gray-950'>
        <Marquee direction={dir} gradient={false} autoFill={false} pauseOnHover={true} >
        <img src={img1} alt="" className='px-10 h-20'/> 
        <img src={img4} alt="" className='px-10 h-20'/> 
        <img src={img5} alt="" className='px-10 h-20'/> 
        <img src={img3} alt="" className='px-10 h-20'/> 
        <img src={img2} alt="" className='px-10 h-20'/> 
        <img src={img1} alt="" className='px-10 h-20'/> 
        <img src={img2} alt="" className='px-10 h-20'/> 
        <img src={img3} alt="" className='px-10 h-20'/> 
        <img src={img4} alt="" className='px-10 h-20'/> 
        <img src={img5} alt="" className='px-10 h-20'/> 
        </Marquee>

    </div>
  )
}

export default ReactMarquee