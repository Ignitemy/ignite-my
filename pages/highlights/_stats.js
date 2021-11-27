import React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../components'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  @media (max-width: 800px) {
    // flex-direction: column;
    // justify-content: space-evenly;
  }
`
const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    // flex-direction: column;
  }
`
const SharedStyles = css`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align:center;
`

const Stat = styled.div`
  width:120px;
  margin: 7rem;
  @media (max-width: 800px) {
    margin: 3rem 1rem;
  }
`
const Number = styled.div`
  ${SharedStyles}
  @media (max-width: 800px) {
    font-size:4.4rem;
    }
`
const Unit = styled.div`
  ${SharedStyles}
  margin-top: 2rem;
  @media (max-width: 800px) {
    font-size:1.7rem;
    }
`
const Stats = () => {
    return (
      <SectionContainer>
        <OuterContainer>
          <Stat>
            <Number color="var(--color-orange)" fontSize="6.4rem">
              219
            </Number>
            <Unit color="var(--color-white)" fontSize="2.4rem">
              PARTICIPANTS
            </Unit>
          </Stat>
          <Stat>
            <Number color="var(--color-orange)" fontSize="6.4rem">
              101
            </Number>
            <Unit color="var(--color-white)" fontSize="2.4rem">
              SCHOOLS
            </Unit>
          </Stat>
        </OuterContainer>
        <OuterContainer>
          <Stat>
            <Number color="var(--color-orange)" fontSize="6.4rem">
              31
            </Number>
            <Unit color="var(--color-white)" fontSize="2.4rem">
              COACHES
            </Unit>
          </Stat>
          <Stat>
            <Number color="var(--color-orange)" fontSize="6.4rem">
              25
            </Number>
            <Unit color="var(--color-white)" fontSize="2.4rem">
              GROUPS
            </Unit>
          </Stat>
        </OuterContainer>
      </SectionContainer>
    )
  }
  
  export default Stats
  