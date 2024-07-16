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

      const feedback1 = "I recently engaged with a graphic designer for a project and found the final results to be impressive. The design quality was excellent, with vibrant visuals that effectively captured our brand's essence. ";
      const feedbackName1 = "Seiam Al Mahmud"
      const feedbackName2 = "MD. Monzil"
      const feedback2 = "We recently worked with a graphic designer and were impressed with the final outcome. The design quality was top-notch, featuring vibrant visuals that effectively captured our brand. ";



  return (
    <div className='py-8 '>
        <h1 className='text-6xl p-10 font-serif font-semibold bg-teal-100 text-center'>
            What our Clients <br></br>
            <span className='text-pink-600'>Think</span>
              <br>
              </br>About Us?
        </h1>
<div className='mx-auto'>
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
    <div className='flex justify-center items-center px-2 '>
    <CardItems img={img1} quote={feedback1} feedbackName={feedbackName1} />
    </div>
    <div className='flex justify-center items-center px-22'>
    <CardItems img={img2} quote={feedback2} feedbackName={feedbackName2} />
    </div>
   
</Carousel>
</div>


    </div>
  )
}

export default Card