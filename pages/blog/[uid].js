import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Button, Text, Heading } from '@/components/index'
import { Client } from '../../prismic-configuration'

const Container = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 8rem;
  max-width: 1440px;
  margin: 0 auto;

  a {
    text-decoration: none;
    font-size: 2.4rem;
    color: var(--color-white);
  }
`
const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
`

const Blog = (props) => {
  const data = props.response.data
  console.log(data)
  return (
    <Layout title="IGNITEMY2021 | Posts">
      <Container>
        <LinkWrapper>
          <Link href="/blog">&larr; Back</Link>
        </LinkWrapper>
        <ContentContainer>
          <Heading align="right" color="white" size="14rem" lh="1">
            {data.title[0].text}
          </Heading>
          <Heading align="right" color="white" size="3.6rem">
            {`by ${data.author[0].text}`}
          </Heading>
          {/* <Heading align="center" color="white" size="3.6rem">
            {data.author[0].text}
          </Heading> */}
          <Text color="white" size="1.6rem" mt="2.4rem">
            {data.content[0].text}
          </Text>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { results } = await Client().query('')

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
      id: post.id,
      title: post.data.title[0].text
    }
  }))
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const response = await Client().getByUID('blog_post', params.uid)

  console.log(response)

  return {
    props: { response }
  }
}

export default Blog
