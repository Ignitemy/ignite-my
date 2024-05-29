// import { useGetStaticProps } from 'next-slicezone/hooks'
import dynamic from 'next/dynamic'
// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
// import WhatIsIgnite from './home/_what-is-ignite'
// import Events from './home/_events'
// import Countdown from './home/_countdown'
// import Video from './home/_video'
// import MiniBanner from './home/_mini-banner'
import styled from 'styled-components'
import Location from './home/_location'
import Faq from './home/_faq'
import EventBanner from '@/components/EventBanner'
// import CollaborationSection from './rally/_collaboration-logo'
// import JoinUs from './home/_join-us'

const Countdown = dynamic(() => import("./home/_countdown"), {ssr: false})

const MiniBannerContainer = styled.div`
  height: auto;

  @media (min-width: 768px) {
    display: flex;
  }
`

const igniteYlsLogo = {
  imgUrl: '/images/png/ignite_yls_full_name.png',
  alt: 'Ignite Youth Leadership Summit',
  width: 679,
  height: 115
}

const igniteCarnivalRalleyLogo = {
  imgUrl: '/images/png/ignite_carnival_rally_logo.png',
  alt: 'Ignite carnival plus Ignite Rally',
  width: 711,
  height: 107
}

const Page = () => {
  return (
    <Layout title="IGNITEMY2024 | Home">
      <Banner />
      <EventBanner
        bgImgSrc="/images/jpg/countdown-2022-banner.jpg"
        logoImgDetails={igniteYlsLogo}
        programDate="07 SEP 2024"
        programTime="10:00AM - 3:30PM"
        subheading="Join us online or in-person"
        subheading2="Requires registration!"
      />
      <EventBanner
        bgImgSrc="/images/jpg/yls-banner.jpg"
        logoImgDetails={igniteCarnivalRalleyLogo}
        programDate="08 SEP 2024"
        programTime="4:30PM - 9:30PM"
        subheading="Invite your friends & family"
        subheading2="No registration needed!"
      />
      {/* <JoinUs /> */}
      {/* <WhatIsIgnite /> */}
      {/* <Events /> */}
      {/* <MiniBannerContainer>
        <MiniBanner
          linkTo="/yls"
          imgSrc="/images/jpg/ignite-yls-banner-bg-2022.jpg"
          imgTitle="/images/png/ignite-yls-logo.png"
          imgHeight="173"
          imgWidth="356"
          subTitle="IN-PERSON.    ONLINE."
        />
        <MiniBanner
          linkTo="/rally"
          imgSrc="/images/jpg/ignite-rally-banner-bg-2022.jpg"
          imgTitle="/images/png/ignite-rally.png"
          imgHeight="135"
          imgWidth="351"
          subTitle="IN-PERSON.    ONLINE."
        />
      </MiniBannerContainer> */}
      <Countdown />
      {/* <Video /> */}
      <Location />
      <Faq />
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
