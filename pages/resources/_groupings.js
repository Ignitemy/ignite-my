import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: '#00000';
`

const Groupings = (props) => {
  return (
    <>
      <SectionContainer>
        <Image src="/images/png/groupings.png" width={335} height={45} />
      </SectionContainer>
    </>
  )
}

export default Groupings
