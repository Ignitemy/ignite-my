import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import FirebaseContext from '../../context/firebase'
import { Button, Text, Heading } from '../../components'

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
  },
  typography: {
    fontFamily: ['Gotham', 'sans-serif'].join(',')
  }
})

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  width: 100%;
`

const ResetPassword = () => {
  const classes = useStyles()
  //   const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const isInvalid = email === ''

  const handleReset = async (event) => {
    event.preventDefault()

    try {
      setLoading(true)
      await firebase.auth().sendPasswordResetEmail(email)
      setEmail('')
      setSuccess(true)
    } catch (error) {
      setEmail('')
      setError(error.message)
    }
    setLoading(false)
  }
  return (
    <ThemeProvider theme={theme}>
      <SectionContainer>
        <Container>
          <Heading as="h2" size="3.6rem" align="center" mb="1.2rem">
            Reset Password
          </Heading>
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
          <StyledForm className={classes.root} onSubmit={handleReset} method="POST">
            <TextField
              type="email"
              name="email"
              label="Email Address"
              placeholder="Your email address here"
              value={email}
              variant="outlined"
              color="main"
              style={{ width: '98%' }}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <FlexEnd>
              <Link href="/login">
                <a>Back to log in &rarr;</a>
              </Link>
            </FlexEnd>
            <ButtonWrapper>
              <Button orange="true" type="submit" disabled={isInvalid || loading}>
                Reset Password
              </Button>
            </ButtonWrapper>
          </StyledForm>
        </Container>
      </SectionContainer>
    </ThemeProvider>
  )
}

export default ResetPassword
