import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Input from '@material-ui/core/Input'

const WrapHorizontal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const CheckboxCustom = styled(Checkbox)`
  && {
    color: ${R.colors.primary};
    margin-left: 11px;
    &.Mui-checked {
      color: ${R.colors.primary};
    }
    &:hover {
      background-color: ${R.colors.low_primary} !important;
    }
  }
`
const FormControlLabelCustom = styled(FormControlLabel)`
  && {
    color: ${R.colors.text_gray};
    font-family: Roboto-Regular;
    font-size: 16px;
  }
`

const InputSigningDay = styled(Input)`
  && {
    width: 138px;
    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: ${R.colors.text_gray};
    & > input {
      padding: 0 0 3px;
    }
    &:after {
      border-color: ${R.colors.primary} !important;
    }
  }
`

const CheckboxHorizontal = ({
  disabled = false,
  defaultValue = '',
  ariaLabel = 'Description',
  ...props
}) => {
  return (
    <WrapHorizontal>
      <FormControlLabelCustom
        control={
          <CheckboxCustom
            checked={props.option}
            onChange={props.handle}
            value={props.option}
            disabled={disabled}
          />
        }
        label={props.label}
      />
      <InputSigningDay
        defaultValue={defaultValue}
        //   className={classes.input}
        disabled={disabled}
        inputProps={{
          'aria-label': ariaLabel,
        }}
      />
    </WrapHorizontal>
  )
}

export default CheckboxHorizontal
