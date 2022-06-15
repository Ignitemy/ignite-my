import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '@/components/index'
import { Field } from 'formik'

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0;
`

const ActiveOccupationWrapper = styled.div`
  display: flex;
  width: calc(50% - 9px);
  /* margin-right: 2rem; */

  label {
    width: 100%;
    border: ${({ isActive }) =>
    isActive ? '1px solid var(--color-orange)' : '1px solid var(--color-black)'};
    background-color: ${({ isActive }) =>
    isActive ? 'var(--color-orange)' : 'var(--color-white)'};
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    border-radius: 6px;
    padding: 1.8rem 6.6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

    input {
      display: none;
    }

    ${Text} {
      color: ${({ isActive }) => (isActive ? 'var(--color-white)' : 'var(--color-black)')};
    }
    @media (max-width: 1120px) {
      padding: 1.8rem 4rem;
    }
    @media (max-width: 480px) {
      width: 100%;
      margin-right: 0;
    }
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }
`

const OccupationWrapper = styled.div`
  display: flex;
  width: calc(50% - 9px);

  label {
    width: 100%;
    border: ${({ isActive }) =>
    isActive ? '1px solid var(--color-black)' : '1px solid var(--color-orange)'};
    background-color: ${({ isActive }) =>
    isActive ? 'var(--color-white)' : 'var(--color-orange)'};
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    border-radius: 6px;
    padding: 1.8rem 6.4rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

    input {
      display: none;
    }

    ${Text} {
      color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-white)')};
    }

    @media (max-width: 1120px) {
      padding: 1.8rem 4rem;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`

const RadioButton = ({ question, options, name, disabled }) => {
  const [isActive, setActive] = useState(true)
  return (
    <div>
      <Text color="white">{question}</Text>
      <TabWrapper>
        <ActiveOccupationWrapper isActive={isActive} onClick={() => !disabled && setActive(true)} disabled={disabled}>
          <label>
            <Field type="radio" name={name} value={options.firstOption.value} disabled={disabled} />
            <Text>{options.firstOption.label}</Text>
          </label>
        </ActiveOccupationWrapper>
        <OccupationWrapper isActive={isActive} onClick={() => !disabled && setActive(false)} disabled={disabled}>
          <label>
            <Field type="radio" name={name} value={options.secondOption.value} disabled={disabled} />
            <Text>{options.secondOption.label}</Text>
          </label>
        </OccupationWrapper>
      </TabWrapper>
    </div>
  )
}

RadioButton.prototype = {
  question: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default RadioButton
