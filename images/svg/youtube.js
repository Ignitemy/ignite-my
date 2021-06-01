import React from 'react'
import PropTypes from 'prop-types'

const YoutubeIcon = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 0C10.7675 0 6.10352e-05 10.7651 6.10352e-05 24C6.10352e-05 37.2349 10.7675 48 24 48C37.2326 48 48 37.2349 48 24C48 10.7651 37.2326 0 24 0ZM24 46.4014C11.6491 46.4014 1.60156 36.3518 1.60156 24C1.60156 11.6482 11.6491 1.5986 24 1.5986C36.351 1.5986 46.3985 11.6482 46.3985 24C46.3985 36.3518 36.351 46.4014 24 46.4014Z"
      fill="#FF6600"
    />
    <path d="M19 16V32V16Z" fill="#FF6600" />
    <path
      d="M19 16V32"
      stroke="#FF6600"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M33 24L19 32L33 24Z" fill="#FF6600" />
    <path
      d="M33 24L19 32"
      stroke="#FF6600"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M33 24L19 16L33 24Z" fill="#FF6600" />
    <path
      d="M33 24L19 16"
      stroke="#FF6600"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default YoutubeIcon

YoutubeIcon.propTypes = {
  className: PropTypes.string
}
