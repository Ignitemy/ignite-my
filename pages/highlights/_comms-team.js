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
  justify-content: center;
  align-items: center;
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


const StyledImage = styled(Image)`
  @media (max-width: 450px) {
    width: 375px;
    height: 250px;
  }
`

const highlightPrograms = [
  {
    image: {
      src: '/images/jpg/comm-2023.jpg',
      width: 705,
      height: 470,
      alt: 'group photo'
    }
  }
]

function CommsTeam() {
  return (
    <SectionContainer>
      <div>
        {highlightPrograms.map((program) => (
          <SessionDetails key={program.heading}>
            <StyledImage
              src={program.image.src}
              width={program.image.width}
              height={program.image.height}
              alt={program.image.alt}
              priority={true}
            />
          </SessionDetails>
        ))}
      </div>
    </SectionContainer>
  )
}

export default CommsTeam
