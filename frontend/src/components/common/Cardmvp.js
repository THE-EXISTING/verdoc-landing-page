import React, { useState } from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const FeatureCard = styled.div`
  font-family: 'Roboto-Regular';
  cursor: pointer;
  width: 340px;
  height: 220px;
  border: 1px solid ${R.colors.gray};
  border-radius: 6px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${R.colors.gray};

  &:hover {
    background-color: ${R.colors.primary};
    color: ${R.colors.white};
  }
`

const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

const FeatureName = styled.p`
  font-size: 1rem;
  color: ${R.colors.primary};

  ${FeatureCard}:hover & {
    color: ${R.colors.white};
  }
`

const FeatureDetail = styled.p`
  font-size: 0.75em;
  color: ${R.colors.text_gray};

  ${FeatureCard}:hover & {
    color: ${R.colors.white};
  }
`

const HorizontalRule = styled.hr`
  border: 0.5px solid ${R.colors.gray};
  width: 70%;

  ${FeatureCard}:hover & {
    border-color: ${R.colors.white};
  }
`

const CardMvplanding = props => {
  const [IcPath, setIcPath] = useState(props.icPath)

  return (
    <>
      <FeatureCard
        onMouseOver={() => setIcPath(props.icHoverPath)}
        onMouseLeave={() => setIcPath(props.icPath)}
      >
        <Icon src={IcPath} />
        <FeatureName>{props.featureName}</FeatureName>
        <HorizontalRule />
        <FeatureDetail>{props.featureDetail}</FeatureDetail>
      </FeatureCard>
    </>
  )
}

export default CardMvplanding
