import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import styled, { css } from 'styled-components'
import R from '../../resources/R'

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 200;
  background-color: ${R.colors.text_three_gray};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 70;
  &:hover {
    cursor: url(${R.images.ic_cancel}) 205 205, auto;
  }
`

const CardModal = styled.div`
  top: 50%;
  left: 50%;
  margin-left: -344px;
  margin-top: -275px;
  position: absolute;
  background-color: ${R.colors.white};
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04), 0 2px 20px 0 rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 688px;
  height: 550px;
  z-index: 80;
`

const Content = styled.div`
  position: relative;
  width: 688px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* padding: 0.5rem 3rem; */
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 82%;
  padding-left: 1em;
  margin-top: 0.25em;
`

const BorderCreateSignature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 4px dashed #979797; */
  width: 590px;
  height: 380px;
  background-image: linear-gradient(to right, #979797 50%, transparent 50%),
    linear-gradient(to right, #979797 50%, transparent 50%),
    linear-gradient(to bottom, #979797 50%, transparent 50%),
    linear-gradient(to bottom, #979797 50%, transparent 50%);
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 2px, 20px 2px, 2px 20px, 2px 20px;
  position: relative;
`

const FrameCreateSignature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      ${R.colors.primary} 100%,
      transparent 50%
    ),
    linear-gradient(to right, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to bottom, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to bottom, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to left, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to left, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to top, ${R.colors.primary} 100%, transparent 50%),
    linear-gradient(to top, ${R.colors.primary} 100%, transparent 50%);
  background-position: left top, left bottom, left top, right top, right top,
    right bottom, left bottom, right bottom;
  background-repeat: no-repeat;
  background-size: 20px 8px, 20px 8px, 8px 20px, 8px 20px, 20px 8px, 20px 8px,
    8px 20px, 8px 20px;
`

const GroupBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 590px;
  margin: 2em 0;
`
const LeftBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 52%;
`
const RightBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48%;
`
const ButtonSign = styled(Button)`
  && {
    width: 128px;
    height: 36px;
    color: ${R.colors.primary};
    text-transform: uppercase;
    &[disabled] {
      background-color: ${R.colors.gray};
      border-width: 0;
      font-family: 'Roboto-Medium';
      font-size: 14px;
      color: ${R.colors.border_btn};
      letter-spacing: 1.25px;
      line-height: 16px;
    }
  }
`

const ModalCreateSignature = props => {
  const [options, setOption] = useState({
    isKeyboard: true,
    isTrackpad: false,
    isImage: false,
  })

  const choosingOption = opt => {
    Object.keys(options).map(key => {
      if (key != opt) setOption({ [key]: false, ...options })
      else setOption({ [key]: true, ...options })
    })
  }
  const switchOption = () => {
    console.log(options)
  }

  useEffect(() => {
    // switchOption()
  }, [options])

  const TextProcess = styled.p`
    color: ${R.colors.text_gray};
    font-family: 'Roboto-Regular';
    font-size: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    line-height: 28px;
    margin: 1.5em 0.5em;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    &:active {
      color: ${R.colors.primary};
    }

    ${
      () => {
        
      }
    }
    /* ${options.isKeyboard &&
      css`
        &:nth-child(0) {
          border-bottom: 2px solid ${R.colors.primary};
        }
      `}

    ${!options.isKeyboard &&
      css`
        &:nth-child(0) {
          border-width: 0;
        }
      `} */
  `

  return props.isShow ? (
    <>
      <Container onClick={props.hide} />
      <CardModal>
        <Content>
          <ContainerMenu>
            <TextProcess onClick={() => choosingOption('isKeyboard')}>
              KEYBOARD
            </TextProcess>
            <TextProcess onClick={() => choosingOption('isTrackpad')}>
              TRACKPAD
            </TextProcess>
            <TextProcess onClick={() => choosingOption('isImage')}>
              IMAGE
            </TextProcess>
          </ContainerMenu>

          <BorderCreateSignature>
            <FrameCreateSignature />
          </BorderCreateSignature>
          <GroupBtn>
            <LeftBtn>
              <ButtonSign variant="outlined" href="#">
                clear
              </ButtonSign>
            </LeftBtn>
            <RightBtn>
              <ButtonSign variant="outlined" href="#">
                Cancel
              </ButtonSign>
              <ButtonSign variant="outlined" disabled>
                done
              </ButtonSign>
            </RightBtn>
          </GroupBtn>
        </Content>
      </CardModal>
    </>
  ) : null
}
export default ModalCreateSignature
