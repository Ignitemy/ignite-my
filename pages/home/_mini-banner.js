import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import { useAuth } from '@/helpers/auth'
// import { Button } from '../../components'

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

// const date = {
//   initial: {
//     opacity: 0,
//     y: 200
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, -0.05, 0.95],
//       duration: 1.6,
//       delay: 0.8
//     }
//   }
// }

const stream = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.4
    }
  }
}
// const live = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 2.4
//     }
//   }
// }

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
//   height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    // height: 400px;
    padding-top: 12rem;
    padding-bottom: 12rem;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
      min-width: 50vw;
      padding: 14rem 0;
  }

  @media (min-width: 1024px) {
    min-width: 50vw;
    padding: 20rem 0;
}
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.7s ease-in-out;
  &:hover {
    transform: scale(1.15);
    transition: all 0.3s ease-in-out;
    cursor:pointer;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const LinkTo = styled.a`
`


const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled(motion.div)`
  height: 173px;
  
  // @media (max-width: 900px) {
  //   margin: 0 0 2.5rem;
  // }
  // @media (max-width: 500px) {
  //   height: 75%;
  //   width: 75%;
  // }
`

const Details = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 2.5rem 0 0;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 1.2rem;
`

const Row = styled(motion.div)`
  display: flex;
  overflow: hidden;
`

const WhiteHeader = styled(motion.h3)`
  font-size: 30px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-white);
  // margin-bottom: 0.5rem;
`
// const OrangeHeader = styled(motion.h3)`
//   font-size: 30px;
//   line-height: 40px;
//   font-style: italic;
//   color: var(--color-orange);
// `
// const StyledExtLink = styled.a`
//   color: var(--color-white);
//   text-decoration: none;
//   position: relative;
// `

const AnimatedLetters = ({ title, variants, disabled }) => (
  <Row variants={variants} initial="initial" animate="animate">
    {[...title].map((letter, idx) => (
      <WhiteHeader variants={disabled ? null : letterAni} key={idx}>
        {letter}
      </WhiteHeader>
    ))}
  </Row>
)

const Banner = ({ linkTo, imgSrc, imgTitle, imgHeight, imgWidth, subTitle }) => {
  // const user = useAuth()
  return (
      <BannerContainer>
        <StyledImage
          // src="/images/png/homepage-banner.png"
          src={imgSrc}
          alt="Fire patterns"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority="true"
        />
        <BannerContent>
          <LinkTo href={linkTo}>
            <ContentWrapper>
              <ImageWrapper initial="initial" animate="animate" variants={logo}>
                <Image
                  src={imgTitle}
                  alt="Ignite logo"
                  height={imgHeight}
                  width={imgWidth}
                  priority="true"
                />
              </ImageWrapper>
              <Details>
                <ButtonWrapper>
                  <AnimatedLetters title={subTitle || "IN-PERSON."} variants={stream} />
                </ButtonWrapper>
                {/* <AnimatedLetters title="LIVE" variants={live} /> */}
              </Details>
            </ContentWrapper>
          </LinkTo>
        </BannerContent>
      </BannerContainer>
  )
}

export default Banner
