import React from 'react'
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
    const text =[]
  return (
<>
<div>
<Typewriter
  options={{
    strings: [' I am Hello', ' I am World'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
</>  
)
}

export default HeroSection