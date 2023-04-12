import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BannerContainer = styled.div`
  height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: auto;
    padding: 5rem 0 7rem 0;
  }
`

const BannerContent = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    gap: 9rem;
  }
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const DateTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 1280px) {
    gap: 5rem;
  }
  /* margin: auto; */
`

const WhiteHeader = styled.h3`
  font-size: 32px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-white);
`

const OrangeHeader = styled.h3`
  font-size: 24px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-orange);
  margin-top: 2rem;
`

const EventBanner = ({ bgImgSrc, logoImgDetails, programDate, programTime, subheading }) => {
  return (
    <BannerContainer>
      <StyledImage
        src={bgImgSrc}
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <Image
          src={logoImgDetails.imgUrl}
          alt={logoImgDetails.alt}
          width={logoImgDetails.width}
          height={logoImgDetails.height}
          priority="true"
        />
        <div>
          <DateTimeContainer>
            <WhiteHeader>{programDate}</WhiteHeader>
            <WhiteHeader>{programTime}</WhiteHeader>
          </DateTimeContainer>
          <OrangeHeader>{subheading}</OrangeHeader>
        </div>
      </BannerContent>
    </BannerContainer>
  )
}

export default EventBanner
