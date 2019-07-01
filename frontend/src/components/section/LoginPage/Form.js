import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import TextField from '../../common/TextFieldCustom'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = () => {
  return (
    <WrapContainer>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="your@verdoc.io"
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="**********"
      />
    </WrapContainer>
  )
}

export default Form
