import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import KEY_CODES from '@/helpers/keycodes'
// import { useAuth } from '@/helpers/auth'
import useOnClickOutside from '@/hooks/useOnClickOutside'

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`

const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    cursor: pointer;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 8px;
    background-color: white;
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: white;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
      top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
          : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
    }
    &:after {
      width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
          : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    outline: 0;
    background-color: #111111;
    box-shadow: 10px 0px 30px 15px rgba(13, 7, 24, 0.7);
    z-index: 5;
    transform: translateX(${(props) => (props.menuOpen ? 0 : -100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: white;
    text-align: center;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(var(--text-size-sm), 4vw, var(--text-size-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }
  }
`

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    width: 100%;
  }
  li {
    margin-bottom: 4rem;
    position: relative;
    a {
      color: var(--color-white);
      font-size: 24px;
      text-decoration: none;
      transition: text-shadow 0.25s;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      &::before {
        content: '';
        position: absolute;
        transition: width 0.25s;
        height: 100%;
        left: 0;
        width: 0;
        background-color: orange;
        opacity: 0.4;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
`

const StyledLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  position: relative;
  width: 100%;
`

const WhiteSpan = styled.span`
  color: var(--color-white);
`
const OrangeSpan = styled.span`
  color: var(--color-orange);
`

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  // const user = useAuth()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const buttonRef = useRef(null)
  const navRef = useRef(null)

  let menuFocusables
  let firstFocusableEl
  let lastFocusableEl

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))]
    firstFocusableEl = menuFocusables[0]
    lastFocusableEl = menuFocusables[menuFocusables.length - 1]
  }

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault()
      lastFocusableEl.focus()
    }
  }

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault()
      firstFocusableEl.focus()
    }
  }

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false)
        break
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault()
          break
        }
        if (e.shiftKey) {
          handleBackwardTab(e)
        } else {
          handleForwardTab(e)
        }
        break
      }

      default: {
        break
      }
    }
  }

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 900) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    setFocusables()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    menuOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
  }, [menuOpen])

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <StyledNav ref={navRef}>
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
              {/* {user && (
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
              )} */}
            </ul>
          </StyledNav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  )
}

export default SideMenu
