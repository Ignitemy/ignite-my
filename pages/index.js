import { Client } from '../prismic-configuration'
import { useGetStaticProps } from 'next-slicezone/hooks'

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
import Events from './home/_events'
// import Speakers from './home/_speakers'
import Countdown from './home/_countdown'
import Video from './home/_video'

const Page = () => {
  return (
    <Layout title="IGNITEMY2021 | Home">
      <Banner />
      <Events />
      {/* <Speakers /> */}
      <Countdown />
      <Video />
    </Layout>
  )
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams: {
    uid: 'home'
  }
})

export default Page
