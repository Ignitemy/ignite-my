import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const SpeakerProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 6rem;
  gap: 5rem;

  @media (min-width: 1024px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;
  }
`

const StyledImage = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 250px;
  }
`

const DetailsWrapper = styled.div`
  color: var(--color-white);

  @media (min-width: 1024px) {
    width: 70%;
  }
`

const SpeakerName = styled.p`
  font-size: 2.4rem;
  line-height: 40px;
  margin-bottom: 0.5rem;
`
const OrangeSpan = styled.span`
  color: var(--color-orange);
  font-style: italic;
`

const SpeakerDetails = styled.p`
  font-size: 1.6rem;
  line-height: 30px;
`

const SpeakerProfile = ({ speaker }) => {
  return (
    <SpeakerProfileContainer>
      <StyledImage>
        <Image src={speaker.imgSrc} alt={speaker.alt} height={250} width={250} />
      </StyledImage>
      <DetailsWrapper>
        <SpeakerName><OrangeSpan>{speaker.name}</OrangeSpan> {speaker.separator} {speaker.founder}</SpeakerName>
        <SpeakerDetails>{speaker.details}</SpeakerDetails>
      </DetailsWrapper>
    </SpeakerProfileContainer>
  )
}

export default SpeakerProfile
