import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import img_qr from '../images/line_qr_code.svg'
import icon_btn_name_verdoc from '../images/btn_verdoc.svg'
import icon_btn_verdec from '../images/v_circle.svg'

const WraperContent = styled.div`
  /* margin-top: 75px; */
  margin-top: 34px;
  margin-bottom: 9em;
  width: 100%;
  display: block;
  /* margin: 0 100px; */
  justify-content: space-between;
`

const ImageQR = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 14%;
  height: cover;
  min-width: 140px;
  min-height: 140px;
`
const TextOr = styled.p`
  padding: 32px;
  vertical-align: middle;
  opacity: 0.6;
  font-family: Courier;
  font-weight: bold;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  /* letter-spacing: 0.45px; */

  display: inline-block;
`
const ButtonLine = styled(Button)`
  width: 226px;
  height: 64px;
  border: 2px solid rgba(0, 0, 0, 0.34) !important;
  border-radius: 8px !important;
  display: inline-block;
  vertical-align: middle;
`

const WrapContentBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`
const ContentBtnRight = styled.div`
  float: right;
  display: block;
  margin-left: 10px;
  margin-bottom: auto;
  margin-top: auto;
  text-align: left;
`
const IconVerdoc = styled.img`
  float: left;
  margin-left: 10px;
  margin-right: 10px;
`
const IconNameVerdoc = styled.img`
  margin-bottom: 0px;
  display: block;
`
const TextLineBtn = styled.p`
  margin-left: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: block;
  color: #00b900;
  font-weight: bold;
`
const LineInter = () => (
  <>
    <WraperContent>
      <ImageQR src={img_qr} />
      <TextOr>or</TextOr>
      <ButtonLine>
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
export default LineInter
