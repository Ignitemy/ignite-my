import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../../components/Layout'
// import HeaderButtons from './_header-buttons'
// import Stats from './_stats'
// import Logo from './_logo'
// import Quotes from './_quotes'
import Video from './_video'
// import Gallery from './_gallery'
import EventHighlights from './_event-highlights'
// import CommsTeam from './_comms-team'

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 383px;
  padding: 0 0 7rem;

  @media (min-width: 768px) {
    padding: 5rem 0 7rem;
    max-width: 750px;
  }

  @media (min-width: 1024px) {
    max-width: 920px;
  }
`

const Highlights = () => {
  return (
    <Layout title="IGNITEMY2024 | Highlights">
      {/* <HeaderButtons /> */}
      {/* <Stats /> */}
      {/* <Logo /> */}
      {/* <Quotes /> */}
      <Video />
      <EventHighlights />
      <ImageWrapper>
        <Image
          src='/images/jpg/ignite-comm-2023.jpg'
          width={880}
          height={550}
          alt="group photo"
          loading='lazy'
        />
      </ImageWrapper>
      {/* <CommsTeam /> */}
      {/* <Gallery /> */}
    </Layout>
  )
}

export default Highlights
