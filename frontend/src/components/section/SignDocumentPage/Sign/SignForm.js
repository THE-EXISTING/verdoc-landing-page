import React, { useState } from 'react'
import styled from 'styled-components'
import R from '../../../resources/R'

import RadioHorizontal from '../../../common/RadioHorizontal'
import CheckboxHorizontal from '../../../common/CheckboxHorizontal'
import SignerMe from './SignerMe'
import SignerOthers from './SignerOthers'
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
`

const Space = styled.div`
  height: 20px;
`

const SignForm = () => {
  //   const [selectedPrivacy, setSelectedPrivacy] = useState('public')
  const [options, setOptions] = useState({
    selectedPrivacy: 'public',
    checkSigningTime: true,
    checkSetExpireData: false,
  })
  const handleSelectPrivacy = optionName => e => {
    setOptions({ ...options, [optionName]: e.target.value })
  }

  const handleCheck = optionsName => e => {
    setOptions({ ...options, [optionsName]: e.target.checked })
  }

  return (
    <Container>
      <RadioHorizontal
        option={options.selectedPrivacy}
        type="pubilc"
        handle={handleSelectPrivacy('selectedPrivacy')}
        icPath={R.images.ic_public_inactive}
        textType="Public"
        textDetail="Anyone can see this transaction."
      />
      <RadioHorizontal
        option={options.selectedPrivacy}
        type="private"
        handle={handleSelectPrivacy('selectedPrivacy')}
        icPath={R.images.ic_private_gold}
        textType="Private"
        textDetail="You choose who can see to this transaction."
      />

      <Space />
      <CheckboxHorizontal
        option={options.checkSigningTime}
        handle={handleCheck('checkSigningTime')}
        label="Signing time (day)"
      />
      <CheckboxHorizontal
        option={options.checkSetExpireData}
        handle={handleCheck('checkSetExpireData')}
        label="Set Expire Date"
        disabled={true}
      />
      <SignerMe />
      <SignerOthers />
    </Container>
  )
}

export default SignForm
