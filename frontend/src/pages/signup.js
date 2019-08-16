import React, { useState } from 'react'
import Form from '../components/section/SignupPage/Form'
// import Navbar from '../components/common/Navbar'
import FormAccount from '../components/common/FormAccount'
import styled, { createGlobalStyle } from 'styled-components'
import R from '../components/resources/R'
import ModalCreateSignature from '../components/section/SignupPage/ModalCreateSignature'
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

const SignupPage = () => {
  const [isShow, setIsShow] = useState(false)
  const show = () => setIsShow(true)
  const hide = () => setIsShow(false)

  return (
    <ContainerGlobal>
      <ModalCreateSignature isShow={true} hide={hide} />
      <GlobbalStyled />
      <FormAccount isLogin={false}>
        <Form show={show} />
      </FormAccount>
    </ContainerGlobal>
  )
}

export default SignupPage
