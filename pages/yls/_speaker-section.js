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
    alt: 'Alarice Hong',
    name: 'Alarice Hong',
    separator: 'of',
    founder: 'Awaken Generation',
    founderLink: 'https://www.awakengeneration.sg/',
    details:
      'Alarice is the co-founder of Awaken Generation - a worship missions organisation in Singapore that has trained & equipped close to 700 students in worship ministry over the past 9 years. Alarice is a worship leader & songwriter whose heart is to mentor & disciple a generation of worshippers. Alarice has released several solo albums in her early years as an artist and has released close to 80 original worship songs together with the AG community. Her joy is leading Awaken Generation together with her husband Calvin Hong of whom she has been married to for 10 years. '
  },
  {
    imgSrc: '/images/jpg/sarath-kumar-1.jpg',
    imgSrcHover: '/images/jpg/sarath-kumar-2.jpg',
    alt: 'Sarath Kumar',
    name: 'Sarath Kumar',
    separator: 'of',
    founder: 'Alpha Malaysia',
    founderLink: 'https://malaysia.alpha.org/',
    details:
      'Sarath oversees the youth and campus work at Alpha Malaysia. Together, the team serves the Malaysian youth and campus contexts to equip them to evangelise through the tool of Alpha. Sarath is married to Muriel, who is a secondary school teacher, and they have a son named Asher Ranajay. Sarath is passionate about seeing young people encounter the love of Jesus in their lives. Also, he is a die-hard Arsenal fan. #COYG.'
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
