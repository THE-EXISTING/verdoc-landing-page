import React from 'react'
import styled from 'styled-components'
import ItemSignerMe from '../../../common/ItemSigenerMe'
import TextDetail from '../../../common/DetailText'
import BtnSubmitForm from '../../../common/BtnSubmitForm'
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 1.5rem 11px;
`

const TextDetailLeft = styled(TextDetail)`
  && {
    margin: 0;
  }
`

const SignerMe = () => {
  return (
    <Container>
      <TextDetailLeft
        text="You are logged in to view and sign this document as"
        space="0"
        isWrap={false}
        disableMargin={true}
      />
      <ItemSignerMe />
      <BtnSubmitForm text="Sign Documents" disableMaxWidth={true} />
    </Container>
  )
}

export default SignerMe
