import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

const BannerContainer = styled.div`
  height: 88rem;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 26rem;

  @media (max-width: 480px) {
    padding-top: 16rem;
    height: 68rem;
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
  align-items: center;

  @media (max-width: 900px) {
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  height: 173px;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: 320px;
    height: 110px;
  }
`

const EventDetails = styled.div`
  margin-top: 7.6rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    span {
      font-size: 2.8rem;
    }
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
        src="/images/png/rally-banner.png"
        alt="Campfire"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <LogoWrapper>
            <Image
              src="/images/png/ignite-rally.png"
              alt="Ignite youth leadership summit logo"
              height={202}
              width={526}
              priority="true"
            />
          </LogoWrapper>
          <EventDetails>
            <Heading as="span" size="3.6rem" align="center" color="white" fstyle="italic" lh="4rem">
              4TH SEPT 2021
            </Heading>
            <Heading
              as="span"
              size="3.6rem"
              align="center"
              color="white"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              8.00PM - 10.00PM
            </Heading>
            <StreamingLive>
              <Heading
                as="span"
                size="3.6rem"
                align="center"
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
                align="center"
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
