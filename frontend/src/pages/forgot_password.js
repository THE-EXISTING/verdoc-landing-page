import React from 'react'
import Form from '../components/section/ForgotPassWordPage/Form'
import Powerby from '../components/common/PowerBy'
import styled, { createGlobalStyle } from 'styled-components'
import R from '../components/resources/R'

const GlobbalStyled = createGlobalStyle`
  body {
    
    @font-face{
      font-family: 'Roboto-Medium';
      src: url('../fonts/Roboto/Roboto-Medium.ttf') format('truetype');
    }

    margin: 0;
    background: ${R.colors.white};
  }
`

const ContainerGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background: green; */
`
const PowerbyBottom = styled(Powerby)`
  position: absolute;
  bottom: 0;
`
const VerdocLogo = styled.img`
  width: 121px;
  height: 28px;
  position: absolute;
  left: 40px;
  top: 32px;
`
const ForgotPasswordPage = () => {
  return (
    <ContainerGlobal>
      {/* <Navbar isLanding={true} /> */}

      <GlobbalStyled />
      <VerdocLogo src={R.images.logo_verdoc} />
      <Form />
      <PowerbyBottom />
    </ContainerGlobal>
  )
}

export default ForgotPasswordPage
