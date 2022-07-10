import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem 9rem;
  // background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  // background: ${(props) => props.background};
  background: url("/images/png/wave_joinus.png");
  background-size: cover;

  @media (min-width: 768px) {
    padding: 12rem 12rem 14rem;
  }
  @media (min-width: 1024px) {
    padding: 9rem 9rem 16rem;
  }
  @media (min-width: 1440px) {
    padding: 12rem 23rem 20rem;
  }
  @media (min-width: 1700px) {
    padding: 12rem 34rem 30rem;
  }
`

const OptionDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 10rem;
  }
`

const TextWrapper = styled.p`
  color: var(--color-orange);
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  text-transform: capitalize;
  padding: 7rem 0;

  @media (min-width: 1024px) {
    padding: 0 7rem;
  }
`

const JoinUs = () => {
  return (
    <SectionContainer>
      <HeadingShadow>Come join us!</HeadingShadow>
      <OptionDisplayContainer>
        <Image src="/images/png/in-person.png" alt="in person" width={395} height={294} />
        <TextWrapper>OR</TextWrapper>
        <Image src="/images/png/online.png" alt="online" width={394} height={301} />
      </OptionDisplayContainer>
    </SectionContainer>
  )
}

export default JoinUs
