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
    padding: 5rem 14rem;
  }

  @media screen and (min-width: 1750px) {
    padding: 7rem 24rem;
  }
`

const DetailWrapper = styled.details`
  padding: 2rem 0;
`

const StyledSummary = styled.summary`
  font-size: var(--text-size-s);
  color: var(--color-orange);
  line-height: 3rem;
  font-weight: 600;
  cursor:pointer;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  `


const AnswerWrapper = styled.p`
  font-size: var(--text-size-xs);
  color: var(--color-white);
  padding: 1rem 2.2rem;
  line-height: 3rem;
  text-align: justify;
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`


const DisclaimerTxt = styled.p`
  font-size: var(--text-size-s);
  color: var(--color-orange);
  line-height: 7rem;
  font-weight: 600;
  font-style:italic;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`


const Faq = () => {
  const faqList = [
    {
      question: 'Q: Who is IGNITEMY for?',
      answer: 'A: For all high school students who aspire to be a change in their schools!'
    },
    {
      question: 'Q: Can I still register after 29th August 2024?',
      answer:
        'A: Yes, of course! But you would not receive a summit kit (filled with goodies and IGNITEMY2024 booklet). So register now!'
    },
    {
      question: 'Q: I stay in Singapore. Can I attend IGNITEMY2024 in-person? ',
      answer:
        'A: Unfortunately, the option to attend in-person is only available to attendees from the Klang Valley. You can still join us online! We are excited to have you! :D'
    },
    {
      question: 'Q: What do I need to bring? ',
      answer:
        'A: First, bring the items from your summit kit! Second, bring water and lunch money! Last, yourself and your friends for the bazaar + rally on the next day! See you then!'
    },
    {
      question: 'Q: Are In-person seats limited?? ',
      answer:
        'A: Yes! Seats are limited, so register now to book your seat!'
    }
  ]
  return (
    <SectionWrapper>
      <HeadingShadow align="center">F.A.Q</HeadingShadow>
      {faqList.map((faq) => (
        <DetailWrapper key={faq.question}>
          <StyledSummary>{faq.question}</StyledSummary>
          <AnswerWrapper>{faq.answer}</AnswerWrapper>
        </DetailWrapper>
      ))}
      <DisclaimerTxt>IGNITEMY is a church event.</DisclaimerTxt>
    </SectionWrapper>
  )
}

export default Faq
