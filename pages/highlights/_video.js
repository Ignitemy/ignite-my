import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/helpers/auth'
import { Button } from '../../components'

const BannerContainer = styled.div`
  height: 650px;
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    height: 420px;
    padding: 2.4rem 0;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`
const StyledIFrame = styled.iframe`
  z-index: 2;
  max-width: 144rem;
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
const Video = () => {
  const user = useAuth()
  return (
    <BannerContainer>
      <StyledIFrame
        width="60%"
        height="75%"
        src="https://www.youtube.com/embed/mQWBvqyyZ5w"
        title="IGNITEMY2021 Recap"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </BannerContainer>
  )
}

export default Video
