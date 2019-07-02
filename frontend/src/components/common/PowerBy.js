import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
const WrapPowerBy = styled.div`
  width: 70%;
  text-align: left;
  letter-spacing: 0.55px;
  margin: 1.4rem auto 3rem auto;
`

const LogoTheExisting = styled.img`
  width: 93px;
  height: 12px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const ExternalLink = styled.a`
  font-family: 'Roboto-Regular';
  font-size: 0.85rem;
  color: ${R.colors.text_footer};
  text-decoration: none;
  margin: 0 0 1rem 0;

  &:hover {
    color: ${R.colors.white};
  }
`

const PowerBy = () => {
  return (
    <WrapPowerBy>
      Power by{' '}
      <ExternalLink
        href="https://existing.co/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LogoTheExisting src={R.images.logo_theexisting} />
      </ExternalLink>
    </WrapPowerBy>
  )
}

export default PowerBy
