import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'
import { Cards } from '@/components/index'
import SpecialCard from './_special-card'

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
  border-top: 4px solid var(--color-white);
  border-bottom: 4px solid var(--color-white);
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
    letter-spacing: 0;
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
        <Cards name="John Oomen" src="/images/jpg/john.jpg">
          Best known as the former frontman of Malaysian pop band Paperplane Pursuit, John O has a
          decade and a half of experience in the music industry as an award-winning songwriter,
          producer and performer. He recently kicked off a new phase of his career as a solo artist,
          writing and producing old school soul with a fresh pop sound. As a follower of Jesus, it
          has been his lifelong passion to do his small part in bringing the reality of God to the
          world outside the church, particularly the entertainment industry.
        </Cards>
        <Cards name="Agnel Raj" src="/images/jpg/agnel.jpg">
          Agnel is currently leading the Culture & Transformation team in Maxis Malaysia. Prior to
          this, he was the HR Business Partner for the sales and service division of Maxis & spent
          almost 8 years as a Principal Consultant in one of the largest HR consulting firms in
          Asia. Agnel has worked on various business turnaround projects with the likes of UEM, Bank
          Negara and DRB-Hicom. He believes that change is good and there are no limitations to what
          can be achieved when embracing new challenges. All work is no fun and his list of passions
          include playing the drums and cycling.
        </Cards>
        <Cards name="Eddryll Teo" src="/images/jpg/eddryll.jpg">
          Eddyrll is currently the Head of MPU unit in MCKL. He has the burden to disciple the young
          generation of Malaysians to know Jesus as their Lord and Saviour. He founded Malaysian
          Christian Memes and Malaysian Christian Talks as means to disciple alongside with his
          team. He is currently focusing on practical and pastoral theology and has a desire to grow
          Christians who are sound in faith and to train them to be disciple makers themselves as
          commanded in Matthew 28.
        </Cards>
      </CardContainer>
      <SpecialItemContainer>
        <Heading color="white" size="6.4rem" align="center">
          &
        </Heading>
        <SpecialItemHeading color="white" size="3.6rem" align="center" ls="8px" mb="3.6rem">
          SPECIAL PERFORMANCE
        </SpecialItemHeading>
        <SpecialCard name="Juwita Suwito" src="/images/jpg/juwita.jpg">
          Juwita is a sought-after singer-songwriter, vocal coach, performer and podcaster with a
          heart for worship. She has released four studio and live albums, and has also been
          featured in regional television, movie soundtracks as well as gospel albums. Although her
          latest solo album, This Side of Heaven was released back in 2015, her singles such as
          Stand, Belle of the Ball and Just Like That continue to be heard on radio.
          <br />
          Juwita seeks to be a light to the nation and works out her passion to bring Malaysian
          music and inspiration back to the heart of its people through Four Forty Records and its
          collaborative initiatives such as Songs & Stories and the Malaysian Worship Collective.
        </SpecialCard>
      </SpecialItemContainer>
    </SectionContainer>
  )
}

export default Speakers
