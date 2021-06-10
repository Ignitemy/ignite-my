import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { TextField, Checkbox } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import FirebaseContext from '../../context/firebase'
import { doesEmailExist } from '../../helpers/firebase'
import { Button, Text } from '../../components'
import { useAuth } from '../../helpers/auth'
import SuccessIcon from '../../images/svg/success'
import InstaIcon from '../../images/svg/insta-no-outline'
import Modal from './_modal'
import { Formik, Form, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9100'
    },
    secondary: {
      main: '#333333'
    }
  }
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
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
`

const StyledAlert = styled(Alert)`
  margin-bottom: 2rem;
`

const CustomTextField = ({ ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      variant="outlined"
      color="main"
      style={{ width: '98%' }}
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 1.2rem;

    a {
      text-decoration: none;
      color: teal;
    }
  }
`

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`

const validationSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  age: yup.string().max(2, "You can't be that old...").required(),
  myKad: yup.number().required(),
  contactNumber: yup.string().max(14).required(),
  address: yup.string().required(),
  city: yup.string().required(),
  checked: yup.bool().oneOf([true], 'You have to check this to prcoeed')
})

const RegistrationForm = () => {
  const classes = useStyles()
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [registered, setRegistered] = useState(false)

  const handleSignUp = async (values, actions) => {
    // event.preventDefault()
    actions.setSubmitting(true)

    const emailExists = await doesEmailExist(values.email)
    console.log(values)
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
          dateCreated: Date.now()
        })
        setRegistered(true)
        actions.setSubmitting(false)

        setTimeout(() => {
          router.push('/')
        }, 8000)
      } catch (error) {
        actions.resetForm()
        setError(error.message)
      }
    } else {
      values.email = ''
      setError('That email is already taken, please try another.')
    }
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
          <Button orange>
            <StyledInstaIcon />
            <a
              href="https://instagram.com/ignitemy______"
              target="_blank"
              style={{ textDecoration: 'none', color: 'var(--color-white)' }}
            >
              Follow us for more updates
            </a>
          </Button>
          <Text color="white" size="2rem" align="center" m="4.5rem 0">
            Redirecting you back to the homepage...
          </Text>
        </RegisteredContainer>
      ) : (
        <Container>
          {!registered && error && (
            <StyledAlert severity="error">
              <Text size="1.2rem">{error}</Text>
            </StyledAlert>
          )}
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              age: '',
              myKad: '',
              contactNumber: '',
              address: '',
              city: '',
              checked: false
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => handleSignUp(values, actions)}
          >
            {({ resetForm, resetErrors, values, errors, isSubmitting, dirty, isValid }) => (
              <StyledForm className={classes.root}>
                <Field
                  name="fullName"
                  label="Full Name"
                  placeholder="Your full name here"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="email"
                  name="email"
                  label="Email Address"
                  placeholder="Your email address here"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Your password here"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="number"
                  name="age"
                  label="Age"
                  placeholder="Your age name here"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="number"
                  name="myKad"
                  label="MyKad Number"
                  placeholder="Your MyKad number here"
                  required
                  as={CustomTextField}
                />
                <Field
                  type="tel"
                  name="contactNumber"
                  label="Contact Number"
                  placeholder="Your contact number here"
                  required
                  as={CustomTextField}
                />
                <Field
                  name="address"
                  label="Address"
                  placeholder="Your address here"
                  required
                  as={CustomTextField}
                />
                <Field
                  name="city"
                  label="City"
                  placeholder="Your city here"
                  required
                  as={CustomTextField}
                />
                <CheckboxGroup>
                  <Field type="checkbox" name="checked" as={Checkbox} />
                  <label htmlFor="checked">
                    Accept{' '}
                    <a href="#" onClick={() => setShow(true)}>
                      Terms & Conditions
                    </a>
                  </label>
                </CheckboxGroup>
                <StyledErrorMessage name="checked" component="div" />

                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                <Button orange type="submit" disabled={!isValid || !dirty || isSubmitting}>
                  Register For Event
                </Button>
              </StyledForm>
            )}
          </Formik>
        </Container>
      )}
      <Modal show={show} closeModal={() => setShow(false)} />
    </ThemeProvider>
  )
}

export default RegistrationForm
