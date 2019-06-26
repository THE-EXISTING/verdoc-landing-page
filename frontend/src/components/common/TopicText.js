import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const Topic = styled.p`
  font-size: 1.2rem;
  white-space: nowrap;
  color: ${props => (props.isPrimary ? R.colors.primary : R.colors.text)};
  opacity: ${props => (props.isPrimary ? '1' : '0.6')};
`

const TopicText = props => (
  <>
    <Topic isPrimary={props.isPrimary}>{props.text}</Topic>
  </>
)
export default TopicText
