import { useState, useEffect } from 'react'
import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Heading, Text } from '@/components/Typography'
import Button from '@/components/Button'
import { useAuth } from '@/helpers/auth'

const data = [
  {
    group: 'Group 1',
    facilitator: 'Facilitator 1',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6', 'Member 7']
  },
  {
    group: 'Group 2',
    facilitator: 'Facilitator 2',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6', 'Member 7']
  },
  {
    group: 'Group 3',
    facilitator: 'Facilitator 3',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6']
  },
  {
    group: 'Group 4',
    facilitator: 'Facilitator 4',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4']
  },
  {
    group: 'Group 5',
    facilitator: 'Facilitator 5',
    members: ['Member 1', 'Member 2', 'Testing Acc', 'Member 4', 'Member 5', 'Member 6', 'Member 7']
  },
  {
    group: 'Group 6',
    facilitator: 'Facilitator 6',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6', 'Member 7']
  },
  {
    group: 'Group 7',
    facilitator: 'Facilitator 7',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5', 'Member 6', 'Member 7']
  }
]

const PageContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 12rem;
  width: 100%;

  @media (max-width: 799px) {
    flex-direction: column;
    padding: 4rem 1.6rem;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: 799px) {
    margin-top: 3.2rem;
  }
`

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(288px, 340px));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-template-rows: auto;
  justify-content: center;
  padding: 0 4rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: #2d2d2d;
  border-radius: 40px;
  padding: 2.4rem 1.2rem;

  ${Text}:not(:last-child) {
    margin-bottom: 1.8rem;
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 2rem;
`

const Groupings = () => {
  const [logged_in_user, setLoggedInUser] = useState('')
  const [show_grouping, setShowGrouping] = useState(false)
  const user = useAuth()

  useEffect(() => {
    setLoggedInUser(user?.displayName)
    console.log(user?.displayName)
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Groupings">
      <PageContainer>
        <HeaderContainer>
          <Image src="/images/png/groupings.png" width={335} height={45} />
          <StyledButton
            onClick={() => setShowGrouping(!show_grouping)}
            orange={show_grouping ? 'true' : null}
            white={!show_grouping ? 'true' : null}
          >
            {!show_grouping ? 'My Group' : 'All Groups'}
          </StyledButton>
        </HeaderContainer>
        <Container>
          {!show_grouping &&
            data.map((item) => (
              <Card key={item.group}>
                <CardHeader>
                  <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                    {item.group.toUpperCase()}
                  </Heading>
                  <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                    {item.facilitator}
                  </Heading>
                </CardHeader>
                {item.members.map((member) => (
                  <Text color="white" align="center">
                    {member}
                  </Text>
                ))}
              </Card>
            ))}
          {show_grouping &&
            data
              .filter((data_item) => data_item.members.includes(logged_in_user))
              .map((item) => (
                <Card key={item.group}>
                  <CardHeader>
                    <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                      {item.group.toUpperCase()}
                    </Heading>
                    <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                      {item.facilitator}
                    </Heading>
                  </CardHeader>
                  {item.members.map((member) => (
                    <Text color={member === logged_in_user ? 'orange' : 'white'} align="center">
                      {member}
                    </Text>
                  ))}
                </Card>
              ))}
        </Container>
      </PageContainer>
    </Layout>
  )
}

export default Groupings
