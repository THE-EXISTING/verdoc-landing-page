import React from 'react'
import styled from 'styled-components'
import img_signature from '../images/signature.svg'
import img_verdoc_dark from '../images/verdoc_dark.svg'

const WraperHeader = styled.div`
  padding-top: 8em;
  width: 100%;
  position: relative;
`
const ImageSignature = styled.img`
  position: absolute;
  top: 11.45em;
  left: 36.55%;
  z-index: -1;
`
const ImageVerdocDark = styled.img`
  z-index: 1;
`

const TextPromote = styled.p`
  opacity: 0.6;
  font-family: Courier;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0.62px;
`

const TextPR = styled.p`
  opacity: 0.6;
  font-family: Courier;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0.62px;
`
const TextPrFeature = styled.p`
  font-family: Courier;
  font-size: 32px;
  color: #5856d6;
  letter-spacing: 0.71px;
`

const Header = () => (
  <>
    <WraperHeader>
      <ImageSignature src={img_signature} />
      <ImageVerdocDark src={img_verdoc_dark} />
    </WraperHeader>
    <TextPR>Make your comapnay paperless.</TextPR>
    <TextPrFeature>Stay tuned...</TextPrFeature>
  </>
)
export default Header
