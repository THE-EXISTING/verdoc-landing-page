import React from 'react'
import styled from 'styled-components'
import TextField from '../../common/TextFieldCustom'
import Button from '@material-ui/core/Button'
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

const LinkCustom = styled(Link)`
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
    margin: 1.6rem auto;
    &:hover {
      box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
    }
  }
`

const Form = () => {
  return (
    <WrapContainer>
      <Label>Log in to Verdoc</Label>
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="your@verdoc.io"
      />

      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="**********"
      />
      <LinkCustom>Forgot password?</LinkCustom>

      <BtnSubscribe
        data-testid="btn_submit"
        variant="outlined"
        size="large"
        // onClick={event => callSubmited(event)}
      >
        LOG IN
      </BtnSubscribe>
    </WrapContainer>
  )
}

export default Form
