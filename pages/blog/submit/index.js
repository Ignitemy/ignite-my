import Layout from '@/components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import SubmitBlogForm from './_form'

const BannerContainer = styled.div`
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3.2rem 0;

  @media (max-width: 480px) {
    height: auto;
    align-items: flex-start;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const Blog = () => {
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
        <SubmitBlogForm />
      </BannerContainer>
    </Layout>
  )
}

export default Blog
