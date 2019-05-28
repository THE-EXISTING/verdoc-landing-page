import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import img_mock_iphone from '../images/mock_iphone.png'

const BodyBackground = styled.div`
  /* margin-top: 1050px; */
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -2;
  bottom: 0;
  right: 0;

  margin-bottom: 0px;

  ${media.lessThan('large')`
      display:block;
      position: relative;  
    `}
`

const ImageMockMobile = styled.div`
  /* background-color: green; */

  width: 100%;
  height: 700px;
  background-image: url(${img_mock_iphone});
  background-repeat: no-repeat;
  background-size: 440px auto;
  background-position-x: right;

  margin-left: 120px;
  -ms-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);

  ${media.lessThan('large')`
  background-size: 90% auto; 
  /* background-position: top 950px; */
  background-position: top center;
  -ms-transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  margin-left: auto;
  margin-right: auto;
  height: 550px;

    `}
  ${media.between('medium', 'large')`
  margin-top: -100px;
    background-size: 450px auto; 
    height: 550px;
    `}
`

const MockMobile = () => (
  <BodyBackground>
    <ImageMockMobile />
  </BodyBackground>
)
export default MockMobile
