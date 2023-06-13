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
  imgSrc: '/images/jpg/daniel-kuilan-1.jpg',
  imgSrcHover: '/images/jpg/daniel-kuilan-2.jpg',
  alt: 'Pr Daniel Kuilan',
  name: 'Pr Daniel Kuilan',
  separator: 'of',
  founder: 'Soul Malaysia',
  founderLink: 'https://www.instagram.com/soulmalaysia',
  details:
    'Meet Daniel Kuilan - a pastor, motivational speaker, and storyteller who wants to inspire people to live their best lives. He and his wife Caroline started a church in Alor Setar, Malaysia called SOUL that\'s all about bringing young people together and sharing the message of Jesus. He is also the host of SOULFOOD, a podcast that dives into conversations that enlighten listeners on certain habits and behaviours that influences our culture, relationships, and mental health. Daniel and Caroline are passionate about Jesus and the life-changing influence of his word on people and the future. As a father to Isla and Kyle, Daniel is committed to spreading the life-changing message of Jesus to the next generation!'
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
