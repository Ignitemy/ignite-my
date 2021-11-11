import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'


const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

`
const ImageWrapper = styled.div`
  margin: 5rem;

`
const Logo = () => {
  return (
    <SectionContainer>
      <ImageWrapper>
        <Image
          src="/images/png/ignite-yls-logo.png"
          alt="Ignite youth leadership summit logo"
          height={160}
          width={330}
          priority="true"
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="/images/png/ignite-rally.png"
          alt="Ignite youth leadership summit logo"
          height={115}
          width={300}
          priority="true"
        />
      </ImageWrapper>
    </SectionContainer>

  )
}

export default Logo
