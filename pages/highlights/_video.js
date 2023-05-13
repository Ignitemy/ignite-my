import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/helpers/auth'
import { Button, Text } from '../../components'

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

const VideoHeader = styled.div`
  margin-bottom: 5rem;
`

const ImageWrapper = styled.div`
  margin: 0 auto;
  max-width: 383px;
`
const StyledIFrame = styled.iframe`
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

const VideoCaption = styled.caption`
  display: flex;
  margin-top: 1em;
`

const Video = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      <VideoHeader>
        <ImageWrapper>
          <Image
            src="/images/png/ignite-logo-v2.png"
            width={670}
            height={118}
            alt="IGNITEMY 2022"
          />
        </ImageWrapper>
        <Text color="white" align="center" size="18px">
          Year 2022
        </Text>
      </VideoHeader>

      <StyledIFrame
        width="60%"
        height="75%"
        src="https://www.youtube.com/embed/mQWBvqyyZ5w"
        title="IGNITEMY2021 Recap"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <VideoCaption>
        <Text color="white" weight="700" size="36px" align="center">
          Recap of IGNITEMY{' '}
          <span style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>2022</span>
        </Text>
      </VideoCaption>
    </BannerContainer>
  )
}

export default Video
