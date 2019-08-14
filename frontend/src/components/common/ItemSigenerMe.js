import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const TextMajor = styled.p`
  font-family: 'Roboto-Medium';
  color: ${R.colors.text_low_gray};
  margin: 0.5rem 0;
  font-weight: bold;
`

const TextIdentification = styled.p`
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: ${R.colors.text_gray};
  margin: 0.5rem 0 0 0;
`

const ItemSigenerMe = () => {
  return (
    <Container>
      <TextMajor>Nonthawit Doungsodsri</TextMajor>
      <TextMajor>nonthawit.kub@gmail.com</TextMajor>
      <TextIdentification>Identification Number</TextIdentification>
      <TextMajor>F298129E3a2AB</TextMajor>
    </Container>
  )
}

export default ItemSigenerMe
