import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Form from './_form'
import { Text } from '../../components'
import CalendarIcon from '../../images/svg/calendar'
import TimeIcon from '../../images/svg/time'
import LocationIcon from '../../images/svg/location'

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
  background-color: var(--color-black);

  @media (max-width: 900px) {
    flex-direction: column;
    height: 100vh;
  }
`

const BannerContainer = styled.div`
  height: 600px;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 10rem;

  @media (max-width: 900px) {
    display: none;
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
  object-fit: cover;
  object-position: center;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const EventDetails = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const Row = styled.div`
  display: flex;
  width: 40.2rem;
  justify-content: flex-start;
`

const ResetPasswordSection = () => {
  return (
    <SectionContainer>
      <RegisterSection>
        <BannerContainer>
          <StyledImage src="/images/png/form-banner.png" alt="Sunset" fill={true} priority="true" />
          <BannerContent>
            <ContentWrapper>
              <LogoWrapper>
                <Image
                  src="/images/png/ignite-yls-logo.png"
                  alt="Ignite youth leadership summit logo"
                  height={166}
                  width={345}
                />
              </LogoWrapper>
              <EventDetails>
                <Row>
                  <CalendarIcon />
                  <Text size="3rem" color="white" ml="1.5rem" weight="bold">
                    4TH SEPT 2021
                  </Text>
                </Row>
                <Row>
                  <TimeIcon />
                  <Text size="3rem" color="white" ml="1.5rem" weight="bold">
                    10.00AM - 3.30PM
                  </Text>
                </Row>
                <Row>
                  <LocationIcon />
                  <Text size="3rem" color="white" ml="1.5rem" weight="bold">
                    STREAMING LIVE
                  </Text>
                </Row>
              </EventDetails>
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

export default ResetPasswordSection
