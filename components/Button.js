import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border-radius: 10px;
  display: inline-block;
  position: relative;
  font-size: 18px;
  line-height: 1.35;
  padding: 1rem 4.5rem;
  text-transform: capitalize;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.8s;
  border-color: ${(props) => (props.black ? 'var(--color-black)' : 'var(--color-orange)')};
  background-color: ${(props) => {
    if (props.orange) return 'var(--color-orange)'
    if (props.white) return 'transparent'
    if (props.black) return 'var(--color-black)'
    return 'var(--color-orange)'
  }};
  color: ${(props) => {
    if (props.orange) return 'var(--color-white)'
    if (props.white) return 'var(--color-orange)'
    if (props.black) return 'var(--color-white)'
    return 'var(--color-orange)'
  }};
  &:hover {
    background-color: ${(props) => {
      if (props.orange) return '#ff9100'
      if (props.white) return 'var(--color-orange)'
      if (props.black) return '#262626'
      return '#ff9100'
    }};
    color: ${(props) => {
      if (props.orange) return 'var(--color-white)'
      if (props.white) return 'var(--color-white)'
      if (props.black) return 'var(--color-white)'
      return 'var(--color-orange)'
    }};
  }
  &:active {
    transform: scale(0.95);
    background-color: #ff9999;
    background-size: 100%;
    transition: background-color 0s;
  }
`

const Button = (props) => (
  <StyledButton onClick={props.onClick} {...props}>
    {props.children}
  </StyledButton>
)

export default Button

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
