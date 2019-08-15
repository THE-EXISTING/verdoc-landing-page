import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import R from '../resources/R'
import Navbar from './Navbar'
import Footer from './Footer'

const GlobbalStyled = createGlobalStyle`
  @font-face{
      font-family: 'Roboto-Medium';
      src: url('../fonts/Roboto/Roboto-Medium.ttf') format('truetype');
    }
  
  body {
    margin: 0;
    background: ${R.colors.white};
  }
`

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const ContainerGlobal = props => {
  return (
    <>
      <GlobbalStyled />
      <Container>
        <Navbar />
        {props.children}
        <Footer />
      </Container>
    </>
  )
}

export default ContainerGlobal
