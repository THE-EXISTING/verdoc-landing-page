import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'

import TopicText from '../../common/TopicText'
import ItemPartner from '../../common/ItenPartner'

const WrapContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: ${R.colors.bg_partner_section};
`

const ContainerPartners = styled.div`
  display: flex;
  justify-content: center;
`

const PartnerLanding = () => (
  <WrapContainer>
    <TopicText text="Who trusts us?" isPrimary={false} />
    <ContainerPartners>
      <ItemPartner namePartner="A" imagePartner={null} />
      <ItemPartner namePartner="B" imagePartner={null} />
      <ItemPartner namePartner="C" imagePartner={null} />
      <ItemPartner namePartner="D" imagePartner={null} />
      <ItemPartner namePartner="E" imagePartner={null} />
    </ContainerPartners>
  </WrapContainer>
)
export default PartnerLanding
