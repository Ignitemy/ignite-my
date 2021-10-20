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
    facilitators: ['Aisen Oh Joo Ee', 'Leong Zhi-Xin'],
    members: [
      'Chan El Lyn',
      'Gabriel Wong Bak Sheng',
      'Hailey Wong Zoe Ern',
      'Jonathan Teoh Ming Ern ',
      'KEONI LEE SHENG YAO',
      'LEE JI HYM',
      'LEE JOLEEN',
      'Lim Tao',
      'Wong Jia Hui'
    ]
  },
  {
    group: 'Group 2',
    facilitators: ['Benjamin Choy Chuen Yi', 'Joyce Sow Wei Ching'],
    members: [
      'Benison Wong Yu Cheng',
      'Chloe Ling Yen Ee',
      'Elizabeth Tan Li Hwa',
      'Eviana Wong Yee Ern',
      'Hayden Wong Zoe Herng',
      'Kuan Yu Sheng',
      'Phoebe Teoh Ern Wei',
      'Wong Hui Lin'
    ]
  },
  {
    group: 'Group 3',
    facilitators: ['Choo Shern Wei'],
    members: [
      'Christine Chen',
      'Eleanor Inn Rei Shuen',
      'Elijah Inn Tsin Tsern',
      'John Chen Siong Wai',
      'Samuel Chong Teng Wai',
      'shana soon yin',
      'Thang Wan Er',
      'Ti Jia Xi',
      'Wong Mu Jie'
    ]
  },
  {
    group: 'Group 4',
    facilitators: ['Anantha Krishnan Raman Fesabas'],
    members: [
      'Anna Lam Li Szer',
      'CHIANG JING WEN',
      'Choo Yang Wei',
      'CHOO YUNG WEI',
      'Dang Eve Lynn',
      'John Ng Ye Hann',
      'Lim Qiao Jie',
      'ZACHARY EMMANUEL SINGKEE'
    ]
  },
  {
    group: 'Group 5',
    facilitators: ['David Teoh Qi-En'],
    members: [
      'Brendan Lim Wai Li',
      'Chen Jiazen',
      'Feby Lifeni Anak Nick Resien',
      'Isbelle Lim Kyle Chern',
      'Loo Fui Jade',
      'Micole Yeap Sin Yii',
      'Nicole Chong Huei Lyng ',
      'Rheanna',
      'Sharita Saravanan',
      'Wee Ke Qin'
    ]
  },
  {
    group: 'Group 6',
    facilitators: ['Joshua Wong Wui Xhuen', 'Megan Soh Sha Ming'],
    members: [
      'Adelle Mae Lim',
      'Alyssa Kathleen Paul',
      'CASSANDRA CHUNG KAI YUAN',
      'Harry Chen Fan Bin ',
      'LU QUI ZHUIN',
      'Wong Sze Chee',
      'Wong Zi Qi'
    ]
  },
  {
    group: 'Group 7',
    facilitators: ['Joel Bryan Mohan'],
    members: [
      'Chua Pek Yzin',
      'Ethan Eng Yeung Zjung',
      'Jeanette Phang Shin Roe',
      'John Shiu Moon Tim ',
      'Lucas Lim Zhi Jet',
      'Pua How Keat ',
      'Shawn Tiew Sheng En',
      'Tang Joann'
    ]
  },
  {
    group: 'Group 8',
    facilitators: ['Darren Gill', 'Yeoh jun jin'],
    members: [
      'Abigail Goh Kai En',
      'Ashton Chong Wye Hon',
      'Edward Ooi',
      'Enze',
      'Eunice Lim Shuen Hui',
      'GABRIELLA KOONG ELYSSE',
      'Jovin Wong Wui Yang',
      'Nolan Segaran Krishnan'
    ]
  },
  {
    group: 'Group 9',
    facilitators: ['Ling Ying Phoebe'],
    members: [
      'Chin Kai Yi ',
      'Chung Shen Lin',
      'Erica Chiew Hui Ying ',
      'Esther Liew Yue Shi',
      'JEFFERSON JUNIOR SHIM HUAN CONG',
      'Joy Young Mei Yue',
      'Keith Young',
      'Lai En Qi',
      'Leticia Lee ',
      'Marsha Chin Shiuan',
      'Megan Wong ',
      'Quek Yuen Hang'
    ]
  },
  {
    group: 'Group 10',
    facilitators: ['Nicholas Cheah Yuan Zhong '],
    members: [
      'Alvin Tham Wei Yuan',
      'Caleb Lim Shian Zer',
      'Colleen Lim Shian Ern',
      'Joy Natasha',
      'Kaylene Lim Shian Ying',
      'Leann Chong Wen Yen ',
      'MAY SIEW',
      'Shania Wong Ee En'
    ]
  },
  {
    group: 'Group 11',
    facilitators: ['Eugene Lee Ee Jin'],
    members: [
      'Arielle Wang Xue Ern',
      'DANAY RANE SNEHA DHARAN',
      'Danielle Ang Jing Wei',
      'Eve Ling Hsern Ai',
      'Faith Wei Ann Snyder',
      'JADEN ASHTON MONK SOH HAN - MING',
      'Jonadab Tan Tze Ming',
      'Leong Kai Wei'
    ]
  },
  {
    group: 'Group 12',
    facilitators: ['Hwang Foo Shen'],
    members: [
      'Alexa Tornini Hong ',
      'Chloe Teh Zi Ern',
      'Choong Kah Yi',
      'Eleora Teoh Tze Qian',
      'Gan Jia Qi',
      'Khoo Kah Wai',
      'Matthew Lim Ern Xi',
      'Nathelie Yap Chew Li ',
      'Samantha Low'
    ]
  },
  {
    group: 'Group 13',
    facilitators: ['Owen Woo Tsen Wen'],
    members: [
      'Ashley Ho Tze Huay',
      'Ashlynn Ann Su Chern',
      'Carmen Ng',
      'Jaeden Lim Wye Yung',
      'Jeremy Tan Chun Xian',
      'Karyn Ling Defen ',
      'Olivia ng ',
      'Vasshon Kevin'
    ]
  },
  {
    group: 'Group 14',
    facilitators: ['Kelly Tan Yi Ying'],
    members: [
      'ANGELINA LIEW XUE EN',
      'Isaac Lim',
      'Joel Teh Sheng Jie',
      'Lizzannia Peeter',
      'RAVEENA CASANDRAA',
      'Shammah James A/P Murugan ',
      'Timothy Teh  Yi Tian'
    ]
  },
  {
    group: 'Group 15',
    facilitators: ['Sashaa Long'],
    members: [
      'Adeline Wong',
      'Anselm Beh En Sheng',
      'Jannelle Tong Kar Yan',
      'Justyn Tong Kar Wai',
      'Previna A/P Suresh',
      'TREESHEA JOY LEE TZE SAN',
      'WONG YEE LING',
      'Yap Jia Hui'
    ]
  },
  {
    group: 'Group 16',
    facilitators: ['Chew Yi Hong', 'Queena Lee Chin'],
    members: [
      'Effy Wong Yih Jyue (中文堂）',
      'Jason Ting Chang Shen CN',
      'Lam Mon Sion (CN)',
      'Ng Yin Lun (CN)',
      'Ngui Xin Ru (CN)',
      'Rachel Chew Jing Ern ( CN )',
      'Ryan Lim Wye Ern',
      'Yeong Wai Kit (CN)'
    ]
  },
  {
    group: 'Group 17',
    facilitators: ['Koh Earn Soo'],
    members: [
      'Au Kar Fei',
      'avril joane soon ai chen',
      'Kenneth Lam Wai Foong',
      'Lim Siew Lan',
      'Naaman Foong Yao Yong',
      'Violet Soon Ai May '
    ]
  },
  {
    group: 'Group 18',
    facilitators: ['Felix Foo'],
    members: [
      'Ashton Hii Wei Kang',
      'Cathryn Toh Yee Lyn',
      'Celine Leong Mae Ann',
      'Ivan Lim Eu Wen',
      'Jason Chew Jia Yit',
      'Lam Xin Yi',
      'Lim Zi Sheng',
      'lum samuel',
      'Nathaniel Inn Tsin Qian',
      'Nikeisha Ariaretnam'
    ]
  },
  {
    group: 'Group 19',
    facilitators: ['Bala Murugan A/L Monogaran'],
    members: [
      'Charlize Ti Jia Yi',
      'Estelle Ngu Yuen Ee ',
      'Eunice Ching Zhi Jun',
      'Kok Fang Juin',
      'Melissa Foong Yuin Mern',
      'Regina Yeo Man Xin',
      'Sam Perry Lee Chin Howe',
      'Siah Aun Yue'
    ]
  },
  {
    group: 'Group 20',
    facilitators: ['Leong Sheng Khai'],
    members: [
      'Amamda Cheong Yee Lyn',
      'Cleo Lam Hor Yee',
      'Esthefenyvie Junip',
      'Garynaath Shanmugam ',
      'Nathania Grace Mahadevan ',
      'Reuel Rajah',
      'Wong Jia Yu',
      'Yvonne Chok Yee Wen'
    ]
  },
  {
    group: 'Group 21',
    facilitators: ['Lee Yin Yin'],
    members: [
      'BRENDON CHEE JUN REN',
      'Darick Phoon Weng Sung',
      'Deborah A/P Peter Chandran',
      'ENG KEN LI',
      'IRENE YUNGA',
      'Jessie Chua',
      'Ng Mei Xuan',
      'Yeong Wai Kian'
    ]
  },
  {
    group: 'Group 22',
    facilitators: ['Tang Yue Weng'],
    members: [
      'Annabelle Tong Xin Yue',
      'Daniel Rudy',
      'Ezra Daniel Powell',
      'Leora Lee Yun',
      'Megan chang Jia Yuen',
      'Samuel Rudy',
      'William Harniess',
      'Wong Daphne Xuanxi '
    ]
  },
  {
    group: 'Group 23',
    facilitators: ['Ong Hun Lee'],
    members: [
      'Gabriel Goh Zhen Ning',
      'Lim Jie Wei',
      'Low Jun Ee',
      'Marcus Tan Di Fai',
      'Ong Jo-Yi',
      'SERAPHINA JOYCE MAHADEVAN ',
      'Teoh Sue Yee ',
      'Veronica Loke'
    ]
  },
  {
    group: 'Group 24',
    facilitators: ['YEONG VOON KANG'],
    members: [
      'Abel Tan Lay Yee',
      'Christie Ng Xian Yi',
      'Elisa Beh Hui En',
      'Elizabeth Tsan Ern Huey',
      'Enid Kang Yin Qian',
      'JOSEPH TAN YUNG WEI',
      'Joy-Anne Tan Soong Hwei ',
      'Tan Ler Shen',
      'Yap Xin Er'
    ]
  },
  {
    group: 'Group 25',
    facilitators: ['Marianne Liaw Sook Huei', 'Victor Yeow Sheng Rueng'],
    members: [
      'Adelyn Lai Wan Yen',
      'Allison Choy Suet Mun',
      'Chat Dong Xuan',
      'Janice Lim Wei Ling',
      'Joey Jee Vv Roseyannilly binti Bairi@Johnny',
      'Lee Ai Lin ',
      'Lim Kok Tien',
      'Miracle Wong',
      'Olivia Lian Yu-Qi',
      'SOH HAN YANG-JOSHUA DRE DHARAN'
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
            data
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
