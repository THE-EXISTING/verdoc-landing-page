import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import TextDetail from '../../common/DetailText'

const TopicPrimary = styled.p`
  font-family: Courier;
  margin: 4.2rem auto 2rem auto;
  font-size: 3rem;
  color: ${R.colors.primary};
  letter-spacing: 0.35px;
`

const TopicText = styled.p`
  white-space: nowrap;
  font-family: 'RobotoSlab-Regular';
  font-size: 1.8rem;
  color: ${R.colors.text_gray};
  letter-spacing: 0.25px;
  margin: 1.2rem auto;
`

const HeaderLanding = () => (
  <>
    <TopicPrimary>Verdoc</TopicPrimary>
    <TopicText>The best way to sign documents</TopicText>
    <TopicText>Easy - Fast - Secure</TopicText>
    <TextDetail textDetail="Verdoc is a blockchain service for legally secure signing any documents, invoices, or agreements that is important to your business." />
  </>
)
export default HeaderLanding
