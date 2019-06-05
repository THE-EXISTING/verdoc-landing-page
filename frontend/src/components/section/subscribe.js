import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../common/textfield'
import R from '../res/R'

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
  font-size: 16px;
  color: ${R.colors.text};
  letter-spacing: 0.36px;
  display: block;
  margin-bottom: 0px;
`
const TextBold = styled.div`
  display: inline;
  font-weight: bold;
`
const BtnSubscribe = styled(Button)`
  height: 56px;
  font-size: 16px;
  &:hover {
    background-color: ${R.colors.primary} !important;
    -webkit-box-shadow: 0.75px 0.75px 5.5px 0.75px
      ${R.colors.border_btn_subsc_hover};
    -moz-box-shadow: 0.75px 0.75px 5.5px 0.75px
      ${R.colors.border_btn_subsc_hover};
    box-shadow: 0.75px 0.75px 5.5px 0.75px ${R.colors.border_btn_subsc_hover};
  }
`
const Cutter = styled.div`
  display: inline;
  ${media.lessThan('medium')`
    display: block;
`}
`

const useStyles = makeStyles(theme => ({
  button: {
    borderWidth: 0,
    display: 'inline-block',
    textTransform: 'lowercase',
    color: R.colors.white,
    backgroundColor: R.colors.primary,
  },
}))
const Subscribe = props => {
  const [email, setEmail] = useState(``)
  const classes = useStyles()

  const handleSubmit = event => {
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
  }
  const handleTyping = value => setEmail(value['value'])

  return (
    <WraperContent>
      <TextOnBtnFront>
        <Cutter>{R.strings.pr_subscribe_one}</Cutter>
        <Cutter>
          <TextBold>
            {R.strings.pr_subscribe_two}
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
          className={classes.button}
        >
          {R.strings.btn_subscribe}
        </BtnSubscribe>
      </WraperForm>
    </WraperContent>
  )
}
export default Subscribe
