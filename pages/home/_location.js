import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const SectionWrapper = styled.div`
  padding: 1rem 1rem;
`

export const _location = () => {
  return <SectionWrapper>
      <div>
          left section
      </div>
      <div>
          map iframe
      </div>
  </SectionWrapper>
}
