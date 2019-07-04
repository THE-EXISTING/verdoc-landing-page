import React from 'react'
import styled from 'styled-components'
import BtnFeature from '../../common/ButtonFeature'
import TopicText from '../../common/TopicText'
import R from '../../resources/R'
const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem auto 0 auto;
`

const WrapFeatures = styled.div`
  margin: 0 auto 1.4rem auto;
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
      font="Roboto-Regular"
      isPrimary={false}
    />
    <WrapFeatures>
      <BtnFeature nameFeature="LETTER" pathIcon={R.images.ic_work_letter} />
      <BtnFeature nameFeature="CONTRACT" pathIcon={R.images.ic_work_contact} />
      <BtnFeature nameFeature="NDA" pathIcon={R.images.ic_work_nda} />
      <BtnFeature nameFeature="MOU" pathIcon={R.images.ic_work_mou} />
    </WrapFeatures>
    <WrapFeatures>
      <BtnFeature nameFeature="INVOICE" pathIcon={R.images.ic_work_invoice} />
      <BtnFeature nameFeature="PURCHASE ORDER" pathIcon={R.images.ic_work_po} />
      <BtnFeature
        nameFeature="QUOTATION"
        pathIcon={R.images.ic_work_quotation}
      />
    </WrapFeatures>
    <WrapFeatures>
      <BtnFeature nameFeature="TERMS OF SERVICE" pathIcon={null} />
      <BtnFeature nameFeature="PRIVACY POLICY" pathIcon={null} />
    </WrapFeatures>
  </WrapContainer>
)
export default WorksLanding
