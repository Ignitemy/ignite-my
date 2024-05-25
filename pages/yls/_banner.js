import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'
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
      ease: [0.6, 0.01, 0.05, 0.95],
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
      ease: [0.6, 0.01, 0.05, 0.95],
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
  /* padding: 15rem 8rem 0 8rem; */
  padding: 0 8rem;

  /* @media (min-width: 1980px) {
    height: 140rem;
    padding-top: 24rem;
  } */
  /* @media (max-width: 900px) {
    padding-top: 24rem;
  } */
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
  object-fit: cover;
  object-position: center;
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
  height: 173px;
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
      {/* <StyledImage
        src="/images/png/IGNITEMY2023/chain 4.png"
        alt="mountains"
        fill={true}
        priority="true"
      /> */}
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper initial="initial" animate="animate" variants={logo}>
            <Image
              src="/images/png/ignite-yls-logo.png"
              alt="Ignite youth leadership summit logo"
              height={173}
              width={356}
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
              7TH SEP 2024
            </StyledHeading>
            {/* <StyledHeading
              as="h3"
              size="3.6rem"
              align="right"
              color="white"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              10.00AM - 3.30PM
            </StyledHeading> */}
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
              10:00AM - 3:30PM
            </Heading>
          </RightContent>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
