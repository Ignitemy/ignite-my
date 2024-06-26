import React, { useContext, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import Button from './Button'
import SideMenu from './SideMenu'
import { useAuth } from '../helpers/auth'
import FirebaseContext from '../context/firebase'
import ProfileIcon from '../images/svg/profile'
import router from 'next/router'
import { signOut } from 'firebase/auth'

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
`

const StyledExtLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
`

const RegisterButton = styled(Button)`
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 100;
  background-color: var(--color-black);
  padding: 0 8rem;

  @media (max-width: 1280px) {
    padding: 0 2rem;
  }

  @media (max-width: 992px) {
    padding: 0 4rem;
  }
  @media (max-width: 900px) {
    padding: 0 2rem;
  }
`
const StyledNav = styled.nav`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 140rem;
  display: flex;
  justify-content: space-between;
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
    margin-right: 6rem;
    position: relative;

    @media (max-width: 1050px) {
      margin-right: 4.8rem;
    }

    &::before {
      content: '';
      position: absolute;
      transition: width 0.25s;
      height: 0.2rem;
      width: 0;
      background-color: var(--color-orange);
      bottom: -4px;
    }
    &:hover {
      &::before {
        width: 1.6rem;
      }
    }
  }

  a {
    color: var(--color-white);
    font-size: 18px;
    text-decoration: none;
    transition: text-shadow 0.25s;
    position: relative;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const WhiteSpan = styled.span`
  color: var(--color-white);
`
const OrangeSpan = styled.span`
  color: var(--color-orange);
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledLogout = styled.button`
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 2.4rem;
`

const StyledProfile = styled.button`
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 2.4rem;
  position: relative;
`

const ProfileMenu = styled.div`
  width: 180px;
  padding: 1.6rem 2.4rem;
  background-color: #2d2d2d;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: absolute;
  z-index: 100;
  top: 72px;
  right: 0;

  a {
    color: var(--color-white);
    font-size: 16px;
    line-height: 2;
    text-decoration: none;
    transition: text-shadow 0.25s;
    position: relative;
    text-align: left;

    &:hover {
      color: var(--color-orange);
    }
  }
`

const Header = () => {
  const user = useAuth()
  const { auth } = useContext(FirebaseContext)
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => toggleMenu())

  return (
    <StyledHeader>
      <StyledNav>
        <LeftWrapper>
          <ul>
            <li>
              <StyledLink href="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink href="/yls">
                <WhiteSpan>IGNITE</WhiteSpan>
                <OrangeSpan>YLS</OrangeSpan>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/rally">
                <WhiteSpan>IGNITE</WhiteSpan>
                <OrangeSpan>RALLY</OrangeSpan>
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/blog">Blog</StyledLink>
            </li>
            {/* <li>
              <StyledLink href="/resources">Resource</StyledLink>
            </li> */}
            <li>
              <StyledLink href="/highlights">Highlights</StyledLink>
            </li>
          </ul>
        </LeftWrapper>
        <SideMenu />
        <RightWrapper>
          {!user ? (
            <>
              {/* <StyledLink href="/login">
                <Button white="true" style={{ marginRight: '2rem' }}>
                  Log In
                </Button>
              </StyledLink>
              <StyledLink href="/register">
                <RegisterButton orange="true">Register</RegisterButton>

              </StyledLink> */}

              <StyledExtLink
                href="https://bit.ly/IGNITEMY2024summit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RegisterButton orange="true">Register</RegisterButton>
              </StyledExtLink>


              {/* <StyledExtLink
                href="https://ignitemy.online.church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RegisterButton orange="true">Streaming Live</RegisterButton>
              </StyledExtLink> */}
            </>
          ) : (
            <>
              {/* <StyledLogout
                type="button"
                title="Sign Out"
                onClick={() => {
                  setTimeout(() => firebase.auth().signOut(), 500)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    setTimeout(() => firebase.auth().signOut(), 500)
                  }
                }}
              >
                <LogoutIcon />
              </StyledLogout> */}
              {/* <StyledExtLink
                href="https://ignitemy.online.church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RegisterButton orange="true">Streaming Live</RegisterButton>
              </StyledExtLink> */}
              <StyledProfile type="button" onClick={toggleMenu}>
                <ProfileIcon />
                {showMenu && (
                  <ProfileMenu ref={wrapperRef}>
                    <StyledLink href="/profile">My Profile</StyledLink>
                    <StyledLink
                      href="#"
                      onClick={() => {
                        setTimeout(() => {
                          // firebase.auth().signOut()
                          signOut(auth)
                          router.push('/')
                        }, 500)
                      }}
                    >
                      Log Out
                    </StyledLink>
                  </ProfileMenu>
                )}
              </StyledProfile>
            </>
          )}
        </RightWrapper>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
