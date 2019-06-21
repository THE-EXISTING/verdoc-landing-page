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

function TextFieldCustom({
  isExist,
  isSubmit,
  handleTyping,
  handleEmail,
  handleSubmit,
}) {
  const [isEmail, setIsEmail] = useState(true)
  const [textError, setTextError] = useState('')
  const [values, setValues] = useState({
    value: '',
  })

  const checkFormatEmail = email => {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return regex.test(String(email).toLowerCase())
  }

  const validateEmail = email => {
    if (email === '') {
      setIsEmail(false)
      handleEmail(false)
      setTextError('Please, put your email.')
    } else {
      if (checkFormatEmail(email)) {
        // true ,because this value is email format.
        handleSubmit(false) // for ignore accept text
        setIsEmail(true)
        handleEmail(true)
        setTextError('')
      } else {
        // not email format
        setIsEmail(false)
        handleEmail(false)
        setTextError('Invalid email format.')
      }
    }
  }

  const handleChangeText = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  useEffect(() => {
    handleTyping(values)
    validateEmail(values.value)
  }, [values])

  return (
    <WraperForm>
      <TextFieldEmail
        id="standard-name"
        data-testid="textfield"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        value={values.value}
        onChange={handleChangeText('value')}
        placeholder="your@verdoc.io"
        margin="normal"
        variant="outlined"
        error={isSubmit && !isEmail}
        helperText={
          isSubmit
            ? !isEmail
              ? textError
              : isExist
              ? 'You already subscribe Verdoc.'
              : 'Thank you for subscribe Verdoc.'
            : ''
        }
      />
    </WraperForm>
  )
}

export default TextFieldCustom
