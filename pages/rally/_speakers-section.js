import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url("/images/png/wave_rally_speakers.png");
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
  imgSrc: '/images/jpg/ben-1.jpg',
  imgSrcHover: '/images/jpg/ben-2.jpg',
  alt: 'Pr Ben Raj',
  name: 'Pr Ben Raj',
  separator: 'of',
  founder: 'World Harvest Church',
  founderLink: 'https://www.whcmy.com/',
  details:
    'Ben is married to his best friend Bethel, and they have two sons, Joshua and Samuel. He loves the Church and his passion for the house of God and desire to see people’s lives rebuilt is evident in his life, ever since he was a young kid. He is a pastor at World Harvest Church, Sunway, where he leads the Creative Team and is part of the leadership team.'
}

const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow>Speaker</HeadingShadow>
      <SpeakerProfile speaker={specialItemBy} />
    </SectionContainer>
  )
}

export default SpeakerSection
