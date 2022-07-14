import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/helpers/auth'
import { Button } from '../../components'

// Variants
const logo = {
  initial: {
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    }
  }
}

const date = {
  initial: {
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      delay: 0.8
    }
  }
}

const stream = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.4
    }
  }
}
const live = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2.4
    }
  }
}

const letterAni = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6
    }
  }
}

const BannerContainer = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28rem;

  @media (max-width: 1440px) {
    gap: 14rem;
  }

  @media (max-width: 1280px) {
    gap: 10rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5rem;
    height: auto;
    padding: 5rem 0 7rem 0;
  }
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (max-width: 900px) {
    align-items: center;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    align-items: center;
  }
`

const ImageWrapper = styled(motion.div)`
  height: 59px;

  @media (max-width: 900px) {
    margin: 0 0 2.5rem;
  }
  @media (max-width: 500px) {
    height: 75%;
    width: 75%;
  }
`

const Details = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin: 0;
    align-items: center;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
`

const Row = styled(motion.div)`
  display: flex;
  overflow: hidden;
`

const ShortDetailWrapper = styled.div`
  display: block;

  @media (min-width: 500px) {
    display: flex;
  }
`

const WhiteHeader = styled(motion.h3)`
  font-size: 30px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-white);
  margin-bottom: 0.5rem;
`
const OrangeHeader = styled(motion.h3)`
  font-size: 30px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-orange);
`
// const StyledExtLink = styled.a`
//   color: var(--color-white);
//   text-decoration: none;
//   position: relative;
// `

const StyledIframe = styled.iframe`
  z-index: 2;
  max-width: 60rem;
  border: solid 2px white;
  height: 380px;

  @media (max-width: 1440px) {
    max-width: 50rem;
    height: 320px;
  }
  @media (max-width: 1024px) {
    max-width: 40rem;
    height: 250px;
  }
  @media (max-width: 768px) {
    max-width: 50rem;
    height: 350px;
  }
  @media (max-width: 560px) {
    width: 90%;
    height: 250px;
  }
`

const AnimatedLetters = ({ title, variants, disabled }) => (
  <Row variants={variants} initial="initial" animate="animate">
    {[...title].map((letter, idx) => (
      <OrangeHeader variants={disabled ? null : letterAni} key={idx}>
        {letter}
      </OrangeHeader>
    ))}
  </Row>
)

const Banner = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      <StyledImage
        // src="/images/png/homepage-banner.png"
        src="/images/png/wave_banner.png"
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper initial="initial" animate="animate" variants={logo}>
            <Image
              src="/images/png/ignite-logo.png"
              alt="Ignite logo"
              height={59}
              width={383}
              priority="true"
            />
          </ImageWrapper>
          <Details>
            <WhiteHeader initial="initial" animate="animate" variants={date}>
              24.09.2022
            </WhiteHeader>
            <ShortDetailWrapper>
              <WhiteHeader initial="initial" animate="animate" variants={date}>
                DAY SUMMIT.&nbsp;
              </WhiteHeader>
              <WhiteHeader initial="initial" animate="animate" variants={date}>
                NIGHT RALLY.
              </WhiteHeader>
            </ShortDetailWrapper>
            <ButtonWrapper>
              <AnimatedLetters title="IN-PERSON.    ONLINE." variants={stream} />
            </ButtonWrapper>
            {/* <AnimatedLetters title="LIVE" variants={live} /> */}
          </Details>
        </ContentWrapper>
        {/* <ButtonWrapper>
            <StyledExtLink href="https://ignitemy.online.church/" target="_blank" rel="noopener noreferrer" >
              <Button orange="true">Streaming Live</Button>
            </StyledExtLink>
          </ButtonWrapper> */}
        <ButtonWrapper>
          <Link href="/register">
            <Button orange="true">Register</Button>
          </Link>
        </ButtonWrapper>
      </BannerContent>
      <StyledIframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/fQkThyL3QVY"
        title="IGNITEMY2021 Promo Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </BannerContainer>
  )
}

export default Banner
