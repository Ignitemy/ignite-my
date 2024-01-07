import React, { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import SuccessIcon from '@/images/svg/success'
//component
import RadioButton from '@/components/RadioButton'
import { Button, Heading, Text } from '@/components/index'
import { listOfStates, shirtSizes, languagePreferences } from '../register/_form'
// import StateModal from './_state-block-model'
//styled component
import styled from 'styled-components'
//formik
import { Formik, Form, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'
//mui
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Checkbox from '@mui/material/Checkbox'
import { createTheme, ThemeProvider } from '@mui/material/styles'
//firebase
// import { getUserByUserId } from '@/helpers/firebase'
import { useAuth } from '@/helpers/auth'
import FirebaseContext from '@/context/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9999'
    }
  },
  typography: {
    fontFamily: ['Gotham', 'sans-serif'].join(',')
  }
})

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

const StyledTextField = styled(TextField)`
  color: var(--color-white);
  margin: 1.2rem 0 !important;

  > label {
    font-size: 2rem;
    color: var(--color-white);
    left: -12px;

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  > div {
    background-color: var(--color-white);
    border-radius: 8px;
    font-size: 1.4rem;
    margin-top: 16px;

    input {
      padding: 0.8rem 1.2rem;
      height: 36px;
      font-size: 1.6rem;

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
  }

  .MuiFormHelperText-root.Mui-error {
    font-size: 1.4rem;
  }

  > p {
    font-size: 1.2rem;
  }
`

const StyledSelect = styled(Select)`
  background-color: var(--color-white);
  border-radius: 8px;
  height: 52px;
  margin: 1.2rem 0;

  div {
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    display: flex;
    height: 100%;
    align-items: center;
  }

  svg {
    right: 12px;
    font-size: 2.5rem;
  }
`

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 1.4rem;
  padding-left: 1rem;
`

const FormWrapper = styled.div`
  width: 90%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`

// const QuestionWrapper = styled.div`
//   margin-top: 2rem;
// `

const ButtonWrapper = styled.div`
  margin-top: 4rem;
`

const TwoColumnRow = styled.div`
  display: flex;
  justify-content: space-between;

  .MuiTextField-root {
    width: 48%;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const FourColumnRow = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;

  div:first-child {
    width: 20%;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
  div:last-child {
    width: 100%;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const CustomTextField = ({ ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <StyledTextField
      InputLabelProps={{
        shrink: true
      }}
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const CustomSelect = ({ ...props }) => {
  const [field] = useField(props)
  return (
    <StyledSelect {...props} {...field}>
      {props.children}
    </StyledSelect>
  )
}

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;

  .MuiCheckbox-root {
    color: var(--color-white);
  }

  .MuiCheckbox-colorSecondary.Mui-checked {
    color: var(--color-orange);
  }

  .MuiSvgIcon-root {
    width: 1.4em;
    height: 1.4em;
  }

  label {
    font-size: 1.6rem;

    span {
      cursor: pointer;
      text-decoration: none;
      color: var(--color-orange);
    }
    span:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`

const StyledLabel = styled(InputLabel)`
  color: var(--color-white) !important;
  font-size: 1.6rem !important;
  margin-top: 1.2rem;
  margin-bottom: -6px;
`

const RegisteredContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7%;
  @media screen and (min-width: 768px) {
    padding: 50px 30px;
    border: 3px solid #fff;
  }
