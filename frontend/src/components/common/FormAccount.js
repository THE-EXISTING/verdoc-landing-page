import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import SideContent from './SideLeftContent'

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

const FormAccount = () => {
  return (
    <Container>
      <VerdocWhite src={R.images.logo_verdoc_footer} />
      <SideContent />
    </Container>
  )
}

export default FormAccount
