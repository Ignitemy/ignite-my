import Layout from '../../components/Layout'
import styled from 'styled-components'
import ResourceComponent from './_resources'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/helpers/auth'

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Resources = () => {
  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login?action=login&redirect=resources')
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Resources">
      <SectionContainer bgcolor="var(--color-black)">
        <ResourceComponent />
      </SectionContainer>
    </Layout>
  )
}

export default Resources
