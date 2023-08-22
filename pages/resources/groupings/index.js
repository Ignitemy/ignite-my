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
    facilitators: ['Kuan Yu Sheng', 'PANG YEE BOB'],
    members: [
      'Rachel Chew Jing Ern ( CN )',
      'Law Xin Yi',
      'Hannah Sia En Xi ',
      'Jocelyn Wee Jing Huei',
      'Sean Sia En Hao ',
      'Pang Chee Chuan',
      'STEFFI WONG LIN QIN',
      'WONG XUAN QIN'
    ]
  },
  {
    group: 'Group 2',
    facilitators: ['Hew Guan Yuan'],
    members: [
      'KUAN YU YANG',
      'Hannah Ting Ying Jie',
      'Jason Ting Chang Shen CN',
      'Sophia Cheong Zi Qi',
      'Leora Lee Yun',
      'Euodea Lee Yi',
      'law en yi Hanna'
    ]
  },
  {
    group: 'Group 3',
    facilitators: ['Ngui Xin Ru (CN)', 'Yeau Ming Yee'],
    members: [
      'Cheng Yin Xi',
      'Chloe Chen Wen Xuan ',
      'ESTHER TAM YU LE',
      'Law Zhe Yee',
      'LEE YU XI',
      'YIAP YUN'
    ]
  },
  {
    group: 'Group 4',
    facilitators: ['Ng Yin Lun (CN)'],
    members: [
      'Lebron Ooi Chen Earn',
      'Chai Kee Fong',
      'Frank Liu ',
      'Samuel Yan ',
      'WUENXI',
      'CHEW KAR HUI',
      'John Ng Ye Hann',
      'Dora Ling Wei En'
    ]
  },
  {
    group: 'Group 5',
    facilitators: ['Gan Jia Yi'],
    members: [
      'Ashton Haoran Lee',
      'Casper Too Xin Qian',
      'Chong Ray Shuen',
      'Christine Chen',
      'Eleanor Inn Rei Shuen',
      'Ling Wan Hwee Katelyn ',
      'Sarah Lin Xiao Ning',
      'Sean Lai Jun Kit',
      'Teoh Enjie'
    ]
  },
  {
    group: 'Group 6',
    facilitators: ['Shenna-Anne Shilpa Padman'],
    members: [
      'Bryan Hooi Fu Yuan',
      'Chan Yu Kai ',
      'Hoo Egen',
      'Lee Jie Sheng',
      'Ling Wan Xin Kristen',
      'Ng Jian Bo Sean',
      'Ong Tsu Yit ',
      'Wong Weng Chuen ',
      'Yew Jin Heng'
    ]
  },
  {
    group: 'Group 7',
    facilitators: ['Gan Rong Sheng '],
    members: [
      'Chong Yee Zhe',
      'Hon Janson',
      'Ian Lai Chang Zhen',
      'Joshua Phang Yu Zhe',
      'Josiah Eng De Han',
      'Marshal Lee Shen',
      'SAMUEL LAU YI SHEN',
      'Young Ker Shen Ronnie'
    ]
  },
  {
    group: 'Group 8',
    facilitators: ['Charin Teh En-Yin '],
    members: [
      'Cheah Yi Xiang Daniel ',
      'Joash Lee Chen Zhe',
      'Joel Lee Chen Ern',
      'Lee Wei Xun',
      'Loh Yihern',
      'Mah Jun Ming',
      'Wong Kai Wen',
      'Wong Mu Jie'
    ]
  },
  {
    group: 'Group 9',
    facilitators: ['Anna Chen Siaw Ee'],
    members: [
      'AMELIA CHIN YI JING',
      'Hayley Pang Yin Shee',
      'Jadyn Tan Kye Er',
      'Jaelyn Oh Jia Rou',
      'Kimberly Fu Enn Shan',
      'Lau Qi Rhen',
      'Liew Zhuo Heng',
      'Pansy Lee Jing Yi'
    ]
  },
  {
    group: 'Group 10',
    facilitators: ['Timothy Chen'],
    members: [
      'Anna Chin Yi Xian',
      'Khu Poh Sim',
      'Marcus Chow Wing Hien',
      'Siew Yen Kai',
      'Soh Yu Chen Ogden',
      'Soh Yu Le Olivia',
      'Tammy Lee Jing Wen',
      'Wong Juin Kann'
    ]
  },
  {
    group: 'Group 11',
    facilitators: ['Lim Yi Fen'],
    members: [
      'Beatrice Lim Sze Yen',
      'Chang Yi Wen Rachel',
      'Chang Zi Jin Daryl ',
      'ETHAN LIM ZHI QIAN',
      'Gabriel Tan Jia Le ',
      'Josh Chua Jien Wei',
      'LUCAS LIM ZHI JET',
      'Ng Shan-Zi'
    ]
  },
  {
    group: 'Group 12',
    facilitators: ['Megan Soh Sha Ming'],
    members: [
      'Ethan Leong Jay Yoong',
      'Jared Lo Kwok Yao',
      'Joel Ooi Chong Wei',
      'Jolene Go Kar Mun',
      'JONATHAN YEE SHENG HONG ',
      'Joshua Siau Yang Yii',
      'Sierra Yong Le Yi ',
      'Yap Kai Ren'
    ]
  },
  {
    group: 'Group 13',
    facilitators: ['Joel Bryan Mohan'],
    members: [
      'Jared Dyllan Jebaretnam ',
      'JUSTIN OOI JEN WEI',
      'NATALIE CHIN YEN KAY',
      'Samuel Inn Ray Cherng',
      'Calven Lee Kai Xhe',
      'Charmaine Sarah Yoon Huey Lyn',
      'Julia Lau YiJen',
      'Yap Jing Siang'
    ]
  },
  {
    group: 'Group 14',
    facilitators: ['Chin Suet Yuan Inez'],
    members: [
      'Eviana Wong Yee Ern',
      'Hailey Wong Zoe Ern',
      'Jane Jael Julidin ',
      'LEE JI HYM',
      'ONG QING HUA REBECCA',
      'RACHAEL TAN LI FANG',
      'Shannon Loong Jean Ann ',
      'YAP JIA WERN'
    ]
  },
  {
    group: 'Group 15',
    facilitators: ['Aisen Oh Joo Ee'],
    members: [
      'Chang Heng Foobg',
      'Gabriel Wong Bak Sheng',
      'Hannah Yee Jia Ern',
      'Jaslyn Ngo En Lin ',
      'Jonathan Teoh Ming Ern ',
      'Kristie Foh Wei-Lin',
      'Kyshennaath Shanmugam ',
      'Ryan Tan Yik Shen'
    ]
  },
  {
    group: 'Group 16',
    facilitators: ['Felicia Leong Jie Ern'],
    members: [
      'DARLENE SHALOM A/P EDWIN SELVARAJA ',
      'Esther Ho Xing En',
      'Hannah Fong Shir Enn',
      'Heng Guan Xiang Sebastian',
      'Ho Su Yen',
      'KWAN XIN KAI',
      'Tan Wei Ming'
    ]
  },
  {
    group: 'Group 17',
    facilitators: ['Zander Cheah Wei-Han '],
    members: [
      'Abigail Goh Kai En',
      'Adora Yap Si Yan',
      'Anabel Lim Jae Dong',
      'Ashton Heong Li Hann',
      'DANIEL LIM WEN HUI',
      'David Lim Wen Hao',
      'ELYSSA LIM SHUEN LI',
      'Lim Lindsay'
    ]
  },
  {
    group: 'Group 18',
    facilitators: ['Martin Ng'],
    members: [
      'Amelyn Lee Meira',
      'Ayden Kyzo Teh',
      'Daniel Ian Tan',
      'Esther Low Mei-Ern',
      'EVAN LIM SHUEN YONG',
      'Hannah Chan Jia En',
      'Ho Choong Han',
      'Micah Ng Ern Zhe'
    ]
  },
  {
    group: 'Group 19',
    facilitators: ['Teoh Enxi'],
    members: [
      'Hayley Sze Ern Xian',
      'JOANNE TING MING HUEY ',
      'Lydia Woon Ee Jean',
      'Melody Wong En Qi',
      'Naiomi Chee Rui En',
      'Tan Kate-Lynn ',
      'VANESSA TSAN ERN MEI',
      'Wong Wei Wen'
    ]
  },
  {
    group: 'Group 20',
    facilitators: ['Bernice Goh'],
    members: [
      'Eunice Chong Hue Theng',
      'Choong Kah Mun',
      'Choong Kah Yi',
      'Constantine Kong Zhong You',
      'Isaac Tung Hoe Mun',
      'Jaden Lee Zhen Hao',
      'Jaden Yap Tz An',
      'Keira Ng Wenn Wei',
      'Carlson Maheshon Victor'
    ]
  },
  {
    group: 'Group 21',
    facilitators: ['Darren Timothy Thasan'],
    members: [
      'Sia Kwee Seng',
      'Elizabeth Lim',
      'Ling Ying Phoebe',
      'JoLynn Chew Ai Ling',
      'Brandon Choo Qin Ming',
      'Eleora Teoh Tze Qian',
      'Elizabeth Tsan Ern Huey',
      'Hiu Lyn Ee',
      'Shannen Teoh Yun Mei',
      'Darren Gill',
      'Sam Kong',
      'Alyssa Grace'
    ]
  },
  {
    group: 'Group 22',
    facilitators: ['Cheng Yi Wen'],
    members: [
      'Benjamin Chong Rong En ',
      'Choo Yang Wei',
      'Daniel Rudy',
      'Eunice Lim Shuen Hui',
      'Jovin Wong Wui Yang',
      'Ng Jing Hwei',
      'Ti Jia Xi',
      'Joel Foo Shen Wen',
      'Elisa Beh Hui En'
    ]
  },
  {
    group: 'Group 23',
    facilitators: ['Lim Sue Ann '],
    members: [
      'LEE VIN YING',
      'Ashton Hii Wei Kang',
      'Bernice Boey',
      'Choo Chee Loon Ryan',
      'Elijah Inn Tsin Tsern',
      'Elissa Ann Su- Ern',
      'Emmanuel Eso',
      'Hlawn Kip Tial',
      'Isbelle Lim Kyle Chern',
      'Ivory Chong Ern Wei',
      'Leong Kai Wei',
      'Sharita Saravanan'
    ]
  },
  {
    group: 'Group 24',
    facilitators: ['Marianne Liaw Sook Huei'],
    members: [
      'Dina Tha Khun',
      'Glady Bawi Tha Khun',
      'Josept Van Khamh Thawng',
      'Nancy Sui Tha Dim',
      'Steven Duh Ceu Lian',
      'Steven Lian Cung Thu',
      'Storney Van Ram Bawi',
      'Tawk Lian Thang',
      'Van Bawi Thang',
      'Van Tha Iang'
    ]
  },
  {
    group: 'Group 25',
    facilitators: ['CHOO YUNG WEI'],
    members: [
      'Joshua Kuan Yao Sern',
      'Raine Yap ',
      'Melanie Chong Hue Sim',
      'Goh Su Wen',
      'Janice Ho Hweei Lynn',
      'Jia Jerng Anthony Deng',
      'Joy Natasha',
      'Ronak Pherwani'
    ]
  },
  {
    group: 'Group 26',
    facilitators: ['Rachel Joy McGirr'],
    members: [
      'Jade Wen Xuan Lim ',
      'Jasiel Erwin Peter',
      'Choo Jan Tzen',
      'Isaac Lim Wei Zhong',
      'Olivia ng ',
      'Ryan Lim Han Wen',
      'Ryna Lim Chi Wen ',
      'Jeremy Tan Chun Xian'
    ]
  },
  {
    group: 'Group 27',
    facilitators: ['Sandra Soh Sha Ying'],
    members: [
      'Justin Chen Ern Yi',
      'Kwan ren zhe',
      'Ng emma',
      'Ryan Woo Hao Ran',
      'Alynna Lim Jia Yin',
      'Josh Lim Tze Han ',
      'Joanne Ow Wei Yee ',
      'Yap Jia Hui'
    ]
  },
  {
    group: 'Group 28',
    facilitators: ['Tan Jian Xi'],
    members: [
      'Catherine Ooi Wei Tong ',
      'Chloe Ling Yen Ee',
      'Elizabeth Tan Li Hwa',
      'LEE ZHI HONG',
      'Lee Zhi Yen',
      'Celine Cheng',
      'Daren Hee Jen Lun',
      'Low Sin Rou ',
      'Caleb Hee Yong Liang'
    ]
  },
  {
    group: 'Group 29',
    facilitators: ['Ezra Ong Hun Lee'],
    members: [
      'Anna Isabelle Powell',
      'Ezra Daniel Powell',
      'Sarah Tan I-Xin',
      'Faith Wong Xue Xian',
      'Carmen Ng',
      'Caylee Cheah Min Yi',
      'Elyssa Khoo Kaily',
      'Lee Juun-Man'
    ]
  },
  {
    group: 'Group 30',
    facilitators: ['Melissa Foong Yuin Mern'],
    members: [
      'Ang Ern Yi Angelynn',
      'Carys Kang Yin Xi',
      'Elizabeth Yee Shu Teng',
      'Enid Kang Yin Qian',
      'GRACE KOK EI WEN',
      'REBEKAH TAN JOO ERN',
      'Tham Yi Lyn',
      'Valerie Choong'
    ]
  },
  {
    group: 'Group 31',
    facilitators: ['Loke Yun Kit'],
    members: [
      'Abigail Lx Tan',
      'Lum Hong Jian',
      'Shania Wong Ee En',
      'Isaac Pua How Keat ',
      'Pua Boon Keat',
      'Pua Su Ann',
      'Venice Chow Wern Xuan',
      'Ashton Beh Sheng en',
      'CALTON LEE KAI DENG'
    ]
  },
  {
    group: 'Group 32',
    facilitators: ['Andrew Gan'],
    members: [
      'Braxton Wong Kar Joo',
      'Chee kah shin',
      'ISAAC HSU LI-HANG ',
      'Lee Fang Joe ',
      'justin wong kar him',
      'Ethan Chong Tze Wej',
      'Matthias Hsu Li-Ern'
    ]
  },
  {
    group: 'Group 33',
    facilitators: ['DAVID TEOH QI-EN', 'Victor Yeow'],
    members: [
      'Enoch Liew',
      'CARYLLE CRISH TUBIL MENON',
      'Hannah Yeap Ming Ern',
      'Mark Anthony Lim Jia Ler ',
      'Micah Andrew Lim Jia Jun',
      'Adele Tang',
      'Celine Tew',
      'ZEPHAN NATHENIEL SINGKEE',
      'Lee Jay Rou'
    ]
  },
  {
    group: 'Group 34',
    facilitators: ['Toh Jia Qian'],
    members: [
      'Zoey Grace Chang Zhu Er',
      'Bernis Kam Xue Ying',
      'John Kam Chee Qian',
      'Matthew Kam Zhi Heng',
      'Rachel Rudy',
      'Samuel Rudy',
      'Jannelle Tong Kar Yan',
      'Janelle Leong Whey',
      'Nicholas Amariah'
    ]
  },
  {
    group: 'Group 35',
    facilitators: ['Isaac Chan'],
    members: [
      'AUDREY TEW LI YI',
      'Elijah Teoh Tze Heng',
      'Emmanuel Cheun Zhen Liang',
      'GEORGE TEW JUN HAO',
      'Wu Joong Jie',
      'Philip Yip Jia Zhen ',
      'ZETH YUEN XIAN',
      'Janelle Thye'
    ]
  },
  {
    group: 'Group 36',
    facilitators: ['Ivan Lim Eu Wen'],
    members: [
      'Joshua Wong Tim Wei',
      'Praveen wong rao',
      'Nestor woo hung Yang ',
      'Nicholas Woo',
      'Aerin Gan Mei Xian',
      'Julia Yi-Lin Poovendra',
      'Hannah Faith Liau Mae Tze',
      'Tan Xing Ning',
      'Wong Daphne Xuanxi '
    ]
  },
  {
    group: 'Group 37',
    facilitators: ['Tan Xue Chin'],
    members: [
      'Ashton Chong Wye Hon',
      'Emma Lee Jia Ying ',
      'Lafayette Victor',
      'Leann Chong Wen Yen ',
      'Lum Ming Qian',
      'Robin Wong Kung Shan',
      'Sara Chuah Hui Qi'
    ]
  },
  {
    group: 'Group 38',
    facilitators: ['Grace Wong Xin-En'],
    members: [
      'Eaden Kapono Lim Fang Rong',
      'Emerson Ng Jie Tao',
      'Carina Lock Yi Xin',
      'Caysha Iwalani Lim Ee Lynn',
      'Jamie Alexander Smith-Coward',
      'Ling Jian Seng',
      'Yuen Jie',
      'Yuen Hao'
    ]
  }
]
const data_online = [
  {
    group: 'Group A',
    facilitators: ['Joshua Wong Wui Xhuen'],
    members: [
      'Danielle Ang Jing Wei',
      'Nathanael Ang Yi Xin',
      'Rebecca Jiam Huey Yi',
      'Seo Huey Wen',
      'Thang Wan Er',
      'Ng Yuri',
      'Lee Calvin',
      'Chun Jay Shern',
      'Ethan Yap Kheng Hoe',
      'Justyn Tan Kai Jie ',
      'Ryan Yap Chee Hoe'
    ]
  },
  {
    group: 'Group B',
    facilitators: ['Benison Wong Yu Cheng'],
    members: [
      'Adrisa Ng Ching Ai',
      'CHIEW YAN PUI ANNA',
      'Daniel Foo Shen Aun',
      'Hannah Fong Shir Enn',
      'Jessey Soo',
      'Rachel Yap',
      'SIAU ZHE XUAN',
      'OOI SU CHEEN',
      'Abigail Quah',
      'Chan Yan Teng'
    ]
  },
  {
    group: 'Group C',
    facilitators: ['Jonathan Chin Yee'],
    members: [
      'Matthew Tan Jin Hui',
      'GABRIEL GOH XUN ZE ',
      'Isaac Leong Hans Yoong',
      'Jeanette Phang Shin Roe',
      'Ryan Patrick Jude Kilroy Augustin',
      'Yoon Zer Sheng ',
      'Nehemika Amarina'
    ]
  },
  {
    group: 'Group D',
    facilitators: ['Choo Shern Wei'],
    members: [
      'Leong Deng Fu',
      'Regina Yeo Man Xin',
      'Justyn Tong Kar Wai',
      'shana soon yin'
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
    <Layout title="IGNITEMY2023 | Groupings">
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
