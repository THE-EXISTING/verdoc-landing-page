import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const StyleDetail = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 1rem;
  color: ${R.colors.text_gray};
  letter-spacing: 0.5px;
  width: 52%;
  margin: 2rem auto;
`

const TextDetail = props => {
  return <StyleDetail>{props.text}</StyleDetail>
}

export default TextDetail
