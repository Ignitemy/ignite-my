import Layout from '../../components/Layout'
import Banner from './_banner'
import JoinUs from './_join-us'
import Schedule from './_schedule-2023'
import SpeakerSection from './_speakers-section'
import CollaborationSection from './_collaboration-logo'

const Rally = () => {
  return (
    <Layout title="IGNITEMY2024 | Rally">
      <Banner />
      {/* <SpeakerSection /> */}
      <Schedule />
      {/* <JoinUs /> */}
      <CollaborationSection />

    </Layout>
  )
}

export default Rally
