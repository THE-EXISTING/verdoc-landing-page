import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import img_qrcode from '../images/line_qr_code.svg'
import img_cancel from '../images/ic_cancel_white.svg'

const BgModal = styled.div`
  /* background-color: #090916; */
  background-color: rgb(9, 9, 22, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  &:hover {
    cursor: url(${img_cancel}) 205 205, auto;
  }
`
const ImageQrCode = styled.img`
  width: 504px;
  height: cover;
  z-index: 4;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -252px;
  margin-left: -252px;
  &:hover {
    cursor: auto;
  }
  ${media.lessThan('medium')`
  width: 248px;
  margin-top: -124px; 
  margin-left: -124px; 
  `}
`
const IconCancel = styled.img`
  cursor: pointer;
  position: absolute;
  width: 64px;
  height: auto;
  top: 4%;
  right: 2%;
  z-index: 4;
  ${media.lessThan('medium')`
      width: 44px;`}
`

const Modal = ({ isShow, hideModal }) =>
  isShow ? (
    <>
      <ImageQrCode src={img_qrcode} />
      <BgModal onClick={hideModal}>
        <IconCancel src={img_cancel} onClick={hideModal} />
      </BgModal>
    </>
  ) : null
export default Modal
