import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import R from '../resources/R'

const BgModal = styled.div`
  background-color: ${R.colors.bg_modal};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;

  &:hover {
    cursor: url(${R.images.ic_cancel}) 205 205, auto;
  }
`
const ImageQrCode = styled.img`
  width: 504px;
  height: auto;
  z-index: 204;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -252px auto auto -252px;

  &:hover {
    cursor: auto;
  }

  ${media.lessThan('medium')`
    width: 248px;
    margin: -124px auto auto -124px;
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
    width: 44px;
  `}
`

const Modal = ({ isShow, hideModal }) =>
  isShow ? (
    <>
      <ImageQrCode src={R.images.qr_code} />
      <BgModal onClick={hideModal}>
        <IconCancel src={R.images.ic_cancel} onClick={hideModal} />
      </BgModal>
    </>
  ) : null
export default Modal
