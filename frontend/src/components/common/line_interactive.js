import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ModalQr from './modal_qrcode'
import R from '../res/R'

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
  font-weight: bold;
  font-size: 20px;
  color: ${R.colors.text};
  display: inline-block;
  ${media.lessThan('medium')`
    display: block;
    padding: 0px;
    margin: 8px;
  `}
`
const ButtonLine = styled(Button)`
  width: 226px;
  height: 64px;
  display: inline-block;
  vertical-align: middle;

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
  margin: 0;
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
  color: ${R.colors.line};
  font-weight: bold;
`

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: R.colors.bg_btn_line,
    border: '2px solid ' + R.colors.border_btn,
    borderRadius: '8px',
    '&:hover': { backgroundColor: R.colors.bg_btn_line_hover },
  },
}))

const LineInter = () => {
  const [isShow, setIsShow] = useState(false)
  const show = () => setIsShow(true)
  const hide = () => setIsShow(false)
  const classes = useStyles()
  return (
    <>
      <ModalQr isShow={isShow} hideModal={hide} />
      <WraperContent>
        <ImageQR src={R.images.qr_code} onClick={show} />
        <TextOr>or</TextOr>

        <ButtonLine
          variant="outlined"
          href="line://ti/p/%40abr9961f"
          target="_blank"
          className={classes.button}
        >
          <WrapContentBtn>
            <IconVerdoc src={R.images.btn_logo} />
            <ContentBtnRight>
              <IconNameVerdoc src={R.images.btn_name} />
              <TextLineBtn>{R.strings.btn_line}</TextLineBtn>
            </ContentBtnRight>
          </WrapContentBtn>
        </ButtonLine>
      </WraperContent>
    </>
  )
}

export default LineInter
