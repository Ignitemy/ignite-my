// import { useGetStaticProps } from 'next-slicezone/hooks'

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
import WhatIsIgnite from './home/_what-is-ignite'
import Events from './home/_events'
import Countdown from './home/_countdown'
import Video from './home/_video'
import MiniBanner from './home/_mini-banner'
import styled from 'styled-components'
import Location from './home/_location'

const MiniBannerContainer = styled.div`
  height: auto;

  @media (min-width: 768px) {
    display: flex;
  }
`

const Page = () => {
  return (
    <Layout title="IGNITEMY2022 | Home">
      <Banner />
      {/* <WhatIsIgnite /> */}
      {/* <Events /> */}
      <MiniBannerContainer>
        <MiniBanner
          imgSrc="/images/jpg/ignite-yls-banner-bg-2022.jpg"
          imgTitle="/images/png/ignite-yls-logo.png"
          imgHeight="173"
          imgWidth="356"
          subTitle="IN-PERSON.    ONLINE."
        />
        <MiniBanner
          imgSrc="/images/jpg/ignite-rally-banner-bg-2022.jpg"
          imgTitle="/images/png/ignite-rally.png"
          imgHeight="135"
          imgWidth="351"
          subTitle="IN-PERSON."
        />
      </MiniBannerContainer>
      <Countdown />
      {/* <Video /> */}
      <Location />
    </Layout>
  )
}

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   type: 'blog_post',
//   apiParams({ params }) {
//     return {
//       uid: params.uid
//     }
//   }
// })

export default Page
