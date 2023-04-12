// import { useGetStaticProps } from 'next-slicezone/hooks'

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
// import WhatIsIgnite from './home/_what-is-ignite'
// import Events from './home/_events'
import Countdown from './home/_countdown'
// import Video from './home/_video'
import MiniBanner from './home/_mini-banner'
import styled from 'styled-components'
import Location from './home/_location'
import Faq from './home/_faq'
import EventBanner from './home/_event-banner'

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
  width: 687,
  height: 114
}

const Page = () => {
  return (
    <Layout title="IGNITEMY2022 | Home">
      <Banner
        bgImgSrc="/images/jpg/worship_hands.jpg"
        eventDate="24.09.2022"
        lineOneText="DAY SUMMIT.&nbsp;"
        lineTwoText="NIGHT RALLY."
        videoUrl="https://www.youtube.com/embed/fQkThyL3QVY"
      />
      <EventBanner
        bgImgSrc="/images/png/wave_banner.png"
        logoImgDetails={igniteYlsLogo}
        programDate="26 Aug"
        programTime="10-3pm"
        subheading="Requires registration!"
      />
      <EventBanner
        bgImgSrc="/images/png/wave_banner.png"
        logoImgDetails={igniteCarnivalRalleyLogo}
        programDate="27 Aug"
        programTime="5-10pm"
        subheading="Invite your friends & family!"
      />
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
