import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Formik, Form, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Image from 'next/image'
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
  padding: 4rem 8rem;
  /* background-color: var(--color-black); */
  /* background-color: transparent; */

  @media (max-width: 1200px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 480px) {
    padding: 4rem 2.4rem;
  }
`

// const FlexStart = styled.div`
//   display: flex;
//   flex-direction: ${(props) => props.fd};
//   justify-content: flex-start;
//   align-items: center;
// `
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

const ActiveOccupationWrapper = styled.div`
  display: flex;
  width: calc(50% - 9px);
  /* margin-right: 2rem; */

  label {
    width: 100%;
    border: ${({ isActive }) =>
    isActive ? '1px solid var(--color-orange)' : '1px solid var(--color-black)'};
    background-color: ${({ isActive }) =>
    isActive ? 'var(--color-orange)' : 'var(--color-white)'};
    border-radius: 6px;
    padding: 1.8rem 6.6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input {
      display: none;
    }

    ${Text} {
      color: ${({ isActive }) => (isActive ? 'var(--color-white)' : 'var(--color-black)')};
    }
    @media (max-width: 1120px) {
      padding: 1.8rem 4rem;
    }
    @media (max-width: 480px) {
      width: 100%;
      margin-right: 0;
    }
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }
`

const OccupationWrapper = styled.div`
  display: flex;
  width: calc(50% - 9px);

  label {
    width: 100%;
    border: ${({ isActive }) =>
    isActive ? '1px solid var(--color-black)' : '1px solid var(--color-orange)'};
    background-color: ${({ isActive }) =>
    isActive ? 'var(--color-white)' : 'var(--color-orange)'};
    border-radius: 6px;
    padding: 1.8rem 6.6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input {
      display: none;
    }

    ${Text} {
      color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-white)')};
    }

    @media (max-width: 1120px) {
      padding: 1.8rem 4rem;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`

const StyledLabel = styled(InputLabel)`
  color: var(--color-white) !important;
  font-size: 1.6rem !important;
  margin-top: 1.2rem;
  margin-bottom: -6px;
`

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0;
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

const FollowButton = styled(Button)`
  display: inline-flex;
  align-items: center;
`

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
  school: yup.string().required("Don't forget to include your school"),
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
  const [isActive, setActive] = useState(true)
  // Once we check that the user has already had an account, we can set this to true
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  useEffect(() => {
    (showModal || alreadyRegistered) ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
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

  const handleSignUp = async (values, actions) => {
    // event.preventDefault()
    actions.setSubmitting(true)

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
        await firebase.firestore().collection('users').add({
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
          remarks: values.remarks,
          occupation: values.occupation,
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
      values.email = ''
      setError('That email is already taken, please try another.')
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
              See you at IGNITEMY
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
            <Image src="/images/png/register.png" height={45} width={230} />
            <p>Submit the form to join IGNITEMY2022!</p>
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
              remarks: '',
              occupation: 'student',
              attendance: 'online',
              checked: false,
              registerChecked: false
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSignUp(values, actions)}
          >
            {({ isSubmitting, dirty, isValid }) => (
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
                    label="NRIC Number (without dashes)"
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
                  <MenuItem value="Johor">Johor</MenuItem>
                  <MenuItem value="Kedah">Kedah</MenuItem>
                  <MenuItem value="Kelantan">Kelantan</MenuItem>
                  <MenuItem value="Kuala Lumpur">Kuala Lumpur</MenuItem>
                  <MenuItem value="Labuan">Labuan</MenuItem>
                  <MenuItem value="Malacca">Malacca</MenuItem>
                  <MenuItem value="Negeri Sembilan">Negeri Sembilan</MenuItem>
                  <MenuItem value="Pahang">Pahang</MenuItem>
                  <MenuItem value="Penang">Penang</MenuItem>
                  <MenuItem value="Perak">Perak</MenuItem>
                  <MenuItem value="Perlis">Perlis</MenuItem>
                  <MenuItem value="Putrajaya">Putrajaya</MenuItem>
                  <MenuItem value="Sabah">Sabah</MenuItem>
                  <MenuItem value="Sarawak">Sarawak</MenuItem>
                  <MenuItem value="Selangor">Selangor</MenuItem>
                  <MenuItem value="Terengganu">Terengganu</MenuItem>
                </Field>
                <Field
                  name="school"
                  label="School"
                  placeholder="e.g. SMK Damansara Jaya"
                  required
                  as={CustomTextField}
                />
                <div>
                  <Text color="white">Student or Teacher?*</Text>
                  <TabWrapper>
                    <ActiveOccupationWrapper isActive={isActive} onClick={() => setActive(true)}>
                      <label>
                        <Field type="radio" name="occupation" value="student" />
                        <Text>Student</Text>
                      </label>
                    </ActiveOccupationWrapper>
                    <OccupationWrapper isActive={isActive} onClick={() => setActive(false)}>
                      <label>
                        <Field type="radio" name="occupation" value="teacher" />
                        <Text>Teacher</Text>
                      </label>
                    </OccupationWrapper>
                  </TabWrapper>
                </div>
                <div>
                  <Text color="white">Online or In-Person?*</Text>
                  <TabWrapper>
                    <ActiveOccupationWrapper isActive={isActive} onClick={(e) => setSelectedOption(e)}>
                      <label>
                        <Field type="radio" name="attendance" value="online" />
                        <Text>Online</Text>
                      </label>
                    </ActiveOccupationWrapper>
                    <OccupationWrapper isActive={isActive} onClick={(e) => setSelectedOption(e)}>
                      <label>
                        <Field type="radio" name="attendance" value="in-person" />
                        <Text>In-Person</Text>
                      </label>
                    </OccupationWrapper>
                  </TabWrapper>
                </div>
                <Field
                  name="remarks"
                  label="Remarks (if any)"
                  placeholder="e.g. So excited for IGNITEMY!"
                  as={CustomTextField}
                />
                <CheckboxGroup>
                  <Field type="checkbox" name="checked" as={Checkbox} />
                  <label htmlFor="checked" style={{ color: 'var(--color-white)' }}>
                    I have informed my parent/guardian of the{' '}
                    <span onClick={() => setShowModal(true)}>statements</span>
                  </label>
                </CheckboxGroup>
                <StyledErrorMessage name="checked" component="div" />
                <CheckboxGroup>
                  <Field type="checkbox" name="registerChecked" as={Checkbox} />
                  <label htmlFor="registerChecked" style={{ color: 'var(--color-white)' }}>
                    I am registering for IGNITEMY2022
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
    </ThemeProvider>
  )
}

export default RegistrationForm

// TODO checklist:
//// - update validation schema
// - fix radio button control
// - add additional fields into handleSignup function (handles form submission) [need to discuss with Sean]
//    firebase create new document
//// - add new fields in the initialValues in Formik
//// - change background and make the Hello section bg to semi transparent
//// - make Hello! to have text shadow