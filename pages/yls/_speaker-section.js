import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url('/images/png/IGNITEMY2023/chain 1 flip.png');
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 12rem 6rem;
  }
  @media (min-width: 1024px) {
    padding: 9rem 7rem;
  }
  @media (min-width: 1440px) {
    padding: 12rem 16rem;
  }
  @media (min-width: 1700px) {
    padding: 12rem 34rem;
  }
`
const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 8rem;
    justify-content: center;
  }
`

const speakerSectionDetails = [
  {
    imgSrc: '/images/jpg/Alarice-2.jpg',
    imgSrcHover: '/images/jpg/Alarice-2.jpg',
    alt: 'Pr Daniel Lau',
    name: 'Pr Daniel Lau',
    separator: 'of',
    founder: 'CityLight Penang',
    founderLink: 'https://clcpg.org/',
    details:
      '...'
  },
  {
    imgSrc: '/images/jpg/sarath-kumar-1.jpg',
    imgSrcHover: '/images/jpg/sarath-kumar-2.jpg',
    alt: '...',
    name: 'Sarath Kumar',
    separator: 'of',
    founder: 'Alpha Malaysia',
    founderLink: 'https://malaysia.alpha.org/',
    details:
    '...'
  }
]

const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow align="center">Speakers</HeadingShadow>
      <DetailsWrapper>
        {speakerSectionDetails.map((speaker) => (
          <SpeakerProfile key={speaker.name} speaker={speaker} />
        ))}
      </DetailsWrapper>
    </SectionContainer>
  )
}

export default SpeakerSection
