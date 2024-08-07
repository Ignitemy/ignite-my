import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 1.5rem 9rem;
  background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  background: url('/images/png/bg-2.png');
  background-size: cover;
  background-position: center;


  @media (min-width: 768px) {
    padding: 4rem 6rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 7rem;
  }
  @media (min-width: 1440px) {
    padding: 5rem 16rem;
  }
  @media (min-width: 1700px) {
    padding: 5rem 34rem;
  }
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1280px) {
    padding: 6em 0;
  }
`

const TableSectionContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  position: relative;
  padding: 3rem 10px 10rem 20px;
  border: 2px solid #FF6600;

  @media (min-width: 768px) {
    padding: 7rem 7rem 13rem;
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    width: auto;
  }
`

const StyledTable = styled.table`
  text-align: left;
  border-collapse: collapse;
`

const StyledLeftTd = styled.td`
  font-size: 18px;
  color: ${(props) => props.color || 'var(--color-white)'};
  letter-spacing: 2px;
  padding: 1rem 0;
`

const StyledRightTd = styled.td`
  font-size: 18px;
  color: ${(props) => props.color || 'var(--color-white)'};
  letter-spacing: 2px;
  padding: 1rem 0 1rem 3rem;
`

const AbosoluteDate = styled.p`
  position: absolute;
  font-style: italic;
  font-weight: 800;
  font-size: 2rem;
  line-height: 27px;
  text-align: center;
  color: var(--color-orange);
  width: 100%;
  bottom: 4.5rem;
  left: 0;

  /* @media (min-width: 768px) {
    bottom: -5rem;
  } */
`

const summitTimetable = [
  {
    color: 'var(--color-white)',
    time: '0900',
    activity: 'Registration'
  },
  {
    color: 'var(--color-white)',
    time: '0930',
    activity: 'Doors Open'
  },
  {
    color: 'var(--color-white)',
    time: '1000',
    activity: 'Welcome'
  },
  {
    color: 'var(--color-white)',
    time: '1010',
    activity: 'Worship'
  },
  {
    color: 'var(--color-orange)',
    time: '1035',
    activity: 'Session 1'
  },
  {
    color: 'var(--color-white)',
    time: '1100',
    activity: 'Discussion 1'
  },
  {
    color: 'var(--color-orange)',
    time: '1125',
    activity: 'Session 2'
  },
  {
    color: 'var(--color-white)',
    time: '1150',
    activity: 'Discussion 2'
  },
  {
    color: 'var(--color-white)',
    time: '1215',
    activity: 'Lunch (on your own)'
  },
  {
    color: 'var(--color-orange)',
    time: '1345',
    activity: 'Special Item'
  },
  {
    color: 'var(--color-orange)',
    time: '1355',
    activity: 'SUMMIT UP'
  },
  {
    color: 'var(--color-white)',
    time: '1530',
    activity: 'Closing'
  }
]

const Schedule = () => {
  return (
    <SectionContainer>
      <HeadingShadow align='center'>Schedule</HeadingShadow>
      <SectionContentWrapper>
        <TableSectionContainer>
          <div>
            <StyledTable>
              <tbody>
                {summitTimetable.map((iteniary) => (
                  <tr key={iteniary.time}>
                    <StyledLeftTd color={iteniary.color}>{iteniary.time}</StyledLeftTd>
                    <StyledRightTd color={iteniary.color}>{iteniary.activity}</StyledRightTd>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </div>
          <AbosoluteDate>7 September 2024, Saturday</AbosoluteDate>
        </TableSectionContainer>
      </SectionContentWrapper>
    </SectionContainer>
  )
}

export default Schedule
