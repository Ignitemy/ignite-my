import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ResetPasswordSection from './_reset-password'
import { useAuth } from '@/helpers/auth'

const Login = () => {
  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Reset Password">
      <ResetPasswordSection />
    </Layout>
  )
}

export default Login
