import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { HeadingShadow } from '../../components'

const SectionWrapper = styled.div`
  display: block;
  padding: 7rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 7rem 5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 7rem 8rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 7rem 14rem;
  }

  @media screen and (min-width: 1750px) {
    padding: 8rem 24rem;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  gap: 1rem;

  @media (min-width: 1280px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 9rem;
    gap: 3rem;
  }
`

const StyledImageContainer = styled.div`
  width: calc(50% - 1rem);

  @media (min-width: 1280px) {
    width: 100%;
  }
`

const collaborationLogos = [
  {
    imgUrl: '/images/png/event-1.png',
    alt: 'Burning match',
    width: 642,
    height: 380
  },
  {
    imgUrl: '/images/png/event-1.png',
    alt: 'Burning match',
    width: 642,
    height: 380
  },
  {
    imgUrl: '/images/png/event-1.png',
    alt: 'Burning match',
    width: 642,
    height: 380
  },
  {
    imgUrl: '/images/png/event-1.png',
    alt: 'Burning match',
    width: 642,
    height: 380
  }
]

const CollaborationSection = () => {
  return (
    <SectionWrapper>
      <HeadingShadow align="center">Partners</HeadingShadow>
      <ImagesContainer>
        {collaborationLogos.map((image) => (
          <StyledImageContainer>
            <Image src={image.imgUrl} alt={image.alt} width={image.width} height={image.height} />
          </StyledImageContainer>
        ))}
      </ImagesContainer>
    </SectionWrapper>
  )
}

export default CollaborationSection
