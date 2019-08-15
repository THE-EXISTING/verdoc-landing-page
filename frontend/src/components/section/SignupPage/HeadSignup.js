import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import HeadText from '../../common/HeadText'

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
const HeadFormSignUp = () => {
  return (
    <>
      <HeadText text="Get started absolutely free." />
      <Label>Free forever. No credit card needed.</Label>
    </>
  )
}

export default HeadFormSignUp
