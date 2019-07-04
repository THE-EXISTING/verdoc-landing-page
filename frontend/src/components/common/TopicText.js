import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const Topic = styled.p`
  font-family: ${props => props.font};
  font-size: 1.5em;
  white-space: nowrap;
  color: ${props => (props.isPrimary ? R.colors.primary : R.colors.text)};
  opacity: ${props => (props.isPrimary ? '1' : '0.6')};
  margin: 1.8rem auto;
`

const TopicText = ({
  isPrimary = false,
  font = 'RobotoSlab-Regular',
  text,
}) => (
  <>
    <Topic isPrimary={isPrimary} font={font}>
      {text}
    </Topic>
  </>
)
export default TopicText
