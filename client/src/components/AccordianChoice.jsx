import React from 'react'
import CustomizedAccordions from './CustomizedAccordions'

const AccordianChoice = () => {
  return (
    <div >
         <h1 className='text-6xl py-10 font-serif font-semibold bg-red-100 text-center'>
            Why are you <br></br>
            <span className='text-pink-600'>Choosing</span>
              <br>
              </br>Me?
        </h1>
        <div className='mx-auto w-4/6 py-5'>
        <CustomizedAccordions />
        </div>
    </div>
  )
}

export default AccordianChoice