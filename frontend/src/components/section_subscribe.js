import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import TextField from './common/textfield'

const WraperContent = styled.div` 
  margin-top: 30px;
  width: 100%;
  display: block;
`

const WraperForm = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextOnBtnFront = styled.div`
  opacity: 0.6;
  font-family: Courier;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.36px;
  /* display: inline-block; */
  display: block;
  margin-bottom: 0px;
`
const TextBold = styled.div`
  display: inline;
  font-weight: bold;
`
const BtnSubscribe = styled(Button)`
  height: 56px;
  display: inline-block !important;
  text-transform: lowercase !important;
  font-size: 16px;
  color: #fff !important;
  background-color: #5856d6 !important;
  &:hover {
    -webkit-box-shadow: 0.75px 0.75px 5.5px 0.75px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0.75px 0.75px 5.5px 0.75px rgba(0, 0, 0, 0.45);
    box-shadow: 0.75px 0.75px 5.5px 0.75px rgba(0, 0, 0, 0.45);
  }
`
const Cutter = styled.div`
  display: inline;
  ${media.lessThan('medium')`
    display: block;
`}
`
const Subscribe = props => {
  const [email, setEmail] = useState(``)

  // const { value, handleSubmit, handleChange } = useSubscribe(Subscribed)

  const handleSubmit = event => {
    // console.log('clicked', email)
    // Add a second document with a generated ID.
    event.preventDefault()
    props.db
      .firestore()
      .collection('subscribers')
      .doc(email)
      .set({
        email: email,
        timestamp: moment().format('x'),
      })
      .then(function() {
        console.log('Subscribe success', email)
      })
      .catch(function(error) {
        console.error('Error seting document: ', error)
      })
    // console.log('for deploy without firestore')
  }
  const handleTyping = value => setEmail(value['value'])

  return (
    <WraperContent>
      <TextOnBtnFront>
        <Cutter>Please subscribe to get&nbsp;</Cutter>
        <Cutter>
          <TextBold>free 3 month usage. 💰💰💰</TextBold>
        </Cutter>
      </TextOnBtnFront>
      <WraperForm>
        <TextField handleTyping={handleTyping} />
        <BtnSubscribe size="large" onClick={event => handleSubmit(event)}>
          subscribe
        </BtnSubscribe>
      </WraperForm>
    </WraperContent>
  )
}

//   )
// }

export default Subscribe
