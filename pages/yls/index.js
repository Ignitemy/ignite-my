import Layout from '../../components/Layout'
import Banner from './_banner'
import JoinUs from './_join-us'
import Schedule from './_schedule-2023'
import SpeakerSection from './_speaker-section'

const YLS = () => {
  return (
    <Layout title="IGNITEMY2023 | Youth Leadership Summit">
      <Banner />
      <SpeakerSection />
      <Schedule />
      {/* <JoinUs /> */}
    </Layout>
  )
}

export default YLS
