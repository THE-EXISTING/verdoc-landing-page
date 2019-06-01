import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import firebase from '../components/firebase'
// import media from 'styled-media-query'
import Header from '../components/section_header'
import Subscribe from '../components/section_subscribe'
import Line from '../components/section_line'
import MockMobile from '../components/mock_mobile'

// import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
const GlobalStyle = createGlobalStyle`

  /* @font-face {
    font-family: 'Courier';
    src: url('../static/font/courier1.ttf');
  } */
  body{
      /* overflow: hidden; */
      
      background-color: transparent;
      background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(0, 0, 0, 0.03) 25%,
      rgba(0, 0, 0, 0.03) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.03) 75%,
      rgba(0, 0, 0, 0.03) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(0, 0, 0, 0.03) 25%,
      rgba(0, 0, 0, 0.03) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.03) 75%,
      rgba(0, 0, 0, .03) 76%,
      transparent 77%,
      transparent
    );
  z-index: -5;
  height: 100%;
  background-size: 75px 75px;
  margin: 0;
  
  }
  `
const BodyBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;
  /* background-color: green; */
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <BodyBackground>
      <Header />
      {/* <Subscribe db={firebase} /> */}
      <Subscribe />
      <Line />
      <MockMobile />
    </BodyBackground>
  </>
)

export default IndexPage
