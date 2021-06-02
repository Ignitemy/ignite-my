import { Client } from '../prismic-configuration'
import { useGetStaticProps } from 'next-slicezone/hooks'
import styled from 'styled-components'

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from './../components/Layout'
import Banner from './home/_banner'
import Events from './home/_events'
import Speakers from './home/_speakers'

const Page = () => {
  return (
    <Layout title="Ignite 2021 | Home">
      <Banner />
      <Events />
      <Speakers />
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
