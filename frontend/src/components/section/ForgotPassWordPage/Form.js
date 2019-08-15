import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import ButtonSubmit from '../../common/BtnSubmitForm'
import R from '../../resources/R'
// import Powerby from '../../common/PowerBy'
import HeadText from '../../common/HeadText'
import { Link } from 'gatsby'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding-top: 10rem; */
  width: 400px;
`

const Label = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1.1em;
`
const BackText = styled(Link)`
  color: ${R.colors.primary};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  font-weight: 500;
  margin: auto;
  cursor: pointer;
  text-decoration: none;
`

const ForgotPassWordForm = () => {
  return (
    <WrapContainer>
      <HeadText text="Forgot your password?" />
      <Label>We’ll help you reset it and get back on service.</Label>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="your@verdoc.io"
      />
      <ButtonSubmit text="Reset password" disableMaxWidth={true} />
      <BackText to="/login">BACK</BackText>
    </WrapContainer>
  )
}
export default ForgotPassWordForm
