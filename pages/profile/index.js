import React from 'react'
import Styled from 'styled-components'
import Form from './_form'
import Layout from '../../components/Layout'

const Container = Styled.div`
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