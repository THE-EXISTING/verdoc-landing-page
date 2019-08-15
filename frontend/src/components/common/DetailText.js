import React from 'react'
import styled, { css } from 'styled-components'
import R from '../resources/R'

// const StyleDetail = styled.p`
//   font-family: 'Roboto-Regular';
//   font-size: 1rem;
//   color: ${props => (props.isPrimary ? R.colors.primary : R.colors.text_gray)};
//   letter-spacing: 0.5px;
//   width: 52%;

//   margin: ${props => props.space} auto;
//   white-space: ${props => (props.isWrap ? 'wrap' : 'nowrap')};
// `

const TextDetail = ({
  isPrimary = false,
  space = '2em',
  isWrap = true,
  disableMargin = false,
  width = '52%',
  text,
}) => {
  const StyleDetail = styled.p`
    font-family: 'Roboto-Regular';
    font-size: 1rem;
    color: ${props =>
      props.isPrimary ? R.colors.primary : R.colors.text_gray};
    letter-spacing: 0.5px;
    width: ${width};
    white-space: ${props => (props.isWrap ? 'wrap' : 'nowrap')};
    ${!disableMargin &&
      css`
        margin: ${space} auto;
      `}
  `
  return (
    <StyleDetail
      space={space}
      isPrimary={isPrimary}
      isWrap={isWrap}
      disableMargin={disableMargin}
    >
      {text}
    </StyleDetail>
  )
}

export default TextDetail
