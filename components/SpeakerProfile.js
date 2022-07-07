import React from 'react'
import styled, { css } from 'styled-components'

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
  width: 250px;
  min-height: 300px;
  height: auto;
  position: relative;
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

const sharedImageCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;
  border-radius: 50%;
`

const SpeakerImage = styled.img`
  ${sharedImageCSS}
  opacity: ${(props) => (props.hover ? 0 : 1)};
`

const HoverImage = styled.img`
  ${sharedImageCSS}
  opacity: ${(props) => (props.hover ? 1 : 0)};
`

const SpeakerProfile = ({ speaker }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <SpeakerProfileContainer>
      <StyledImage onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <SpeakerImage
          src={speaker.imgSrc}
          alt={speaker.alt}
          height={250}
          width={250}
          hover={hover}
          loading="lazy"
        />
        {speaker.imgSrcHover && (
          <HoverImage
            src={speaker.imgSrcHover}
            alt={speaker.alt}
            height={250}
            width={250}
            hover={hover}
            loading="lazy"
          />
        )}
      </StyledImage>
      <DetailsWrapper>
        <SpeakerName>
          <OrangeSpan>{speaker.name}</OrangeSpan> {speaker.separator} {speaker.founder}
        </SpeakerName>
        <SpeakerDetails>{speaker.details}</SpeakerDetails>
      </DetailsWrapper>
    </SpeakerProfileContainer>
  )
}

export default SpeakerProfile
