import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// import BannerImage from '../../images/jpg/homepage-banner.jpg'

// const BannerWrapper = styled.div`
//   background-image: url('/images/jpg/homepage-banner.jpg');
//   width: 100%;
//   background-repeat: 'no-repeat';
//   background-size: 'cover';
// `

const BannerContainer = styled.div`
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const BannerContent = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  height: 59px;
  margin-right: 2.5rem;

  @media (max-width: 900px) {
    margin: 0 0 2.5rem;
  }
`

const RightContent = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 2.5rem 0 0;
  }
`
const WhiteHeader = styled.h3`
  font-size: 30px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-white);
  margin-bottom: 0.5rem;
`
const OrangeHeader = styled.h3`
  font-size: 30px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-orange);
`

const Banner = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/jpg/homepage-banner.jpg"
        alt="A girl holding fairy lights in her palm"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <BannerContent>
        <ImageWrapper>
          <Image src="/images/png/ignite-logo.png" alt="Ignite logo" height={59} width={383} />
        </ImageWrapper>
        <RightContent>
          <WhiteHeader>4th Sept 2021</WhiteHeader>
          <OrangeHeader>Hall 1, Dream Centre PJ</OrangeHeader>
        </RightContent>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
