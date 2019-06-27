import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const WrapItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 3rem;
`

const ImagePartner = styled.img`
  width: 64px;
  height: 64px;
`

const NamePartner = styled.p`
  color: ${R.colors.text_gray};
  font-size: 1rem;
  font-family: 'Roboto-Regular';
`

const ItemPartner = props => (
  <WrapItem>
    <ImagePartner src={props.imagePartner} />
    <NamePartner>{props.namePartner}</NamePartner>
  </WrapItem>
)
export default ItemPartner
