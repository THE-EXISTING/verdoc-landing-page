import React from 'react'
import ContainerGlobal from '../components/common/ContainerGlobal'
import Header from '../components/section/SignDocumentPage/Header'
import BtnUpload from '../components/section/SignDocumentPage/BtnUpload'
import Works from '../components/section/Landing/Works'
import styled from 'styled-components'

const Space = styled.div`
  margin-bottom: 7rem;
`

const SignDocumets = () => {
  return (
    <ContainerGlobal>
      <Header />
      <BtnUpload />
      <Works />
      <Space />
    </ContainerGlobal>
  )
}
export default SignDocumets
