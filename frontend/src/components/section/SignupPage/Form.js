import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ButtonSubmit from '../../common/BtnSubmitForm'
import HeadSignup from './HeadSignup'
import FormStepOne from './FormStepOne'
import FormStepTwo from './FormStepTwo'
import FormStepThree from './FormStepThree'
import FormStepFour from './FormStepFour'
import R from '../../resources/R'
import { Link } from 'gatsby'

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding-top: 10rem; */
  width: 400px;
`

const SectionStep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.8rem auto;
`

const Space = styled.div`
  height: ${props => props.space};
`

const PreviousContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 20%;
  /* top: 72px; */
  top: 4%;
  &:hover {
    cursor: pointer;
  }
`
const IconArrowBack = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`
const BackText = styled.p`
  font-family: Roboto-Medium;
  font-size: 14px;
  color: ${R.colors.primary};
  letter-spacing: 1.25px;
  line-height: 16px;
`

const FormSingUp = props => {
  const [step, setStep] = useState(1)
  const [showStep, setShowStep] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
    Five: false,
  })
  const nextStep = () => {
    if (step <= 5) {
      setStep(step + 1)
    }
  }
  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }
  const handleStepRegister = () => {
    if (step === 1) {
      setShowStep({
        One: true,
        Two: false,
        Three: false,
        Four: false,
        Five: false,
      })
    } else if (step == 2) {
      setShowStep({
        One: false,
        Two: true,
        Three: false,
        Four: false,
        Five: false,
      })
    } else if (step === 3) {
      setShowStep({
        One: false,
        Two: false,
        Three: true,
        Four: false,
        Five: false,
      })
    } else if (step === 4) {
      setShowStep({
        One: false,
        Two: false,
        Three: false,
        Four: true,
        Five: false,
      })
    } else {
    }
  }
  useEffect(() => {
    handleStepRegister()
    // console.log(step, showStep)
  }, [step])

  return (
    <WrapContainer>
      {!showStep.One ? (
        <PreviousContainer onClick={previousStep}>
          <IconArrowBack src={R.images.ic_back} />
          <BackText>BACK</BackText>
        </PreviousContainer>
      ) : null}
      {!showStep.Four ? (
        <>
          <HeadSignup />
          <Space space="1.5em" />
        </>
      ) : null}

      {showStep.One || showStep.Two ? (
        <SectionStep>
          <FormStepOne />
        </SectionStep>
      ) : null}
      {showStep.Two ? (
        <SectionStep>
          <FormStepTwo />
        </SectionStep>
      ) : null}
      {showStep.Three ? (
        <SectionStep>
          <FormStepThree />
        </SectionStep>
      ) : null}
      {!showStep.Four ? (
        <>
          <Space space="1em" />
          <ButtonSubmit text="NEXT" onClick={nextStep} />
        </>
      ) : null}
      {showStep.Four ? (
        <>
          <FormStepFour {...props} />
        </>
      ) : null}
    </WrapContainer>
  )
}

export default FormSingUp
