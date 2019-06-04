import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import LineInteractive from '../common/line_interactive'
const WraperContent = styled.div`
  /* margin-top: 75px; */
  margin-top: 50px;
  width: 100%;
  display: block;
  /* background-color: green; */
  /* margin-bottom: 200px;
  ${media.lessThan('medium')`
      margin-bottom: 0px;
    `} */
`
const TextOnBtnFront = styled.div`
  font-family: Courier;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.36px;
  /* display: inline-block; */
  display: block;
  margin-bottom: 0px;
  margin-right: 14px;
  margin-left: 14px;

  ${media.lessThan('medium')`
        margin-left: 3em;
        margin-right: 3em;
    `}
`
const SetLowOpacity = styled.div`
  display: inline;
  opacity: 0.6;
`
const TextGreenUL = styled.a`
  cursor: pointer;
  display: inline;
  font-weight: bold;
  color: #00be00;
  text-decoration: underline;
`
const TextRed = styled.div`
  display: inline;
  font-weight: bold;
  color: rgba(255, 0, 0, 0.87);
`
const TextPurple = styled.div`
  display: inline;
  font-weight: bold;
  color: #5856d6;
`

const Line = () => (
  <>
    <WraperContent>
      <TextOnBtnFront>
        <SetLowOpacity>Just scan</SetLowOpacity>
        <TextRed>!!</TextRed> <SetLowOpacity>on</SetLowOpacity>{' '}
        <TextGreenUL href="https://line.me/" target="_blank">
          Line
        </TextGreenUL>{' '}
        <SetLowOpacity> application and use </SetLowOpacity>
        <TextPurple>Verdoc.</TextPurple>
      </TextOnBtnFront>
      <LineInteractive />
    </WraperContent>
  </>
)
export default Line
