import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const CountdownContainer = styled.div`
  width: 70%;
  height: 53rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border: 2rem;
  border-color: #ffffff;
  border-style: solid;
  border-radius: 1rem;
`

const Placeholder = styled.div`
  color: #ffffff;
  font-size: 16px;
`

const Countdown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // Date format MM/DD/YYYY
    let difference = new Date(`09/04/${year}`) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <>
      <SectionContainer background="linear-gradient(90deg, #FC6076 0%, #FF9A44 100%);">
        <CountdownContainer>
          <Placeholder>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </Placeholder>
        </CountdownContainer>
      </SectionContainer>
    </>
  )
}

export default Countdown
