import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import img_mock_iphone from '../images/mock_iphone.png'

const BodyBackground = styled.div`
  /* background-color: green; */
  width: 700px;
  height: 1000px;
  position: absolute;
  z-index: -2;
  bottom: 0px;
  top: 200px;
  right: 0px;
  margin-bottom: 0px;

  ${media.lessThan('medium')`
      margin-top: 60px;
      top:0px;
      width: 100vw;
      height: 400px;
      display: block;
      position: relative;  
    `}

  ${media.between('medium', 'large')`
      margin-top: 120px;
      top:0px;
      width: 100vw;
      /* height: 480px; */
      height: 600px;
      display: block;
      position: relative;  
    `}
    
    @media(min-width: 1640px) {
    right: 210px;
  }
`

const ImageMockMobile = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img_mock_iphone});
  background-repeat: no-repeat;
  background-size: 440px auto;
  background-position-y: bottom;
  background-position-x: right;
  margin-left: 120px;
  -ms-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);
  ${media.lessThan('large')`
    background-size: 440px auto; 
    background-position: top center;
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    margin-left: auto;
    margin-right: auto;
    height: 430px;
    `}
    ${media.lessThan('medium')`
    max-width: 500px;
    background-size: 90% auto; 
    height: 100%;
    `}
  ${media.between('medium', 'large')`
    margin-top: -100px;
    background-size: 440px auto; 
    height: 100%;
    `}
    
    `

const MockMobile = () => (
  <>
    <BodyBackground>
      <ImageMockMobile />
    </BodyBackground>
  </>
)
export default MockMobile
