import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from '../../components'
import Image from 'next/image'
import PropTypes from 'prop-types'

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  margin-top: 2.4rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1.1rem) scale(1.02);
  }
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  max-height: 76px;
  max-width: 596px;
  overflow: hidden;
  height: auto;
  background-color: var(--color-orange);
  width: 100%;
  padding: 2.4rem;
  border-radius: 2.5rem;
  z-index: 1;
  transition: max-height 0.5s ease-in;

  :hover {
    max-height: 100%;

    p {
      display: unset;
    }

    @media (max-width: 600px) {
      overflow-y: scroll;
    }
  }
  @media (max-width: 480px) {
    max-width: 370px;
  }
`
const StyledImage = styled(Image)`
  border-radius: 2.5rem;
  object-fit: cover;
  filter: grayscale(100%);
`
const ImageWrapper = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`
const MobileImageWrapper = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: unset;
  }
`

const StyledText = styled(Text)`
  display: none;
`

const SpecialCard = (props) => {
  const { src, name, children } = props
  return (
    <SpeakerCard>
      <ImageWrapper>
        <StyledImage
          src={src ? src : '/images/png/event-2.png'}
          height={450}
          width={596}
          alt={name}
        />
      </ImageWrapper>
      <MobileImageWrapper>
        <StyledImage
          src={src ? src : '/images/png/event-2.png'}
          height={407}
          width={370}
          alt={name}
        />
      </MobileImageWrapper>
      <SpeakerContent>
        <Heading color="black" size="1.8rem">
          {name}
        </Heading>
        <StyledText color="white" mt="2rem">
          {children}
        </StyledText>
      </SpeakerContent>
    </SpeakerCard>
  )
}

SpecialCard.propTypes = {
  imageSource: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default SpecialCard
