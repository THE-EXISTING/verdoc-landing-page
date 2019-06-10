import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import TextField from '../common/TextField'
import R from '../resources/R'

const WraperContent = styled.div`
  margin-top: 2rem;
  width: 100%;
`
const WraperForm = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextOnBtnFront = styled.div`
  opacity: 0.6;
  font-size: 1em;
  color: ${R.colors.text};
  letter-spacing: 0.36px;
  margin-bottom: 0;
`
const TextBold = styled.div`
  display: inline;
  font-weight: bold;
`
const BtnSubscribe = styled(Button)`
  && {
    
    height: 56px;
    font-size: 1em;
    border-width: 0;
    display: inline-block;
    text-transform: lowercase;
    color: ${R.colors.white};
    background-color: ${R.colors.primary};

    &:hover {
      background-color: ${R.colors.primary} !important;
      -webkit-box-shadow: 0.75px 0.75px 5.5px 0.75px
        ${R.colors.border_btn_subsc_hover};
      -moz-box-shadow: 0.75px 0.75px 5.5px 0.75px
        ${R.colors.border_btn_subsc_hover};
      box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
    }
  }
`
const Cutter = styled.div`
  display: inline;
  ${media.lessThan('medium')`
    display: block;
`}
`

const Subscribe = props => {
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (email !== '') {
      props.db
        .firestore()
        .collection('subscribers')
        .doc(email)
        .set({
          email: email,
          timestamp: new Date().getTime(),
          // timestamp: moment().format('x'),
        })
        .then(function() {
          console.log('Subscribe success', email)
        })
        .catch(function(error) {
          console.error('Error seting document: ', error)
        })
    }
  }
  const handleTyping = value => setEmail(value['value'])

  return (
    <WraperContent>
      <TextOnBtnFront>
        <Cutter>Please subscribe to get </Cutter>
        <Cutter>
          <TextBold>
            free 3 month usage.
            <span role="img" aria-label="money">
              💰💰💰
            </span>
          </TextBold>
        </Cutter>
      </TextOnBtnFront>
      <WraperForm>
        <TextField handleTyping={handleTyping} />
        <BtnSubscribe
          variant="outlined"
          size="large"
          onClick={event => handleSubmit(event)}
        >
          subscribe
        </BtnSubscribe>
      </WraperForm>
    </WraperContent>
  )
}
export default Subscribe
