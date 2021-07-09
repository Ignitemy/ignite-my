import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Formik, Form, Field, useField } from 'formik'
import * as yup from 'yup'
import Image from 'next/image'
import { TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import FirebaseContext from '@/context/firebase'
import { Button, Text } from '@/components/index'
// import { useAuth } from '@/helpers/auth'

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

const StyledAlert = styled(Alert)`
  margin-bottom: 2rem;
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

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  a {
    color: var(--color-orange);
    text-decoration: none;
    font-size: 1.6rem;
  }
`

const StyledText = styled(Text)`
  a {
    color: var(--color-orange);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Your email has to be in the right format')
    .required("Don't forget to include your email address"),
  password: yup.string().required('Your password is required')
})

const LoginForm = () => {
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [error, setError] = useState('')

  const handleLogin = async (values, actions) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      router.push('/yls')
    } catch (error) {
      setError(error.message)
      actions.resetErrors()
      actions.resetForm()
    }
  }

  // const user = useAuth()

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FlexCenter>
          <Image src="/images/png/login-for.png" height={82} width={461} />
        </FlexCenter>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleLogin(values, actions)}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <StyledForm autoComplete="off">
              {error && (
                <StyledAlert severity="error">
                  <Text size="1.2rem">{error}</Text>
                </StyledAlert>
              )}
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
              <FlexEnd>
                <Link href="/reset-password">
                  <a>Forgot password?</a>
                </Link>
              </FlexEnd>
              <ButtonWrapper>
                <Button
                  style={{ width: '100%' }}
                  orange="true"
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  Log In
                </Button>
              </ButtonWrapper>
              <StyledText color="white" mt="2rem">
                Not registered?{' '}
                <Link href="/register" as="a">
                  <a>Register for an account</a>
                </Link>
              </StyledText>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </ThemeProvider>
  )
}

export default LoginForm
