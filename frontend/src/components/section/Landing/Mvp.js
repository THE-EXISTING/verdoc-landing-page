import React from 'react'
import styled from 'styled-components'
import CardMvp from '../../common/Cardmvp'
import R from '../../resources/R'
import { Link } from 'gatsby'

const ContainerMvp = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`

const LinkCustom = styled(Link)`
  text-decoration: none;
  /* outline: none; */
  /* color: ${R.colors.primary}; */
`

const MvpLanding = () => (
  <>
    <ContainerMvp>
      <LinkCustom to="/sign_documents">
        <CardMvp
          icPath={R.images.ic_mvp_sign}
          icHoverPath={R.images.ic_mvp_sign_white}
          featureName="Sign documents"
          featureDetail="Upload documents and sign its"
        />
      </LinkCustom>
      <CardMvp
        icPath={R.images.ic_mvp_verify}
        icHoverPath={R.images.ic_mvp_verify_white}
        featureName="Verify documents"
        featureDetail="Check the authenticity of documents"
      />
    </ContainerMvp>
  </>
)
export default MvpLanding
