import React from 'react'
import styled, { css } from 'styled-components'
import { Text, Heading } from '@/components/index'
import Image from 'next/image'
import PropTypes from 'prop-types'

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  margin-top: 2.4rem;
  position: relative;
  transition: transform 0.3s;
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        transform: translateY(-1.1rem) scale(1.02);

        div {
          max-height: 442px;

          p {
            display: unset;
          }

          @media (max-width: 400px) {
            overflow-y: scroll;
            height: 100%;
          }
        }
      }
    `}
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  max-height: 76px;
  overflow: hidden;
  height: 100%;
  background-color: ${(props) =>
    props.color ? `var(--color-${props.color})` : 'var(--color-orange)'};
  width: 100%;
  max-width: 370px;
  padding: 2.4rem;
  border-radius: 2.5rem;
  z-index: 1;
  transition: all 0.6s ease-in-out;
`
const StyledImage = styled(Image)`
  border-radius: 2.5rem;
  object-fit: cover;
`

const HoverText = styled(Text)`
  display: none;
`

const Cards = (props) => {
  const { src, name, color, disabled, children } = props
  return (
    <SpeakerCard disabled={disabled}>
      <StyledImage
        src={src ? src : '/images/png/event-2.png'}
        height={442}
        width={370}
        alt={name}
      />
      <SpeakerContent color={color}>
        <Heading color={color === 'black' ? 'white' : 'black'} size="1.8rem">
          {name}
        </Heading>
        <HoverText color="white" mt="2rem">
          {children}
        </HoverText>
      </SpeakerContent>
    </SpeakerCard>
  )
}

Cards.propTypes = {
  imageSource: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Cards
