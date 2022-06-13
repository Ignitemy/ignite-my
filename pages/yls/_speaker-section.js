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
    padding: 12rem;
  }
  @media (min-width: 1024px) {
    padding: 9rem;
  }
  @media (min-width: 1440px) {
    padding: 12rem 23rem;
  }
  @media (min-width: 1700px) {
    padding: 12rem 34rem;
  }
`

const SectionSeperator = styled.div`
    height: 7rem;
`

const speakerSectionDetails = [
  {
    imgSrc: '/images/png/dummy-image.png',
    alt: 'dummy image',
    name: 'Speaker name',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.'
  },
  {
    imgSrc: '/images/png/dummy-image.png',
    alt: 'dummy image',
    name: 'Speaker name',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.'
  },
  {
    imgSrc: '/images/png/dummy-image.png',
    alt: 'dummy image',
    name: 'Speaker name',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.'
  }
]

const specialItemBy = {
  imgSrc: '/images/png/dummy-image.png',
  alt: 'dummy image',
  name: 'Speaker name',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere.'
}

const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow>Speakers</HeadingShadow>
      {speakerSectionDetails.map((speaker) => (
        <SpeakerProfile speaker={speaker} />
      ))}
      <SectionSeperator />
      <HeadingShadow>Special Item by</HeadingShadow>
      <SpeakerProfile speaker={specialItemBy} />
    </SectionContainer>
  )
}

export default SpeakerSection
