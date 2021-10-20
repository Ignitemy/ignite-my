import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/helpers/auth'
import ReactPaginate from 'react-paginate'
import Layout from '@/components/Layout'
import { Button, Heading } from '@/components/index'
import { Client } from '../../prismic-configuration'
import BlogCards from './_blog-cards'

const Container = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 80vh;
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

  .paginationBttns {
    font-size: 3.2rem;
    font-weight: bold;
    color: var(--color-orange);
    display: flex;
    margin-top: 4rem;

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }

    li {
      margin: 0 1.2rem;
      cursor: pointer;

      @media (max-width: 768px) {
        margin: 0 1rem;
      }
    }
    li:hover {
      color: var(--color-white);
    }
  }

  .paginationActive {
    color: var(--color-white);
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
  }

  @media (max-width: 768px) {
    padding: 0 2.4rem;
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
  justify-content: space-between;
  min-height: 105rem;
  padding-top: 3.2rem;

  @media (max-width: 1280px) {
    min-height: 92rem;
  }
  @media (max-width: 768px) {
    min-height: unset;
  }
`

const AllCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`

const Blog = ({ data }) => {
  const [posts] = useState(data || [])
  const [pageNumber, setPageNumber] = useState(0)

  const user = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push(encodeURI('/login?action=login&redirect=blog'))
    }
  }, [user])

  const postsPerPage = 3
  const pagesVisited = pageNumber * postsPerPage
  const pageCount = Math.ceil(posts.length / postsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

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
              <StyledHeading
                as="h1"
                color="orange"
                size="3rem"
                fstyle="italic"
                align="center"
                mt="4rem"
              >
                SHARE YOUR STORY.
              </StyledHeading>
              <StyledHeading
                as="h1"
                color="orange"
                size="3rem"
                fstyle="italic"
                align="center"
                mb="4rem"
              >
                SHARE THE SPARK.
              </StyledHeading>
              <ButtonWrapper>
                <Link href="/blog/submit">
                  <Button orange="true">Share Your Story</Button>
                </Link>
              </ButtonWrapper>
            </BannerContainer>
          </LeftPanel>
          <RightPanel>
            <AllCards>
              {data &&
                data
                  .slice(pagesVisited, pagesVisited + postsPerPage)
                  .map((item, index) => <BlogCards key={index} data={item} />)}
            </AllCards>
            <ReactPaginate
              previousLabel={'<'}
              breakLabel={'...'}
              nextLabel={'>'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              breakClassName={'breakBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
            />
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
