import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import img_mock_iphone from '../images/mock_iphone.png'

const BodyBackground = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -2;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin-bottom: 0px; 
   
  /* background-color: green; */
  
  /* ${media.lessThan('medium')`
      display:block;
      position: relative;
    `} */
`

const ImageMockMobile = styled.div`
  margin-right: -10px;
  width: 100%;
  height: 600px;
  background-image: url(${img_mock_iphone});
  background-repeat: no-repeat;
  background-size: 400px auto;
  background-position-x: right;
  margin-left: 100px;
  -ms-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);

  ${media.lessThan('medium')`
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
    `}
`
const MockMobile = () => (
  <BodyBackground>
    <ImageMockMobile />
  </BodyBackground>
)
export default MockMobile
