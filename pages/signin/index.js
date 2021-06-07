import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import FirebaseContext from '../../context/firebase'
import { Button, Text } from '../../components'

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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  width: 100%;
`

const ErrorMessage = styled.div`
  margin: 0 0 1rem 1rem;
`

const SignIn = () => {
  const classes = useStyles()
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = password === '' || email === ''

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      router.push('/yls')
    } catch (error) {
      setEmail('')
      setPassword('')
      setError(error.message)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <SectionContainer>
        <Container>
          {error && (
            <Alert severity="error">
              <Text size="1.2rem">{error}</Text>
            </Alert>
          )}
          <StyledForm className={classes.root} onSubmit={handleLogin} method="POST">
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
            <TextField
              type="password"
              name="password"
              label="Password"
              placeholder="Your password here"
              value={password}
              variant="outlined"
              color="main"
              style={{ width: '98%' }}
              onChange={({ target }) => setPassword(target.value)}
              required
            />
            <ButtonWrapper>
              <Button orange type="submit" disabled={isInvalid}>
                Sign In
              </Button>
            </ButtonWrapper>
          </StyledForm>
        </Container>
      </SectionContainer>
    </ThemeProvider>
  )
}

export default SignIn
