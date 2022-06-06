import React, { useContext } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import RadioButton from '@/components/RadioButton'
import { Button, Heading } from '@/components/index'
import FirebaseContext from '@/context/firebase'
import router from 'next/router'
import { getUserByUserId } from '@/helpers/firebase'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`

const FormContainer = styled.div`
  width: max-content;
`

const HeadingWrapper = styled.div`
  width: 80%;
  margin: auto;

  > h1 {
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`

const Desktop2022 = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`

const Mobile2022 = styled.span`
  display: block;
  text-shadow: 3px 1px 0 #ff6600;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  width: 90%;
  padding-top: 3rem;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`

const QuestionWrapper = styled.div`
  margin-top: 2rem;
`

const ButtonWrapper = styled.div`
  margin-top: 4rem;
`

const firstRadioButtonQuestion = {
  question: 'Student or Teacher?*',
  options: {
    firstOption: {
      value: 'student',
      label: 'Student'
    },
    secondOption: {
      value: 'teacher',
      label: 'Teacher'
    }
  },
  name: 'occupation'
}

const secondRadioButtonQuestion = {
  question: 'Online or In-Person?*',
  options: {
    firstOption: {
      value: 'online',
      label: 'Online'
    },
    secondOption: {
      value: 'in-person',
      label: 'In-Person'
    }
  },
  name: 'attendance'
}

const ShortRegistrationForm = () => {
  const { firebase } = useContext(FirebaseContext)

  const handleRegistration = async (values, actions) => {
    try {
      const currentUser = firebase.auth().currentUser
      const userDocumentId = await getUserByUserId(currentUser.uid)
      console.log(userDocumentId)
      // update existing user document
      await firebase.firestore().collection('users').doc(userDocumentId[0].docId).update({
        occupation: values.occupation,
        attendance: values.attendance,
        ignite2022: true,
        dateCreated: Date.now()
      })
      // once done redirect to home page
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageContainer>
      <FormContainer>
        <HeadingWrapper>
          <Heading size="4.8rem" color="white" fstyle="italic" ls="4px">
            <span style={{ textShadow: '3px 1px 0 #FF6600' }}>
              Register for IGNITEMY<Desktop2022>2022</Desktop2022>
            </span>
            <Mobile2022>2022</Mobile2022>
          </Heading>
        </HeadingWrapper>
        <Formik
          initialValues={{
            occupation: 'student',
            attendance: 'online'
          }}
          onSubmit={(values, actions) => handleRegistration(values, actions)}
        >
          <StyledForm>
            <FormWrapper>
              <RadioButton
                question={firstRadioButtonQuestion.question}
                options={firstRadioButtonQuestion.options}
                name={firstRadioButtonQuestion.name}
              />
              <QuestionWrapper>
                <RadioButton
                  question={secondRadioButtonQuestion.question}
                  options={secondRadioButtonQuestion.options}
                  name={secondRadioButtonQuestion.name}
                />
              </QuestionWrapper>
              <ButtonWrapper>
                <Button style={{ width: '100%' }} orange="true" type="submit">
                  Confirm
                </Button>
              </ButtonWrapper>
            </FormWrapper>
          </StyledForm>
        </Formik>
      </FormContainer>
    </PageContainer>
  )
}

export default ShortRegistrationForm
