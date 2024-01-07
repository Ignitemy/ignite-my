import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useAuth } from '@/helpers/auth'
import { HeadingShadow, Text } from '../../components'
import { motion } from 'framer-motion'

// Variants
const header = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1
    }
  }
}

const video = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 0.8
    }
  }
}

const caption = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 1.6
    }
  }
}

const BannerContainer = styled.section`
  height: 650px;
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    height: 620px;
    padding: 2.4rem 0;
  }
`

const VideoHeader = styled(motion.div)`
  margin-bottom: 5rem;
`

const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 383px;
`
const StyledIFrame = styled(motion.iframe)`
  z-index: 2;
  /* max-width: 144rem; */
  max-width: 70rem;
  border: solid 2px white;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: 560px) {
    width: 95%;
    height: 300px;
  }
`

const VideoCaption = styled(motion.caption)`
  display: flex;
  margin-top: 1em;
`

const Video = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      {/* <VideoHeader initial="initial" animate="animate" variants={header}>
        <ImageWrapper>
          <Image
            src="/images/png/IGNITEMY_2023_logo.png"
            width={670}
            height={118}
            alt="IGNITEMY2023"
            priority={true}
          />
        </ImageWrapper>
        <Text color="white" align="center" size="18px">
          Year 2023
        </Text>
      </VideoHeader> */}

      <HeadingShadow size='5rem' mb ='2rem' >Recap of IGNITEMY2023</HeadingShadow>
      <StyledIFrame
        initial="initial"
        animate="animate"
        variants={video}
        width="90%"
        height="75%"
        src="https://www.youtube.com/embed/b0c45v6A6RA?si=pfG7L21hnZQ9eZnl"
        title="IGNITEMY2023 Recap"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <VideoCaption initial="initial" animate="animate" variants={caption}>

        {/* <Text color="white" weight="700" size="36px" align="center">
          Recap of IGNITEMY<span style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>2023</span>
        </Text> */}
      </VideoCaption>
    </BannerContainer>
  )
}

export default Video
