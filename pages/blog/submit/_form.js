import React, { useContext, useState } from 'react'
// import { useRouter } from 'next/router'
//component
import { Button, Text, Heading } from '@/components/index'
//styled component
import styled from 'styled-components'
//mui
import Alert from '@mui/material/Alert'
//firebase
import FirebaseContext from '@/context/firebase'
import { addDoc, collection } from 'firebase/firestore'

const Container = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 550px) {
    padding: 0 2rem;
  }
`

const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  @media (max-width: 550px) {
    font-size: 3.2rem;
  }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;

  > label {
    font-size: 1.6rem;
    line-height: 1.8;
    color: var(--color-white);
  }
`

const StyledAlert = styled(Alert)`
  margin-top: 2rem;
`

const StyledTextArea = styled.textarea`
  border-radius: 8px;
  padding: 1.2rem;
  font-size: 1.6rem;
  resize: none;

  &:focus {
    outline: none !important;
    border: 1px solid var(--color-orange);
  }
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`

const StyledButton = styled(Button)`
  width: 100%;
`

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  height: 48px;
  margin-bottom: 1.2rem;

  &:focus {
    outline: none !important;
    border: 1px solid var(--color-orange);
  }
`

const SubmitBlogForm = () => {
  // const router = useRouter()
  const { db } = useContext(FirebaseContext)

  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const isInvalid = fullName === '' || title === '' || body === ''

  const [isSubmitting, setSubmitting] = useState(false)
  const [hasSubmitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)

    try {
      await addDoc(collection(db, 'igniteblog'), {
        fullName: fullName,
        blogTitle: title,
        blogContent: body
      })
      // await fetch(process.env.NEXT_PUBLIC_NOCODEAPI_SUBMIT_POST, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify([
      //     [
      //       new Date().toLocaleString('en-GB', {
      //         timeZone: 'Asia/Kuala_Lumpur',
      //         hour12: false
      //       }),
      //       fullName,
      //       title,
      //       body
      //     ]
      //   ])
      // })
      setSubmitting(false)
      setSubmitted(true)

      // clear form input
      setTitle('')
      setBody('')
      setFullName('')

      // setTimeout(() => {
      //   router.push('/blog')
      // }, 8000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container>
      <FlexCenter>
        <StyledHeading size="4.2rem" fstyle="italic" color="white" align="center">
          SUBMIT A BLOG POST
        </StyledHeading>
      </FlexCenter>
      {hasSubmitted && (
        <StyledAlert severity="info">
          <Text size="1.2rem">Thank you for sending in your post!</Text>
        </StyledAlert>
      )}
      {error && (
        <StyledAlert severity="error">
          <Text size="1.2rem">{error}</Text>
        </StyledAlert>
      )}
      <StyledForm autoComplete="off" onSubmit={handleSubmit} method="POST">
        <label htmlFor="fullName">Full Name (as per NRIC)</label>
        <StyledInput
          id="fullName"
          type="text"
          placeholder="e.g. IGNITEMY team"
          onChange={({ target }) => setFullName(target.value)}
          value={fullName}
        />
        <label htmlFor="title">Blog Title</label>
        <StyledInput
          id="title"
          type="text"
          placeholder="e.g. IGNITEMY was awesome!"
          onChange={({ target }) => setTitle(target.value)}
          value={title}
        />
        <label htmlFor="body">Blog Story</label>
        <StyledTextArea
          id="body"
          name="body"
          rows="20"
          placeholder="e.g. I learned from IGNITEMY that..."
          onChange={({ target }) => setBody(target.value)}
          value={body}
        />
        <ButtonWrapper>
          <StyledButton orange="true" type="submit" disabled={isInvalid || isSubmitting}>
            Submit
          </StyledButton>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  )
}

export default SubmitBlogForm
