import React from 'react'
import PropTypes from 'prop-types'

const SuccessIcon = ({ className }) => (
  <svg
    className={className}
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 10.6665C34.56 10.6665 10.6666 34.5598 10.6666 63.9999C10.6666 93.4399 34.56 117.333 64 117.333C93.44 117.333 117.333 93.4399 117.333 63.9999C117.333 34.5598 93.44 10.6665 64 10.6665ZM64 106.667C40.48 106.667 21.3333 87.5199 21.3333 63.9999C21.3333 40.4798 40.48 21.3332 64 21.3332C87.52 21.3332 106.667 40.4798 106.667 63.9999C106.667 87.5199 87.52 106.667 64 106.667ZM88.48 40.4265L53.3333 75.5732L39.52 61.8132L32 69.3332L53.3333 90.6665L96 47.9998L88.48 40.4265Z"
      fill="#FF6600"
    />
  </svg>
)

export default SuccessIcon

SuccessIcon.propTypes = {
  className: PropTypes.string
}
