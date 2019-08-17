import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'
import R from '../resources/R'

const BtnSubmitForm = ({ disableMaxWidth = false, ...props }) => {
  const BtnSubmit = styled(Button)`
    && {
      width: 100%;
      ${!disableMaxWidth &&
        css`
          max-width: 400px;
        `}
      /* max-width: 352px; */
      font-family: 'Roboto-Regular';
      height: 48px;
      font-size: 1em;
      border-width: 0;
      display: inline-block;
      text-transform: uppercase;
      color: ${R.colors.white};
      background-color: ${R.colors.primary};
      margin: 1.4rem 0;
      &:hover {
        background-color: ${R.colors.primary} !important;
        box-shadow: 0.75px 0.75px 5.5px 0.75px
          ${R.colors.border_btn_subsc_hover};
      }
      &[disabled] {
        background-color: ${R.colors.gray};
        border-width: 0;
        font-family: 'Roboto-Medium';
        font-size: 14px;
        color: ${R.colors.border_btn};
        letter-spacing: 1.25px;
        line-height: 16px;
      }
    }
  `

  return (
    <BtnSubmit
      data-testid="btn_submit"
      variant="outlined"
      size="large"
      {...props}
    >
      {props.text}
    </BtnSubmit>
  )
}

export default BtnSubmitForm
