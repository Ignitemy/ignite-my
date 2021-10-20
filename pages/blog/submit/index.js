import Layout from '@/components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import SubmitBlogForm from './_form'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/helpers/auth'

const BannerContainer = styled.div`
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 0;
  margin: 0 auto;
  max-width: 140rem;

  @media (max-width: 480px) {
    height: auto;
    align-items: flex-start;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 1;
  margin: 0 0 4rem 8rem;

  @media (max-width: 992px) {
    margin: 0 0 4rem 4rem;
  }
`

const BreadCrumbs = styled.span`
  color: var(--color-white);
  font-size: 1.6rem;
  margin-right: 1.6rem;
`

const BlogLink = styled.span`
  color: var(--color-white);
  font-size: 1.6rem;
  margin-right: 1.6rem;
  cursor: pointer;

  &:hover {
    color: var(--color-orange);
  }
`

const Blog = () => {
  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/login?action=login')
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Submit A Blog Post">
      <BannerContainer>
        <StyledImage
          src="/images/png/submit-banner.png"
          alt="Fire patterns"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority="true"
        />
        <LinkWrapper>
          <Link href="/blog">
            <BlogLink>Blog</BlogLink>
          </Link>
          <BreadCrumbs>{`>`}</BreadCrumbs>
          <BreadCrumbs>Submit A Blog Post</BreadCrumbs>
        </LinkWrapper>
        <FormContainer>
          <SubmitBlogForm />
        </FormContainer>
      </BannerContainer>
    </Layout>
  )
}

export default Blog
