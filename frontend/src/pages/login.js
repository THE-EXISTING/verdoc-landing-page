import React from 'react'
import Form from '../components/section/LoginPage/Form'
import Navbar from '../components/common/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
// const GlobbalStyled = createGlobalStyle`
//   body {
//     margin: 0;
//   }
// `
// const ContainerGlobal = styled.div`
//   width: 100vw;
//   margin: 0 auto;
//   text-align: center;
//   overflow: hidden;
// `
const login = () => {
  return (
    // <ContainerGlobal>
    //   <GlobbalStyled />
    <>
      <Navbar isLanding={true} />
      <Form />
    </>

    // </ContainerGlobal>
  )
}

export default login
