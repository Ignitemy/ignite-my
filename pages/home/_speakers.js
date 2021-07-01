import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'
import Cards from './_cards'
import SpecialCard from './_special-card'

const SectionContainer = styled.section`
  width: 100%;
  padding: 6rem 0;
  position: relative;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const CardContainer = styled.div`
  width: 90%;
  position: relative;
  max-width: 144rem;
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

const SpecialItemContainer = styled.div`
  width: 90%;
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 3.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledHeading = styled(Heading)`
  border-top: 4px solid var(--color-white);
  border-bottom: 4px solid var(--color-white);
  width: auto;

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
      <StyledImage
        src="/images/png/speakers-bg.png"
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Container>
        <StyledHeading color="white" size="4.8rem" align="center" ls="8px">
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
      <SpecialItemContainer>
        <Heading color="white" size="6.4rem" align="center">
          &
        </Heading>
        <Heading color="white" size="3.6rem" align="center" ls="8px" mb="3.6rem">
          SPECIAL ITEM
        </Heading>
        <SpecialCard name="#SPECIAL SPEAKER">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit.
        </SpecialCard>
      </SpecialItemContainer>
    </SectionContainer>
  )
}

export default Speakers
