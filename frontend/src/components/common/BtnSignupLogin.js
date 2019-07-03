import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import R from '../resources/R'
import { Link } from 'gatsby'

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

const LinkCustom = styled(Link)`
  text-decoration: none;
  color: ${R.colors.primary};
`

const BtnSignupLogin = () => {
  return (
    <WrapSignUpSection>
      <LinkCustom to="/signup">
        <BtnLink>SIGN UP</BtnLink>
      </LinkCustom>

      <TextOrBtn>or</TextOrBtn>
      <LinkCustom to="/login">
        <BtnLink>LOG IN</BtnLink>
      </LinkCustom>
    </WrapSignUpSection>
  )
}

export default BtnSignupLogin
