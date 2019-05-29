import React from 'react'
import styled from 'styled-components'
import img_qrcode from '../images/line_qr_code.svg'

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
`
const ImageQrCode = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-top: -250px;
  margin-left: -250px;
  width: 70%;
  height: cover;
  max-width: 504px;
`

const Modal = () => (
  <BgModal>
    {' '}
    <ImageQrCode src={img_qrcode} />{' '}
  </BgModal>
)
export default Modal
