import React, { useContext, useState } from 'react'
import Link from 'next/link'
//component
import { Button, Text, Heading } from '@/components/index'
//styled component
import styled from 'styled-components'
//formik
import { Formik, Form, Field, useField } from 'formik'
import * as yup from 'yup'
//mui
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles'
//firebase
import FirebaseContext from '@/context/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'

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

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 4rem 8rem;
  background-color: var(--color-black);

  @media (max-width: 1200px) {
    padding: 4rem 4rem;
  }
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  justify-content: center;
  align-items: center;
`

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
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

  > p {
    font-size: 1.2rem;
  }

  .MuiFormHelperText-root.Mui-error {
    font-size: 1.4rem;
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

const ButtonWrapper = styled.div`
  margin-top: 2.4rem;
  width: 100%;
`

const FlexStart = styled.div`
  display: flex;
  margin-top: 2.5rem;

  a {
    color: var(--color-orange);
    text-decoration: none;
    font-size: 1.6rem;
  }
`

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Your email has to be in the right format')
    .required("Don't forget to include your email address")
})

const ResetPassword = () => {
  const { auth } = useContext(FirebaseContext)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleReset = async (values, actions) => {
    try {
      setLoading(true)
      // await firebase.auth().sendPasswordResetEmail(values.email)
      await sendPasswordResetEmail(auth, values.email)
      setSuccess(true)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
    actions.resetForm()
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FlexCenter>
          <Heading color="white" size="3.6rem" align="center">
            Reset Password
          </Heading>
        </FlexCenter>
        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleReset(values, actions)}
        >
          {({ dirty, isValid }) => (
            <StyledForm autoComplete="off">
              {success && (
                <Alert severity="success" style={{ marginBottom: '1.2rem' }}>
                  <Text size="1.2rem">
                    Password has been successfully reset. Please check your email to proceed.
                  </Text>
                </Alert>
              )}
              {error && (
                <Alert severity="error" style={{ marginBottom: '1.2rem' }}>
                  <Text size="1.2rem">{error}</Text>
                </Alert>
              )}
              <Field
                type="email"
                name="email"
                label="Email Address"
                placeholder="Your email address here"
                required
                as={CustomTextField}
              />
              <ButtonWrapper>
                <Button
                  style={{ width: '100%' }}
                  orange="true"
                  type="submit"
                  disabled={!isValid || !dirty || loading}
                >
                  Reset Password
                </Button>
              </ButtonWrapper>
              <FlexStart>
                <Link href="/login">&larr; Back to login</Link>
              </FlexStart>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </ThemeProvider>
  )
}

export default ResetPassword
