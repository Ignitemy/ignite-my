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
`
const ButtonWrapper = styled.div`
  margin-top: 4rem;
`

const StyledImage = styled(Image)`
  border-radius: 20px;
  box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
`

const Events = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <EventWrapper>
            <StyledImage src="/images/png/event-1.png" height={380} width={642} />
            <EventContent ml="4.8rem">
              <Heading as="h3" size="2.4rem" color="orange">
                IGNITE YOUTH LEADERSHIP SUBMIT
              </Heading>
              <Text size="18px" mt="2rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget.
                Purus semper eget duis at. Viverra accumsan in nisl nisi.{' '}
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
            <StyledImage src="/images/png/event-2.png" height={380} width={642} />
            <EventContent align="flex-end" mr="4.8rem">
              <Heading as="h3" size="2.4rem" align="right" color="orange">
                IGNITE RALLY
              </Heading>
              <Text size="18px" color="white" align="right" mt="2rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget.
                Purus semper eget duis at. Viverra accumsan in nisl nisi.{' '}
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
