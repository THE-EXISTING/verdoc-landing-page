import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import R from '../resources/R'

const WraperForm = styled.div`
  display: inline-block;
  top: 0;
`

const TextFieldEmail = styled(TextField)`
  && {
    width: 50vw;
    max-width: 352px;
    height: 56px;
    font-size: 1.6rem;
    padding-top: 0;
    background-color: ${R.colors.white};
    margin: 0 0.5em 0 auto;
    &:hover {
      border-width: 2px;
      border-color: ${R.colors.pimary};
    }
  }
`

function TextFieldCustom({ handleTyping }) {
  const [values, setValues] = useState({
    value: '',
  })

  const handleChangeText = name => event => {
    // event.persist()
    setValues({ ...values, [name]: event.target.value })
  }

  useEffect(() => {
    handleTyping(values)
  }, [values])

  return (
    <WraperForm>
      <TextFieldEmail
        id="standard-name"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        value={values.value}
        onChange={handleChangeText('value')}
        placeholder="your@verdoc.io"
        margin="normal"
        variant="outlined"
      />
    </WraperForm>
  )
}

export default TextFieldCustom
