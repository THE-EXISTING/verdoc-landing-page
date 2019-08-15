import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from '../components/common/Navbar'
import Header from '../components/section/Landing/Header'
import MvpFeatures from '../components/section/Landing/Mvp'
import Works from '../components/section/Landing/Works'
import Partner from '../components/section/Landing/Partner'
import Reason from '../components/section/Landing/Reason'
import Api from '../components/section/Landing/Api'
import Quote from '../components/section/Landing/Quote'
import Footer from '../components/common/Footer'
import R from '../components/resources/R'
import SEO from '../components/utility/Seo'

const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: 'Roboto-Regular';
    src: url('../fonts/Roboto/Roboto-Regular.ttf') format('truetype');
  }

  @font-face{
    font-family: 'Roboto-Medium';
    src: url('../fonts/Roboto/Roboto-Medium.ttf') format('truetype');
  }

  @font-face{
    font-family: 'RobotoSlab-Regular';
    src: url('../fonts/Roboto_Slab/RobotoSlab-Regular.ttf') format('truetype');
  }

  body{
    font-family: ${R.fonts.text.name};
    margin: 0;
    background: ${R.colors.white};
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
      <Reason />
      <Api />
      <Quote />
      <Footer />
    </ContainerGlobal>
  </>
)

export default IndexPage