`

const stateForInPerson = ['Kuala Lumpur', 'Putrajaya', 'Selangor']

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

const validationSchema = yup.object({
  age: yup.string().max(2, "You can't be that old...").required("Don't forget to include your age"),
  myKad: yup
    .string()
    .min(12, 'Your NRIC should be at least 12 characters long')
    .matches(/^[0-9]+$/, 'Please only include the numbers of your NRIC')
    .required("Don't forget to include your NRIC number"),
  contactNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Please only include the numbers of your contact number')
    .max(14, 'Contact Number must be at most 14 characters')
    .required("Don't forget your contact number in case we need to give you a ring."),
  address: yup.string().required("Don't forget to include your address"),
  city: yup.string().required("Don't forget your city"),
  postcode: yup
    .string()
    .max(6, 'Your postcode must be no longer than 6 characters')
    .required("Don't forget your postcode"),
  state: yup.string().required("Don't forget to include your state"),
  // shirtSize: yup.string().required("Don't forget to include your t-shirt size"),
  school: yup.string().required("Don't forget to include your school"),
  languagePreference: yup.string().required('Please select your language preference'),
  schoolHasCF: yup.string().required('Let us know whether your school has a Christian Fellowship.'),
  checked: yup.bool().oneOf([true], 'You have to check this to prcoeed')
})

const ShortRegistrationForm = () => {
  const { db } = useContext(FirebaseContext)
  // const [userData, setUserData] = useState({})
  const [displayName, setDisplayName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // for filter option
  const [filterOption, setfilterOption] = useState('online')
  const [stateErrorModal, setStateErrorModal] = useState(false)
  const [registered, setRegistered] = useState(false)

  const user = useAuth()
  // const db = firebase.firestore()

  useEffect(() => {
    if (user) {
      // const subscriber = db.collection('users').onSnapshot((snapshot) => {
      //   snapshot.forEach((doc) => {
      //     const data = doc.data()
      //     if (data.email === user.email) {
      //       setUserData(data)
      //       return
      //     }
      //   })
      //   setIsLoading(false)
      // })
      const unsub = onSnapshot(collection(db, 'ignitemy23'), (querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const data = doc.data()
          if (data.email === user.email) {
            setUserData(data)
            return
          }
          setIsLoading(false)
        })
      })
      setDisplayName(user.displayName)
      setIsLoading(false)

      return () => unsub()
      // return () => subscriber()
    }
  }, [user])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const handleRadioValueOnChange = (e, setFieldValue) => {
    const selectedAttendanceOption = e.target.value
    if (selectedAttendanceOption === 'online') {
      setfilterOption(selectedAttendanceOption)
    } else {
      setFieldValue('state', '')
      setfilterOption('inPerson')
    }
  }

  const handleRegistration = async (values, actions) => {
    actions.setSubmitting(true)
    // const statesAllowedForInPerson = ['Kuala Lumpur', 'Putrajaya', 'Selangor']

    // handle state validation for in-person option
    // this is to prevent the loophole: Even though the input seems to be reseted when choosing in-person
    // it doesn't reset the actual input, so the user will still be able to submit the form
    // if (values.attendance === 'in-person' && !statesAllowedForInPerson.includes(values.state)) {
    //   // return alert('You are only allowed to atttend physically if you are from Kuala Lumpur, Selangor and Putrajaya. Please select "online" if you wished to attend from other states.')
    //   setStateErrorModal(true)
    //   return
    // }

    try {
      const currentUser = firebase.auth().currentUser
      // const userDocumentId = await getUserByUserId(currentUser.uid)
      // update existing user document
      // await firebase.firestore().collection('users').doc(userDocumentId[0].docId).add({
      await firebase.firestore().collection('ignitemy23').add({
        userId: currentUser.uid,
        fullName: currentUser.displayName,
        email: currentUser.email,
        age: values.age,
        myKad: values.myKad,
        contactNumber: values.contactNumber,
        address: values.address,
        city: values.city,
        postcode: values.postcode,
        state: values.state,
        school: values.school,
        // shirtSize: values.shirtSize,
        remarks: values.remarks,
        occupation: values.occupation,
        attendance: values.attendance,
        schoolHasCF: values.schoolHasCF,
        languagePreference: values.languagePreference,
        firstTime: 'No',
        // ignite2022: true,
        dateCreated: Date.now()
      })
      setRegistered(true)
      // once done redirect to home page
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        {registered ? (
          <RegisteredContainer>
            <SuccessIcon />
            <Text color="white" size="2.4rem" align="center" m="4.5rem 0">
              Hey {user.displayName}!
              <br />
              Your registration is complete.
              <br />
              See you at IGNITEMY2024
            </Text>
            <Text color="white" size="2rem" align="center" m="4.5rem 0">
              Redirecting you back to the homepage...
            </Text>
          </RegisteredContainer>
        ) : (
          <FormContainer>
            <HeadingWrapper>
              <Heading size="4.8rem" color="white" fstyle="italic" ls="4px">
                <span style={{ textShadow: '3px 1px 0 #FF6600' }}>Hey {displayName}!</span>
                <br />
                <span style={{ textShadow: '3px 1px 0 #FF6600' }}>
                  Register for IGNITEMY<Desktop2022>2023</Desktop2022>
                </span>
                <Mobile2022>2023</Mobile2022>
              </Heading>
            </HeadingWrapper>
            <Formik
              initialValues={{
                age: '',
                myKad: '',
                contactNumber: '',
                address: '',
                city: '',
                postcode: '',
                state: '',
                school: '',
                // shirtSize: '',
                remarks: '',
                occupation: 'student',
                attendance: 'online',
                schoolHasCF: '',
                languagePreference: '',
                checked: false
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => handleRegistration(values, actions)}
            >
              {({ isSubmitting, dirty, isValid, setFieldValue }) => (
                <StyledForm autoComplete="off">
                  <FormWrapper>
                    <FourColumnRow>
                      <Field
                        type="number"
                        name="age"
                        label="Age"
                        placeholder="e.g. 17"
                        required
                        as={CustomTextField}
                      />
                      <Field
                        type="string"
                        name="myKad"
                        label="NRIC/Passport Number (without dashes)"
                        placeholder="e.g. 901230064089"
                        required
                        as={CustomTextField}
                      />
                    </FourColumnRow>
                    <Field
                      type="tel"
                      name="contactNumber"
                      label="Contact Number (without dashes)"
                      placeholder="e.g. 0123456789"
                      required
                      as={CustomTextField}
                    />
                    <RadioButton
                      question={secondRadioButtonQuestion.question}
                      options={secondRadioButtonQuestion.options}
                      name={secondRadioButtonQuestion.name}
                    />
                    <Field
                      name="address"
                      label="House Unit Number & Street Address"
                      required
                      as={CustomTextField}
                    />
                    <TwoColumnRow>
                      <Field
                        name="city"
                        label="City"
                        placeholder="e.g. Petaling Jaya"
                        required
                        as={CustomTextField}
                      />
                      <Field
                        name="postcode"
                        label="Postcode"
                        placeholder="e.g. 48100"
                        required
                        as={CustomTextField}
                      />
                    </TwoColumnRow>
                    <StyledLabel htmlFor="State">State *</StyledLabel>
                    <Field name="state" label="State" required as={CustomSelect}>
                      {listOfStates
                        .filter((state) => {
                          if (
                            filterOption === 'inPerson' &&
                            !stateForInPerson.includes(state.value)
                          ) {
                            state.disabled = true
                            return state
                          }
                          state.disabled = false
                          return state
                        })
                        .map((state) => {
                          return (
                            <MenuItem
                              key={state.value}
                              value={state.value}
                              disabled={state.disabled}
                            >
                              {state.value}
                            </MenuItem>
                          )
                        })}
                    </Field>
                    <Field
                      name="school"
                      label="School"
                      placeholder="e.g. SMK Damansara Jaya"
                      required
                      as={CustomTextField}
                    />
                    <RadioButton
                      question={firstRadioButtonQuestion.question}
                      options={firstRadioButtonQuestion.options}
                      name={firstRadioButtonQuestion.name}
                    />
                    {/* <StyledLabel htmlFor="shirtSize">
                      T-Shirt size? Refer to sizing chart{' '}
                      <a
                        href="https://drive.google.com/file/d/1fM2eJk99bT5wHun0NWJaIQIw-yjN6Bio/view"
                        target="_blank"
                        style={{ color: 'var(--color-orange)' }}
                      >
                        here
                      </a>
                      .*
                    </StyledLabel>
                    <Field name="shirtSize" label="shirtSize" required as={CustomSelect}>
                      {shirtSizes.map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                      </Field> */}
                    <StyledLabel htmlFor="schoolHasCF">
                      Does your school have a Christian Fellowship?*
                    </StyledLabel>
                    <Field
                      name="schoolHasCF"
                      label="schoolHasCF"
                      placeholder="e.g. SMK Damansara Jaya"
                      required
                      as={CustomSelect}
                    >
                      {['Yes', 'No'].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Field>
                    <StyledLabel htmlFor="languagePreference">Language Preference*</StyledLabel>
                    <Field
                      name="languagePreference"
                      label="languagePreference"
                      required
                      as={CustomSelect}
                    >
                      {languagePreferences.map((language) => (
                        <MenuItem key={language} value={language}>
                          {language}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      name="remarks"
                      label="Remarks (if any)"
                      placeholder="e.g. So excited for IGNITEMY!"
                      as={CustomTextField}
                    />
                    <CheckboxGroup>
                      <Field type="checkbox" name="checked" id="checked" as={Checkbox} />
                      <label htmlFor="checked" style={{ color: 'var(--color-white)' }}>
                        All the info above are correct, especially your age & address
                      </label>
                    </CheckboxGroup>
                    <StyledErrorMessage name="checked" component="div" />
                    <ButtonWrapper>
                      <Button
                        style={{ width: '100%' }}
                        orange="true"
                        type="submit"
                        disabled={!isValid || !dirty || isSubmitting}
                      >
                        Confirm
                      </Button>
                    </ButtonWrapper>
                  </FormWrapper>
                </StyledForm>
              )}
            </Formik>
          </FormContainer>
        )}
      </PageContainer>
      {/* <StateModal showStateModal={stateErrorModal} closeModal={() => setStateErrorModal(false)} /> */}
    </ThemeProvider>
  )
}

export default ShortRegistrationForm
