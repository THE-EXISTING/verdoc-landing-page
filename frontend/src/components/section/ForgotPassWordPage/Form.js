import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import FooterLogin from '../../common/FormFooter'
import ButtonSubmit from '../../common/BtnSubmtForm'
import BtnSignupLogin from '../../common/BtnSignupLogin'
import R from '../../resources/R'
import { Link } from 'gatsby'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10rem;
  width: 352px;
`

const Label = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin-bottom: 0;
`

const LinkForgot = styled(Link)`
  color: ${R.colors.primary};
  text-decoration: none;
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin-top: 0.8rem;
`

const WrapForgotSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0.32;
`

const HorizontalRule = styled.hr`
  width: 100%;
`

const TextOr = styled.p`
  margin: auto 0.3rem;
  font-family: 'Roboto-Medium';
  font-size: 0.7rem;
  letter-spacing: 2px;
`

const ForgotPassWordForm = () => {
  return (
    <WrapContainer>
      <Label>Enter your email to reset password</Label>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="your@verdoc.io"
      />
      <ButtonSubmit text="Reset password" />
      <WrapForgotSection>
        <HorizontalRule />
        <TextOr>OR</TextOr>
        <HorizontalRule />
      </WrapForgotSection>
      <BtnSignupLogin />
      <FooterLogin />
    </WrapContainer>
  )
}
export default ForgotPassWordForm
