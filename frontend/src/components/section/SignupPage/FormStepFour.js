import React from 'react'
import TextField from '../../common/TextFieldCustom'
import styled from 'styled-components'
import R from '../../resources/R'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'gatsby'
import ButtonSubmit from '../../common/BtnSubmitForm'
import TextFieldMat from '@material-ui/core/TextField'

const InputSignature = styled(TextFieldMat)`
  && {
    width: 400px;
    font-size: 0.5px;

    & input {
      height: 180px !important;
      text-align: center !important;
      opacity: 0.6;
      font-family: 'Roboto-Regular';
      font-size: 24px;
      color: #000000;
      text-align: center;
      &:hover {
        cursor: pointer !important;
      }
    }
  }
`

const LinkCustom = styled(Link)`
  color: ${R.colors.primary};
  text-decoration: none;
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin-top: 0.8rem;
  cursor: pointer;
`

const WrapAgree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${R.colors.text_gray};
  letter-spacing: 0.5px;
  font-family: 'Roboto-Regular';
  margin: 1.2rem 0 0.4rem 0;
`
const CheckboxCustom = styled(Checkbox)`
  && {
    color: ${R.colors.primary} !important;
    margin-left: -10px;
    &:hover {
      background-color: ${R.colors.low_primary} !important;
    }
  }
`

const DetailPrivacyText = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 24px;
  margin: 0;
  & > span {
    color: ${R.colors.primary};
  }
`

const Label = styled.p`
  color: ${R.colors.text_gray};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 34px;
  margin: 5px 0 0 0;
`
const PrivacyText = styled.p`
  color: ${R.colors.text_low_gray};
  font-family: 'Roboto-Regular';
  font-size: 1em;
  letter-spacing: 0.5px;
  line-height: 34px;
  margin: 0;
  /* margin: 5px 0 0 0; */
  & > span {
    font-family: 'Roboto-Medium';
    color: ${R.colors.green_privacy};
  }
`
const LeftPosition = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 0.15rem;
  margin-top: 1rem;
`
const IconCorrect = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`

const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 18px;
  margin-bottom: 2rem;
`

const SkipText = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: ${R.colors.primary};
  letter-spacing: 1.25px;
  text-align: center;
  line-height: 16px;
  margin: auto;
  text-transform: uppercase;
`

const FormStepFour = () => {
  return (
    <>
      <LeftPosition>
        <Label>Create your electronic signature</Label>
      </LeftPosition>
      <TextField
        type="text"
        name="Identification"
        label="Identification number or Passport "
        placeholder="9933877645367"
        autoComplete="one-time-code"
      />
      <LeftPosition>
        <IconCorrect src={R.images.ic_correct} />
        <PrivacyText>
          Your privacy is <span>protected.</span>
        </PrivacyText>
      </LeftPosition>
      <ContainerDetail>
        <DetailPrivacyText>
          Your privacy is important to Verdoc. so we have develop{' '}
        </DetailPrivacyText>
        <DetailPrivacyText>
          Privacy Policy to make sure that your personal{' '}
        </DetailPrivacyText>
        <DetailPrivacyText>
          information will not be provided to the Third Party.{' '}
        </DetailPrivacyText>
      </ContainerDetail>
      <InputSignature
        variant="outlined"
        type="text"
        name="signature"
        label="Signature"
        value="Input text"
        disabled
        //    autoComplete={props.autoComplete}
        //   value={values.value}
        //   onChange={handleChangeText('value')}
        //    placeholder={props.placeHolder}
      />
      <WrapAgree>
        <CheckboxCustom
          // checked={state.checkedA}
          // onChange={handleChange('checkedA')}
          value="checkAgree"
        />
        <Label>
          I agree to Verdoc’s <LinkCustom to="/">Terms of Service</LinkCustom>{' '}
          and <br />
          <LinkCustom to="/">Privacy Policy.</LinkCustom>
        </Label>
      </WrapAgree>
      <ButtonSubmit text="COMPLETE SIGN UP" disabled />
      <SkipText to="/">Skip & Sign up</SkipText>
    </>
  )
}

export default FormStepFour
