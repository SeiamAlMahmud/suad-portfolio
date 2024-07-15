import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import PromotionQuote from './components/PromotionQuote'
import ReactMarquee from './components/ReactMarquee'
import ReactCaro from './components/ReactCaro'
import Card from './components/Card'
import AccordianChoice from './components/AccordianChoice'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<div className='h-screen'>
  <HeroSection/>
  <ReactCaro />
 <PromotionQuote/>
<Card />
<ReactMarquee dir={"left"} />
<ReactMarquee dir={"right"} />
<AccordianChoice />
</div>
</>
  )
}

export default App
