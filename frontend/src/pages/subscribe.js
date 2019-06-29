import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { getFirebase } from '../components/utility/Firebase'
import Navbar from '../components/common/Navbar'
import MockMobile from '../components/common/MockMobile'
import Header from '../components/section/SubscribePage/Header'
import Subscribe from '../components/section/SubscribePage/Subscribe'
import Line from '../components/section/SubscribePage/Line'
import R from '../components/resources/R'
import SEO from '../components/utility/Seo'

const GlobalStyle = createGlobalStyle`
  
  body{
      font-family: ${R.fonts.text.name};
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
`

const SubscribePage = () => {
  // const [modalActive, setModalActive] = useState(fa)
  const [firestore, setFirestore] = useState({})
  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/firestore')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      setFirestore(getFirebase(firebase))
    })
  })
  return (
    <>
      <SEO
        title="Verdoc"
        description="Make your company paperless."
        url="https://verdoc.io"
        image={R.images.og_image}
      />
      <GlobalStyle />

      <BodyBackground>
        <Navbar isLanding={false} />
        <Header />
        <Subscribe db={firestore} />
        <Line />
        <MockMobile />
      </BodyBackground>
    </>
  )
}

export default SubscribePage
