import React from 'react'
import TextField from '../../common/TextFieldCustom'

const FormStepTwo = () => {
  return (
    <>
      <TextField
        type="text"
        name="name"
        label="Full name"
        placeholder="Verdoc IO"
        autoComplete="name"
      />
      <TextField
        type="password"
        name="new-password"
        label="Strong password"
        placeholder="**********"
        autocomplete="new-password"
      />
    </>
  )
}

export default FormStepTwo
