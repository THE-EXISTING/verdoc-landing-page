import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import R from '../resources/R'

const CardBtn = styled(Button)`
  && {
    display: flex;
    color: ${R.colors.primary};
    padding: 0.1rem 0.5rem;
    margin: auto 1rem;
  }
`

const IconFeature = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.38rem;
`

const BtnFeature = props => (
  <CardBtn variant="outlined">
    {props.pathIcon ? <IconFeature src={props.pathIcon} /> : null}
    {props.nameFeature}
  </CardBtn>
)

export default BtnFeature
