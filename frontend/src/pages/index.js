import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/section_header'
import Subscribe from '../components/section_subscribe'
import Line from '../components/section_line'
import MockMobile from '../components/mock_mobile'

// import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Courier';
    src: url('../static/font/courier1.ttf');
  }
  body{
    opacity: 12%;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(0, 0, 0, 0.12) 25%,
      rgba(0, 0, 0, 0.12) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.12) 75%,
      rgba(0, 0, 0, 0.12) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(0, 0, 0, 0.12) 25%,
      rgba(0, 0, 0, 0.12) 26%,
      transparent 27%,
      transparent 74%,
      rgba(0, 0, 0, 0.12) 75%,
      rgba(0, 0, 0, 0.12) 76%,
      transparent 77%,
      transparent
    );
  z-index: -5;
  height: 100%;
  background-size: 75px 75px;
  }
  `
const BodyBackground = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  float: left;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <BodyBackground>
      <Header />
      <Subscribe />
      <Line />
      <MockMobile />
    </BodyBackground>
  </>
)

export default IndexPage
