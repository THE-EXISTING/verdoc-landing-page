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
  width: ${props => props.size};
  height: ${props => props.size};
`

const Card = props => {
  const [IcPath, setIcPath] = useState(props.icPath)

  return (
    <FeatureCard
      onMouseOver={() => setIcPath(props.icHoverPath)}
      onMouseLeave={() => setIcPath(props.icPath)}
    >
      {props.children}
    </FeatureCard>
  )
}

export default Card
