import React from 'react'
import styled from 'styled-components'
import R from '../../../resources/R'
import Button from '@material-ui/core/Button'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1.5rem 0 1.5rem 11px;
`

const TextAddSigner = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${R.colors.text_low_gray};
  white-space: nowrap;
  margin: 0.2rem 0;
`

const TextTips = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: ${R.colors.text_gray};
  white-space: nowrap;
  margin: 0.2rem 0;
`

const BtnViewDoc = styled(Button)`
  && {
    font-family: 'Roboto-Medium';
    color: ${R.colors.primary};
    font-size: 0.8em;
    height: 42px;
    text-align: center;
    margin: 1.5rem 0;
    width: 100%;
  }
`

const SignerOthers = () => {
  return (
    <Container>
      <TextAddSigner>Add some signers</TextAddSigner>
      <TextTips>(excluding yourself) to the document.</TextTips>
      <BtnViewDoc variant="outlined" href="/" target="_blank">
        Add a signer
      </BtnViewDoc>
    </Container>
  )
}

export default SignerOthers
