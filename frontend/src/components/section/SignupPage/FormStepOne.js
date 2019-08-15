import React from 'react'
import TextField from '../../common/TextFieldCustom'

const FormStepOne = () => {
  return (
    <>
      <TextField
        type="text"
        name="organization"
        label="Company name"
        placeholder="The Existing Company"
        autoComplete="organization"
      />
      <TextField
        type="email"
        name="email"
        label="Work Email Address"
        placeholder="your@verdoc.io"
      />
    </>
  )
}

export default FormStepOne
