import { useGetStaticProps } from 'next-slicezone/hooks'

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
import WhatIsIgnite from './home/_what-is-ignite'
import Events from './home/_events'
import Countdown from './home/_countdown'
import Video from './home/_video'

const Page = () => {
  return (
    <Layout title="IGNITEMY2022 | Home">
      <Banner />
      <WhatIsIgnite />
      <Events />
      <Countdown />
      <Video />
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
