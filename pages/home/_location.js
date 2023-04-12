import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'

const SectionWrapper = styled.div`
  /* display: block;
  align-items: center;
  justify-content: center; */
  padding: 5rem 2rem;
  background-color: #ffffff;
  /* background: url("/images/png/wave_location.png");
  background-size: cover; */
  @media screen and (min-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (min-width: 1024px) {
    /* display: flex; */
    padding: 5rem 8rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 7rem 14rem;
  }

  @media screen and (min-width: 1750px) {
    padding: 8rem 24rem;
  }
`

const ContentWrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

const SubheaderWrapper = styled.p`
  color: var(--color-orange);
  font-size: 2.4rem;
  font-weight: 800;
  font-style: italic;
  padding-top: 3rem;
  padding-bottom: 1rem;
`

const LeftSection = styled.div`
  padding-right: 0;

  @media screen and (min-width: 1024px) {
    padding-right: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 10rem;
  }
`

const RightSection = styled.div`
  padding-top: 2rem;

  /* @media screen and (min-width: 1024px) {
    padding-top: 2rem;
  } */
`

const TextContainer = styled.p`
  font-size: 1.6rem;
  color: var(--color-black);
  padding: 0.5rem 0;
  line-height: 3.6rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`
const StyledIframe = styled.iframe`
  width: 100%;
  height: 300px;

  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 450px;
  }
`

const Location = () => {
  const address = [
    'Damansara Utama Methodist Church or Dream Centre',
    '2 Jalan 13/1, Seksyen 13,',
    '46200 Petaling Jaya',
    'Selangor, Malaysia'
  ]
  return (
    <SectionWrapper>
      <HeadingShadow color="black" align="center">
        Getting there
      </HeadingShadow>
      <ContentWrapper>
        <LeftSection>
          <div>
            <SubheaderWrapper>Location</SubheaderWrapper>
            {address.map((addressLine) => (
              <TextContainer key={addressLine}>{addressLine}</TextContainer>
            ))}
          </div>
          <div>
            <SubheaderWrapper>Parking spots</SubheaderWrapper>
            <TextContainer>
              There are available parking lots in Dream Centre, alternatively you may park at PJ33 or
              Symphony Square
            </TextContainer>
          </div>
        </LeftSection>
        <RightSection>
          <StyledIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.934015301823!2d101.6345276152521!3d3.112160954245589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4be03b52eca1%3A0x7ec210346197ea0a!2sDUMC%20Dream%20Centre!5e0!3m2!1sen!2smy!4v1652794551685!5m2!1sen!2smy"
            allowfullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></StyledIframe>
        </RightSection>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default Location
