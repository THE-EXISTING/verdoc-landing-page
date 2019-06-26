import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const WrapCard = styled.div`
  cursor: pointer;
  width: 300px;
  height: 242px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    border: 2px solid ${R.colors.primary};
    border-radius: 6px;
  }
`

const TextReason = styled.p`
  font-size: 1rem;
  color: ${R.colors.primary};
`
const TextDetail = styled.p`
  font-size: 1rem;
  color: ${R.colors.text_gray};
  margin: 0 1rem;
`
const IconReason = styled.img`
  width: 50px;
  height: 50px;
  background: ${R.colors.primary};
`
const CardReason = props => {
  return (
    <WrapCard>
      <IconReason />
      <TextReason>{props.textReason}</TextReason>
      <TextDetail>{props.textDetail}</TextDetail>
    </WrapCard>
  )
}

export default CardReason
