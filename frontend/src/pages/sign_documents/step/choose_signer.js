import React from 'react'
import ContainerGlobal from '../../../components/common/ContainerGlobal'
import styled from 'styled-components'
import App from '../../../components/section/SignDocumentPage/ChooseSignerStep/App'

const Space = styled.div`
  margin-bottom: 7rem;
`

const SignDocumets = () => {
  return (
    <ContainerGlobal>
      <App />
    </ContainerGlobal>
  )
}
export default SignDocumets
