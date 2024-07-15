import React from 'react'
import Carousel from 'react-multi-carousel'
import CardItems from './CardItems'
import img1 from '../assets/seiam.jpg'
import img2 from '../assets/monzil.jpg'
const Card = () => {


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };



  return (
    <div className='py-8 '>
        <h1 className='text-6xl p-10 font-serif font-semibold bg-teal-100'>
            What our Clients <br></br>
            <span className='text-pink-600'>Think</span>
              <br>
              </br>About Us?
        </h1>
<div className=''>
<Carousel responsive={responsive}
swipeable={false}
draggable={false}
showDots={true}
infinite={true}
autoPlay={true}
autoPlaySpeed={9000}
customTransition="all 1s"
transitionDuration={500}
>
    <div className='flex justify-center items-center px-2'>
    <CardItems img={img1} />
    </div>
    <div className='flex justify-center items-center px-22'>
    <CardItems img={img2} />
    </div>
   
</Carousel>
</div>


    </div>
  )
}

export default Card