import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Heading } from '../../components/Typography'
import Link from 'next/link'

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`
const ModalCard = styled.div`
  position: relative;
  background-color: var(--color-black);
  border-radius: 20px;
  border: solid 2px var(--color-orange);
  padding: 8rem 16.4rem;
  z-index: 210;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 83rem;

  @media (max-width: 900px) {
    max-width: 68rem;
    padding: 6rem 8rem;
    width: 80%;
  }
  @media (max-width: 650px) {
    padding: 4rem 2rem 2rem;
  }
  @media (max-width: 425px) {
    width: 95%;
  }

  img {
    width: 100%;
    border-radius: var(--border-radius);
  }
`
const StyledModalHeader = styled.div`
  position: absolute;
  top: 2.8rem;
  right: 2.8rem;

  @media (max-width: 650px) {
    top: 1.2rem;
    right: 1.2rem;
  }

  span {
    color: var(--color-white);
    font-size: 2.4rem;
    text-decoration: none;
    cursor: pointer;
  }
`

const StyledHeading = styled(Heading)`
  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`
const StyledText = styled(Text)`
  @media (max-width: 650px) {
    font-size: 1.6rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`

const StyledLink = styled(Link)`
  color: var(--color-orange);
`

const RegistrationModal = ({ showModal, closeModal }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    setIsBrowser(true)
    document.addEventListener('keydown', handleEscape, false)

    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [])

  const ModalContent = showModal ? (
    <ModalWrapper onClick={closeModal}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <StyledModalHeader>
          <span onClick={closeModal}>x</span>
        </StyledModalHeader>
        <StyledText mb="2.4rem" color="white">
          For existing accounts. please <StyledLink href="/login" as="a">log in</StyledLink> to register and click on your <StyledLink href="/profile" as="a">Profile</StyledLink>{" "}
          to double check your details and confirm your registration for <StyledLink href="/" as="a">IGNITEMY2022</StyledLink>.
        </StyledText>
      </ModalCard>
    </ModalWrapper>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}

RegistrationModal.propTypes = {
  closeModal: PropTypes.func,
  showModal: PropTypes.bool.isRequired
}

export default RegistrationModal
