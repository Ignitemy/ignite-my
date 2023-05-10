import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import { useRouter } from 'next/router'
import { Formik, Form, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FirebaseContext from '@/context/firebase'
import { doesEmailExist } from '@/helpers/firebase'
import { Button, Text } from '@/components/index'
import { useAuth } from '@/helpers/auth'
import SuccessIcon from '@/images/svg/success'
import InstaIcon from '@/images/svg/insta-no-outline'
import Modal from './_modal'
import AlreadyRegisteredModal from './_already-registered-modal'
import RadioButton from '@/components/RadioButton'
import StateModal from './_state-block-modal'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9999'
    }
  },
  typography: {
    fontFamily: ['Gotham', 'sans-serif'].join(',')
  }
})

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 3rem 8rem;
  /* background-color: var(--color-black); */
  /* background-color: transparent; */

  @media (max-width: 1200px) {
    padding: 2.5rem 4rem;
  }
  @media (max-width: 480px) {
    padding: 4rem 2.4rem;
  }
`

const FormHeading = styled.div`
  font-size: 18px;
  color: var(--color-white);

  > p {
    margin-top: 7px;
  }
`

const RegisteredContainer = styled(Container)`
  background-color: var(--color-black);
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 10rem 0;
`

const StyledInstaIcon = styled(InstaIcon)`
  margin-right: 1.8rem;
`

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
`

const StyledAlert = styled(Alert)`
  margin-top: 2rem;
`

const StyledTextField = styled(TextField)`
  color: var(--color-white);
  margin: 1.2rem 0 !important;

  > label {
    font-size: 2rem;
    color: var(--color-white);
    top: -6px;

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  > div {
    background-color: var(--color-white);
    border-radius: 8px;
    font-size: 1.4rem;

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

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 1.4rem;
  padding-left: 1rem;
`

const StyledLabel = styled(InputLabel)`
  color: var(--color-white) !important;
  font-size: 1.6rem !important;
  margin-top: 1.2rem;
  margin-bottom: -6px;
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
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

export const listOfStates = [
  { value: 'Johor', disabled: false },
  { value: 'Kedah', disabled: false },
  { value: 'Kelantan', disabled: false },
  { value: 'Kuala Lumpur', disabled: false },
  { value: 'Labuan', disabled: false },
  { value: 'Malacca', disabled: false },
  { value: 'Negeri Sembilan', disabled: false },
  { value: 'Pahang', disabled: false },
  { value: 'Penang', disabled: false },
  { value: 'Perak', disabled: false },
  { value: 'Perlis', disabled: false },
  { value: 'Putrajaya', disabled: false },
  { value: 'Sabah', disabled: false },
  { value: 'Sarawak', disabled: false },
  { value: 'Selangor', disabled: false },
  { value: 'Terrengganu', disabled: false }
]

const stateForInPerson = ['Kuala Lumpur', 'Putrajaya', 'Selangor']

export const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const languagePreferences = ['English', 'Mandarin', 'Bahasa Malayu']

const FollowButton = styled(Button)`
  display: inline-flex;
  align-items: center;
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

const validationSchema = yup.object({
  fullName: yup.string().required("Don't forget to include your full name"),
  email: yup
    .string()
    .email('Your email has to be in the right format')
    .required("Don't forget to include your email address"),
  password: yup
    .string()
    .min(6, 'Your password must be at least 6 characters long')
    .required("Don't forget to include your password"),
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
  // church: yup.string().required("Don't forget to include church name"),
  languagePreference: yup.string().required('Please select your language preference'),
  schoolHasCF: yup.string().required('Let us know whether your school has a Christian Fellowship.'),
  firstTime: yup.string().required('Let us know whether this is your first time attending IGNITE!'),
  checked: yup.bool().oneOf([true], 'You have to check this to prcoeed'),
  registerChecked: yup.bool().oneOf([true], 'You have to check this to prcoeed')
})

