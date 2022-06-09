import React from 'react'
import styled from 'styled-components'
import {HeadingShadow } from '../../components'

const SectionWrapper = styled.div`
  padding: 5rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 5rem 5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 5rem 8rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 5rem 11rem;
  }

  @media screen and (min-width: 1750px) {
    padding: 7rem 24rem;
  }
`

// const HeaderWrapper = styled.img`
//   width: 159px;
//   height: auto;
//   padding-bottom: 2rem;
// `

const DetailWrapper = styled.details`
  padding: 2rem 0;
`

const StyledSummary = styled.summary`
  font-size: 16px;
  color: var(--color-orange);
  line-height: 35px;
  font-weight: 600;
  cursor:pointer;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 40px;
  }
`


const AnswerWrapper = styled.p`
  font-size: 16px;
  color: var(--color-white);
  padding: 0.5rem 0;
  line-height: 35px;
  text-align: justify;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 40px;
  }
`

const Faq = () => {
  const faqList = [
    {
      question: 'Q: Lorem ipsum dolor sit amet, consectetur adipiscing eli1',
      answer: 'A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet.'
    },
    {
      question: 'Q: Lorem ipsum dolor sit amet, consectetur adipiscing eli2',
      answer:
        'A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet.'
    },
    {
      question: 'Q: Lorem ipsum dolor sit amet, consectetur adipiscing eli3',
      answer:
        'A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Faucibus nisl tincidunt eget nullam non nisi est sit amet.'
    }
  ]
  return (
    <SectionWrapper>
      <HeadingShadow>F.A.Q</HeadingShadow>
      {/* <HeaderWrapper src="/images/png/faq.png" alt="faq" loading="lazy" /> */}
      {faqList.map((faq) => (
        <DetailWrapper key={faq.question}>
          <StyledSummary>{faq.question}</StyledSummary>
          <AnswerWrapper>{faq.answer}</AnswerWrapper>
        </DetailWrapper>
      ))}
    </SectionWrapper>
  )
}

export default Faq
