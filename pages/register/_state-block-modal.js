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

const StateModal = ({ showStateModal, closeModal }) => {
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

  const ModalContent = showStateModal ? (
    <ModalWrapper onClick={closeModal}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <StyledModalHeader>
          <span onClick={closeModal}>x</span>
        </StyledModalHeader>
        <StyledHeading size="2.4rem" mb="2rem" color="orange">
          Error:
        </StyledHeading>
        <StyledText mb="2.4rem" color="white">
            You are only allowed to atttend physically if you are 
            from Kuala Lumpur, Selangor and Putrajaya. For participants
            who wished to attend physically but are not from the states
            mentioned, kindly email to&nbsp;
            <a style={{color: "var(--color-orange)"}} href="mailto:hello.ignitemy@gmail.com">hello.ignitemygmail.com</a>
            &nbsp;for further enquiries.
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

StateModal.propTypes = {
  closeModal: PropTypes.func,
  showStateModal: PropTypes.bool.isRequired
}

export default StateModal
