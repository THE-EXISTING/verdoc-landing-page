import React from 'react'
import styled from 'styled-components'
import BtnFeature from '../../common/ButtonFeature'
import R from '../../resources/R'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopicText = styled.p`
  font-size: 1.5rem;
  color: ${R.colors.text};
`

const WrapFeatures = styled.div`
  margin: 0.8rem auto;
  width: 40%;
  max-width: 500px;
  display: flex;
  justify-content: space-evenly;
`

const WorksLanding = () => (
  <WrapContainer>
    <TopicText>Sign a example document to see how verdoc works.</TopicText>
    <WrapFeatures>
      <BtnFeature nameFeature="LETTER" iconSvg={null} />
      <BtnFeature nameFeature="CONTRACT" iconSvg={null} />
      <BtnFeature nameFeature="NDA" iconSvg={null} />
      <BtnFeature nameFeature="MOU" iconSvg={null} />
    </WrapFeatures>
    <WrapFeatures>
      <BtnFeature nameFeature="INVOICE" iconSvg={null} />
      <BtnFeature nameFeature="PURCHASE ORDER" iconSvg={null} />
      <BtnFeature nameFeature="QUOTATION" iconSvg={null} />
    </WrapFeatures>
    <WrapFeatures>
      <BtnFeature nameFeature="TERMS OF SERVICE" iconSvg={null} />
      <BtnFeature nameFeature="PRIVACY POLICY" iconSvg={null} />
    </WrapFeatures>
  </WrapContainer>
)
export default WorksLanding
