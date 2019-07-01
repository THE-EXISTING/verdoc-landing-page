import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import R from '../resources/R'

const TextFieldCustom = props => {
  return (
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
  )
}

export default TextFieldCustom
