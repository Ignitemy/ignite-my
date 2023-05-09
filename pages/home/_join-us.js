import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 7rem 3rem 9rem;
  background-color: #ff6600;

  @media (min-width: 768px) {
    padding: 12rem 12rem 14rem;
  }
  @media (min-width: 1024px) {
    padding: 9rem 9rem 10rem;
  }
  @media (min-width: 1440px) {
    padding: 10rem 23rem 12rem;
  }
  @media (min-width: 1700px) {
    padding: 10rem 34rem 12rem;
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
    margin-top: 7rem;
    gap: 10rem;
  }
`

const WhiteHeader = styled.h3`
  font-size: 26px;
  line-height: 40px;
  font-style: italic;
  color: var(--color-black);
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 1280px) {
    font-size: 32px;
  }
`

const JoinUs = () => {
  return (
    <SectionContainer>
      <HeadingShadow align="center">Come join us!</HeadingShadow>
      <OptionDisplayContainer>
        <div>
          <Image src="/images/png/in_person.png" alt="in person" width={474} height={324} />
          <WhiteHeader>In-Person</WhiteHeader>
        </div>
        <div>
          <Image src="/images/png/online_attend.png" alt="online" width={450} height={320} />
          <WhiteHeader>Online</WhiteHeader>
        </div>
      </OptionDisplayContainer>
    </SectionContainer>
  )
}

export default JoinUs
