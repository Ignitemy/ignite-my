import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Heading } from '../../components/Typography'

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
    padding: 4rem;
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
  a {
    color: var(--color-white);
    font-size: 2.4rem;
    text-decoration: none;
  }
`

const Modal = ({ show, closeModal }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false)

    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [])

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const ModalContent = show ? (
    <ModalWrapper onClick={closeModal}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <StyledModalHeader>
          <a href="#" onClick={closeModal}>
            x
          </a>
        </StyledModalHeader>
        <Heading size="2.4rem" mb="2rem" color="orange">
          If you are below 18, your parent/guardian must be informed of the following:
        </Heading>
        <Text mb="2.4rem" color="white">
          1. That the participant is attending an online hybrid event hosted by DUMC NextGen and
          Scripture Union Peninsular Malaysia
          <br />
          <br />
          2. DUMC NextGen and Scripture Union Peninsular Malaysia will take every precaution to
          protect their son/daughter/ward from any online dangers.
          <br />
          <br />
          3. For the smooth running of the online event, the participant will adhere to any and all
          the rules and instructions.
          <br />
          <br />
          4. The parent/guardian understands that if the participants fails to adhere to the rules
          and instructions set, he/she would be denied participantion in the online hybrid event
        </Text>
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
  show: PropTypes.bool.isRequired
}

export default Modal
