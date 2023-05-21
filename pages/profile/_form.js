import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, useField } from 'formik'
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import FirebaseContext from '@/context/firebase'
import { useAuth } from '@/helpers/auth'
import RadioButton from '@/components/RadioButton'
import { Heading } from '@/components/Typography'
import { shirtSizes, listOfStates, languagePreferences } from '../register/_form'

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
  align-items: center;
  padding: 4rem 8rem;

  @media (max-width: 1200px) {
    padding: 4rem 4rem;
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

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;

  .MuiFormLabel-root.Mui-disabled {
    color: var(--color-white);
  }
`

const StyledTextField = styled(TextField)`
  color: var(--color-white);
  margin: 1.2rem 0 !important;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};

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
      color: var(--color-black);

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
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  border-radius: 8px;
  height: 52px;
  margin: 1.2rem 0;

  div {
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    display: flex;
    height: 100%;
    align-items: center;
    color: var(--color-black);
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
      value={props.value}
      helperText={errorText}
      error={!!errorText}
      disabled
    />
  )
}

const CustomSelect = ({ ...props }) => {
  const [field] = useField(props)
  return (
    <StyledSelect {...props} {...field} value={props.value} disabled>
      {props.children}
    </StyledSelect>
  )
}

const StyledLabel = styled(InputLabel)`
  color: var(--color-white) !important;
  font-size: 1.6rem !important;
  margin-top: 1.2rem;
  margin-bottom: -6px;
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

const Profile = () => {
  const { firebase } = useContext(FirebaseContext)
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const user = useAuth()
  const db = firebase.firestore()

  useEffect(() => {
    if (user) {
      const subscriber = db.collection('ignitemy23').onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data()
          if (data.email === user.email) {
            setUserData(data)
            return
          }
        })
        setIsLoading(false)
      })
      return () => subscriber()
    }
  }, [user])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FormHeading>
          <Heading
            as="h2"
            size="4.8rem"
            align="center"
            color="white"
            fstyle="italic"
            ls="3px"
            style={{ textShadow: '3px 1px 0 #FF6600' }}
          >
            My Profile
          </Heading>
        </FormHeading>
        <Formik>
          {() => (
            <StyledForm autoComplete="off">
              <Field
                name="fullName"
                label="Full Name (as per NRIC)"
                value={userData.fullName}
                required
                as={CustomTextField}
              />
              <FourColumnRow>
                <Field
                  type="number"
                  name="age"
                  label="Age"
                  value={userData.age}
                  required
                  as={CustomTextField}
                />
                <Field
                  type="string"
                  name="myKad"
                  label="NRIC/Passport Number (without dashes)"
                  value={userData.myKad}
                  required
                  as={CustomTextField}
                />
              </FourColumnRow>
              <Field
                type="tel"
                name="contactNumber"
                label="Contact Number (without dashes)"
                value={userData.contactNumber}
                required
                as={CustomTextField}
              />
              <Field
                name="address"
                label="House Unit Number & Street Address"
                value={userData.address}
                required
                as={CustomTextField}
              />
              <TwoColumnRow>
                <Field
                  name="city"
                  label="City"
                  value={userData.city}
                  required
                  as={CustomTextField}
                />
                <Field
                  name="postcode"
                  label="Postcode"
                  value={userData.postcode}
                  required
                  as={CustomTextField}
                />
              </TwoColumnRow>
              <StyledLabel htmlFor="State">State *</StyledLabel>
              <Field name="state" value={userData.state} label="State" required as={CustomSelect}>
                {listOfStates.map((state) => {
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
                value={userData.school}
                required
                as={CustomTextField}
              />
              <RadioButton
                userActiveIndex={userData.occupation === 'student' ? 0 : 1}
                question={firstRadioButtonQuestion.question}
                options={firstRadioButtonQuestion.options}
                name={firstRadioButtonQuestion.name}
                userValue={userData.occupation}
                disabled
              />
              <RadioButton
                userActiveIndex={userData.attendance === 'online' ? 0 : 1}
                question={secondRadioButtonQuestion.question}
                options={secondRadioButtonQuestion.options}
                name={secondRadioButtonQuestion.name}
                userValue={userData.occupation}
                disabled
              />
              {/* <StyledLabel htmlFor="State">T-Shirt Size *</StyledLabel>
              <Field name="shirtSize" value={userData.shirtSize} label="shirtSize" required as={CustomSelect}>
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
                value={userData.schoolHasCF}
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
                value={userData.languagePreference}
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
                value={userData.remarks}
                required
                as={CustomTextField}
              />
            </StyledForm>
          )}
        </Formik>
        <Heading
          as="p"
          size="1.6rem"
          color="white"
          weight="regular"
          mt="4.8rem"
          max_width="340px"
          align="center"
        >
          Please contact{' '}
          <a style={{ color: '#ff6600' }} href="mailto:hello.ignitemy@gmail.com">
            hello.ignitemy@gmail.com
          </a>{' '}
          if the info shown above is incorrect.
        </Heading>
      </Container>
    </ThemeProvider>
  )
}

export default Profile
