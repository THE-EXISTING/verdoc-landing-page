import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import LineInteractive from '../../common/LineInteractive'
import R from '../../resources/R'

const WraperContent = styled.div`
  margin-top: 3.1rem;
  width: 100%;
`
const TextOnBtnFront = styled.div`
  font-size: 1em;
  color: ${R.colors.black};
  letter-spacing: 0.36px;
  margin: auto 14px 0 14px;

  ${media.lessThan('medium')`
        margin-left: 3em;
        margin-right: 3em;
    `}
`
const SetLowOpacity = styled.span`
  opacity: 0.6;
`
const LinkLine = styled.a`
  cursor: pointer;
  display: inline;
  font-weight: bold;
  color: ${R.colors.line};
  text-decoration: underline;
`
const TextRed = styled.span`
  font-weight: bold;
  color: ${R.colors.repeat};
`
const TextPurple = styled.span`
  font-weight: bold;
  color: ${R.colors.primary};
`

const Line = () => (
  <>
    <WraperContent>
      <TextOnBtnFront>
        <SetLowOpacity>Just scan</SetLowOpacity>
        <TextRed>!!</TextRed> <SetLowOpacity>on</SetLowOpacity>{' '}
        <LinkLine href="https://line.me/" target="_blank">
          Line
        </LinkLine>{' '}
        <SetLowOpacity> application and use </SetLowOpacity>
        <TextPurple>Verdoc.</TextPurple>
      </TextOnBtnFront>
      <LineInteractive />
    </WraperContent>
  </>
)
export default Line
