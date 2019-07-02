import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import Button from '@material-ui/core/Button'
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
const BtnSubscribe = styled(Button)`
  && {
    width: 100%;
    height: 48px;
    font-size: 1em;
    border-width: 0;
    display: inline-block;
    text-transform: uppercase;
    color: ${R.colors.white};
    background-color: ${R.colors.primary};
    margin: 1.4rem auto;
    &:hover {
      background-color: ${R.colors.primary} !important;
      box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
    }
  }
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

const WrapSignUpSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.5rem auto;
  padding: 0;
`

const BtnLink = styled(Button)`
  && {
    font-family: 'Roboto-Medium';
    color: ${R.colors.primary};
    font-size: 1em;
    &:hover {
      background: transparent;
    }
  }
`

const TextOrBtn = styled.p`
  color: ${R.colors.text};
  font-size: 0.9em;
  letter-spacing: 0.5px;
  font-family: 'Roboto-Regular';
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

      <BtnSubscribe data-testid="btn_submit" variant="outlined" size="large">
        Reset password
      </BtnSubscribe>

      <WrapForgotSection>
        <HorizontalRule />
        <TextOr>OR</TextOr>
        <HorizontalRule />
      </WrapForgotSection>

      <WrapSignUpSection>
        <BtnLink>SIGN UP</BtnLink>
        <TextOrBtn>or</TextOrBtn>
        <BtnLink>LOG IN</BtnLink>
      </WrapSignUpSection>

      <FooterLogin />
    </WrapContainer>
  )
}
export default ForgotPassWordForm
