import React from 'react'
import styled from 'styled-components'
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
