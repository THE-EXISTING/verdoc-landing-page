import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import BtnSignupLogin from '../../common/BtnSignupLogin'
import ButtonSubmit from '../../common/BtnSubmitForm'
import Checkbox from '@material-ui/core/Checkbox'
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
  line-height: 34px;
  margin: 5px 0 0 0;
`

const LinkCustom = styled(Link)`
  color: ${R.colors.primary};
  text-decoration: none;
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin-top: 0.8rem;
  cursor: pointer;
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

const WrapAgree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${R.colors.text_gray};
  letter-spacing: 0.5px;
  font-family: 'Roboto-Regular';
  margin: 1.2rem 0 0.4rem 0;
`
const CheckboxCustom = styled(Checkbox)`
  && {
    color: ${R.colors.primary} !important;
    margin-left: -10px;
    &:hover {
      background-color: ${R.colors.low_primary} !important;
    }
  }
`

const FormSingUp = () => {
  return (
    <WrapContainer>
      <Label>Sign up to use Verdoc</Label>
      <TextField
        type="text"
        name="name"
        label="Full name"
        placeholder="Verdoc IO"
        autoComplete="name"
      />
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
        label="Email"
        placeholder="your@verdoc.io"
      />
      <TextField
        type="password"
        name="new-password"
        label="Strong password"
        placeholder="**********"
        autocomplete="new-password"
      />
      <TextField
        type="password"
        name="verify_password"
        label="Verify password"
        placeholder="*****"
        autoComplete="confirm-password"
      />
      <WrapAgree>
        <CheckboxCustom
          // checked={state.checkedA}
          // onChange={handleChange('checkedA')}
          value="checkAgree"
        />
        <Label>
          I agree to Verdoc’s <LinkCustom href="/">Terms of Service</LinkCustom>{' '}
          and <LinkCustom href="">Privacy Policy.</LinkCustom>
        </Label>
      </WrapAgree>
      <ButtonSubmit text="LOG IN" />
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

export default FormSingUp
