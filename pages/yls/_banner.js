import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

const BannerContainer = styled.div`
  height: 80rem;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15rem 8rem 0 8rem;

  @media (min-width: 1980px) {
    height: 140rem;
    padding-top: 24rem;
  }
  @media (max-width: 480px) {
    padding: 8rem 1.6rem;
  }
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100rem;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  height: 173px;
  margin-right: 2.5rem;

  @media (max-width: 900px) {
    margin: 0 0 2.5rem;
  }
`

const RightContent = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 2.5rem 0 0;
  }
`
const StyledHeading = styled(Heading)`
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`

const Banner = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/jpg/yls-banner.jpg"
        alt="Flame pattern"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src="/images/png/ignite-yls-logo.png"
              alt="Ignite youth leadership summit logo"
              height={173}
              width={356}
              priority="true"
            />
          </ImageWrapper>
          <RightContent>
            <StyledHeading
              as="h3"
              size="3.6rem"
              align="right"
              color="white"
              fstyle="italic"
              lh="4rem"
            >
              4TH SEPT 2021
            </StyledHeading>
            <StyledHeading
              as="h3"
              size="3.6rem"
              align="right"
              color="white"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              10.00AM - 3.30PM
            </StyledHeading>
            <Heading
              as="h3"
              size="3.6rem"
              align="right"
              color="orange"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              STREAMING LIVE
            </Heading>
          </RightContent>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
