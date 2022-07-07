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

const SectionSeperator = styled.div`
  height: 7rem;
`

const speakerSectionDetails = [
  {
    imgSrc: '/images/jpg/alexa-1.jpg',
    imgSrcHover: '/images/jpg/alexa-2.jpg',
    alt: 'Rev Alexa Ho',
    name: 'Rev Alexa Ho',
    separator: 'of',
    founder: 'PJEFC',
    details:
      "In full time pastoring ministry since 2004, Alexa loves people, loves talking, and she gathers energy when she talks to people! She’s happily married to Gary, and together, they have a son, Micah. She's currently the Senior Pastor of PJ Evangelical Free Church — a church that seeks to love God, love people and make disciples."
  },
  {
    imgSrc: '/images/jpg/daniel.jpg',
    imgSrcHover: '/images/jpg/daniel.jpg',
    alt: 'Pr Daniel Tan',
    name: 'Pr Daniel Tan',
    separator: 'of',
    founder: 'Generasi Gemilang',
    details:
      'Daniel has served in the pastoral ministry for 17 years. Daniel pioneered a ministry to reach the East Malaysians residing in the Klang Valley. The ministry eventually grew to be the SIBLife Church he pastors here in PJ today. Ever since his corporate life, Daniel has been very involved in serving the underserved community. In 2010, he founded a social welfare organization, Yayasan Generasi Gemilang.'
  },
  {
    imgSrc: '/images/jpg/daryll-1.jpg',
    imgSrcHover: '/images/jpg/daryll-2.jpg',
    alt: 'Daryll Tan',
    name: 'Daryll Tan',
    separator: 'of',
    founder: 'Open Minds',
    details:
      'Daryll Tan started with establishing his own talent management and video marketing business at 21 years old. Today, he is the Co-Founder and Marketing Technology consultant at OpenMinds™, and the Founder and Group CEO of food & technology company Feed Forward Sdn. Bhd. Daryll is actively involved in entrepreneurship, startup mentorship, partnership development and social media consultation. As an entrepreneur, he strives to make a positive impact and create purposeful jobs; actively nurturing high-performing, innovative teams and growing entrepreneurs to make a positive impact.'
  }
]

const specialItemBy = {
  imgSrc: '/images/jpg/shn-1.jpg',
  imgSrcHover: '/images/jpg/shn-2.jpg',
  alt: 'Chloe/SHNe',
  name: 'Chloe/SHN',
  separator: '',
  founder: '',
  details:
    'After going independent in 2020, SHN released several singles that amassed a total of over 100,000 streams across all platforms. She is most excited about weaving stories into lyrics with pop tunes that will get you either dancing to the likes of "people i love (hurt me)", having your heartstrings pulled by "I Hope She\'s Me" or vibing out to songs like "do ya". SHN has collaborated with local artists likeTheMingThing, Jo Malone, and Estee Lauder, and artists across the causeway and will continue to expand her reach beyond the local music scene!'
}

const SpeakerSection = () => {
  return (
    <SectionContainer>
      <HeadingShadow>Speakers</HeadingShadow>
      {speakerSectionDetails.map((speaker) => (
        <SpeakerProfile key={speaker.name} speaker={speaker} />
      ))}
      <SectionSeperator />
      <HeadingShadow>Special Item by</HeadingShadow>
      <SpeakerProfile speaker={specialItemBy} />
    </SectionContainer>
  )
}

export default SpeakerSection
