import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/helpers/auth'
import { Button } from '../../components'

const BannerContainer = styled.div`
  height: 750px;
  padding: 10rem 0;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    height: 750px;
    padding: 2rem 0 6rem 0;
  }
  @media (min-width: 768px) {
    /* height: 760px; */
    height: 700px;
    padding: 2.4rem 2.4rem;
  }
  @media (max-width: 560px) {
    height: 600px;
    padding: 1.2rem 0;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
  object-fit: cover;
  object-position: center;
`

const ImageWrapper = styled.div`
  /* padding-left: 10rem;
  padding-right: 15rem;
  padding-top: 10rem; */
  display: none;
  padding: 10rem 10rem 0 0;
  @media screen and (min-width: 1024px) {
    display: inline;
  }
  @media screen and (min-width: 1440px) {
    padding: 10rem 15rem 0 10rem;
  }
`

const VideoButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 50%; */

  @media screen and (min-width: 1024px) {
    display: block;
    width: 55%;
    height: 55%;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    height: 70%;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledIFrame = styled.iframe`
  z-index: 2;
  max-width: 144rem;
  border: solid 2px white;
  border-radius: 10px;
  height: 500px;

  @media (max-width: 1440px) {
    height: 400px;
  }
  @media (max-width: 1024px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    /* width: 90%; */
    /* height: 460px; */
    height: 450px;
  }
  @media (max-width: 560px) {
    width: 95%;
    height: 280px;
  }
`

const StyledExtLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
`

const Video = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      {/* <StyledImage
        src="/images/png/video-bg.png"
        alt="Fire patterns"
        fill={true}
        
        
      /> */}
      <ImageWrapper>
        <Image
          src="/images/png/sketched-human-model.png"
          alt="sketched model"
          width={208}
          height={386}
        />
      </ImageWrapper>
      <VideoButtonContainer>
        <StyledIFrame
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mQWBvqyyZ5w"
          title="IGNITEMY2021 Promo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <ButtonWrapper>
          <StyledExtLink
            href="https://ignitemy.online.church/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button orange="true">Streaming Live</Button>
          </StyledExtLink>
        </ButtonWrapper>
      </VideoButtonContainer>
    </BannerContainer>
  )
}

export default Video
