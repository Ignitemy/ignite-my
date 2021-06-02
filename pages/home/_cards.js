import React from 'react'
import styled from 'styled-components'
import { Text, Heading } from '../../components'

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-orange);
  width: 37rem;
  padding: 2.4rem;
  border-radius: 2.5rem;
`

const Cards = () => {
  return (
    <SpeakerCard>
      <SpeakerContent>
        <Heading color="black" size="1.8rem">
          SPEAKER #1
        </Heading>
        <Text color="white" mt="2rem">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem.
        </Text>
      </SpeakerContent>
    </SpeakerCard>
  )
}

export default Cards
