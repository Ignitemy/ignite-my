import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Text, Heading } from '../../components'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpeakerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.fd};

  @media (max-width: 1090px) {
    flex-direction: column;
  }
`

const SpeakerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  max-width: 60rem;

  @media (max-width: 1090px) {
    margin: 4rem 0 0;
  }
`

const StyledImage = styled(Image)`
  border-radius: 20px;
  filter: grayscale(100%);
  transition: filter 0.5s ease-in;

  :hover {
    filter: none;
  }
`

const Speakers = () => {
  return (
    <>
      <SectionContainer background="linear-gradient(90deg, #FC6076 0%, #FF9A44 100%)">
        <Container>
          <SpeakerWrapper>
            <StyledImage
              src="/images/jpg/john.jpg"
              height={400}
              width={328}
              objectFit="cover"
              objectPosition="center"
            />
            <SpeakerContent align="flex-end" ml="10rem">
              <Heading as="h3" size="2.4rem" align="left">
                SPEAKER
              </Heading>
              <Text size="1.8rem" align="left" mt="3.2rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget.
                Purus semper eget duis at. Viverra accumsan in nisl nisi.{' '}
              </Text>
            </SpeakerContent>
          </SpeakerWrapper>
        </Container>
      </SectionContainer>
    </>
  )
}

export default Speakers
