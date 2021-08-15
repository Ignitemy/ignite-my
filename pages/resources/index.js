import Layout from '../../components/Layout'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Resources from './_resources'
import Groupings from './_groupings'
// import Image from 'next/image'
// import Button from './_button'

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

// Add useEffect, if view groupings is clicked, render groupings. Allow user to click back to go into back to resources page.
const Documents = () => {
  const [isGroupings, setIsGroupings] = useState(false);

  const handleShowGroupings = () => {
    setIsGroupings(!isGroupings)
  };

  return (
    <Layout title="IGNITEMY2021 | Resources">
      <SectionContainer bgcolor="var(--color-black)">
        {
          isGroupings ? <Groupings onClick={handleShowGroupings} /> : <Resources onClick={handleShowGroupings} />
        }
      </SectionContainer>
    </Layout>
  )
}

export default Documents
