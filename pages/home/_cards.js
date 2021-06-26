import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from '../../components'
import Image from 'next/image'
import PropTypes from 'prop-types'

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2.5rem;
  align-items: center;
  min-width: 300px;
  margin-top: 2.4rem;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-1.1rem) scale(1.02);
  }
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-orange);
  width: 100%;
  max-width: 370px;
  padding: 2.4rem;
  border-radius: 2.5rem;
  margin-top: -51px;
  z-index: 1;
`
const StyledImage = styled(Image)`
  border-radius: 2.5rem;
`

const Cards = (props) => {
  const { src, name, children } = props
  return (
    <SpeakerCard>
      <StyledImage src={src ? src : '/images/png/event-2.png'} height={256} width={370} />
      <SpeakerContent>
        <Heading color="black" size="1.8rem">
          {name}
        </Heading>
        <Text color="white" mt="2rem">
          {children}
        </Text>
      </SpeakerContent>
    </SpeakerCard>
  )
}

Cards.propTypes = {
  imageSource: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Cards
