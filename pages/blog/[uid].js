import styled from 'styled-components'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Text, Heading } from '@/components/index'
import { Client } from '../../prismic-configuration'

const Container = styled.div`
  height: auto;
  min-height: calc(100vh - 300px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 3.2rem 8rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 575px) {
    padding: 3.2rem 4.8rem;
  }
  @media (max-width: 375px) {
    padding: 3.2rem 2.4rem;
  }

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

const Title = styled(Heading)`
  @media (max-width: 900px) {
    font-size: 4.8rem;
  }
  @media (max-width: 575px) {
    font-size: 3.2rem;
  }
`

const Author = styled(Heading)`
  @media (max-width: 900px) {
    font-size: 3.2rem;
  }
  @media (max-width: 575px) {
    font-size: 2.4rem;
  }
`

const Paragraph = styled(Text)`
  @media (max-width: 575px) {
    font-size: 1.6rem;
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

const Blog = (props) => {
  const data = props.response.data
  return (
    <Layout title="IGNITEMY2023 | Posts">
      <Container>
        <LinkWrapper>
          <Link href="/blog">
            <BlogLink>Blog</BlogLink>
          </Link>
          <BreadCrumbs>{`>`}</BreadCrumbs>
          <BreadCrumbs>{data.title[0].text}</BreadCrumbs>
        </LinkWrapper>
        <ContentContainer>
          <Title color="white" size="6.4rem" lh="1" mt="4rem">
            {data.title[0].text}
          </Title>
          <Author color="white" size="3.6rem" mt="2rem">
            {`by ${data.author[0].text}`}
          </Author>
          <Paragraph color="white" size="1.8rem" mt="2.4rem" lh="2">
            {data.content[0].text}
          </Paragraph>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const results = await Client().getAllByType('blog_post')

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
      id: post.id,
      title: post.data.title[0].text
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const response = await Client().getByUID('blog_post', params.uid)

  return {
    props: { response }
  }
}

export default Blog
