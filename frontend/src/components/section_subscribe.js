import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import TextField from './common/textfield'

const WraperContent = styled.div`
  margin-top: 30px;
  width: 100%;
  display: block;
`

const WraperForm = styled.div`
  margin-top: -10px;
  width: 100%;
  /* position: relative; */
  display: inline-block;
  text-align: center;
`
const TextOnBtnFront = styled.p`
  opacity: 0.6;
  font-family: Courier;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.36px;
  /* white-space: nowrap; */
  display: inline-block;
  margin-bottom: 0px;
`
const TextBold = styled.div`
  display: inline;
  font-weight: bold;
`
const BtnSubscribe = styled(Button)`
  margin-top: 34px !important;
  height: 56px;
  display: inline-block !important;
  text-transform: lowercase !important;
  font-size: 16px;
  color: #fff !important;
  background-color: #5856d6 !important;
`
const Cutter = styled.div`
  display: inline-block;
  ${media.lessThan('medium')`
    display: block;
`}
`
const Subscribe = () => (
  <WraperContent>
    <TextOnBtnFront>
      <Cutter>Please subscribe to get&nbsp; </Cutter>
      <Cutter>
        <TextBold> free 3 month usage. 💰💰💰</TextBold>
      </Cutter>
    </TextOnBtnFront>
    <WraperForm>
      <TextField />
      <BtnSubscribe size="large">subscribe</BtnSubscribe>
    </WraperForm>
  </WraperContent>
)

//   )
// }

export default Subscribe
