import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'
import Cards from '@/components/cards'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
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
  border-top: 4px solid var(--color-black);
  border-bottom: 4px solid var(--color-black);
  width: auto;

  @media (max-width: 900px) {
    font-size: 4.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3.2rem;
    letter-spacing: 4px;
  }
`

const SpecialItemHeading = styled(Heading)`
  @media (max-width: 480px) {
    letter-spacing: 2px;
  }
`

const Speakers = () => {
  return (
    <SectionContainer background="linear-gradient(90deg, #FF7519 0%, #4D4BC2 100%)">
      <Container>
        <StyledHeading color="black" size="4.8rem" align="center" ls="8px">
          INTRODUCING
        </StyledHeading>
      </Container>
      <CardContainer>
        <Cards name="COMING SOON" src="/images/png/coming-soon.png" color="black" disabled={true}>
          Eddyrll is currently the Head of MPU unit in MCKL. He has the burden to disciple the young
          generation of Malaysians to know Jesus as their Lord and Saviour. He founded Malaysian
          Christian Memes and Malaysian Christian Talks as means to disciple alongside with his
          team. He is currently focusing on practical and pastoral theology and has a desire to grow
          Christians who are sound in faith and to train them to be disciple makers themselves as
          commanded in Matthew 28.
        </Cards>
      </CardContainer>
    </SectionContainer>
  )
}

export default Speakers
