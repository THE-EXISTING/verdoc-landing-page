import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from '../components/common/Navbar'
import R from '../components/resources/R'
import SEO from '../components/utility/Seo'

const GlobalStyle = createGlobalStyle`
  body{font-family: ${R.fonts.text.name};}
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
    <Navbar />
  </>
)

export default IndexPage
