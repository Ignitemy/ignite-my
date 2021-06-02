import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Heading } from '../../components'

const BannerContainer = styled.div`
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;

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
        alt="A girl holding fairy lights in her palm"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src="/images/png/ignite-yls-logo.png"
              alt="Ignite youth leadership summit logo"
              height={173}
              width={356}
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
              Hall 1, Dream Centre PJ
            </Heading>
          </RightContent>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
