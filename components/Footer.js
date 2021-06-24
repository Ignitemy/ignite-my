import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import InstaIcon from '../images/svg/insta'
import YoutubeIcon from '../images/svg/youtube'
import { useAuth } from '@/helpers/auth'

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

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  transition: text-shadow 0.25s;
  position: relative;
`

const StyledNav = styled.div`
  position: relative;
  width: 100%;
  max-width: 140rem;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: none;
  }
`

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
  background-color: var(--color-black);
  padding: 0 8rem;

  @media (max-width: 900px) {
    height: 200px;
  }
`
const FooterContainer = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  max-width: 140rem;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid var(--color-white);

  @media (max-width: 900px) {
    border-top: none;
  }
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    margin-right: 6.6rem;
    position: relative;
  }

  a {
    color: var(--color-white);
    font-size: 18px;
    text-decoration: none;
    transition: text-shadow 0.25s;
    position: relative;
  }
`

const WhiteSpan = styled.span`
  color: var(--color-white);
`
const OrangeSpan = styled.span`
  color: var(--color-orange);
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;

  a {
    margin: 0 1.6rem;

    &:hover,
    &:focus {
      svg > path {
        fill: #ff9100;
        stroke: #ff9100;
      }
    }
  }
`

const FooterText = styled.div`
  color: var(--color-white);
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  margin-top: 2.2rem;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`

const Footer = () => {
  const user = useAuth()
  return (
    <StyledFooter>
      <StyledNav>
        <LeftWrapper>
          <ul>
            <li>
              <StyledLink href="/">
                <a>Home</a>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/yls">
                <a>
                  <WhiteSpan>IGNITE</WhiteSpan>
                  <OrangeSpan>YLS</OrangeSpan>
                </a>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/rally">
                <a>
                  <WhiteSpan>IGNITE</WhiteSpan>
                  <OrangeSpan>RALLY</OrangeSpan>
                </a>
              </StyledLink>
            </li>
            {user && (
              <>
                <li>
                  <StyledLink href="/blog">
                    <a>Blog</a>
                  </StyledLink>
                </li>
                <li>
                  <StyledLink href="/documents">
                    <a>Documents</a>
                  </StyledLink>
                </li>
              </>
            )}
          </ul>
        </LeftWrapper>
      </StyledNav>
      <FooterContainer>
        <SocialWrapper>
          <a href="https://instagram.com/ignitemy______" target="_blank">
            <StyledInstaIcon />
          </a>
          <a href="https://youtube.com" target="_blank">
            <StyledYoutubeIcon />
          </a>
        </SocialWrapper>
        <FooterText>Follow us to stay connected</FooterText>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