const RegistrationForm = () => {
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [registered, setRegistered] = useState(false)
  // Once we check that the user has already had an account, we can set this to true
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  // for state blocking error modal
  const [stateErrorModal, setStateErrorModal] = useState(false)
  // for filter option
  const [filterOption, setfilterOption] = useState('online')

  useEffect(() => {
    showModal || alreadyRegistered
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [showModal, alreadyRegistered])

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behaviour: 'smooth'
      })
    }
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const handleRadioValueOnChange = (e, setFieldValue) => {
    const selectedAttendanceOption = e.target.value
    if (selectedAttendanceOption === 'online') {
      setfilterOption(selectedAttendanceOption)
    } else {
      setFieldValue('state', '')
      setfilterOption('inPerson')
    }
  }

  const handleSignUp = async (values, actions) => {
    // event.preventDefault()
    actions.setSubmitting(true)
    const statesAllowedForInPerson = ['Kuala Lumpur', 'Putrajaya', 'Selangor']

    // handle state validation for in-person option
    // this is to prevent the loophole: Even though the input seems to be reseted when choosing in-person
    // it doesn't reset the actual input, so the user will still be able to submit the form
    if (values.attendance === 'in-person' && !statesAllowedForInPerson.includes(values.state)) {
      // return alert('You are only allowed to atttend physically if you are from Kuala Lumpur, Selangor and Putrajaya. Please select "online" if you wished to attend from other states.')
      setStateErrorModal(true)
      return
    }

    const emailExists = await doesEmailExist(values.email)
    if (!emailExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)

        // authentication
        // -> emailAddress & password & fullName (displayName)
        await createdUserResult.user.updateProfile({
          displayName: values.fullName
        })

        // firebase user collection (create a document)
        await firebase.firestore().collection('ignitemy23').add({
          userId: createdUserResult.user.uid,
          fullName: values.fullName,
          email: values.email,
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
          // ignite2022: true,
          schoolHasCF: values.schoolHasCF,
          // church: values.church,
          languagePreference: values.languagePreference,
          firstTime: values.firstTime,
          dateCreated: Date.now()
        })

        await fetch(process.env.NEXT_PUBLIC_NOCODEAPI_END_POINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([
            [
              new Date().toLocaleString('en-GB', {
                timeZone: 'Asia/Kuala_Lumpur',
                hour12: false
              }),
              values.fullName,
              values.age,
              values.myKad,
              values.contactNumber,
              values.email,
              values.address,
              values.city,
              values.postcode,
              values.state,
              values.school,
              values.occupation,
              values.attendance,
              // values.shirtSize,
              // values.church,
              values.schoolHasCF,
              values.languagePreference,
              values.firstTime,
              values.remarks
            ]
          ])
        })
        setRegistered(true)
        scrollTop()
        actions.setSubmitting(false)

        setTimeout(() => {
          router.push('/')
        }, 8000)
      } catch (error) {
        setError(error.message)
      }
    } else {
      // values.email = ''
      // setError('That email is already taken, please try another.')
      setAlreadyRegistered(true)
    }
  }

  const CustomPasswordField = ({ ...props }) => {
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
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    )
  }

  const user = useAuth()

  return (
    <ThemeProvider theme={theme}>
      {registered ? (
        <RegisteredContainer>
          <SuccessIcon />
          {user && (
            <Text color="white" size="2.4rem" align="center" m="4.5rem 0">
              Hey {user.displayName}!
              <br />
              Your registration is complete.
              <br />
              See you at IGNITEMY2023
            </Text>
          )}
          <FollowButton orange="true">
            <StyledInstaIcon />
            <a
              href="https://instagram.com/ignitemy______"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'var(--color-white)' }}
            >
              Follow us for more updates
            </a>
          </FollowButton>
          <Text color="white" size="2rem" align="center" m="4.5rem 0">
            Redirecting you back to the homepage...
          </Text>
        </RegisteredContainer>
      ) : (
        <Container>
          <FormHeading>
            {/* <Image src="/images/png/register.png" height={45} width={230} /> */}
            <HeadingShadow>Register</HeadingShadow>
            <p>Submit the form to join IGNITEMY2023!</p>
          </FormHeading>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              age: '',
              myKad: '',
              contactNumber: '',
              address: '',
              city: '',
              postcode: '',
              state: '',
              school: '',
              // shirtSize: 'N/A',
              remarks: '',
              occupation: 'student',
              attendance: 'online',
              // church: '',
              schoolHasCF: '',
              languagePreference: '',
              firstTime: '',
              checked: false,
              registerChecked: false
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSignUp(values, actions)}
          >
            {({ isSubmitting, dirty, isValid, setFieldValue }) => (
              <StyledForm autoComplete="off">
                <Field
                  name="fullName"
                  label="Full Name (as per NRIC)"
                  placeholder="e.g. ignite team"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="e.g. ignite@example.com"
                  required
                  as={CustomTextField}
                />
                <Field
                  name="password"
                  label="Password"
                  placeholder="e.g. ignite123"
                  required
                  as={CustomPasswordField}
                />
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
                    label="NRIC Number/Passport (without dashes)"
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
                  func={(e) => handleRadioValueOnChange(e, setFieldValue)}
                />
                {/* https://web-brackets.com/discussion/12/how-to-use-setfieldvalue-from-outside-render-function-formik */}
                {/* https://stackoverflow.com/questions/66235334/formik-setfieldvalue-inside-a-function */}

                <Field
                  name="address"
                  label="House Unit Number & Street Address"
                  placeholder="e.g. Dream Centre 2 Jalan 13/1, Seksyen 13"
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
                      if (filterOption === 'inPerson' && !stateForInPerson.includes(state.value)) {
                        state.disabled = true
                        return state
                      }
                      state.disabled = false
                      return state
                    })
                    .map((state) => {
                      return (
                        <MenuItem key={state.value} value={state.value} disabled={state.disabled}>
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
                </StyledLabel> */}
                {/* <Field name="shirtSize" label="shirtSize" required as={CustomSelect}>
                  {shirtSizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  name="church"
                  label="Church"
                  placeholder="e.g. Damansara Utama Methodist Church"
                  as={CustomTextField}
                /> */}
                <StyledLabel htmlFor="schoolHasCF">
                  Does your school have a Christian Fellowship?*
                </StyledLabel>
                <Field name="schoolHasCF" label="schoolHasCF" required as={CustomSelect}>
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
                <StyledLabel htmlFor="firstTime">
                  Is this your first time attending IGNITEMY?*
                </StyledLabel>
                <Field name="firstTime" label="firstTime" required as={CustomSelect}>
                  {['Yes', 'No'].map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
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
                    I have informed my parent/guardian of the{' '}
                    <span onClick={() => setShowModal(true)}>statements</span>
                  </label>
                </CheckboxGroup>
                <StyledErrorMessage name="checked" component="div" />
                <CheckboxGroup>
                  <Field
                    type="checkbox"
                    name="registerChecked"
                    id="registerChecked"
                    as={Checkbox}
                  />
                  <label htmlFor="registerChecked" style={{ color: 'var(--color-white)' }}>
                    I am registering for IGNITEMY2023
                  </label>
                </CheckboxGroup>
                <StyledErrorMessage name="registerChecked" component="div" />
                {!registered && error && (
                  <StyledAlert severity="error">
                    <Text size="1.2rem">{error}</Text>
                  </StyledAlert>
                )}
                <ButtonWrapper>
                  <Button orange="true" type="submit" disabled={!isValid || !dirty || isSubmitting}>
                    Register For Event
                  </Button>
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </Container>
      )}
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
      <AlreadyRegisteredModal alreadyRegistered={alreadyRegistered} />
      <StateModal showStateModal={stateErrorModal} closeModal={() => setStateErrorModal(false)} />
    </ThemeProvider>
  )
}

export default RegistrationForm
