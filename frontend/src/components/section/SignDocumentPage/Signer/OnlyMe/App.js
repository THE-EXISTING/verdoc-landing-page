import React from 'react'
import styled from 'styled-components'
import R from '../../../../resources/R'
import ViewPortSigning from '../../Sign/ViewPortSigning'
// import ChooseSigner from '../../../../common/ChooseSigner'
import SignForm from '../../Sign/SignForm'
const AppOnlyMe = () => {
  return (
    <ViewPortSigning>
      <SignForm />
    </ViewPortSigning>
  )
}

export default AppOnlyMe
