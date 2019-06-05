import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import R from '../res/R'
const WraperForm = styled.div`
  /* width: 100%; */
  display: inline-block;
  /* margin-top: 25px; */
  top: 0;
  /* margin: 0; */
`

const TextFieldStyled = styled(TextField)`
  width: 50vw;
  max-width: 352px;
`

const useStyles = makeStyles(theme => ({
  textField: {
    height: 56,
    fontSize: 16,
    borderColor: R.colors.primary,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: theme.spacing(1),
    backgroundColor: R.colors.white,
  },
  cssLabel: {
    borderWidth: '2px',
    // color: '#5856D6',
  },

  cssOutlinedInput: {
    fontSize: 16,
    '&$cssFocused $notchedOutline': {
      borderWidth: '2px',
      borderColor: R.colors.primary,
    },
  },

  cssFocused: {},

  notchedOutline: {
    // borderWidth: '2px',
    // borderColor: '#5856d6 !important',
  },
}))

function TextFieldCustom({ handleTyping }) {
  const classes = useStyles()
  const [values, setValues] = useState({
    value: '',
  })

  const handleChangeText = name => event => {
    event.persist()
    setValues({ ...values, [name]: event.target.value })
    // handleTyping(values)
  }

  useEffect(() => {
    handleTyping(values)
  }, [values])

  return (
    <WraperForm>
      {' '}
      <TextFieldStyled
        id="standard-name"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        className={classes.textField}
        value={values.value}
        onChange={handleChangeText('value')}
        placeholder="your@verdoc.io"
        margin="normal"
        variant="outlined"
        autoFocus
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
    </WraperForm>
  )
}

export default TextFieldCustom
