import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import R from '../resources/R'
const WraperForm = styled.div`
  display: inline-block;
  top: 0;
`
const useStyles = makeStyles(theme => ({
  textField: {
    width: '50vw',
    maxWidth: 352,
    height: 56,
    fontSize: '1.6rem',
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
    // event.persist()
    setValues({ ...values, [name]: event.target.value })
    // handleTyping(values)
  }

  useEffect(() => {
    handleTyping(values)
  }, [values])

  return (
    <WraperForm>
      {' '}
      <TextField
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
