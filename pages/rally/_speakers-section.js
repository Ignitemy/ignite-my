import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url("/images/png/IGNITEMY2023/chain 3.png");
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
  imgSrc: '/images/png/coming-soon.png',
  imgSrcHover: '/images/png/coming-soon.png',
  alt: 'Daniel Kuilan',
  name: 'Daniel Kuilan',
  separator: 'of',
  founder: 'Soul Malaysia',
  founderLink: 'https://www.instagram.com/soulmalaysia',
  details:
    ''
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
