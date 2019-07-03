import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
// import Button from '@material-ui/core/Button'
import ButtonSubmit from '../../common/BtnSubmitForm'
import FooterLogin from '../../common/FormFooter'
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
// const BtnSubscribe = styled(Button)`
//   && {
//     width: 100%;
//     max-width: 352px;
//     height: 48px;
//     font-size: 1em;
//     border-width: 0;
//     display: inline-block;
//     text-transform: uppercase;
//     color: ${R.colors.white};
//     background-color: ${R.colors.primary};
//     margin: 1.6rem 0;
//     &:hover {
//       background-color: ${R.colors.primary} !important;
//       box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
//     }
//   }
// `
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

const TextSignUp = styled.p`
  color: ${R.colors.text_low_gray};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  margin-right: 0.5rem;
`

const LinkSignUp = styled(Link)`
  text-decoration: none;
  color: ${R.colors.primary};
  font-family: 'Roboto-Medium';
  font-size: 0.9em;
  letter-spacing: 1.25px;

  &:hover {
    color: ${R.colors.text};
  }
`

const WrapSignUpSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5rem auto;
  padding: 0;
`

const FormLogin = () => {
  return (
    <WrapContainer>
      <Label>Log in to Verdoc</Label>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="your@verdoc.io"
        autocomplete="email"
      />
      <TextField
        type="password"
        name="current-password"
        label="Password"
        placeholder="**********"
        autocomplete="current-password"
      />
      <LinkForgot to="/forgot_password">Forgot password?</LinkForgot>
      <ButtonSubmit text="LOG IN" />
      <WrapForgotSection>
        <HorizontalRule />
        <TextOr>OR</TextOr>
        <HorizontalRule />
      </WrapForgotSection>
      <WrapSignUpSection>
        <TextSignUp>Don’t have an account?</TextSignUp>
        <LinkSignUp to="/signup">SIGN UP</LinkSignUp>
      </WrapSignUpSection>
      <FooterLogin />
    </WrapContainer>
  )
}

export default FormLogin
