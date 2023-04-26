import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import ShortRegistrationForm from './short-registration'
import { useAuth } from '@/helpers/auth'
import router from 'next/router'

const ExtRegister = () => {
  const user = useAuth()
  
  useEffect(() => {
    if(user === null) router.push('/login')
  }, [user])

  return (
    <Layout title="IGNITEMY2023 | Register">
      <ShortRegistrationForm />
    </Layout>
  )
}

export default ExtRegister
