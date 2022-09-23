import { useState, useEffect } from 'react'
import styled from 'styled-components'
import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Heading, Text } from '@/components/Typography'
import Button from '@/components/Button'
import { useAuth } from '@/helpers/auth'
import { HeadingShadow } from '../../../components'


const data_physical = [
  {
    group: 'Group 1',
    facilitators: ['Ngui Xin Ru'],
    members: [
      'Rachel Chew Jing Ern ( CN )',
      'Adrisa Ng Ching Ai ',
      'Jocelyn Wee Jing Huei CN-ZYT',
      'Steffi Wong Lin Qin CN-ZYT ',
      'BERNICE CHOO LOKYEE',
      'Jason Ting Chang Shen CN',
      'Sophia Cheong Zi Qi',
      'Wong Guan Xuan ',
      'Shannen Teoh Yun Mei',
      'Sean Sia En Hao '
    ]
  },
  {
    group: 'Group 2',
    facilitators: ['Ng Yin Lun (CN)'],
    members: [
      'Chloe Ling Yen Ee',
      'LEE VIN YING',
      'LEE ZHI HONG',
      'Lee Zhi Yen',
      'NGAI JESSYE',
      'Ng Jing Hwei',
      '',
      '',
      '',
      ''
    ]
  },
  {
    group: 'Group 3',
    facilitators: ['Aisen Oh Joo Ee', 'Benison Wong Yu Cheng'],
    members: [
      'Esther Ho Xing En',
      'Eviana Wong Yee Ern',
      'Hailey Wong Zoe Ern',
      'KEONI LEE SHENG YAO',
      'LEE JI HYM',
      'LEE JOLEEN',
      'YAP JIA WERN',
      'ZECHARIAH LOW YONG-ERN'
    ]
  },
  {
    group: 'Group 4',
    facilitators: ['Chew Yi Hong'],
    members: [
      'ANG ERN HUI ASHLYNN',
      'Gabriel Wong Bak Sheng',
      'Kyshennaath Shanmugam ',
      'Lim Zhi Qing',
      'Matthew Poh Wayne Loon',
      'Nicky Ng',
      'SEE YI ZHE',
      'SII JIA MEEI',
      'Tan Wei Ming',
      'Wong Jia Hui'
    ]
  },
  {
    group: 'Group 5',
    facilitators: ['Lim Yi Fen'],
    members: [
      'CALIXTA ELYSE YOW WEN',
      'Ethan Eng Yeung Zjung',
      'Gabriel Tan Jia Le ',
      'Hope Tan Mae Lyn',
      'Isaac Leong Hans Yoong',
      'Jade Ooi Shen Min ',
      'Kristen Chua Li Yen ',
      'Ng Shan-Zi',
      'Teoh Kye Xen',
      'Josh Chua Jien Wei'
    ]
  },
  {
    group: 'Group 6',
    facilitators: ['Teoh Enxi', 'Jonathan Chin Yee'],
    members: [
      'Elizabeth Tsan Ern Huey',
      'Jaden Lee Zhen Hao',
      'JOSEPH TAN YUNG WEI',
      'Joy-Anne Tan Soong Hwei ',
      'Julia Lau YiJen',
      'Louise Leong Li Ling ',
      'Lydia Woon Ee Jean',
      'Naiomi Chee Rui En',
      'Tan Kate-Lynn ',
      'Thasyica Janardhan ',
      'Toh Weng Jheng ',
      'VANESSA TSAN ERN MEI'
    ]
  },
  {
    group: 'Group 7',
    facilitators: ['Ong Hun Lee'],
    members: [
      'Chong Ray Shuen',
      'Christine Chen',
      'Khu Poh Sim',
      'Lee Shin Ying',
      'Ling Wan Xin Kristen',
      'Ong Tsu Yit ',
      'Ong Wei Xuan'
    ]
  },
  {
    group: 'Group 8',
    facilitators: ['Gan Rong Sheng '],
    members: [
      'Herald Hwa De Yi',
      'Hon Janson',
      'Low Han Wen',
      'Low Jun Wei',
      'Samuel Chong Teng Wai',
      'shana soon yin',
      'Shum Xian You'
    ]
  },
  {
    group: 'Group 9',
    facilitators: ['Anna Lam Li Szer', 'David Teoh Qi-En'],
    members: [
      'Ang Ern Yi Angelynn',
      'Enid Kang Yin Qian',
      'GRACE KOK EI WEN',
      'John Ng Ye Hann',
      'Vanessa Lim Hai Eng ',
      'JAMIE ALLYSON TAN I-LING',
      'Ethan Chong Tze Wei ',
      'Ivana Yap Hong Ler'
    ]
  },
  {
    group: 'Group 10',
    facilitators: ['Darren Gill'],
    members: [
      'Eve Ling Hsern Ai',
      'Faith Wei Ann Snyder',
      'Jonadab Tan Tze Ming',
      'Joy Ling Hsern Zhi',
      'Joy Natasha',
      'Ronak Pherwani',
      'DANIEL LIM WEN HUI',
      'Eunice Lim Shuen Hui',
      'Evan Lim Shuen Yong',
      'Hannah Chan Jia En',
      'Jovin Wong Wui Yang'
    ]
  },
  {
    group: 'Group 11',
    facilitators: ['Leong Zhi-Xin'],
    members: [
      'Alexa Tornini Hong',
      'Max Lim Ern Yao',
      'Gabriel Wong Tim Lok',
      'Joshua Wong Tim Wei',
      'Marjorie Ella',
      'Vanessa Yap',
      'Alynna Lim Jia Yin',
      'Jeanelle Mah Ren Ee',
      'Jeremy Tan Chun Xian'
    ]
  },
  {
    group: 'Group 12',
    facilitators: ['Gan Jia Yi'],
    members: [
      'Carlson Maheshon Victor',
      'Kwan ren zhe',
      'chieng zhiyi',
      'Ashlynn Ann Su Chern',
      'Kylie Low ',
      'Nathanael Ang Yi Xin',
      'Daniel Foo Shen Aun'
    ]
  },
  {
    group: 'Group 13',
    facilitators: ['Samantha Ng heng ling '],
    members: [
      'Isaac Lim Wei Zhong ',
      'Karyn Ling Defen ',
      'Marissa Ling Deying',
      'Olivia ng ',
      'Abigail Tan',
      'Janae Lee Jia En',
      'Leann Chong Wen Yen ',
      'Robin Wong Kung Shan',
      'Shania Wong Ee En',
      'Ashton Beh Sheng en'
    ]
  },
  {
    group: 'Group 14',
    facilitators: ['Bernice Boey'],
    members: [
      'Ahn Yu Eun',
      'Justin Chen ',
      'Yap Jia Hui',
      'Carmen Ng',
      'Megan chang Jia Yuen',
      'Eleora Teoh Tze Qian',
      'Hannah Faith Liau Mae Tze',
      'Adrian Foo Jun Ho ',
      'Christopher Cheah Shuan Loomg'
    ]
  },
  {
    group: 'Group 15',
    facilitators: ['Loke Yun Kit', 'Marianne Liaw Sook Huei'],
    members: [
      'Steven Duh Ceu Lian',
      'Zing Dawt Thai ',
      'Bernis Kam Xue Ying',
      'John Kam Chee Qian',
      'SAMUEL RUDY',
      'Nehemika Amarina',
      'ANITA MARY ',
      'Carmen Chong ',
      'Dora Ling Wei En',
      'Wong Zhi Yang',
      'Nicholas Amariah '
    ]
  },
  {
    group: 'Group 16',
    facilitators: ['Felix Foo'],
    members: [
      'Julianne Rheshara',
      'MOK YEN QIN',
      'Melissa Foong Yuin Mern',
      'Chloe Teh Zi Ern',
      'Cristian Barbulescu',
      'Matthew Roshan Neelagandan',
      'Low Kai En, Iris',
      'Rowena Jeyamani Jeremiah ',
      'Elisa Beh Hui En'
    ]
  },
  {
    group: 'Group 17',
    facilitators: ['Nicholas Cheah Yuan Zhong '],
    members: [
      'Nicholas Cheah Yuan Zhong ',
      'CHOO YUNG WEI',
      'Matthew Lim Ern Xi',
      'Benjamin Chong Rong En ',
      'Justin Ho Jun Jie',
      'Choo Yang Wei',
      'Isaac Rahuldev Neelagandan',
      'CHU WEI MING',
      'Garynaath Shanmugam ',
      'Long Li Herrn Nigerl'
    ]
  },
  {
    group: 'Group 18',
    facilitators: ['Bernice Chee Wai Yee'],
    members: [
      'Abel Chow Poa Ern ',
      'Augustine Lu Jinn Meng',
      'Clarisse Lee Ern Ning ',
      'Constantine Kong Zhong You',
      'Hooi Ker Nee',
      'Keith Gan Wei Kit',
      'Kellie Teh Huey Ern',
      'Rachel Lee Zhi Xian '
    ]
  }
]
const data_online = [
  {
    group: 'Group B',
    facilitators: ['Joel Wong Wui Ern'],
    members: [
      'Zen Teh ',
      'Chai Kee Fong',
      'Dheeban Kumar Saravana Kumar ',
      'Emerson Ng',
      'Emma Lee Jia Ying ',
      'Gao Dan Dan ',
      'How Jia Xin',
      'Jeevika Isabel Johnson ',
      'Jing Ze',
      'Josiah Yeoh Tsung Ern',
      'Justin Tang Jia Zw',
      'Leanna Tsen May Hwa',
      'Lee En',
      'Lim Yi Ping',
      'Morven Anak Mundi',
      'Nor Izz Rayyan Bin Norazli ',
      'PAULUS LEE XING RONG',
      'Rachael Loh Rui Qi',
      'Sherlyn Liong',
      'Shia Jia Tong',
      'Sofie Zaidi',
      'Tan Chun Hee',
      'Tasha Ting',
      'Tey Hui Fung',
      'Xavier Chen Zhi Yuan',
      'Yu Huan ',
      'Zuleskandar Bin Rosli'
    ]
  },
  {
    group: 'Group C',
    facilitators: ['Tan Li Ann'],
    members: [
      'Leong Deng Fu',
      'Regina Yeo Man Xin',
      'Lee Ai Lin ',
      'Nikeisha Ariaretnam'
    ]
  },
  {
    group: 'Group D',
    facilitators: ['Owen Woo Tsen Wen'],
    members: [
      'Annabelle Tong Xin Yue',
      'Sofee Tieh',
      'Lydia Mah Xin yue',
      'Nicholas Woo',
      'Lee Jie Sheng',
      'Justyn Tan Kai Jie',
      'TAN YONG HAN '
    ]
  },
  {
    group: 'Group E',
    facilitators: ['Choo Shern Wei', 'Emily Foo Ai Mei '],
    members: [
      'Shannon Loong Jean Ann ',
      'Pua How Keat ',
      'Jeanette Phang Shin Roe',
      'John Shiu Moon Tim ',
      'SHAVONNE LEE JIE ERN',
      'Wong Wei Wen',
      'Shawn Tiew Sheng En'
    ]
  },
  {
    group: 'Group F',
    facilitators: ['Cordelia Kong Ju Ai', 'Niklas Choo Yong Shih'],
    members: [
      'Eaden Kapono Lim Fang Rong',
      'Alaynn Hoe wen xia ',
      'Jessey Soo',
      'JONATHAN TOO KIM GHEE',
      'Teh Yen Hong',
      'Daniel Rudy',
      'Isaac Lai Jie Hin ',
      'Viveken Krishnan',
      'Micah Andrew Lim Jia Jun'
    ]
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
  text-transform: capitalize;
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
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Groupings">
      <PageContainer>
        <HeaderContainer>
          <HeadingShadow>Groupings</HeadingShadow>
          {/* <Image src="/images/png/groupings.png" width={335} height={45} /> */}
          <StyledButton
            onClick={() => setShowGrouping(!show_grouping)}
            orange={show_grouping ? 'true' : null}
            white={!show_grouping ? 'true' : null}
          >
            {!show_grouping ? 'My Group' : 'All Groups'}
          </StyledButton>
        </HeaderContainer>
        <HeadingShadow size="3.6rem" mb="3.6rem">In-Person</HeadingShadow>
        <Container>
          {!show_grouping &&
            data_physical.map((item) => (
              <Card key={item.group}>
                <CardHeader>
                  <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                    {item.group.toUpperCase()}
                  </Heading>
                </CardHeader>
                {item.facilitators.map((facilitator) => (
                  <Text color="white" align="center" size="14px">
                    {facilitator.toLowerCase()} [C]
                  </Text>
                ))}
                {item.members.map((member) => (
                  <Text color="white" align="center" size="14px">
                    {member.toLowerCase()}
                  </Text>
                ))}
              </Card>
            ))}
          {show_grouping &&
            data_physical
              .filter((data_item) => data_item.members.includes(logged_in_user))
              .map((item) => (
                <Card key={item.group}>
                  <CardHeader>
                    <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="20px">
                      {item.group.toUpperCase()}
                    </Heading>
                  </CardHeader>
                  {item.facilitators.map((facilitator) => (
                    <Text color="white" align="center" size="14px">
                      {facilitator.toLowerCase()} [C]
                    </Text>
                  ))}
                  {item.members.map((member) => (
                    <Text
                      color={member === logged_in_user ? 'orange' : 'white'}
                      align="center"
                      size="14px"
                    >
                      {member.toLowerCase()}
                    </Text>
                  ))}
                </Card>
              ))}
        </Container>
        <HeadingShadow size="3.6rem" mt="4.4rem" mb="3.6rem">Online</HeadingShadow>
        <Container>
          {!show_grouping &&
            data_online.map((item) => (
              <Card key={item.group}>
                <CardHeader>
                  <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="18px">
                    {item.group.toUpperCase()}
                  </Heading>
                </CardHeader>
                {item.facilitators.map((facilitator) => (
                  <Text color="white" align="center" size="14px">
                    {facilitator.toLowerCase()} [C]
                  </Text>
                ))}
                {item.members.map((member) => (
                  <Text color="white" align="center" size="14px">
                    {member.toLowerCase()}
                  </Text>
                ))}
              </Card>
            ))}
          {show_grouping &&
            data_online
              .filter((data_item) => data_item.members.includes(logged_in_user))
              .map((item) => (
                <Card key={item.group}>
                  <CardHeader>
                    <Heading width="auto" color="orange" fstyle="italic" ls="1px" size="20px">
                      {item.group.toUpperCase()}
                    </Heading>
                  </CardHeader>
                  {item.facilitators.map((facilitator) => (
                    <Text color="white" align="center" size="14px">
                      {facilitator.toLowerCase()} [C]
                    </Text>
                  ))}
                  {item.members.map((member) => (
                    <Text
                      color={member === logged_in_user ? 'orange' : 'white'}
                      align="center"
                      size="14px"
                    >
                      {member.toLowerCase()}
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
