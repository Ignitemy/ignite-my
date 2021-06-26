import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const CountdownContainer = styled.div`
  width: 70%;
  padding-top: 8.6rem;
  padding-bottom: 8rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border: 2rem;
  border-color: #ffffff;
  border-style: solid;
  border-radius: 1rem;
  color: #ffffff;

  @media (max-width: 640px) {
    width: 90%;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: 2.4rem;
`

const SharedStyles = css`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 1rem;
  width: 6rem;
`
const Number = styled.div`
  ${SharedStyles}

  @media (max-width: 1020px) {
    font-size: 4.8rem;
    margin: 0 0.2rem;
  }
`
const Colon = styled.div`
  ${SharedStyles}

  @media (max-width: 1020px) {
    font-size: 3.2rem;
    margin: 0 0.2rem;
    width: 4rem;
  }
  @media (max-width: 700px) {
    width: 2rem;
  }
`
const Unit = styled.div`
  ${SharedStyles}

  @media (max-width: 1020px) {
    font-size: 1.6rem;
    margin: 0 0.2rem;
  }
`
const GifWrapper = styled.div`
  margin: 0 4rem;

  @media (max-width: 1120px) {
    margin: 0 2.4rem;
  }
  @media (max-width: 1020px) {
    margin: 0 4rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`

const Countdown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    // Date format MM/DD/YYYY
    let difference = new Date(`09/04/${year}`) - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isEventStart, setIsEventStart] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
      ? setIsEventStart(true)
      : setIsEventStart(false)
  }, [timeLeft])

  const timerComponents = [
    <>
      <GifWrapper>
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} />
      </GifWrapper>
      <div>
        <Number color="#ff6600" fontSize="6.4rem">
          {timeLeft.days.toString().padStart(2, '0')}
        </Number>
        <Unit color="#ffffff" fontSize="2.4rem">
          DAYS
        </Unit>
      </div>
      <Colon color="#ffffff" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="#ff6600" fontSize="6.4rem">
          {timeLeft.hours.toString().padStart(2, '0')}
        </Number>
        <Unit color="#ffffff" fontSize="2.4rem">
          HOURS
        </Unit>
      </div>
      <Colon color="#ffffff" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="#ff6600" fontSize="6.4rem">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </Number>
        <Unit color="#ffffff" fontSize="2.4rem">
          MINS
        </Unit>
      </div>
      <Colon color="#ffffff" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="#ff6600" fontSize="6.4rem">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </Number>
        <Unit color="#ffffff" fontSize="2.4rem">
          SECS
        </Unit>
      </div>
      <GifWrapper>
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} />
      </GifWrapper>
    </>
  ]

  const eventStart = [<span>Time's up!</span>]

  const test = {}

  return (
    <>
      <SectionContainer background="linear-gradient(90deg, #FC6076 0%, #FF9A44 100%);">
        <CountdownContainer>
          <StyledContainer>{isEventStart ? eventStart : timerComponents}</StyledContainer>
          <StyledContainer>UNTIL</StyledContainer>
          <StyledContainer>
            <Image src="/images/png/ignite-logo-v2.png" height={65} width={375} />
          </StyledContainer>
        </CountdownContainer>
      </SectionContainer>
    </>
  )
}

export default Countdown
