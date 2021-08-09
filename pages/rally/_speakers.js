import React from 'react'
import styled from 'styled-components'
import { Heading } from '../../components'
import SpecialCard from './_special-card'

const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 0;
  position: relative;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const SpecialItemContainer = styled.div`
  width: 90%;
  max-width: 144rem;
  margin: 0 auto;
  margin-top: 3.4375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
const StyledHeading = styled(Heading)`
  border-top: 4px solid var(--color-black);
  border-bottom: 4px solid var(--color-black);
  width: auto;
  margin-bottom: 3.4375rem;
  @media (max-width: 900px) {
    font-size: 4.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3.2rem;
    letter-spacing: 4px;
  }
`

const Speakers = () => {
  return (
    <SectionContainer background="linear-gradient(90deg, #FF7519 0%, #4D4BC2 100%)">
      <Container>
        <SpecialItemContainer>
          <StyledHeading color="w" size="4.8rem" align="center" ls="8px">
            INTRODUCING
          </StyledHeading>
          <SpecialCard name="Sam Surendran" src="/images/jpg/sam.jpg">
            Pastor Sam has been in fulltime Christian ministry for 34 years, serving in youth, worship, BM and church pastoral leadership positions. He was a lecturer in Kolej Damansara Utama (Penang), a position which he held while pioneering Excel Point Community Church (EPCC). Starting the work in faith with only 3 members in 1997, EPCC has now grown to over 1600 members. Pastor Sam is a Bachelor of Science graduate from Southwestern Assemblies of God University (Texas) and he attained his Practical Theology Diploma and Advance Diploma in Christ For the Nations Institute (Dallas, Texas), USA. He also completed his Master of Arts in Pastoral Leadership Studies at Malaysia Baptist Theological Seminary (Penang). He authored a book entitled “Found in Christ” and has written 9 other Bible based Devotional books and two Discipleship Manuals. He is married to his wife of 28 years, Susie Tan, and they have two children, Jeremy Sean and Ashley May.
          </SpecialCard>
        </SpecialItemContainer>
      </Container>
    </SectionContainer>
  )
}

export default Speakers
