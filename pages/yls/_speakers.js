import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SpecialCard from '../home/_special-card'
import { Text, Heading } from '../../components'

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
  align-items: center;
  justify-content: center;
`

const SpeakerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.fd};

  @media (max-width: 1090px) {
    flex-direction: column;
  }
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  max-width: 60rem;

  @media (max-width: 1090px) {
    margin: 4rem 0 0;
  }
`

const StyledImage = styled(Image)`
  border-radius: 20px;
  filter: grayscale(100%);
  transition: filter 0.5s ease-in;

  :hover {
    filter: none;
  }
`
const SpecialItemContainer = styled.div`
  width: 100%;
  padding: 6rem 0 8rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 2rem 0 6rem 0;
  }
`

const BgImage = styled(Image)`
  z-index: 0;
`

const SpecialItemContent = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 3.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const SpecialItemHeading = styled(Heading)`
  @media (max-width: 480px) {
    letter-spacing: 2px;
  }
`

const Speakers = () => {
  return (
    <>
      <SectionContainer bgcolor="var(--color-black)">
        <Container>
          <SpeakerWrapper>
            <StyledImage
              src="/images/jpg/john.jpg"
              height={400}
              width={328}
              objectFit="cover"
              objectPosition="center"
            />
            <SpeakerContent ml="10rem">
              <Heading as="h3" size="2.4rem" color="white">
                Eddryll Teo
              </Heading>
              <Text size="1.8rem" mt="3.2rem" color="white">
                Eddyrll is currently the Head of MPU unit in MCKL. He has the burden to disciple the
                young generation of Malaysians to know Jesus as their Lord and saviour. He founded
                Malaysian Christian Memes and Malaysian Christian Talks as means to disciple
                alongside with his team. He is currently focusing on practical and pastoral theology
                and has a desire to grow Christians who are sound in faith and to train them to be
                disciple makers themselves as commanded in Matthew 28.
              </Text>
            </SpeakerContent>
          </SpeakerWrapper>
        </Container>
      </SectionContainer>
      <SectionContainer background="linear-gradient(90deg, #FC6076 0%, #FF9A44 100%)">
        <Container>
          <SpeakerWrapper fd="row-reverse">
            <StyledImage
              src="/images/jpg/john.jpg"
              height={400}
              width={328}
              objectFit="cover"
              objectPosition="center"
            />
            <SpeakerContent align="flex-end" mr="10rem">
              <Heading as="h3" size="2.4rem" align="right" color="white">
                John Oomen
              </Heading>
              <Text size="1.8rem" align="right" mt="3.2rem" color="white">
                Best known as the former frontman of Malaysian pop band Paperplane Pursuit, John O
                has a decade and a half of experience in the music industry as an award-winning
                songwriter, producer and performer. He recently kicked off a new phase of his career
                as a solo artist, writing and producing old school soul with a fresh pop sound. As a
                follower of Jesus, it has been his lifelong passion to do his small part in bringing
                the reality of God to the world outside the church, particularly the entertainment
                industry.
              </Text>
            </SpeakerContent>
          </SpeakerWrapper>
        </Container>
      </SectionContainer>
      <SectionContainer bgcolor="var(--color-white)">
        <Container>
          <SpeakerWrapper>
            <StyledImage
              src="/images/jpg/john.jpg"
              height={400}
              width={328}
              objectFit="cover"
              objectPosition="center"
            />
            <SpeakerContent ml="10rem">
              <Heading as="h3" size="2.4rem" color="black">
                Agnel Raj
              </Heading>
              <Text size="1.8rem" mt="3.2rem" color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget.
                Purus semper eget duis at. Viverra accumsan in nisl nisi.{' '}
              </Text>
            </SpeakerContent>
          </SpeakerWrapper>
        </Container>
      </SectionContainer>
      <SpecialItemContainer>
        <BgImage
          src="/images/png/special-bg.png"
          alt="Flame pattern"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Container>
          <SpecialItemContent>
            <Heading color="white" size="6.4rem" align="center">
              &
            </Heading>
            <SpecialItemHeading color="white" size="3.6rem" align="center" ls="8px" mb="3.6rem">
              SPECIAL ITEM
            </SpecialItemHeading>
            <SpecialCard name="Juwita Suwito" src="/images/jpg/juwita.jpg">
              Juwita is a sought-after singer-songwriter, vocal coach, performer and podcaster with
              a heart for worship. She has released four studio and live albums, and has also been
              featured in regional television, movie soundtracks as well as gospel albums. Although
              her latest solo album, This Side of Heaven was released back in 2015, her singles such
              as Stand, Belle of the Ball and Just Like That continue to be heard on radio.
              <br />
              Juwita seeks to be a light to the nation and works out her passion to bring Malaysian
              music and inspiration back to the heart of its people through Four Forty Records and
              its collaborative initiatives such as Songs & Stories and the Malaysian Worship
              Collective.
            </SpecialCard>
          </SpecialItemContent>
        </Container>
      </SpecialItemContainer>
    </>
  )
}

export default Speakers
