import About from '@/components/home/About'
import Faq from '@/components/home/Faq'
import Feature from '@/components/home/Feature'
import Service from '@/components/home/Service'
import Slider from '@/components/home/Slider'
import React from 'react'

const Home = () => {
  return (
    <main className='home_pgs'>

      <Slider />
      <Service />
      <About />
      <Feature />
      <Faq />

    </main>
  )
}

export default Home