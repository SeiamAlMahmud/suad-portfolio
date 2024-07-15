import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from '../assets/xyz/pexels-esther-234072-2863546.jpg'
import img2 from '../assets/xyz/pexels-moose-photos-170195-1037992.jpg'
import img3 from '../assets/xyz/pexels-rickyrecap-1964475.jpg'


const ReactCaro = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div className='py-8 bg-gray-900'>

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all 1s"
  transitionDuration={500}
  containerClass="carousel-container"f
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

>
<div className='flex items-center justify-center px-2'><img src={img1} alt="" className='h-96 w-96 ' />
</div>
<div className='flex items-center justify-center px-2'><img src={img2} alt="" className='h-96 w-96 ' />
</div>
<div className='flex items-center justify-center px-2'><img src={img3} alt="" className='h-96 w-96 ' />
</div>

<div className='flex items-center justify-center px-2'><img src={img1} alt="" className='h-96 w-96 ' />
</div>
<div className='flex items-center justify-center px-2'><img src={img2} alt="" className='h-96 w-96 ' />
</div>
<div className='flex items-center justify-center px-2'><img src={img3} alt="" className='h-96 w-96 ' />
</div>

</Carousel>
    </div>
  )
}

export default ReactCaro