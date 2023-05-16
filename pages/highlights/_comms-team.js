import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { HeadingShadow, Text } from '../../components'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 0;

  @media (min-width: 768px) {
    padding: 4rem 0 1rem;
  }

  @media (min-width: 1024px) {
    padding: 7rem 0 2rem;
  }
`

const SessionDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 7rem;

  @media (min-width: 768px) {
    width: 700px;
    flex-direction: ${(props) => props.flexDirection || 'row'};
  }

  @media (min-width: 1024px) {
    width: 870px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 325px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`

const SessionDesscriptions = styled.div`
  width: 90%;
  margin: 2rem auto;

  @media (min-width: 768px) {
    width: 325px;
    margin: 0;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`

const highlightPrograms = [
  {
    flexDirection: 'row',
    image: {
      src: '/images/jpg/demo_rally.jpg',
      width: 2400,
      height: 1602,
      alt: 'something'
    },
    heading: 'Session 1',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam dolores minima quidem iusto, aut iste qui beatae est quod fugiat quas repellendus inventore rem debitis odit. Eaque, harum excepturi?'
  }
]

function CommsTeam() {
  return (
    <SectionContainer>
      <div>
        {highlightPrograms.map((program) => (
          <SessionDetails key={program.heading} flexDirection={program.flexDirection}>
            <ImageWrapper>
              <Image
                src={program.image.src}
                width={program.image.width}
                height={program.image.height}
                alt={program.image.alt}
                priority={true}
              />
            </ImageWrapper>
            <SessionDesscriptions>
              <HeadingShadow mb="1rem">{program.heading}</HeadingShadow>
              <Text color="white">{program.description}</Text>
            </SessionDesscriptions>
          </SessionDetails>
        ))}
      </div>
    </SectionContainer>
  )
}

export default CommsTeam
