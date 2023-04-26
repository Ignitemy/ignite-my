import Layout from '../../components/Layout'
import Banner from './_banner'
import JoinUs from './_join-us'
import Schedule from './_schedule'
import SpeakerSection from './_speakers-section'
import CollaborationSection from './_collaboration-logo'

const Rally = () => {
  return (
    <Layout title="IGNITEMY2023 | Rally">
      <Banner />
      <SpeakerSection />
      <Schedule />
      {/* <JoinUs /> */}
      <CollaborationSection />

    </Layout>
  )
}

export default Rally
