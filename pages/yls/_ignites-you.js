import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Text, Heading, Button } from '../../components'

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

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.fd};

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`

const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  max-width: 60rem;

  @media (max-width: 1150px) {
    margin-top: 4rem;
  }
`
const ButtonWrapper = styled.div`
  margin-top: 4rem;
`

const StyledHeading = styled(Heading)`
  -webkit-text-stroke: 0.1px ${(props) => props.stroke}; /* stroke width and color */
  -webkit-font-smoothing: antialiased;

  @media (max-width: 900px) {
    font-size: 3.6rem;
    line-height: 3.6rem;
  }
`

const IgnitesYou = () => {
  return (
    <>
      <SectionContainer bgcolor="var(--color-black)">
        <Container>
          <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="6.4rem"
            fstyle="italic"
            stroke="var(--color-purple)"
          >
            WHAT IGNITES YOU?
          </StyledHeading>
          <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="6.4rem"
            fstyle="italic"
            stroke="var(--color-orange)"
          >
            WHAT IGNITES YOU?
          </StyledHeading>
          <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="6.4rem"
            fstyle="italic"
            stroke="var(--color-purple)"
          >
            WHAT IGNITES YOU?
          </StyledHeading>
          <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="6.4rem"
            fstyle="italic"
            stroke="var(--color-orange)"
          >
            WHAT IGNITES YOU?
          </StyledHeading>
        </Container>
      </SectionContainer>
    </>
  )
}

export default IgnitesYou
