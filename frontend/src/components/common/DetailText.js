import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const StyleDetail = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 1rem;
  color: ${R.colors.text_gray};
  letter-spacing: 0.5px;
  line-height: 28px;
`

const TextDetail = props => {
  return <StyleDetail>{props.textDetail}</StyleDetail>
}

export default TextDetail
