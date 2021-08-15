import Button from './_button'
import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'

const ImageContainer = styled.div`
  padding-top: 5.8rem;
  padding-bottom: 5.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Resources = (props) => {
  return (
    <>
      <ImageContainer>
        <Image src="/images/png/resources-for-you.png" width={268} height={65} />
      </ImageContainer>
      <ButtonContainer>
        <Button orange="true" onClick={props.onClick}>
          IGNITE2021 Participant's Booklet
          <Image src="/images/png/download-icon.png" width={24} height={24} />
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button blue="true">
          View groupings
          <Image src="/images/png/groupings-icon.png" width={24} height={24} />
        </Button>
      </ButtonContainer>
    </>
  )
}

export default Resources
