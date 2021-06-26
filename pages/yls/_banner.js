import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Heading } from '../../components'

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

// const WhiteHeader = styled.h3`
//   font-size: 30px;
//   line-height: 40px;
//   font-style: italic;
//   color: var(--color-white);
//   margin-bottom: 0.5rem;
// `
// const OrangeHeader = styled.h3`
//   font-size: 30px;
//   line-height: 40px;
//   font-style: italic;
//   color: var(--color-orange);
// `

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
            <Heading as="h3" size="3.6rem" align="center" color="white" fstyle="italic" lh="4rem">
              4th Sept 2021
            </Heading>
            <Heading
              as="h3"
              size="3.6rem"
              align="center"
              color="white"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              10am - 3.20pm
            </Heading>
            <Heading
              as="h3"
              size="3.6rem"
              align="center"
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
