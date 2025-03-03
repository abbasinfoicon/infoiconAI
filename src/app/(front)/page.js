import React from 'react'
import Slider from '../components/home/Slider'
import Service from '../components/home/Service'
import About from '../components/home/About'
import Feature from '../components/home/Feature'
import Faq from '../components/home/Faq'
import Info from '../components/home/Info'

const Home = () => {
  return (
    <main className='home_pgs'>

      <Slider />
      <Service />
      <About />
      <Feature />
      <Faq />
      <Info />

    </main>
  )
}

export default Home