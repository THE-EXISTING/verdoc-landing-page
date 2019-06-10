import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import R from '../resources/R'

const BodyBackground = styled.div`
  
  width: 700px;
  height: 1000px;
  position: absolute;
  z-index: -2;
  bottom: 0px;
  top: 200px;
  right: 0px;
  margin-bottom: 0;

  ${media.lessThan('medium')`
    margin-top: 60px;
    top:0px;
    width: 100vw;
    height: 400px;
    position: relative;  
  `}

  ${media.between('medium', 'large')`
    margin-top: 120px;
    top:0px;
    width: 100vw;
    height: 600px;
    display: block;
    position: relative;  
  `}

  ${media.greaterThan('1640px')`
    right: 210px;
  `}
`

const ImageMockMobile = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${R.images.mock_mobile});
  background-repeat: no-repeat;
  background-size: 440px auto;
  background-position-y: bottom;
  background-position-x: right;
  margin-left: 120px;
  -ms-transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);

  ${media.lessThan('large')`
    background-position: top center;
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    margin-left: auto;
    margin-right: auto;
    `}

  ${media.lessThan('medium')`
    max-width: 500px;
    background-size: 90% auto; 
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
