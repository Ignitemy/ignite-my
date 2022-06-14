import Layout from '../../components/Layout'
import Banner from './_banner'
import JoinUs from './_join-us'
import Schedule from './_schedule'
import SpeakerSection from './_speakers-section'

const Rally = () => {
  return (
    <Layout title="IGNITEMY2022 | Rally">
      <Banner />
      <SpeakerSection />
      <Schedule />
      <JoinUs />
    </Layout>
  )
}

export default Rally
