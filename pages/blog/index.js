import { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { useAuth } from '@/helpers/auth'
import { useRouter } from 'next/router'
import { Button, Text, Heading } from '@/components/index'
import { Client } from '../../prismic-configuration'
import Prismic from '@prismicio/client'
import BlogCards from './_blog-cards'

const Container = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2rem 0;
  max-width: 1440px;
  margin: 0 auto;
`

const BannerContainer = styled.div`
  height: 455px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`
const StyledImage = styled(Image)`
  z-index: 0;
`

const StyledHeading = styled(Heading)`
  z-index: 1;
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 0.8fr 1fr;
  column-gap: 4.8rem;
  padding: 0 3.2rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
  }
`

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.2rem;
`

const Blog = ({ data }) => {
  console.log(data)
  const user = useAuth()
  const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login?action=login')
  //   }
  // }, [user])

  return (
    <Layout title="IGNITEMY2021 | Blog">
      <Container>
        <Grid>
          <LeftPanel>
            <BannerContainer>
              <StyledImage
                src="/images/png/blog-bg.png"
                alt="Sunset"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority="true"
              />
              <StyledHeading as="h1" color="orange" size="3rem" fstyle="italic" align="center">
                SHARE YOUR STORY.
              </StyledHeading>
              <StyledHeading as="h1" color="orange" size="3rem" fstyle="italic" align="center">
                SHARE THE SPARK.
              </StyledHeading>
            </BannerContainer>
          </LeftPanel>
          <RightPanel>
            {data && data.map((item, index) => <BlogCards key={index} data={item} />)}
          </RightPanel>
        </Grid>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await Client().query('')
  return {
    props: {
      data: response.results
    }
  }
}

export default Blog
