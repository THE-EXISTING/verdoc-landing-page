import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const WrapItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 3rem;
`

const ImagePartner = styled.img`
  width: 65px;
  height: 65px;
  background: ${R.colors.primary};
`

const NamePartner = styled.p`
  color: ${R.colors.text};
  font-size: 1rem;
`

const ItemPartner = props => (
  <WrapItem>
    <ImagePartner />
    <NamePartner>{props.namePartner}</NamePartner>
  </WrapItem>
)
export default ItemPartner
