import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/dist'
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';
import img from "../assets/IMG_20240716_231144.png"
const Navbar = () => {
    
    const [scrollingDown, setScrollingDown] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
   

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > lastScrollY) {
            // Scrolling down
            setScrollingDown(true);
          } else {
            // Scrolling up
            setScrollingDown(false);
          }

   // Update the last scroll position
   setLastScrollY(currentScrollY);
};

window.addEventListener('scroll', handleScroll);

// Cleanup event listener on component unmount
return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

    // console.log(lastScrollY,scrollingDown)
    return (
        <>
            <div className=" flex w-full items-center justify-between px-2 py-0 bg-black border-b-2 border-r-blue-300 ">   
                <img src={img} alt="" className='h-20' />   
                <ul className=' gap-3 py-4 text-md hidden  sm:flex sm:gap-7 text-xl md:text-2xl font-semibold text-white'>
                    <li className='px-2 py-1  hover:bg-teal-200 duration-150 ease-in rounded-2xl hover:text-black'><Link to={"/"}>About me</Link></li>
                    <li className='px-2 py-1  hover:bg-teal-200 duration-150 ease-in rounded-2xl hover:text-black'><Link to={"/"}>Contact us</Link></li>
                    <li className='px-2 py-1  hover:bg-teal-200 duration-150 ease-in rounded-2xl hover:text-black'><Link to={"/"}> About me</Link></li>
                </ul>
                <div className='sm:hidden'>
                    <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
                </div>
            </div>
        </>
    )
}

export default Navbar