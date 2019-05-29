import React from 'react'
import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import img_signature from '../images/signature.svg'
import img_verdoc_dark from '../images/verdoc_dark.svg'

const WraperHeader = styled.div`
  padding-top: 7em;
  width: 100%;
  position: relative;

  ${media.lessThan('medium')`
    margin-bottom: 28px;
  `}
`
const ImageSignature = styled.img`
  position: absolute;
  left: 0;
  right: 316px;
  margin-left: auto;
  margin-right: auto;
  top: 10.95em;
  z-index: -1;
  ${media.lessThan('medium')`
  
    right: 266px;
    top: 10.4em;
    /* width: 12%;   */
    width: 54px;
  `}
`
const ImageVerdocDark = styled.img`
  z-index: 1;
  ${media.lessThan('medium')`
    /* width: 56%;   */
    width: 268px;
  `}
`

const TextPR = styled.p`
  white-space: nowrap;
  opacity: 0.6;
  font-family: Courier;
  font-size: 28px;
  color: #000000;
  letter-spacing: 0.62px;
  ${media.lessThan('medium')`
    margin-left: 1em;
    margin-right: 1em;
    font-size: 20px;
  `}
  ${media.lessThan('small')`
  margin-left: 1em;
    margin-right: 1em;
    font-size: 17px;
  `}
  @media (max-width: 320px) {
    font-size: 14px;
    white-space: initial;
  }
`
const TextPrFeature = styled.p`
  margin-top: 34px;
  font-family: Courier;
  font-size: 32px;
  color: #5856d6;
  letter-spacing: 0.71px;
  ${media.lessThan('medium')`
    margin-left: 2em;
    margin-right: 2em;
    font-size: 1.2em;
    white-space: nowrap;
  `}
`
const Typing = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  80%{
  opacity: 1;
}
  100%{
  opacity: 0;
}
`
const Dot = styled.span`
  animation-name: ${Typing};
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  ${Dot}:nth-child(2) {
    animation-delay: 0.2s;
  }
  ${Dot}:nth-child(3) {
    animation-delay: 0.4s;
  }
`
const Header = () => (
  <>
    <WraperHeader>
      <ImageSignature src={img_signature} />
      <ImageVerdocDark src={img_verdoc_dark} />
    </WraperHeader>
    <TextPR>Make your comapnay paperless.</TextPR>
    <TextPrFeature>
      Stay tuned<Dot>.</Dot>
      <Dot>.</Dot>
      <Dot>.</Dot>
    </TextPrFeature>
  </>
)
export default Header
