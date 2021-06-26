import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Text, Heading, Button } from '../../components'
import Cards from './_cards'

const SectionContainer = styled.section`
  width: 100%;
  padding: 5.1875rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 3.4375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.1875rem;
  flex-wrap: wrap;
  > * {
    width: 100%;
    flex: 1 1 370px;
  }
`

const StyledHeading = styled(Heading)`
  @media (max-width: 900px) {
    font-size: 4.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`

const Speakers = () => {
  return (
    <SectionContainer bgcolor="var(--color-black)">
      <Container>
        <StyledHeading color="white" size="6.4rem" align="center">
          INTRODUCING
        </StyledHeading>
      </Container>
      <CardContainer>
        <Cards name="#SPEAKER 1">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem.
        </Cards>
        <Cards name="#SPEAKER 2">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem.
        </Cards>
        <Cards name="#SPEAKER 3">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem.
        </Cards>
      </CardContainer>
    </SectionContainer>
  )
}

export default Speakers
