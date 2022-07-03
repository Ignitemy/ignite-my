import React from 'react'
import styled from 'styled-components'
import { HeadingShadow } from '../../components'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  padding: 4rem 3rem 9rem;
  background-color: ${(props) => props.bgcolor || 'var(--color-black)'};
  background: ${(props) => props.background};

  @media (min-width: 768px) {
    padding: 4rem 6rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 7rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 16rem;
  }
  @media (min-width: 1700px) {
    padding: 4rem 34rem;
  }
`

const SectionContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImage = styled.div`
  height: inherit;
  display: none;
  align-items: flex-end;

  @media (min-width: 1025px) {
    display: flex;
    width: 364px;
  }
  @media (min-width: 1280px) {
    width: 396px;
  }
`

const Heading = styled.p`
  font-weight: 800;
  font-style: italic;
  font-size: 32px;
  line-height: 35px;
  color: ${(props) => props.color || 'var(--color-white)'};
  text-transform: capitalize;
`

const TableSectionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4rem;
  flex-direction: column;
  gap: 5rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    justify-content: flex-start;
    margin-top: 0;
    margin-left:10rem;
    gap: 5rem;
    width: auto;
  }
`

const StyledTable = styled.table`
  text-align: left;
  border-collapse: collapse;
  margin-top: 3rem;
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
  bottom: -8rem;
  left: 0;

  @media (min-width: 768px) {
    bottom: -5rem;
  }
`

const summitTimetable = [
  {
    color: 'var(--color-white)',
    time: '10:00',
    activity: 'Welcome + Worship'
  },
  {
    color: 'var(--color-orange)',
    time: '10:20',
    activity: 'Session 1'
  },
  {
    color: 'var(--color-white)',
    time: '10:50',
    activity: 'Discussion'
  },
  {
    color: 'var(--color-orange)',
    time: '11:00',
    activity: 'Session 2'
  },
  {
    color: 'var(--color-white)',
    time: '11:30',
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
    time: '13:20',
    activity: 'Session 3'
  },
  {
    color: 'var(--color-white)',
    time: '13:50',
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

const rallyTimetable = [
  {
    color: 'var(--color-white)',
    time: '19:45',
    activity: 'Icebreaker'
  },
  {
    color: 'var(--color-white)',
    time: '20:00',
    activity: 'Welcome + Worship'
  },
  {
    color: 'var(--color-white)',
    time: '20:30',
    activity: 'Activities'
  },
  {
    color: 'var(--color-white)',
    time: '20:50',
    activity: 'Word'
  },
  {
    color: 'var(--color-white)',
    time: '21:20',
    activity: 'Altar Call'
  },
  {
    color: 'var(--color-white)',
    time: '21:50',
    activity: 'Closing'
  },
  {
    color: 'var(--color-white)',
    time: '22:00',
    activity: 'End'
  }
]

const Schedule = () => {
  return (
    <SectionContainer>
      <HeadingShadow>Schedule</HeadingShadow>
      <SectionContentWrapper>
        <StyledImage>
          <Image src="/images/png/schedule-dwg.png" alt="in person" width={395} height={294} />
        </StyledImage>
        <TableSectionContainer>
          <div>
            <Heading>RALLY</Heading>
            <StyledTable>
              <tbody>
                {rallyTimetable.map((iteniary) => (
                  <tr key={iteniary.time}>
                    <StyledLeftTd color={iteniary.color}>{iteniary.time}</StyledLeftTd>
                    <StyledRightTd color={iteniary.color}>{iteniary.activity}</StyledRightTd>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </div>
          <AbosoluteDate>24 September 2022, Saturday</AbosoluteDate>
        </TableSectionContainer>
      </SectionContentWrapper>
    </SectionContainer>
  )
}

export default Schedule
