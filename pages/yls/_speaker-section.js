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
  flex-direction: column;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 8rem;
    justify-content: center;
  }
`

const SectionSeperator = styled.div`
  height: 7rem;
`

const speakerSectionDetails = [
  {
    flexDirection : 'row',
    imgSrc: '/images/jpg/Daniel-1.jpg',
    imgSrcHover: '/images/jpg/Daniel-2.jpg',
    alt: 'Pr Daniel Lau',
    name: 'Pr Daniel Lau',
    separator: 'of',
    founder: 'CityLight Penang',
    founderLink: 'https://www.instagram.com/citylightpg?igsh=MWhncnA4YmR5anpueg=',
    details:
    'Pastor Daniel Lau is the founder and lead pastor of City Light Church Penang. He graduated with a Bachelor’s Degree in Engineering from The University of Leeds and attended the School of Theology in Singapore. In 2010, God led him and his wife, Charis to Penang to plant a church with a vision to reach out and raise up the next generation. In 2016, City Light collaborated with churches in the region and started Firez. It is a youth movement that passionately engages and involves students to share the good news of Jesus. It has since impacted hundreds of young people every year. Today, God has blessed them with three children, Jethro, Maya and Tsiyon.'
  },
  
  {
    flexDirection : 'row-reverse',
    imgSrc: '/images/jpg/Brandon-1.jpg',
    imgSrcHover: '/images/jpg/Brandon-2.jpg',
    alt: 'Brandon Ho',
    name: 'Brandon Ho',
    separator: 'of',
    founder: 'Let’s Get Real',
    founderLink: 'https://www.instagram.com/letsgetreal.my/',
    details:
    'Brandon started life in the entertainment industry when he was just 20 years old as a TV host on the national show called The 8TV Quickie. Since then, he has worked as a Radio DJ, a host for other TV programs, and acted in movies and short films. Today, most of his time is taken up with content creation on social media and serving his local church. In 2020, he started the first Christian podcast show in Malaysia called Let’s Get Real Malaysia. It has since multiplied into 3 shows (Let’s Get Real, Listen Up, Uncover). Brandon is often invited to share his testimony and to speak at various Christian conferences and churches. Brandon is married to Phoebe and together, they serve at their local church in Bandar Sunway'
  }
]

const specialItemBy =   
  {
    imgSrc: '/images/jpg/Sulyn-1.jpg',
    imgSrcHover: '/images/jpg/Sulyn-2.jpg',
    alt: 'Sulyn Ooi',
    name: 'Sulyn Ooi',
    separator: 'of',
    founder: 'Wondersigns',
    founderLink: 'https://www.instagram.com/wondersigns.official/',
    details:
      'Sulyn is a seasoned worship leader, coach, singer, and songwriter with a deep passion for worship in all its forms—writing, leading, and mentoring. With diverse experience in both performing and teaching, she thrives on guiding others in their worship journeys. Currently she is actively working with worship singers and serves as a key songwriter and worship leader for Wondersigns, the worship ministry of Every Nation Petaling Jaya.'
  }
  
const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow align="center">Speakers</HeadingShadow>
      <DetailsWrapper>
        {speakerSectionDetails.map((speaker) => (
          <SpeakerProfile key={speaker.name} speaker={speaker} />
        ))}
      </DetailsWrapper>

      <SectionSeperator />
      <HeadingShadow align="center">Special Item by</HeadingShadow>
      <SpeakerProfile speaker={specialItemBy} />
    </SectionContainer>
  )
}

export default SpeakerSection
