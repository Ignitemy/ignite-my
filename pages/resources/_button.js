import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border-radius: 10px;
  width: 38rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 14px;
  font-weight: bold;
  padding: 3.75rem 1.75rem;
  text-transform: capitalize;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.8s;
  border-color: var(--color-black);
  background-image: ${(props) => {
    return props.bgcolor
  }};
  &:active {
    transform: scale(0.95);
    background-color: #ff9999;
    background-size: 100%;
    transition: background-color 0s;
  }

  ${(props) => {
    if (props.disabled)
      return css`
        pointer-events: none;
        opacity: 0.32;
      `
    if (props.loading)
      return css`
        width: 8rem;
        height: 8rem;
        border: 10 px solid var(--color-black);
        border-radius: 50%;
        animation: sweep 1s linear alternate infinite, rotates 0.8s linear infinite;
      `
  }}
`

const Button = React.forwardRef((props, ref) => {
  return(
    <StyledButton onClick={props.onClick} {...props}>
      {props.children}
    </StyledButton>
  )
})

export default Button

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
