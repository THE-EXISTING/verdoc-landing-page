import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-family: 'RobotoSlab-Regular';
  font-size: 24px;
  color: black;
  margin: auto;
`
const HeadText = props => {
  return <Text>{props.text}</Text>
}

export default HeadText
