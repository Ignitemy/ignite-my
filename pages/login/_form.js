import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
//component
import { Button, Text, Heading, HeadingShadow } from '@/components/index'
//styled component
import styled from 'styled-components'
//formik
import { Formik, Form, Field, useField } from 'formik'
import * as yup from 'yup'
//mui
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
//firebase
import FirebaseContext from '@/context/firebase'
import { useAuth } from '@/helpers/auth'
import { getUserByUserId } from '@/helpers/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

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

const StyledAlert = styled(Alert)`
  margin-bottom: 2rem;
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
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const { auth } = useContext(FirebaseContext)
  const user = useAuth()

  const { query } = router
  const action = query.action ? decodeURI(query.action) : null
  const redirect = query.redirect ? decodeURI(query.redirect) : ''

  useEffect(() => {
    if (redirect === '' && action === null && user) router.push('/')
  }, [user])

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

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const handleLogin = async (values, actions) => {
    try {
      // await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      await signInWithEmailAndPassword(auth, values.email, values.password)
      const currentUser = auth.currentUser
      if (currentUser) {
        const uid = currentUser.uid
        let userDocument = await getUserByUserId(uid)
        // if (userDocument[0].ignite2022 === null || userDocument[0].ignite2022 === undefined)
        //   router.push('/ext-register')
        if (userDocument.length === 0) router.push('/ext-register')
        else router.push(`/${redirect}`)
      }
    } catch (error) {
      setError(error.message)
      actions.resetErrors()
      actions.resetForm()
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FlexCenter fd="column">
          {!action ? (
            <>
              <HeadingShadow>LOG IN FOR</HeadingShadow>
              <Image src="/images/png/IGNITEMY_2023_logo.png" height={40} width={350} />
            </>
          ) : (
            // <Heading size="3.6rem" fstyle="italic" color="white" align="center">
            //   PLEASE LOG IN TO VIEW PAGE
            // </Heading>
            <HeadingShadow size="3.2rem">PLEASE LOG IN TO VIEW PAGE</HeadingShadow>
          )}
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
                name="password"
                label="Password"
                placeholder="Your password here"
                required
                as={CustomPasswordField}
              />
              <FlexEnd>
                <Link href="/reset-password">Forgot password?</Link>
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
                  Register for an account
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
