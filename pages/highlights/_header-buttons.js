import Button from '../resources/_button'
import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '../../components'
import VideoIcon from '../../images/svg/video-icon'
import PeopleIcon from '../../images/svg/people-icon'
import DownloadIcon from '../../images/svg/download-icon'
import LinkIcon from '../../images/svg/link-icon'

const ImageContainer = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const OuterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const ButtonContainer = styled.a`
padding-top: 1rem;
padding-bottom: 1rem;
padding-left: 1rem;
padding-right: 1rem;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 650px) {
  width:100%;
}
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderButtons = (props) => {
  return (
    <>
      <ImageContainer>
        <Image
          src="/images/png/ignite-logo.png"
          alt="Ignite logo"
          height={59}
          width={383}
          priority="true"
        />
      </ImageContainer>
      <Row>
        <Text size="1.6rem" color="white" mb="2rem">
          YEAR 2021
        </Text>
      </Row>
      <OuterContainer>
        <ButtonContainer target="_blank" href="https://drive.google.com/file/d/1dKJrsWLLrgFKIGc8cjkMs_EzsmTspz5I/view?usp=sharing" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button bgcolor='linear-gradient(90deg, #FC6176 0%, #FFFFFF 100%);'>
            IGNITE2021 Participant's Booklet PDF
            <DownloadIcon />
          </Button>
        </ButtonContainer>
        <ButtonContainer target="_blank" href="https://heyzine.com/flip-book/8dddaaca3f.html#page/1" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button bgcolor='linear-gradient(90deg, #C163E2 0%, #FFFFFF 100%);'>
            IGNITEMY2021 Participant's Booklet Link
            <LinkIcon />
          </Button>
        </ButtonContainer>
      </OuterContainer>
      <OuterContainer>
        <ButtonContainer target="_blank" href="https://drive.google.com/file/d/1_9zD-ErDOwcIcGqewq_6rbgHe-rk2pYr/view?usp=sharing" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button bgcolor='linear-gradient(90deg, #545DDE 0%, #FFFFFF 100%);' onClick={props.handleZoomBackgrounds}>
            IGNITEMY2021 Zoom Background
            <VideoIcon />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Link href="/resources/groupings">
            <Button bgcolor='linear-gradient(90deg, #FF6600 0%, #FFFFFF 100%);'>
              View IGNITEMY2021 Groupings
              <PeopleIcon />
            </Button>
          </Link>
        </ButtonContainer>
      </OuterContainer>
    </>
  )
}

export default HeaderButtons
