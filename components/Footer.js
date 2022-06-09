import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import InstaIcon from '../images/svg/insta'
import YoutubeIcon from '../images/svg/youtube'
import { Text } from '@/components/Typography'

const StyledYoutubeIcon = styled(YoutubeIcon)`
  @media (max-width: 900px) {
    height: 36px;
    width: 36px;
  }
`
const StyledInstaIcon = styled(InstaIcon)`
  @media (max-width: 900px) {
    height: 36px;
    width: 36px;
  }
`
const StyledImage = styled(Image)`
  @media (max-width: 768px) {
    height: 48px;
    width: 48px;
  }
`

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: var(--color-black);
  padding: 0 8rem;

  @media (max-width: 900px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    padding: 4rem 1.6rem;
  }
`
const FooterContents = styled.div`
  display: flex;
  height: 9rem;
  width: 100%;
  max-width: 140rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  a {
    margin: 0 1.6rem;

    @media (max-width: 768px) {
      margin: 0 0.8rem;
    }

    &:hover,
    &:focus {
      svg > path {
        fill: #ff9100;
        stroke: #ff9100;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1.6rem;
  }
`

const HashTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const FooterText = styled.div`
  color: var(--color-white);
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 3.8rem 0 1.6rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 1.6rem;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContents>
        <SocialWrapper>
          <StyledImage src="/images/png/blinks.png" height={60} width={60} alt="ignite logo" />
          <FooterText>Follow us to stay connected</FooterText>
          <a
            href="https://instagram.com/ignitemy______"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram"
          >
            <StyledInstaIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCgTtGiGKU43TWPu09a_nF5A"
            target="_blank"
            rel="noopener noreferrer"
            alt="Youtube"
          >
            <StyledYoutubeIcon />
          </a>
        </SocialWrapper>
        <HashTags>
          <Text size="1.8rem" color="white">
            IGNITEMY2022
          </Text>
          <Text size="1.8rem" color="white" ml="0.6rem">
            #dumcnxg
          </Text>
        </HashTags>
      </FooterContents>
    </StyledFooter>
  )
}

export default Footer
