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
    padding: 7rem 8rem 10rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 7rem 14rem 10rem;
  }

  @media screen and (min-width: 1750px) {
    padding: 7rem 24rem 10rem;
  }
`

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  gap: 4rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
    gap: 5rem;
  }
`

const StyledImageContainer = styled.div`
  width: 80%;
  /* max-width: 25%; */

  @media (min-width: 768px) {
    width: fit-content;
    max-width: 25%;
  }
  /* width: calc(50% - 1rem);
  @media (min-width: 1280px) {
    width: 100%;
  } */
`

const collaborationLogos = [
  {
    imgUrl: '/images/png/NextGen-Logo-(WHITE)_crop.png',
    alt: 'NextGen Logo',
    width: 640,
    height: 164
  },
  {
    imgUrl: '/images/png/SU logo white transparent background.png',
    alt: 'Scripture Union Logo',
    width: 640,
    height: 212
  }
]

const CollaborationSection = () => {
  return (
    <SectionWrapper>
      <HeadingShadow align="center">Partners</HeadingShadow>
      <ImagesContainer>
        {collaborationLogos.map((image) => (
          <StyledImageContainer>
            <Image
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: 'auto'
              }}
              src={image.imgUrl}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </StyledImageContainer>
        ))}
      </ImagesContainer>
    </SectionWrapper>
  )
}

export default CollaborationSection
