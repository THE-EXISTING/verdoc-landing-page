import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import TopicText from '../../common/TopicText'
import CardReason from '../../common/CardReason'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const IconReason = styled.img`
  background: ${R.colors.primary};
  width: 50px;
  height: 50px;
  margin: 1rem auto;
`
const DetailReason = styled.p`
  color: ${R.colors.text_gray};
`

const WrapReasons = styled.div`
  display: flex;
  justify-content: center;
`
const ReasonLanding = () => (
  <WrapContainer>
    <TopicText text="Reasons to use Verdoc" isPrimary={true} />
    <DetailReason>
      Sign and verify any kind of records without relying on trusted third
      parties
    </DetailReason>
    <IconReason />
    <WrapReasons>
      <CardReason
        textReason="Proof of Identity"
        textDetail="Irrefutable attribution and traceability that can be independently verified."
      />
      <CardReason
        textReason="Proof of Existence"
        textDetail="Sign that a documents/dataset of existed at a certain point in time."
      />
      <CardReason
        textReason="Proof of Integrity"
        textDetail="Monitor your documents/dataset in real time to ensure it has not been modified."
      />
      <CardReason
        textReason="Proof of Receipt"
        textDetail="Prove your documents/dataset that received and opened at acentain point in time."
      />
    </WrapReasons>
  </WrapContainer>
)
export default ReasonLanding
