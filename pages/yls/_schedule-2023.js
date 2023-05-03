import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 1.5rem 9rem;
  background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  background: ${(props) => props.background};

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
    time: '9:00',
    activity: 'Registration'
  },
  {
    color: 'var(--color-white)',
    time: '9:30',
    activity: 'Doors Open'
  },
  {
    color: 'var(--color-white)',
    time: '10:00',
    activity: 'Welcome + Worship'
  },
  {
    color: 'var(--color-orange)',
    time: '10:30',
    activity: 'Session 1'
  },
  {
    color: 'var(--color-white)',
    time: '10:55',
    activity: 'Discussion'
  },
  {
    color: 'var(--color-orange)',
    time: '11:15',
    activity: 'Session 2'
  },
  {
    color: 'var(--color-white)',
    time: '11:40',
    activity: 'Discussion'
  },
  {
    color: 'var(--color-white)',
    time: '12:00',
    activity: 'Lunch (on your own)'
  },
  {
    color: 'var(--color-white)',
    time: '13:00',
    activity: 'Special Item'
  },
  {
    color: 'var(--color-orange)',
    time: '13:10',
    activity: 'Session 3'
  },
  {
    color: 'var(--color-white)',
    time: '13:35',
    activity: 'Discussion'
  },
  {
    color: 'var(--color-white)',
    time: '14:00',
    activity: 'Summit Up'
  },
  {
    color: 'var(--color-white)',
    time: '15:00',
    activity: 'Closing'
  },
  {
    color: 'var(--color-white)',
    time: '15:30',
    activity: 'End'
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
          <AbosoluteDate>26 August 2023, Saturday</AbosoluteDate>
        </TableSectionContainer>
      </SectionContentWrapper>
    </SectionContainer>
  )
}

export default Schedule
