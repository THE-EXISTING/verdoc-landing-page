import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const FeatureCard = styled.div`
  cursor: pointer;
  width: 350px;
  height: 250px;
  border: 1px solid
    ${props => (props.isPrimary ? R.colors.primary : R.colors.gray)};
  background-color: ${props =>
    props.isPrimary ? R.colors.primary : 'transparent'};
  border-radius: 6px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    opacity: 0.8;
    background-color: ${R.colors.primary};
  }
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
  background-color: blue;
`

const FeatureName = styled.p`
  font-size: 1.1em;
  color: ${props => (props.isPrimary ? R.colors.white : R.colors.primary)};
`

const FeatureDetail = styled.p`
  font-size: 0.9em;
  color: ${props => (props.isPrimary ? R.colors.white : R.colors.text)};
`

const HorizontalRule = styled.hr`
  /* border-width: 1px; */
  width: 70%;
`

const IconBottom = styled.img`
  width: 15px;
  height: 15px;
  background-color: red;
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  z-index: 2;
`
const CardMvplanding = props => (
  <>
    <FeatureCard isPrimary={props.isPrimary}>
      <Icon />
      <FeatureName isPrimary={props.isPrimary}>{props.featureName}</FeatureName>
      <HorizontalRule />
      <FeatureDetail isPrimary={props.isPrimary}>
        {props.featureDetail}
      </FeatureDetail>
      {props.showIcon ? <IconBottom /> : null}
    </FeatureCard>
  </>
)

export default CardMvplanding
