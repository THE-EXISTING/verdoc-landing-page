import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
const TopicPrimary = styled.p`
  margin: 4rem auto;
  font-size: 2.4rem;
  color: ${R.colors.primary};
  letter-spacing: 0.71px;
`

const TopicText = styled.p`
  white-space: nowrap;
  opacity: 0.6;
  font-size: 1.6rem;
  color: ${R.colors.text};
  letter-spacing: 0.12px;
`

const TextDescribe = styled.p`
  opacity: 0.6;
  font-size: 0.95rem;
  color: ${R.colors.text};
`

const HeaderLanding = () => (
  <>
    <TopicPrimary>Verdoc</TopicPrimary>
    <TopicText>The best way to sign documents</TopicText>
    <TopicText>Easy - Fast - Secure</TopicText>
    <TextDescribe>
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    </TextDescribe>
  </>
)
export default HeaderLanding
