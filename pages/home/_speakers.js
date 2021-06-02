import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { Text, Heading, Button } from '../../components'
import Cards from './_cards'

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

const Speakers = () => {
  return (
    <SectionContainer bgcolor="var(--color-black)">
      <Container>
        <Heading color="white" size="6.4rem" align="center">
          INTRODUCING
        </Heading>
        {/* <Cards /> */}
      </Container>
    </SectionContainer>
  )
}

export default Speakers
