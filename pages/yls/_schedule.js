import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heading, Text } from '../../components'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  overflow-x: hidden;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// const StyledHeading = styled(Heading)`
//   -webkit-text-stroke: 3px ${(props) => props.stroke}; /* stroke width and color */
//   -webkit-font-smoothing: antialiased;
//   color: transparent;
//   letter-spacing: 10px;
//   text-indent: 10px;
//   text-align: center;
//   width: auto;
//   padding: 0.4rem;
//   border-top: 4px solid var(--color-black);
//   border-bottom: 4px solid var(--color-black);

//   @media (max-width: 900px) {
//     font-size: 4.8rem;
//   }
//   @media (max-width: 480px) {
//     font-size: 3.2rem;
//     line-height: 3.6rem;
//     border-top: 2px solid var(--color-black);
//     border-bottom: 2px solid var(--color-black);
//     -webkit-text-stroke: 2px ${(props) => props.stroke};
//   }
// `

const ScheduleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 112rem;
  margin-top: 4.8rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const SummitWrapper = styled.div`
  margin-right: 3.8rem;
`

const RallyWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    justify-content: flex-end;
    margin-top: 2rem;
  }
`

const DateWrapper = styled.div`
  display: flex;
  margin-top: 4.8rem;

  @media (max-width: 480px) {
    h4 {
      font-size: 3.2rem;
    }
  }
`

const LeftDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 480px) {
    margin-right: 1.2rem;
  }
`
const RightDate = styled.div`
  display: flex;
  flex-direction: column;
`

export const Marquee = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  white-space: nowrap;
  display: block;
  transform: rotate(-1.5deg);
`

export const MarqueeText = styled(Text)`
  display: inline-block;
  overflow-x: hidden;
  text-indent: 0;
  font-weight: 600;
  font-size: calc(6rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(10rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  border-top: 3px solid var(--color-black);
  border-bottom: 3px solid var(--color-black);
  will-change: transform !important;
  margin: 2.4rem 0;
  -webkit-text-fill-color: var(--color-white);
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: var(--color-black);

  :hover {
    background-color: var(--color-black);
    -webkit-text-stroke-color: var(--color-white);
    -webkit-text-fill-color: initial;
    text-decoration: line-through;
  }
`
const MarqueeTextMotion = motion(MarqueeText)

const IgnitesYou = () => {
  const marqueeText = Array(10)
    .fill(` SCHEDULE -`)
    .map((name) => name)
  return (
    <>
      <SectionContainer bgcolor="var(--color-white)">
        <Marquee>
          <MarqueeTextMotion
            animate={{
              x: ['-50.28%', '0%']
            }}
            transition={{
              ease: 'linear',
              duration: 18,
              repeat: Infinity
            }}
          >
            {marqueeText}
          </MarqueeTextMotion>
        </Marquee>
        <Container>
          {/* <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="7.2rem"
            stroke="var(--color-black)"
          >
            SCHEDULE
          </StyledHeading> */}
          <ScheduleWrapper>
            <SummitWrapper>
              <Image src="/images/png/summit-schedule.png" width={533} height={528} />
            </SummitWrapper>
            <RallyWrapper>
              <Image src="/images/png/rally-schedule.png" width={538} height={528} />
            </RallyWrapper>
          </ScheduleWrapper>
          <DateWrapper>
            <LeftDate>
              <Heading as="h4" size="4.8rem" lh="5rem" align="right">
                4TH
              </Heading>
              <Heading as="h4" size="4.8rem" lh="5rem" align="right">
                SEPT
              </Heading>
            </LeftDate>
            <RightDate>
              <Heading as="h4" size="4.8rem" lh="5rem" align="left">
                20
              </Heading>
              <Heading as="h4" size="4.8rem" lh="5rem" align="left">
                21
              </Heading>
            </RightDate>
          </DateWrapper>
        </Container>
      </SectionContainer>
    </>
  )
}

export default IgnitesYou
