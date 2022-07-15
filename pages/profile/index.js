import React from 'react'
import Styled from 'styled-components'
import Form from './_form'
import Layout from '../../components/Layout'
// import { useAuth } from '@/helpers/auth'
// import { useRouter } from 'next/router'

const Container = Styled.div`
  background: url("/images/png/wave_profile.png");
  background-size: cover;
  background-position: top;
  display: flex;
  width: 100%;
  background-color: black;
  justify-content: center;
  padding: 2.4rem 0;
`
const FormContainer = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`

const Profile = () => {
  // const user = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   if (!user) router.push('/login')
  //   console.log(user)
  // }, [user])

  return (
    <Layout title="IGNITEMY2021 | Profile">
      <Container>
        <FormContainer>
          <Form />
        </FormContainer>
      </Container>
    </Layout>
  )
}

export default Profile
