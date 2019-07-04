import React, { useState } from 'react'
import styled from 'styled-components'
import R from '../../resources/R'

const BtnUploadCard = styled.div`
  && {
    font-family: 'Roboto-Regular';
    cursor: pointer;
    width: 340px;
    height: 220px;
    border: 1px solid ${R.colors.gray};
    border-radius: 6px;
    margin: 4rem auto 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    color: ${R.colors.gray};

    &:hover {
      background-color: ${R.colors.primary};
      color: ${R.colors.white};
    }
  }
`

const Icon = styled.img`
  width: 52px;
  height: auto;
`

const FeatureName = styled.p`
  font-size: 1rem;
  color: ${R.colors.primary};

  ${BtnUploadCard}:hover & {
    color: ${R.colors.white};
  }
`

const FeatureDetail = styled.p`
  font-size: 0.9em;
  color: ${R.colors.text_gray};
  margin: 0.2rem auto;
  ${BtnUploadCard}:hover & {
    color: ${R.colors.white};
  }
`

const BtnUpload = () => {
  const [IcPath, setIcPath] = useState(R.images.ic_upload_primary)
  return (
    <>
      <input
        accept="image/*"
        id="outlined-button-file"
        multiple
        type="file"
        style={{ display: 'none' }}
      />
      <label htmlFor="outlined-button-file">
        <BtnUploadCard
          onMouseOver={() => setIcPath(R.images.ic_upload_white)}
          onMouseLeave={() => setIcPath(R.images.ic_upload_primary)}
        >
          <Icon src={IcPath} />
          <FeatureName>+ Upload from your computer</FeatureName>
          <FeatureDetail>The file must be a .pdf</FeatureDetail>
          <FeatureDetail>and smaller than 30Mb</FeatureDetail>
        </BtnUploadCard>
      </label>
    </>
  )
}

export default BtnUpload
