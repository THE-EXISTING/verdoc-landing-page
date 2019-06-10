import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import ModalQr from './ModalQRCode'
import R from '../resources/R'

const WraperContent = styled.div`
  margin-top: 2em;
  margin-bottom: 9em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.between('medium', 'large')`
    margin-bottom: 2em;
  `}
  ${media.lessThan('medium')`
    margin-bottom: 1em;
    flex-direction: column-reverse;
  `}
  ${media.between('768px', '960px')`
    margin-bottom: -1em;
  `}
    
`

const ImageQR = styled.img`
  /* display: inline-block; */
  /* vertical-align: middle; */
  width: 140px;
  height: 140px;
  cursor: pointer;

  ${media.lessThan('medium')`
    display: block;
    margin: auto;
    width: 226px;
    height: 226px;
  `}
`
const TextOr = styled.p`
  padding: 2rem;
  vertical-align: middle;
  opacity: 0.6;
  font-weight: bold;
  font-size: 1.25em;
  color: ${R.colors.text};
  display: inline-block;

  ${media.lessThan('medium')`
    display: block;
    padding: 0;
    margin: 8px;
  `}
`
const ButtonLine = styled(Button)`
  && {
    width: 226px;
    height: 64px;
    display: flex;
    vertical-align: middle;
    background-color: ${R.colors.bg_btn_line};
    border: 2px solid ${R.colors.border_btn};
    border-radius: 8px;

    &:hover {
      background-color: ${R.colors.bg_btn_line_hover};
    }

    ${media.lessThan('medium')`
      display: flex;
      margin-top: 0.2rem;
    `}
  }
`

const WrapContentBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`
const ContentBtnRight = styled.div`
  height: 44px;
  margin: auto 0;
  text-align: left;
`
const IconVerdoc = styled.img`
  width: 44px;
  height: 44px;
  margin: 1px 16px 1px 6px;
`
const IconNameVerdoc = styled.img`
  margin-bottom: 0px;
  /* display: block; */
`
const TextLineBtn = styled.div`
  font-size: 1em;
  height: 15px;
  margin: 2px 0 0 4px;
  color: ${R.colors.line};
  font-weight: bold;
`

const LineInter = () => {
  const [isShow, setIsShow] = useState(false)
  const show = () => setIsShow(true)
  const hide = () => setIsShow(false)

  const GlobalStyle = createGlobalStyle`

  body{
    overflow: ${isShow ? 'hidden' : 'visible'};
  }

  `
  return (
    <>
      <GlobalStyle />
      <ModalQr isShow={isShow} hideModal={hide} />
      <WraperContent>
        <ImageQR src={R.images.qr_code} onClick={show} />
        <TextOr>or</TextOr>
        <ButtonLine
          variant="outlined"
          href="line://ti/p/%40abr9961f"
          target="_blank"
          rel="noreferrer"
        >
          <WrapContentBtn>
            <IconVerdoc src={R.images.btn_logo} />
            <ContentBtnRight>
              <IconNameVerdoc src={R.images.btn_name} />
              <TextLineBtn>LINE@</TextLineBtn>
            </ContentBtnRight>
          </WrapContentBtn>
        </ButtonLine>
      </WraperContent>
    </>
  )
}

export default LineInter
