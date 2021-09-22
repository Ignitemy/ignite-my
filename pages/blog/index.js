import { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useAuth } from '@/helpers/auth'
import { useRouter } from 'next/router'

const Blog = () => {
  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login?action=login&redirect=blog')
    }
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Blog">
      <h1>Blog Page</h1>
    </Layout>
  )
}

export default Blog
