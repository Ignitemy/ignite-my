import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import FbIcon from '../images/svg/fb'
import InstaIcon from '../images/svg/insta'
import YoutubeIcon from '../images/svg/youtube'

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  transition: text-shadow 0.25s;
  position: relative;
`

const StyledNav = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: none;
  }
`

const StyledFooter = styled.footer`
  /* width: 100%; */
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

  > svg:nth-child(2) {
    margin: 0 3.2rem;
  }
`

const FooterText = styled.div`
  color: var(--color-white);
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  margin-top: 2.2rem;
`

const Footer = () => (
  <StyledFooter>
    <StyledNav>
      <LeftWrapper>
        <ul>
          <li>
            <StyledLink href="/" as="a">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/yls" as="a">
              <>
                <WhiteSpan>IGNITE</WhiteSpan>
                <OrangeSpan>YLS</OrangeSpan>
              </>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/rally" as="a">
              <>
                <WhiteSpan>IGNITE</WhiteSpan>
                <OrangeSpan>RALLY</OrangeSpan>
              </>
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/blog" as="a">
              Blog
            </StyledLink>
          </li>
        </ul>
      </LeftWrapper>
    </StyledNav>
    <FooterContainer>
      <SocialWrapper>
        <FbIcon />
        <InstaIcon />
        <YoutubeIcon />
      </SocialWrapper>
      <FooterText>Follow us to stay connected</FooterText>
    </FooterContainer>
  </StyledFooter>
)

export default Footer
