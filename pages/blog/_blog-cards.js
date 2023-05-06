import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Text, Heading } from '@/components/index'
import { truncateString } from '@/helpers/utility'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3.2rem 0;
  border-bottom: 1px solid grey;
  /* grid-template-columns: 200px 1fr;
  column-gap: 3.2rem; */
  cursor: pointer;
`
const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
    text-align: left;
  }
`

const StyledText = styled(Text)`
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 425px) {
    margin-top: 1.2rem;
  }
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const BlogCards = ({ data, index }) => {
  const convertDate = (date) => {
    const newdate = new Date(date)
    return (
      newdate.toLocaleString('en', { day: 'numeric' }) +
      ' ' +
      newdate.toLocaleString('en', { month: 'short' }) +
      ' ' +
      newdate.toLocaleString('en', { year: 'numeric' })
    )
  }

  return data ? (
    <Link href={`/blog/${data?.uid}`} key={index}>
      <CardWrapper>
        <TitleBar>
          <StyledHeading as="h2" color="orange" size="3rem" fstyle="italic">
            {data.data.title[0].text.toUpperCase()}
          </StyledHeading>
          <StyledHeading as="h3" align="right" color="orange" size="3rem" fstyle="italic">
            {convertDate(data.data.date)}
          </StyledHeading>
        </TitleBar>
        <StyledText color="white" size="1.6rem" mt="2.4rem">
          {truncateString(data.data.content[0].text, 400)}
        </StyledText>
        <StyledText color="white" size="1.6rem" mt="2.4rem">
          {`Read more by ${data.data.author[0].text} >`}
        </StyledText>
      </CardWrapper>
    </Link>
  ) : (
    <></>
  )
}

export default BlogCards
