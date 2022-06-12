import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, HeadingShadow } from '../../components/Typography'
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
  padding: 6rem 8rem;
  z-index: 210;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  max-width: 78rem;

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

const SubheaderWrapper = styled.p`
  color: var(--color-white);
  font-size: 3rem;
  font-weight: 800;
  font-style: italic;
  margin-bottom: 1.5rem;
`

const StyledText = styled(Text)`
  font-size: var(--text-size-xs);
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
          <HeadingShadow size="2rem" mb="2.4rem">For existing accounts</HeadingShadow>
          Please <StyledLink href="/login" as="a">log in</StyledLink> to confirm your registration for IGNITEMY2022.
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
