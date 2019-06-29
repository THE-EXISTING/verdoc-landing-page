import React from 'react'
import styled from 'styled-components'
import R from '../../resources/R'
import TopicText from '../../common/TopicText'
import Button from '@material-ui/core/Button'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${R.colors.bg_partner_section};
  padding: 1rem 0;
`

const IconApi = styled.img`
  width: 80px;
  height: 30px;
  margin-bottom: 1.4rem;
  margin-top: -0.4rem;
`

const DetailApi = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 1rem;
  color: ${R.colors.text_gray};
  letter-spacing: 0.5px;
  margin: 0.2rem auto;
`

const BtnInfo = styled(Button)`
  && {
    font-family: 'Roboto-Medium';
    color: ${R.colors.primary};
    font-size: 0.8em;
    margin: 2rem;
    text-align: center;
  }
`
const ApiLanding = () => (
  <WrapContainer>
    <TopicText isPrimary={false} text="Verdoc API" />
    <IconApi src={R.images.ic_api} />
    <DetailApi>Integrate your application to Blockchain Timestamping</DetailApi>
    <DetailApi>Architecture, our unique underlying technology.</DetailApi>
    <BtnInfo variant="outlined">MORE INFO</BtnInfo>
  </WrapContainer>
)

export default ApiLanding
