import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Button, Text, Heading } from '@/components/index'
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
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlogCards = ({ data, index }) => {
  const convertDate = (date) => {
    const newdate = new Date(date)
    return (
      newdate.toLocaleString('en', { day: 'numeric' }) +
      ' ' +
      newdate.toLocaleString('en', { month: 'long' }) +
      ' ' +
      newdate.toLocaleString('en', { year: 'numeric' })
    )
  }

  return (
    <Link href={`/blog/${data.slugs[0]}`} key={index}>
      <CardWrapper>
        {/* <LeftWrapper>
          <Heading as="h3" color="white" size="2.4rem">
            {data.data.author[0].text}
          </Heading>
          <Heading as="h3" color="white" size="1.6rem" mt="1rem">
            {convertDate(data.data.date)}
          </Heading>
        </LeftWrapper> */}
        <Row>
          <Heading as="h2" color="orange" size="3.2rem" fstyle="italic">
            {data.data.title[0].text.toUpperCase()}
          </Heading>
          <Heading as="h3" align="right" color="orange" size="3.2rem" fstyle="italic">
            {convertDate(data.data.date)}
          </Heading>
        </Row>
        <Text color="white" size="1.6rem" mt="2.4rem">
          {truncateString(data.data.content[0].text, 400)}
        </Text>
        <Text color="white" size="1.6rem" mt="2.4rem">
          {`Read more by ${data.data.author[0].text} >`}
        </Text>
      </CardWrapper>
    </Link>
  )
}

export default BlogCards
