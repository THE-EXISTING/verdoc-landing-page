import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.8rem 0;
  position: relative;
`
const LogoVerdocSig = styled.img`
  position: absolute;
  z-index: -2;
  width: 216px;
  height: 145px;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0.12;
`
const Quote = styled.p`
  margin: 0.4rem 0;
  font-family: 'RobotoSlab-Regular';
  font-size: 1.5em;
  color: ${R.colors.text_gray};
`
const QuoteLanding = () => {
  return (
    <WrapContainer>
      <LogoVerdocSig src={R.images.bg_verdoc_sig} />
      <Quote>Generate immutable and independently</Quote>
      <Quote>verifiable dataset of everything that is</Quote>
      <Quote>lifeblood to your business</Quote>
    </WrapContainer>
  )
}

export default QuoteLanding
