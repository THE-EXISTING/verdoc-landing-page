import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import ModalQr from './modal_qrcode'
import img_qr from '../images/line_qr_code.svg'
import icon_btn_name_verdoc from '../images/btn_verdoc.svg'
import icon_btn_verdec from '../images/v_circle.svg'

const WraperContent = styled.div`
  margin-top: 34px;
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
    @media(min-height: 768px) and (max-width: 960px) {
    margin-bottom: -1em;
  }
`

const ImageQR = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 140px;
  height: 140px;
  cursor: pointer;
  /* height: cover; */

  ${media.lessThan('medium')`
    display: block;
    margin: auto;
    width: 226px;
  height: 226px;
  `}
`
const TextOr = styled.p`
  padding: 32px;
  vertical-align: middle;
  opacity: 0.6;
  font-family: Courier;
  font-weight: bold;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  ${media.lessThan('medium')`
    display: block;
    padding: 0px;
    margin: 8px;
  `}
  display: inline-block;
`
const ButtonLine = styled(Button)`
  width: 226px;
  height: 64px;
  border: 2px solid rgba(0, 0, 0, 0.34) !important;
  border-radius: 8px !important;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff !important;
  /* padding: 0px; */
  ${media.lessThan('medium')`
    
    display: block;
    padding: 0px;
    margin-top: 8px !important;
  `}
`

const WrapContentBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`
const ContentBtnRight = styled.div`
  float: right;
  display: block;
  height: 44px;
  margin-left: 0px;
  margin-bottom: auto;
  margin-top: auto;
  text-align: left;
`
const IconVerdoc = styled.img`
  width: 44px;
  height: 44px;
  float: left;
  margin-left: 6px;
  margin-right: 16px;
`
const IconNameVerdoc = styled.img`
  margin-bottom: 0px;
  display: block;
`
const TextLineBtn = styled.p`
  font-size: 15px;
  height: 15px;
  margin-left: 4px;
  margin-top: 2px;
  margin-bottom: 0px;
  display: block;
  color: #00b900;
  font-weight: bold;
`
const LineInter = () => {
  const [isShow, setIsShow] = useState(false)
  const show = () => setIsShow(true)
  const hide = () => setIsShow(false)
  return (
    <>
      <ModalQr isShow={isShow} hideModal={hide} />
      <WraperContent>
        <ImageQR src={img_qr} onClick={show} />
        <TextOr>or</TextOr>
        <ButtonLine
          href="line://ti/p/%40abr9961f"
          target="_blank"
          // onClick={e => e.preventDefault()}
        >
          <WrapContentBtn>
            <IconVerdoc src={icon_btn_verdec} />
            <ContentBtnRight>
              <IconNameVerdoc src={icon_btn_name_verdoc} />
              <TextLineBtn>LINE@</TextLineBtn>
            </ContentBtnRight>
          </WrapContentBtn>
        </ButtonLine>
      </WraperContent>
    </>
  )
}

export default LineInter
