import React from 'react'
import styled from 'styled-components'
import R from '../../../resources/R'

const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerViweportPDF = styled.div`
  max-width: 392px;
  height: 598px;
  border: 1px solid ${R.colors.gray};
  border-radius: 4px;
`
const ContainerChooseSigner = styled.div`
  max-width: 464px;
`

const IconBack = styled.img`
  background: ${R.colors.primary};
`

const App = () => {
  return (
    <>
      <WrapContainer>
        <ContainerViweportPDF />
        <IconBack />
        <ContainerChooseSigner />
      </WrapContainer>
    </>
  )
}

export default App
