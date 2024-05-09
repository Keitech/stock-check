import React from 'react'
import { LeftContainer, Level3Container, RightContainter } from './HomeStyles/HomeLevel3Styles'

import tickerImg from '../../assets/ticker.png'

const HomeLevel3 = () => {
  return (
    <Level3Container>
      <LeftContainer>
        <img src={tickerImg} alt='ticker image' style={{height: '400px'}}/>
      </LeftContainer>
      <RightContainter>
        <div>Visualize live tickers with beautiful charts!</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </RightContainter>
    </Level3Container>
  )
}

export default HomeLevel3