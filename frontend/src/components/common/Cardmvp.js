import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const FeatureCard = styled.div`
  font-family: 'Roboto-Regular';
  cursor: pointer;
  width: 340px;
  height: 220px;
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
    background-color: ${props =>
      props.isPrimary ? R.colors.mvp_verify_hover : R.colors.mvp_sign_hover};
  }
`

const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  /* background-color: blue; */
`

const FeatureName = styled.p`
  font-size: 1rem;
  color: ${props => (props.isPrimary ? R.colors.white : R.colors.primary)};
`

const FeatureDetail = styled.p`
  font-size: 0.75em;
  color: ${props => (props.isPrimary ? R.colors.white : R.colors.text_gray)};
`

const HorizontalRule = styled.hr`
  /* border-width: 1px; */
  width: 70%;
`

const CardMvplanding = props => (
  <>
    <FeatureCard isPrimary={props.isPrimary}>
      <Icon src={props.icPath} />
      <FeatureName isPrimary={props.isPrimary}>{props.featureName}</FeatureName>
      <HorizontalRule />
      <FeatureDetail isPrimary={props.isPrimary}>
        {props.featureDetail}
      </FeatureDetail>
    </FeatureCard>
  </>
)

export default CardMvplanding
