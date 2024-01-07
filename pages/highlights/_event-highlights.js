import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { HeadingShadow, Text } from '../../components'
import { motion } from 'framer-motion'

const SectionContainer = styled.section`
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 6rem 0 0;
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
const StyledIFrame = styled(motion.iframe)`
  z-index: 2;
  max-width: 70rem;
  border: solid 2px white;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
  }
  @media (max-width: 560px) {
    width: 95%;
    height: 300px;
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
    heading: 'Session 1',
    subheading: 'Sarath Kumar',
    vidlink: 'https://www.youtube.com/embed/yWo2l_3p5m0?si=OPzrEqY_U_zFEHxd',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam dolores minima quidem iusto, aut iste qui beatae est quod fugiat quas repellendus inventore rem debitis odit. Eaque, harum excepturi?'
  },
  {
    flexDirection: 'row-reverse',
    heading: 'Session 2',
    subheading: 'Alarice Hong',
    vidlink: 'https://www.youtube.com/embed/RJMFfsOqeH8?si=qvkpnHFRiuv8xbZ7',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam dolores minima quidem iusto, aut iste qui beatae est quod fugiat quas repellendus inventore rem debitis odit. Eaque, harum excepturi?'
  }, 
  {
    flexDirection: 'row',
    heading: 'Rally',
    subheading: 'Pr Daniel Kuilan',
    vidlink: 'https://www.youtube.com/embed/zTQ1kwAPU1o?si=fZb-pbP15LcrXdMC',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nam dolores minima quidem iusto, aut iste qui beatae est quod fugiat quas repellendus inventore rem debitis odit. Eaque, harum excepturi?'
  }
]

function EventHighlights() {
  return (
    <SectionContainer>
      <div>
        {highlightPrograms.map((program) => (
          <SessionDetails key={program.heading} flexDirection={program.flexDirection}>
            <ImageWrapper>
              {/* <Image
                src={program.image.src}
                width={program.image.width}
                height={program.image.height}
                alt={program.image.alt}
                priority={true}
              /> */}
              <StyledIFrame
              width="100%"
              height="100%"
              src={program.vidlink}
              title="IGNITEMY2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              />
            </ImageWrapper>
            <SessionDesscriptions>
            <HeadingShadow>{program.heading}</HeadingShadow>
            <Text color="orange" mb="1.5rem" size='2rem' weight='bold'>{program.subheading}</Text>
              <Text color="white">{program.description}</Text>
            </SessionDesscriptions>
          </SessionDetails>
        ))}
      </div>
    </SectionContainer>
  )
}

export default EventHighlights
