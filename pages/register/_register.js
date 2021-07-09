import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Form from './_form'
import { Text, Heading } from '../../components'

const SectionContainer = styled.section`
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  max-width: 160rem;
  margin: 0 auto;
`

const RegisterSection = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const BannerContainer = styled.div`
  height: 148rem;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 6.4rem 8rem;

  @media (max-width: 1200px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    padding: 3.2rem 4rem;
  }
`

const FormContainer = styled.div`
  display: flex;
  width: 50%;
  background-color: var(--color-white);

  @media (max-width: 900px) {
    width: 100%;
  }
`

const BannerContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`

const EventDetails = styled.div`
  margin-top: 4.8rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const Row = styled.div`
  display: flex;
`

const InfoText = styled(Text)`
  a {
    color: var(--color-orange);
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  span {
    // color: var(--color-orange);
    text-decoration:underline;
  }
`

const Register = () => {
  return (
    <SectionContainer>
      <RegisterSection>
        <BannerContainer>
          <StyledImage
            src="/images/png/form-banner.png"
            alt="Sunset"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority="true"
          />
          <BannerContent>
            <ContentWrapper>
              <Heading size="4.8rem" color="white" fstyle="italic" ls="4px">
                Hello!
              </Heading>
              <Text color="white" size="1.8rem" mt="2.4rem">
                Welcome to IGNITEMY2021! This one-day Summit, organised by DUMC NextGen Teens in
                collaboration with Scripture Union, seeks to inspire Christian students to be
                catalysts of change in their schools.
                <br />
                <br />
                Below are some important details about the Summit that you should take note of
                before signing up:
              </Text>
              <EventDetails>
                <Row>
                  <Image src="/images/svg/calendar.svg" alt="calendar" height={36} width={36} />
                  <Text size="2.4rem" weight="bold" color="white" ml="1.5rem">
                    4TH SEPT 2021
                  </Text>
                </Row>
                <Row>
                  <Image src="/images/svg/time.svg" alt="clock" height={36} width={36} />
                  <Text size="2.4rem" weight="bold" color="white" ml="1.5rem">
                    10.00AM - 3.30PM
                  </Text>
                </Row>
                <Row>
                  <Image src="/images/svg/location.svg" alt="location pin" height={36} width={36} />
                  <Text size="2.4rem" weight="bold" color="white" ml="1.5rem">
                    STREAMING LIVE
                  </Text>
                </Row>
              </EventDetails>
              <InfoText color="white" size="1.8rem" mt="4.8rem">
                Registration is free.
                <br />
                <br />
                For further enquiries, please contact{' '}
                <a href="mailto:hello.ignitemy@gmail.com">hello.ignitemy@gmail.com</a>
                <br />
                <br />
                An exclusive access to the Summit will be sent to you via email closer to the date!
                <br />
                <br />
                Participants who register from <span>1st August 2021</span> onwards are still invited
                to join the online Summit. However, you WILL NOT be allocated into discussion groups
                and WILL NOT receive the Summit kit.
                <br />
                <br />
                An exclusive access to the Summit will be sent to you via email closer to the date!
              </InfoText>
            </ContentWrapper>
          </BannerContent>
        </BannerContainer>
        <FormContainer>
          <Form />
        </FormContainer>
      </RegisterSection>
    </SectionContainer>
  )
}

export default Register
