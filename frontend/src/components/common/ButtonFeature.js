import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import R from '../resources/R'

const CardBtn = styled(Button)`
  && {
    font-size: 0.8em;
    color: ${R.colors.primary};
    padding-left: 0.8em;
  }
`

const IconFeature = styled.img`
  width: 10px;
  height: 10px;
  background: ${R.colors.primary};
  margin-right: 0.38rem;
`

const BtnFeature = props => (
  <CardBtn variant="outlined">
    <IconFeature />
    {props.nameFeature}
  </CardBtn>
)

export default BtnFeature
