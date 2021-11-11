import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Text, Heading } from '../../components'

const Container = styled.div`
  padding: 6rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:80%
`

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${(props) => props.fd};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const EventContent = styled.div`
  margin:0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.align};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  width:40rem;
  @media (max-width: 800px) {
    width:100%;
    margin-top:2rem;
  }
`

const StyledImage = styled(Image)`
  border-radius: 20px;
`
const Quotes = () => {
  return (
    <>      
        <Container>
          <EventWrapper>
          <StyledImage
            src="/images/jpg/john.jpg"
              height={323}
              width={265}
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent>
              <Heading lh="1" size="6rem" color="orange" align="left">
                “
              </Heading>
              <Text size="18px" color="white" align="center">
                What 'God dreams' look like, through a quick study of the lives of David and Joseph in the Bible.
              </Text>
            </EventContent>
          </EventWrapper>
        </Container>
        <Container>
          <EventWrapper fd="row-reverse">
          <StyledImage
            src="/images/jpg/agnel.jpg"
              height={323}
              width={265}
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent >
              <Heading lh="1" size="6rem" color="orange" align="right">
                ”
              </Heading>
              <Text size="18px" color="white" align="center">
                Building A Great Culture Starts With Me
              </Text>
            </EventContent>
          </EventWrapper>
        </Container>
        <Container>
          <EventWrapper>
          <StyledImage
            src="/images/jpg/eddryll.jpg"
              height={323}
              width={265}
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent>
              <Heading lh="1" size="6rem" color="orange" align="left">
                “
              </Heading>
              <Text size="18px" color="white" align="center" ml="2rem" mr="2rem">
                To be fruitful is to be faithful
              </Text>
            </EventContent>
          </EventWrapper>
        </Container>
        <Container>
          <EventWrapper fd="row-reverse">
          <StyledImage
            src="/images/jpg/sam_rally.jpg"
              height={323}
              width={265}
              objectFit="cover"
              objectPosition="center"
            />
            <EventContent >
              <Heading lh="1" size="6rem" color="orange" align="right">
                ”
              </Heading>
              <Text size="18px" color="white" align="center" ml="2rem" mr="2rem">
                Instead of removing he possibility of evil by denying us a free will, God overcame the presence of evil at the Cross
              </Text>
            </EventContent>
          </EventWrapper>
        </Container>
    </>
  )
}

export default Quotes
