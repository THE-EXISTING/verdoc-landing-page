import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import R from '../resources/R'

const InputCustom = styled(TextField)`
  && {
    width: 100%;
    max-width: 352px;
    height: 56px;
    font-size: 1.6rem;
    padding-top: 0;
    background-color: ${R.colors.white};

    &:hover {
      border-width: 2px;
      border-color: ${R.colors.pimary};
    }
  }
`

const TextFieldCustom = props => {
  return (
    <InputCustom
      //   id="standard-name"
      margin="normal"
      variant="outlined"
      data-testid="textfield"
      type={props.type}
      name={props.name}
      label={props.label}
      autoComplete={props.autoComplete}
      //   value={values.value}
      //   onChange={handleChangeText('value')}
      placeholder={props.placeHolder}
    />
  )
}

export default TextFieldCustom
