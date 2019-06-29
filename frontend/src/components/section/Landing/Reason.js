import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import TopicText from '../../common/TopicText'
import CardReason from '../../common/CardReason'
import DetailText from '../../common/DetailText'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
`
const IconReason = styled.img`
  /* background: ${R.colors.primary}; */
  width: 42px;
  height: 42px;
  margin: .6rem auto -0.5rem auto;
`

const WrapReasons = styled.div`
  display: flex;
  justify-content: center;
`
const ReasonLanding = () => (
  <WrapContainer>
    <TopicText text="Reasons to use Verdoc" isPrimary={true} />
    <IconReason src={R.images.ic_secure} />
    <DetailText
      text="Sign and verify any kind of records without relying on trusted third
      parties"
    />

    <WrapReasons>
      <CardReason
        iconPath={R.images.ic_pf_identity}
        textReason="Proof of Identity"
        textDetail="Irrefutable attribution and traceability that can be independently verified."
      />
      <CardReason
        iconPath={R.images.ic_pf_exis}
        textReason="Proof of Existence"
        textDetail="Sign that a documents/dataset of existed at a certain point in time."
      />
      <CardReason
        iconPath={R.images.ic_pf_integrity}
        textReason="Proof of Integrity"
        textDetail="Monitor your documents/dataset in real time to ensure it has not been modified."
      />
      <CardReason
        iconPath={R.images.ic_pf_receipt}
        textReason="Proof of Receipt"
        textDetail="Prove your documents/dataset that received and opened at acentain point in time."
      />
    </WrapReasons>
  </WrapContainer>
)
export default ReasonLanding
