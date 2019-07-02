import React from 'react'
import Form from '../components/section/ForgotPassWordPage/Form'
import Navbar from '../components/common/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import R from '../components/resources/R'

const GlobbalStyled = createGlobalStyle`
  body {
    
    @font-face{
      font-family: 'Roboto-Medium';
      src: url('../fonts/Roboto/Roboto-Medium.ttf');
    }

    margin: 0;
    background: ${R.colors.white};
  }
`

const ContainerGlobal = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const ForgotPasswordPage = () => {
  return (
    <ContainerGlobal>
      <Navbar isLanding={true} />
      <GlobbalStyled />
      <Form />
    </ContainerGlobal>
  )
}

export default ForgotPasswordPage
