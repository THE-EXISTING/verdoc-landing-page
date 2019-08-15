import React from 'react'
import TextField from '../../common/TextFieldCustom'
import styled from 'styled-components'
import R from '../../resources/R'

const WarningText = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: ${props => props.size};
  letter-spacing: 0.5px;
  text-align: left;
  margin-left: 0;
  line-height: 28px;
  & > span {
    color: ${R.colors.primary};
  }
`
const SideLeftContentr = styled.div`
  display: flex;
  width: 100%;
`
const ResendText = styled.span`
  color: ${R.colors.primary};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  cursor: pointer;
`

const FormStepThree = () => {
  return (
    <>
      <TextField
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="+66 0878909876"
        autoComplete="tel"
      />
      <TextField
        type="text"
        name="otp-code"
        label="OTP code"
        placeholder="5837"
        autoComplete="one-time-code"
      />
      <WarningText size="16px">
        Enter OTP that sent to <span>{'+66 0862739482 '}</span>to Confirm your
        phone number.{' '}
      </WarningText>
      <SideLeftContentr>
        <WarningText size="14px">
          Don’t receive the OTP ? <ResendText>RESEND OTP</ResendText>
        </WarningText>
      </SideLeftContentr>
    </>
  )
}

export default FormStepThree
