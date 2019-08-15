import React from 'react'
import Form from '../components/section/LoginPage/Form'
// import Navbar from '../components/common/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import R from '../components/resources/R'
import FormAccount from '../components/common/FormAccount'
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const login = () => {
  return (
    <ContainerGlobal>
      {/* <Navbar isLanding={true} /> */}
      <GlobbalStyled />
      {/* <Form /> */}
      <FormAccount isLogin={true}>
        <Form />
      </FormAccount>
    </ContainerGlobal>
  )
}

export default login
