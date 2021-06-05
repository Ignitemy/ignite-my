import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

const BannerContainer = styled.div`
  height: 1250px;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 26rem;
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

const LogoWrapper = styled.div`
  height: 173px;
  margin-right: 4.5rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    margin: 0 0 2.5rem;
  }
`

const EventDetails = styled.div`
  margin-left: calc(100% - 72rem);
  margin-top: 7.6rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`
const StreamingLive = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`

const Banner = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/jpg/rally-banner.jpg"
        alt="Campfire"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <BannerContent>
        <ContentWrapper>
          <LogoWrapper>
            <Image
              src="/images/png/ignite-rally.png"
              alt="Ignite youth leadership summit logo"
              height={202}
              width={526}
            />
          </LogoWrapper>
          <EventDetails>
            <Heading as="span" size="3.6rem" align="left" color="white" fstyle="italic" lh="4rem">
              4th Sept 2021
            </Heading>
            <Heading
              as="span"
              size="3.6rem"
              align="left"
              color="white"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              7:50pm - 10.00pm
            </Heading>
            <StreamingLive>
              <Heading
                as="span"
                size="3.6rem"
                align="left"
                color="orange"
                fstyle="italic"
                mt="2.4rem"
                lh="4rem"
                width="auto"
              >
                STREAMING
              </Heading>
              <Heading
                as="span"
                size="3.6rem"
                align="left"
                color="white"
                fstyle="italic"
                mt="2.4rem"
                ml="1.2rem"
                lh="4rem"
                width="auto"
              >
                LIVE
              </Heading>
            </StreamingLive>
          </EventDetails>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
