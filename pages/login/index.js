import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import LoginSection from './_login'
import { useAuth } from '@/helpers/auth'

const Login = () => {
  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Login">
      <LoginSection />
    </Layout>
  )
}

export default Login
