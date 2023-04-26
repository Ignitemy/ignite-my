import React from 'react'
import styled, { css } from 'styled-components'

const SpeakerProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 6rem;
  gap: 5rem;
  align-items: center;
  @media (min-width: 1024px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    flex-direction: column;
    justify-content: space-between;
    gap: 8rem;
  }
`

const StyledImage = styled.div`
  width: 400px;
  min-height: 400px;
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
  font-size: 2.2rem;
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
const StyledExtLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transition: width 0.25s;
    height: 0.2rem;
    width: 0;
    background-color: var(--color-orange);
    bottom: -4px;
    right:-4px;
  }
  &:hover {
    &::before {
      width: 98%;
    }
  }
`


const sharedImageCSS = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;
  border-radius: 5%;
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
          height={400}
          width={400}
          hover={hover}
          loading="lazy"
        />
        {speaker.imgSrcHover && (
          <HoverImage
            src={speaker.imgSrcHover}
            alt={speaker.alt}
            height={400}
            width={400}
            hover={hover}
            loading="lazy"
          />
        )}
      </StyledImage>
      <DetailsWrapper>
        <SpeakerName>
          <OrangeSpan>{speaker.name}</OrangeSpan> {speaker.separator} 
          <StyledExtLink
          href={speaker.founderLink}
          target="_blank"
          rel="noopener noreferrer"
          > {speaker.founder}</StyledExtLink>
        </SpeakerName>
          <SpeakerDetails>{speaker.details}</SpeakerDetails>
      </DetailsWrapper>
    </SpeakerProfileContainer>
  )
}

export default SpeakerProfile
