import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import FirebaseContext from '../../context/firebase'
import { doesEmailExist } from '../../helpers/firebase'
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`

const StyledForm = styled.form`
  width: 100%;
`

const StyledAlert = styled(Alert)`
  margin-bottom: 2rem;
`

const RegistrationForm = () => {
  const classes = useStyles()
  const router = useRouter()
  const { firebase } = useContext(FirebaseContext)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [myKad, setMyKad] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')
  const [registered, setRegistered] = useState(false)

  const handleSignUp = async (event) => {
    event.preventDefault()

    const emailExists = await doesEmailExist(email)
    if (!emailExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)

        // authentication
        // -> emailAddress & password & fullName (displayName)
        await createdUserResult.user.updateProfile({
          displayName: fullName
        })

        // firebase user collection (create a document)
        await firebase.firestore().collection('users').add({
          userId: createdUserResult.user.uid,
          fullName,
          email,
          age,
          myKad,
          contactNumber,
          address,
          city,
          dateCreated: Date.now()
        })
        setRegistered(true)

        setTimeout(() => {
          router.push('/')
        }, 3000)
      } catch (error) {
        setFullName('')
        setEmail('')
        setPassword('')
        setAge('')
        setMyKad('')
        setContactNumber('')
        setAddress('')
        setCity('')
        setError(error.message)
      }
    } else {
      setEmail('')
      setError('That email is already taken, please try another.')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {!registered && error && (
          <StyledAlert severity="error">
            <Text size="1.2rem">{error}</Text>
          </StyledAlert>
        )}
        {registered && (
          <StyledAlert severity="success">
            <Text size="1.2rem">
              You have successfully registered for Ignite 2021. Redirecting to the homepage...
            </Text>
          </StyledAlert>
        )}
        <StyledForm className={classes.root} onSubmit={handleSignUp} method="POST">
          <TextField
            name="fullName"
            label="Full Name"
            placeholder="Your full name here"
            value={fullName}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setFullName(target.value)}
            required
          />
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
          <TextField
            type="number"
            name="age"
            label="Age"
            placeholder="Your age name here"
            value={age}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setAge(target.value)}
            required
          />
          <TextField
            type="number"
            name="myKad"
            label="MyKad Number"
            placeholder="Your MyKad number here"
            value={myKad}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setMyKad(target.value)}
          />
          <TextField
            type="tel"
            name="contactNumber"
            label="Contact Number"
            placeholder="Your contact number here"
            value={contactNumber}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setContactNumber(target.value)}
          />
          <TextField
            name="address"
            label="Address"
            placeholder="Your address here"
            value={address}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setAddress(target.value)}
          />
          <TextField
            name="city"
            label="City"
            placeholder="Your city here"
            value={city}
            variant="outlined"
            color="main"
            style={{ width: '98%' }}
            onChange={({ target }) => setCity(target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                name="checked"
                color="primary"
              />
            }
            label="I have informed my parent/guardian of the statements"
          />
          <Button orange type="submit">
            Register For Event
          </Button>
        </StyledForm>
      </Container>
    </ThemeProvider>
  )
}

export default RegistrationForm
