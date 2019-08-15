import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import Radio from '@material-ui/core/Radio'

const WrapHorizontal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ContainerTextPermisson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const IconPrivacy = styled.img`
  width: 28px;
  height: 28px;
  margin: auto 8px auto 0;
`

const TextMainPrivacy = styled.p`
  margin: 0.1em 0.2em;
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: ${R.colors.text};
  white-space: nowrap;
`

const TextDetailPrivacy = styled.p`
  margin: 0.1em 0.2em;
  font-family: 'Roboto-Regular';
  font-size: 10px;
  color: ${R.colors.text_three_gray};
  white-space: nowrap;
`

const RadioPermisson = styled(Radio)`
  && {
    color: ${R.colors.primary} !important;

    &:hover {
      background-color: ${R.colors.low_primary} !important;
    }
  }
`

const RadioHorizontalComponent = props => {
  return (
    <WrapHorizontal>
      <RadioPermisson
        checked={props.option === props.type}
        onChange={props.handle}
        value={props.type}
        name={props.name}
        inputProps={{ 'aria-label': props.type }}
      />
      <IconPrivacy src={props.icPath} />
      <ContainerTextPermisson>
        <TextMainPrivacy>{props.textType}</TextMainPrivacy>
        <TextDetailPrivacy>{props.textDetail}</TextDetailPrivacy>
      </ContainerTextPermisson>
    </WrapHorizontal>
  )
}

export default RadioHorizontalComponent
