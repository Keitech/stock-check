import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeLevel1 from './HomeLevel1'
import HomeLevel2 from './HomeLevel2'
import HomeLevel3 from './HomeLevel3'
import Footer from '../Footer/Footer'

const HomePage: React.FC = () => {
  return (
    <>
      <HomeCarousel />
      <HomeLevel1 />
      <HomeLevel2 />
      {/* <HomeLevel3 /> */}
      <Footer />
    </>
  )
}

export default HomePage