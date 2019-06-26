import React from 'react'
import styled from 'styled-components'
import CardMvp from '../../common/Cardmvp'
import R from '../../resources/R'

const ContainerMvp = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`

const MvpLanding = () => (
  <>
    <ContainerMvp>
      <CardMvp
        isPrimary={false}
        showIcon={false}
        featureName="Sign documents"
        featureDetail="Upload documents and sign its"
      />
      <CardMvp
        isPrimary={true}
        showIcon={true}
        featureName="Verify documents"
        featureDetail="Check the authenticity of documents"
      />
    </ContainerMvp>
  </>
)
export default MvpLanding
