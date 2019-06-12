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
const TextBold = styled.span`
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
  const [emailReady, setEmailReady] = useState(false) // 0 is ready to subscribe
  const [isExist, setIsExists] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const callSubmited = event => {
    event.preventDefault()
    if (emailReady) {
      // check from child component (TextField) (look at callback)
      props.db
        .firestore()
        .collection('subscribers')
        .doc(email)
        .get()
        .then(snapshot => {
          if (snapshot.exists) {
            // you already subscribe Verdoc.
            setIsSubmit(true)
            setEmailReady(false) // give state = 1 => email is exists (not ready)
            setIsExists(true) // tell textfield show text-error

            console.log(snapshot)
          } else {
            // new subscribe Verdoc.
            setIsSubmit(true)
            setEmailReady(true)
            setIsExists(false)
            props.db
              .firestore()
              .collection('subscribers')
              .doc(email)
              .set({
                email: email,
                timestamp: new Date().getTime(),
              })
              .then(function() {
                console.log('Subscribe success', email)
              })
              .catch(function(error) {
                console.error('Error seting document: ', error)
              })
          }
        })
    } else {
      setIsSubmit(true)
    }
  }
  const handleTyping = value => setEmail(value['value'])
  const handleEmail = value => setEmailReady(value)
  const handleSubmit = value => setIsSubmit(value)
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
        <TextField
          handleTyping={handleTyping}
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          isExist={isExist}
          isSubmit={isSubmit}
        />
        <BtnSubscribe
          variant="outlined"
          size="large"
          onClick={event => callSubmited(event)}
        >
          subscribe
        </BtnSubscribe>
      </WraperForm>
    </WraperContent>
  )
}
export default Subscribe
