import React from 'react'
import styled from 'styled-components'
import BtnFeature from '../../common/ButtonFeature'
import TopicText from '../../common/TopicText'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapFeatures = styled.div`
  margin: 0.6rem auto;
  /* width: 40%; */
  /* max-width: 500px; */
  width: 100%;
  display: flex;
  justify-content: center;
`

const WorksLanding = () => (
  <WrapContainer>
    <TopicText
      text="Sign a example document to see how verdoc works."
      isPrimary={false}
    />
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
