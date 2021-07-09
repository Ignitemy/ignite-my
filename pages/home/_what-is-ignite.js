import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Text } from '@/components/index'

const BannerContainer = styled.div`
  height: 580px;
  padding: 1.6rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 700px;
  }
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled(Image)`
  z-index: 0;
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

const ImageWrapper = styled.div`
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
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 62rem;

  @media (max-width: 900px) {
    margin: 2.5rem 0 0;
  }
`

const StyledText = styled(Text)`
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

const WhatIsIgnite = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/png/paper-bg.png"
        alt="Paper background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src="/images/png/what-is-ignite.png"
              alt="What is ignite?"
              height={65}
              width={502}
            />
          </ImageWrapper>
          <Details>
            <StyledText color="white" size="1.8rem" lh="24px" align="center">
              IGNITE Youth Leadership Summit is a collaboration between NextGen, the Youth Ministry
              of Damansara Utama Methodist Church, and Scripture Union Peninsular Malaysia. Much
              like its name, IGNITE seeks to inspire Christian students to be catalysts of change in
              their schools by sparking influence among Malaysian youths.
              <br />
              <br />
              Although it is described as a Youth Leadership Summit, IGNITE is not just for leaders
              by title! We believe that everyone is a leader, having the power to influence wherever
              they are, whether it is in schools, in churches or even at home. As leadership is
              marked by servanthood, to lead is ultimately to serve. So, if you have a heart on fire
              for change amongst the youth, IGNITE is for you!
            </StyledText>
          </Details>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default WhatIsIgnite
