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
  @media (max-width: 700px) {
    margin: 4rem 0 0;
  }
`
const ButtonWrapper = styled.div`
  margin-top: 4rem;
`

const StyledImage = styled(Image)`
  border-radius: 20px;
`

const Events = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <EventWrapper>
            <StyledImage
              src="/images/png/event-1.png"
              height={380}
              width={642}
              alt="Lit match stick"
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent ml="4.8rem">
              <Heading as="h3" size="2.4rem" color="orange">
                IGNITE YOUTH LEADERSHIP SUMMIT
              </Heading>
              <Text size="18px" mt="2rem">
                IGNITE YLS features three speakers who will be sharing their insights on different
                aspects of leadership. Which aims to provide a space for you to learn new skills, to
                relate to other leaders and to grow together as a community! To top it all off,
                SUMMIT UP is a chance for you to brainstorm with fellow leaders to think big, build
                deep and start small in bringing change and transformation within your communities.
              </Text>
              <ButtonWrapper>
                <Link href="/yls">
                  <Button white="true">More info</Button>
                </Link>
              </ButtonWrapper>
            </EventContent>
          </EventWrapper>
        </Container>
      </SectionContainer>
      <SectionContainer background="radial-gradient(69.94% 267.87% at 74.91% 49.95%, #9E3F02 16.46%, #582226 40.33%, #421A2A 51.42%, #000000 100%)">
        <Container>
          <EventWrapper fd="row-reverse">
            <StyledImage
              src="/images/png/event-2.png"
              height={382}
              width={642}
              alt="Praise and worship session with a large crowd"
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent align="flex-end" mr="4.8rem">
              <Heading as="h3" size="2.4rem" align="right" color="orange">
                IGNITE RALLY
              </Heading>
              <Text size="18px" color="white" align="right" mt="2rem">
                Night Rally is an opportunity for you to invite your friends to experience Jesus!
                Not only will the NextGen worship team be teaming up with Joshua Jesudasan to lead a
                powerful time of worship, Pr Sam Surendan will also be sharing with us what God has
                laid upon his heart for the youth of today.
              </Text>
              <ButtonWrapper>
                <Link href="/rally">
                  <Button orange="true">More info</Button>
                </Link>
              </ButtonWrapper>
            </EventContent>
          </EventWrapper>
        </Container>
      </SectionContainer>
    </>
  )
}

export default Events
