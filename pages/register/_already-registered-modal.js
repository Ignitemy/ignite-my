import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Heading } from '../../components/Typography'
import Button from '@/components/Button'
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
  padding: 8rem 12rem;
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

const Modal = ({ alreadyRegistered }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const ModalContent = alreadyRegistered ? (
    <ModalWrapper>
      <ModalCard>
        <StyledHeading size="2.4rem" mb="2rem" color="orange">
          This account has already been registered.
        </StyledHeading>
        <StyledText mb="4rem" color="white">
          For existing accounts. please log in and click on your Profile to double check your details and
          confirm your registration for IGNITEMY2024.
        </StyledText>
        <Link href="/login">
          <Button orange="true">Log in</Button>
        </Link>
      </ModalCard>
    </ModalWrapper>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root'))
  } else {
    return null
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  showModal: PropTypes.bool.isRequired
}

export default Modal
