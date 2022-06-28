import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import SpeakerProfile from '@/components/SpeakerProfile'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem;
  background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  background: ${(props) => props.background};

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
  imgSrc: '/images/png/dummy-image.png',
  alt: 'dummy image',
  name: 'Pr Ben Raj',
  separator: 'of',
  founder: 'World Harvest Church',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.'
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
