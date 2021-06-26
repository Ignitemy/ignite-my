import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

const SectionContainer = styled.section`
  width: 100%;
  position: relative;
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
  z-index: 1;
  position: relative;
`

const QuoteContent = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  max-width: 128rem;
  border: 5px solid var(--color-white);
  padding: 6rem 4rem;
`
const TagLineContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 95rem;
  margin-top: 12rem;

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

const BgImage = styled(Image)`
  z-index: 0;
`

const ShadowHeadings = styled(Heading)`
  text-shadow: 1px 2px 6px var(--color-black);
`

const Vision = () => {
  return (
    <>
      <SectionContainer>
        <BgImage
          src="/images/png/vision-bg.png"
          alt="Flame pattern"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Container>
          <QuoteContent>
            <Heading size="12rem" weight="200" as="h4" color="purple" mt="-5rem">
              “
            </Heading>
            <Heading size="3.6rem" as="h4" color="white">
              IGNITE seeks to inspire Christian students to be catalysts of change in their school
              by sparking influnce among Malaysian youths.
            </Heading>
            {/* <Heading size="14.4rem" as="h4" pt="2rem">
              ”
            </Heading> */}
          </QuoteContent>
          <TagLineContent>
            <TagColumn>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="white"
                lh="6rem"
                fstyle="italic"
                align="left"
                ls="5px"
              >
                HEART
              </ShadowHeadings>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="orange"
                lh="6rem"
                fstyle="italic"
                align="center"
                ls="5px"
              >
                CHANGE
              </ShadowHeadings>
            </TagColumn>
            <TagColumn>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="orange"
                lh="6rem"
                fstyle="italic"
                align="center"
                ls="5px"
              >
                SPIRIT
              </ShadowHeadings>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="white"
                lh="6rem"
                fstyle="italic"
                align="center"
                ls="5px"
              >
                REVIVAL
              </ShadowHeadings>
            </TagColumn>
            <TagColumn>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="white"
                lh="6rem"
                fstyle="italic"
                align="right"
                ls="5px"
              >
                SOUL
              </ShadowHeadings>
              <ShadowHeadings
                size="4.8rem"
                as="h4"
                color="orange"
                lh="6rem"
                fstyle="italic"
                align="center"
                ls="5px"
              >
                ABLAZE
              </ShadowHeadings>
            </TagColumn>
          </TagLineContent>
        </Container>
      </SectionContainer>
    </>
  )
}

export default Vision
