import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// import { motion } from 'framer-motion'

const BannerContainer = styled.div`
  height: 50vh;
  padding: 5rem 0 7rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 901px) {
    height: 60vh;
  }
`

const BannerContent = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

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
  align-items: center;
  flex-direction:column;
  gap: 1rem;
  margin-bottom:5rem;
  @media (min-width: 1280px) {
    flex-direction:row;
    gap: 10rem;
  }
  /* margin: auto; */
`

const WhiteHeader = styled.h3`
  font-size: 26px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-white);
  @media (min-width: 1280px) {
    font-size: 32px;
  }
`

const OrangeHeader = styled.h3`
  font-size: 20px;
  line-height: 22px;
  font-style: italic;
  color: var(--color-orange);
  margin-top: 0.5rem;
  text-align:center;
  @media (min-width: 1280px) {
    font-size: 24px;
    margin-top: 2rem;
  }
`

const EventBanner = ({ bgImgSrc, logoImgDetails, programDate, programTime, subheading, subheading2 }) => {
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
          <OrangeHeader>{subheading2}</OrangeHeader>
        </div>
      </BannerContent>
    </BannerContainer>
  )
}

export default EventBanner
