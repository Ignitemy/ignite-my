import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const QuoteContent = styled.div`
  display: grid;
  grid-template-columns: 107px 1fr 107px;
  max-width: 103rem;
`
const TagLineContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 95rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const TagColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top: 4rem;
  }
`

const Vision = () => {
  return (
    <>
      <SectionContainer background="linear-gradient(90deg, #FC6076 0%, #FF9A44 100%);">
        <Container>
          <QuoteContent>
            <Heading size="14.4rem" as="h4" mt="-5.5rem">
              “
            </Heading>
            <Heading size="3.6rem" as="h4" lh="4rem" fstyle="italic">
              IGNITE seeks to inspire Christian students to be catalysts of change in their school
              by sparking influnce among Malaysian youths.
            </Heading>
            <Heading size="14.4rem" as="h4" pt="2rem">
              ”
            </Heading>
          </QuoteContent>
          <TagLineContent>
            <TagColumn>
              <Heading size="4.8rem" as="h4" color="white" lh="6rem" fstyle="italic" align="center">
                HEART
              </Heading>
              <Heading size="4.8rem" as="h4" color="black" lh="6rem" fstyle="italic" align="center">
                CHANGE
              </Heading>
            </TagColumn>
            <TagColumn>
              <Heading size="4.8rem" as="h4" color="black" lh="6rem" fstyle="italic" align="center">
                SPIRIT
              </Heading>
              <Heading size="4.8rem" as="h4" color="white" lh="6rem" fstyle="italic" align="center">
                REVIVAL
              </Heading>
            </TagColumn>
            <TagColumn>
              <Heading size="4.8rem" as="h4" color="white" lh="6rem" fstyle="italic" align="center">
                SOUL
              </Heading>
              <Heading size="4.8rem" as="h4" color="black" lh="6rem" fstyle="italic" align="center">
                ABLAZE
              </Heading>
            </TagColumn>
          </TagLineContent>
        </Container>
      </SectionContainer>
    </>
  )
}

export default Vision
