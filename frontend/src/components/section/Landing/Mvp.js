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
        icPath={R.images.ic_mvp_sign}
        isPrimary={false}
        featureName="Sign documents"
        featureDetail="Upload documents and sign its"
      />
      <CardMvp
        icPath={R.images.ic_mvp_verify}
        isPrimary={true}
        featureName="Verify documents"
        featureDetail="Check the authenticity of documents"
      />
    </ContainerMvp>
  </>
)
export default MvpLanding
