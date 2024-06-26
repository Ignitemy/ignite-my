import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import { Button, HeadingBold } from '../../components'

const SectionContainer = styled.section`
  width: 100%;
  // padding: 8rem 0;
  padding: 9rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const CountdownContainer = styled.div`
  width: 85%;
  max-width: 144rem;
  // padding: 8rem 0;
  padding: 10rem 2rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  // background-color: var(--color-black);
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  // border: 2rem solid var(--color-white);
  border-radius: 1rem;
  color: var(--color-white);

  // @media (max-width: 900px) {
  //   border: 0.5rem solid var(--color-white);
  // }

  @media (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 560px) {
    width: 95%;
    padding: 4rem 0;
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

  @media (max-width: 560px) {
    font-size: 2rem;

    // img {
    //   width: 300px;
    //   height: 60px;
    // }
  }
`
const StyledBoldContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: 4.2rem;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
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
  text-shadow: 1px 1px 2px #000000;
  @media (max-width: 1020px) {
    font-size: 4.8rem;
    margin: 0 0.2rem;
  }
  @media (max-width: 560px) {
    font-size: 3.6rem;
    margin: 0;
    width: 5rem;
  }
  @media (max-width: 375px) {
    font-size: 3.2rem;
    margin: 0;
    width: 4rem;
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
  @media (max-width: 560px) {
    width: auto;
    margin: 0 0.4rem;
    font-size: 2.4rem;
  }
`
const Unit = styled.div`
  ${SharedStyles}

  @media (max-width: 1020px) {
    font-size: 1.6rem;
    margin: 0 0.2rem;
  }
  @media (max-width: 560px) {
    font-size: 1.4rem;
    margin: 0;
    width: auto;
  }
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`
const GifWrapper = styled.div`
  margin: 0 4rem;

  @media (max-width: 1120px) {
    margin: 0 2.4rem;

    img {
      height: 60px;
      width: 60px;
    }
  }
  @media (max-width: 1020px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
  @media (max-width: 900px) {
    padding: 2rem;
    margin: 0 1rem;
  }
  @media (max-width: 560px) {
    padding: 1.2rem 0;
    img {
      height: 40px;
      width: 40px;
    }
  }
  @media (max-width: 375px) {
    img {
      height: 32px;
      width: 32px;
    }
  }
`
const ButtonWrapper = styled.div`
  margin-top: 4.2rem;
  @media (max-width: 900px) {
    margin-top: 0.2rem;
  }
`

const StyledExtLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
`

const Countdown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    // Date format MM/DD/YYYY
    let difference = new Date(`9/7/${year} 10:00`) - new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
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
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} alt="Ignite loading" />
      </GifWrapper>
      <div>
        <Number color="var(--color-orange)" fontSize="6.4rem">
          {timeLeft.days.toString().padStart(2, '0')}
        </Number>
        <Unit color="var(--color-white)" fontSize="2.4rem">
          DAYS
        </Unit>
      </div>
      <Colon color="var(--color-white)" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="var(--color-orange)" fontSize="6.4rem">
          {timeLeft.hours.toString().padStart(2, '0')}
        </Number>
        <Unit color="var(--color-white)" fontSize="2.4rem">
          HOURS
        </Unit>
      </div>
      <Colon color="var(--color-white)" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="var(--color-orange)" fontSize="6.4rem">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </Number>
        <Unit color="var(--color-white)" fontSize="2.4rem">
          MINS
        </Unit>
      </div>
      <Colon color="var(--color-white)" fontSize="4.8rem">
        :
      </Colon>
      <div>
        <Number color="var(--color-orange)" fontSize="6.4rem">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </Number>
        <Unit color="var(--color-white)" fontSize="2.4rem">
          SECS
        </Unit>
      </div>
      <GifWrapper>
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} alt="Ignite loading" />
      </GifWrapper>
    </>
  ]

  const eventStart = [
    <>
      <GifWrapper>
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} alt="Ignite loading" />
      </GifWrapper>
      <Image src="/images/png/ignite-logo-v2.png" height={65} width={375} alt="Ignite logo" />
      <GifWrapper>
        <Image src="/images/gif/ignite-loading.gif" height={80} width={80} alt="Ignite loading" />
      </GifWrapper>
      {/* [<span>Time's up!</span>] */}
    </>
  ]

  const btnStart = [
    <>
      <ButtonWrapper>
        <StyledExtLink
          href="https://ignitemy.online.church/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button orange="true">Streaming Live</Button>
        </StyledExtLink>
      </ButtonWrapper>
    </>
  ]

  const blankText = ['']

  return (
    <>
      {/* previously bg gradient used is linear-gradient(90deg, #FC6076 0%, #FF9A44 100%); */}
      <SectionContainer background="linear-gradient(28deg, #000000 0%, #FF6600 100%)">
        <CountdownContainer>
          {isEventStart ? blankText : <HeadingBold align="center">ARE YOU READY?</HeadingBold>}

          <StyledContainer>{isEventStart ? eventStart : timerComponents}</StyledContainer>

          {isEventStart ? blankText : <StyledContainer>FOR</StyledContainer>}

          <StyledContainer>
            {isEventStart ? (
              btnStart
            ) : (
              <Image
                src="/images/png/ignite-logo.png"
                // height={59}
                // width={480}
                height={51} width={332} // original logo dimension
                alt="Ignite logo"
                style={{ width: '100%', height: 'auto', maxWidth: '360px' }}
              />
            )}
          </StyledContainer>
        </CountdownContainer>
      </SectionContainer>
    </>
  )
}

export default Countdown
