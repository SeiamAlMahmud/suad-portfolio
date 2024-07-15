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

      const feedback1 = "I recently engaged with a graphic designer for a project and found the final results to be impressive. The design quality was excellent, with vibrant visuals that effectively captured our brand's essence. The creativity and communication throughout the process were strong, and the project was completed ahead of schedule. The technical execution was also flawless, providing good value for the investment.\n\nOn the downside, the design did not fully align with our initial vision, and there were some issues with communication and project delays. Additionally, there were minor technical problems related to file formats, and the overall cost seemed slightly high for the service received. While there were positive aspects, there are areas where improvements could enhance the overall experience.";

      const feedback2 = "We recently worked with a graphic designer and were impressed with the final outcome. The design quality was top-notch, featuring vibrant visuals that effectively captured our brand. The project was completed ahead of schedule, and the technical execution was spot-on, offering great value for the investment.\n\nHowever, the design did not fully meet our initial vision, and there were some issues with communication and project delays. We also faced minor technical issues with file formats, and the cost felt a bit high relative to the service provided. Overall, while there were positive elements, there are areas where improvements could be made.";



  return (
    <div className='py-8 '>
        <h1 className='text-6xl p-10 font-serif font-semibold bg-teal-100 text-center'>
            What our Clients <br></br>
            <span className='text-pink-600'>Think</span>
              <br>
              </br>About Us?
        </h1>
<div className='w-3/4 mx-auto'>
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
    <CardItems img={img1} quote={feedback1} />
    </div>
    <div className='flex justify-center items-center px-22'>
    <CardItems img={img2} quote={feedback2} />
    </div>
   
</Carousel>
</div>


    </div>
  )
}

export default Card