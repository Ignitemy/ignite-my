import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Formik, Form, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Image from 'next/image'
import { TextField, Checkbox, Select } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import FirebaseContext from '@/context/firebase'
import { Button, Text } from '@/components/index'
import { useAuth } from '@/helpers/auth'
import SuccessIcon from '@/images/svg/success'
import InstaIcon from '@/images/svg/insta-no-outline'

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1)
    },

    '.MuiMenuItem-root': {
      fontSize: '1.2rem'
    }
  }
}))

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

// const RegisteredContainer = styled(Container)`
//   background-color: var(--color-black);
//   width: 100%;
//   height: 100%;
//   align-items: center;
//   padding: 10rem 0;
// `

// const StyledInstaIcon = styled(InstaIcon)`
//   margin-right: 1.8rem;
// `

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
  }

  > div {
    background-color: var(--color-white);
    border-radius: 8px;
    font-size: 1.4rem;

    input {
      padding: 0.8rem 1.2rem;
      height: 36px;
      font-size: 1.6rem;
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

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Your email has got to be in the right format yeah')
    .required("Please don't forget to include your email address"),
  password: yup.string().required('Your password is required')
})

const LoginForm = () => {
  const classes = useStyles()
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [error, setError] = useState('')
  const [registered, setRegistered] = useState(false)

  const handleLogin = async (values, actions) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      router.push('/yls')
    } catch (error) {
      actions.resetErrors()
      actions.resetForm()
      setError(error.message)
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
            <StyledForm className={classes.root}>
              {!registered && error && (
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
                  <a>Forget password?</a>
                </Link>
              </FlexEnd>
              <ButtonWrapper>
                <Button orange="true" type="submit" disabled={!isValid || !dirty || isSubmitting}>
                  Log In
                </Button>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </ThemeProvider>
  )
}

export default LoginForm
