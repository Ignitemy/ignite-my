import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading,HeadingShadow } from '../../components'

const BannerContainer = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
  @media (max-width: 480px) {
    padding: 8rem 1.6rem;
  }
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100rem;
`

const StyledImage = styled(Image)`
  z-index: 0;
`

const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  // height: 330px;
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
    margin: 4rem 0 0;
  }
`
const StyledHeading = styled(Heading)`
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`

const Banner = () => {
  return (
    <BannerContainer>
      <StyledImage
        src="/images/png/IGNITEMY2023/chain 7.png"
        alt="Flame pattern"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        priority="true"
      />
      <BannerContent>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src="/images/png/ignite_bazaar_logo.png"
              alt="Ignite youth leadership summit logo"
              height={110}
              width={310}
              priority="true"
            />
            <HeadingShadow align='center'>+</HeadingShadow>
            <Image
              src="/images/png/ignite-rally.png"
              alt="Ignite youth leadership summit logo"
              height={130}
              width={358}
              priority="true"
            />
          </ImageWrapper>
          <RightContent>
            <StyledHeading
              as="h3"
              size="3.6rem"
              align="right"
              color="white"
              fstyle="italic"
              lh="4rem"
            >
              27TH AUG 2023
            </StyledHeading>
            <Heading
              as="h3"
              size="3.6rem"
              align="right"
              color="orange"
              fstyle="italic"
              mt="2.4rem"
              lh="4rem"
            >
              4:30PM - 10:00PM
            </Heading>
          </RightContent>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
