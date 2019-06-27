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
  padding: 1rem;
  &:hover {
    border: 2px solid ${R.colors.primary};
    border-radius: 6px;
  }
`

const TextReason = styled.p`
  font-family: 'RobotoSlab-Regular';
  font-size: 1rem;
  color: ${R.colors.primary};
`

const TextDetail = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 1rem;
  color: ${R.colors.text_gray};
`

const IconReason = styled.img`
  width: 56px;
  height: 56px;
`
const CardReason = props => {
  return (
    <WrapCard>
      <IconReason src={props.iconPath} />
      <TextReason>{props.textReason}</TextReason>
      <TextDetail>{props.textDetail}</TextDetail>
    </WrapCard>
  )
}

export default CardReason
