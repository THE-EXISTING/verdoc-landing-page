import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from '../components/common/Navbar'
import Header from '../components/section/Landing/Header'
import R from '../components/resources/R'
import SEO from '../components/utility/Seo'
import MvpFeatures from '../components/section/Landing/Mvp'
const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${R.fonts.text.name};
  }
  
`
const ContainerGlobal = styled.div`
  width: 100vw;
  height: 100vh;
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
    </ContainerGlobal>
  </>
)

export default IndexPage
