import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url('/images/jpg/bg-5.jpg');
  background-size: cover;
  background-position: bottom;

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
const specialItemBy = {
  imgSrc: '/images/jpg/Andy-2.jpg',
  imgSrcHover: '/images/jpg/Andy-1.jpg',
  alt: 'Pr Andy Yeoh',
  name: 'Pr Andy Yeoh',
  separator: 'of',
  founder: 'Generations Church',
  founderLink: 'https://www.instagram.com/generationsmy/',
  details:
    'Pastor Andy Yeoh, is an energetic, enthusiastic and engaging speaker, minister, singer, songwriter, worship leader, and certified Solution-Focused Coach – whose passion for the youths is as fired up as his passion for Christ. And he might add, Liverpool FC! He’s constantly on the go inspiring people to live a life of purpose, and is passionate about helping people make progress and make a difference with their lives. He is currently the Pastor of Generations Church, which he planted with his wife, Jay, in January 2023. Together, they have 2 beautiful children — Zyon and Zyra.'
}

const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow align='center'>Speaker</HeadingShadow>
      <SpeakerProfile speaker={specialItemBy} />
    </SectionContainer>
  )
}

export default SpeakerSection
