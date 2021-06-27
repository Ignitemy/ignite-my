import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/helpers/auth'
import { Button } from '../../components'

const BannerContainer = styled.div`
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    height: 580px;
    padding-top: 6.4rem;
    align-items: flex-start;
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
`

const Details = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    margin: 2.5rem 0 0;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 6.4rem;
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
  const user = useAuth()
  return (
    <BannerContainer>
      <StyledImage
        src="/images/png/homepage-banner.png"
        alt="Fire patterns"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src="/images/png/ignite-logo.png"
              alt="Ignite logo"
              height={59}
              width={383}
              priority="true"
            />
          </ImageWrapper>
          <Details>
            <WhiteHeader>4th Sept 2021</WhiteHeader>
            <OrangeHeader>STREAMING LIVE</OrangeHeader>
          </Details>
        </ContentWrapper>
        {!user && (
          <ButtonWrapper>
            <Link href="/register">
              <Button orange="true">Register</Button>
            </Link>
          </ButtonWrapper>
        )}
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
