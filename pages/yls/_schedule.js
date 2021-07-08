import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Heading } from '../../components'

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(Heading)`
  -webkit-text-stroke: 3px ${(props) => props.stroke}; /* stroke width and color */
  -webkit-font-smoothing: antialiased;
  color: transparent;
  letter-spacing: 10px;
  text-indent: 10px;
  text-align: center;
  width: auto;
  padding: 0.4rem;
  border-top: 4px solid var(--color-black);
  border-bottom: 4px solid var(--color-black);

  @media (max-width: 900px) {
    font-size: 4.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3.2rem;
    line-height: 3.6rem;
    border-top: 2px solid var(--color-black);
    border-bottom: 2px solid var(--color-black);
    -webkit-text-stroke: 2px ${(props) => props.stroke};
  }
`

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

const IgnitesYou = () => {
  return (
    <>
      <SectionContainer bgcolor="var(--color-white)">
        <Container>
          <StyledHeading
            size="6.4rem"
            align="center"
            weight="bold"
            lh="7.2rem"
            stroke="var(--color-black)"
          >
            SCHEDULE
          </StyledHeading>
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
