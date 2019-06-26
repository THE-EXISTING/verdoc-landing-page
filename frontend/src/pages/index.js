import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from '../components/common/Navbar'
import Header from '../components/section/Landing/Header'
import MvpFeatures from '../components/section/Landing/Mvp'
import Works from '../components/section/Landing/Works'
import Partner from '../components/section/Landing/Partner'

import R from '../components/resources/R'
import SEO from '../components/utility/Seo'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${R.fonts.text.name};
    margin: 0;
  }
  
`
const ContainerGlobal = styled.div`
  width: 100vw;
  /* height: 100vh; */
  margin: 0 auto;
  text-align: center;
  position: relative;
  overflow: hidden;
`

const IndexPage = () => (
  <>
    <SEO
      title="Verdoc"
      description="Make your company paperless."
      url="https://verdoc.io"
      image={R.images.og_image}
    />
    <GlobalStyle />

    <ContainerGlobal>
      <Navbar />
      <Header />
      <MvpFeatures />
      <Works />
      <Partner />
    </ContainerGlobal>
  </>
)

export default IndexPage
