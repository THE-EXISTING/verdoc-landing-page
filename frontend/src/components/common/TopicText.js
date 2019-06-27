import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const Topic = styled.p`
  font-size: 1.5em;
  white-space: nowrap;
  color: ${props => (props.isPrimary ? R.colors.primary : R.colors.text)};
  opacity: ${props => (props.isPrimary ? '1' : '0.6')};
  margin: 1.8rem auto;
`

const TopicText = props => (
  <>
    <Topic isPrimary={props.isPrimary}>{props.text}</Topic>
  </>
)
export default TopicText
