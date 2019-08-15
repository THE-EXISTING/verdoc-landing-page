import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import Button from '@material-ui/core/Button'
import ButtonSubmit from '../../common/BtnSubmitForm'
// import FooterLogin from '../../common/FormFooter'
import R from '../../resources/R'
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
  margin-bottom: 0.5rem;
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
  white-space: nowrap;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
  padding: 0;
`

const BtnAuth = styled(Button)`
  && {
    width: 112px;
    height: 40px;
  }
`
const LogoAuth = styled.img`
  width: 24px;
  height: 24px;
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
        <TextOr>OR QUICK ACCEES WITH</TextOr>
        <HorizontalRule />
      </WrapForgotSection>
      <WrapSignUpSection>
        <BtnAuth variant="outlined" size="small">
          <LogoAuth src={R.images.auth_google} />
        </BtnAuth>
        <BtnAuth variant="outlined" size="small">
          <LogoAuth src={R.images.auth_facebook} />
        </BtnAuth>
        <BtnAuth variant="outlined" size="small">
          <LogoAuth src={R.images.auth_line} />
        </BtnAuth>
      </WrapSignUpSection>
      {/* <FooterLogin /> */}
    </WrapContainer>
  )
}

export default FormLogin
