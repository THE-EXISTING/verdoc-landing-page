import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import SideContent from './SideLeftContent'
import Form from '../section/LoginPage/Form'
// import { Button } from '@material-ui/core'
import Button from '@material-ui/core/Button'
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const VerdocWhite = styled.img`
  width: 121px;
  height: 28px;
  position: absolute;
  left: 40px;
  top: 32px;
  z-index: 15;
`
const FrameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerQuestion = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 32px;
  right: 40px;
`
const TextQuestion = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
`
const BtnQuestion = styled(Button)`
  && {
    width: 80px;
    height: 36px;
    color: ${R.colors.primary};
    font-family: 'Roboto-Regular';
    font-size: 14px;
    white-space: nowrap;
    margin-left: 1rem;
  }
`

const FormAccount = () => {
  return (
    <Container>
      <VerdocWhite src={R.images.logo_verdoc_footer} />
      <SideContent />
      <ContainerQuestion>
        <TextQuestion>Don’t have an account?</TextQuestion>
        <BtnQuestion variant="outlined">SIGN UP</BtnQuestion>
      </ContainerQuestion>
      <FrameContainer>
        <Form />
      </FrameContainer>
    </Container>
  )
}

export default FormAccount
