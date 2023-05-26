import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading, HeadingShadow } from '../../components'
import { motion } from 'framer-motion'

// Variants
const logo = {
  initial: {
    opacity: 0,
    x: -200
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2
    }
  }
}

const details = {
  initial: {
    opacity: 0,
    x: 200
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2
    }
  }
}

const BannerContainer = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
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

const ImageWrapper = styled(motion.div)`
  // height: 330px;
  margin-right: 2.5rem;
  @media (max-width: 900px) {
    margin: 0 0 2.5rem;
  }
`

const RightContent = styled(motion.div)`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 4rem 0 0;
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
        src="/images/png/IGNITEMY2023/chain 7.png"
        alt="Flame pattern"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper initial="initial" animate="animate" variants={logo}>
            <Image
              src="/images/png/ignite_bazaar_logo.png"
              alt="Ignite youth leadership summit logo"
              height={110}
              width={310}
              priority="true"
            />
            <HeadingShadow align="center">+</HeadingShadow>
            <Image
              src="/images/png/ignite-rally.png"
              alt="Ignite youth leadership summit logo"
              height={130}
              width={358}
              priority="true"
            />
          </ImageWrapper>
          <RightContent initial="initial" animate="animate" variants={details}>
            <StyledHeading
              as="h3"
              size="3.6rem"
              align="right"
              color="white"
              fstyle="italic"
              lh="4rem"
              ts="3px 1px 0px #000000"
            >
              27TH AUG 2023
            </StyledHeading>
            <Heading
              as="h3"
              size="3.6rem"
              align="right"
              color="orange"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
              ts="3px 1px 0px #000000"
            >
              4:30PM - 9:30PM
            </Heading>
          </RightContent>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
