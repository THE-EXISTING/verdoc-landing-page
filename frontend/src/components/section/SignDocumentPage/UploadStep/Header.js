import React from 'react'
import styled from 'styled-components'
import TextDetai from '../../../common/DetailText'
import R from '../../../resources/R'

const TopicPrimary = styled.p`
  font-family: Courier;
  margin: 7rem auto 2rem auto;
  font-size: 3rem;
  color: ${R.colors.primary};
  letter-spacing: 0.35px;
`

const HomeSignDocs = () => {
  return (
    <>
      <TopicPrimary>Sign Documets</TopicPrimary>
      <TextDetai
        text="Verdoc is empowered by blockchain technology call"
        space="1em"
        width="auto"
      />
      <TextDetai
        text="Blockchain Timestamping Architecture (BTA)"
        isPrimary={true}
        space="0"
        width="auto"
      />
    </>
  )
}

export default HomeSignDocs
