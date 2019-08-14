import React from 'react'
import styled from 'styled-components'
import R from '../../../resources/R'
import { navigate } from 'gatsby'
import Button from '@material-ui/core/Button'

const BtnSigner = styled(Button)`
  && {
    font-family: 'Roboto-Medium';
    color: ${R.colors.primary};
    font-size: 0.8em;
    margin: 0.5rem 2rem;
    text-align: center;
    width: 163px;
    height: 86px;
  }
`

const WrapMenuSigner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`
const ChooseSigner = () => {
  return (
    <WrapMenuSigner>
      <BtnSigner
        variant="outlined"
        onClick={() => navigate('/sign_documents/step/only_me')}
      >
        ONLY ME
      </BtnSigner>
      <BtnSigner variant="outlined" href={''}>
        me and others
      </BtnSigner>
      <BtnSigner variant="outlined" href={''}>
        just others
      </BtnSigner>
    </WrapMenuSigner>
  )
}

export default ChooseSigner
