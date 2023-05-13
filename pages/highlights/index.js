import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../../components/Layout'
// import HeaderButtons from './_header-buttons'
// import Stats from './_stats'
// import Logo from './_logo'
// import Quotes from './_quotes'
import Video from './_video'
import Gallery from './_gallery'
import EventHighlights from './_event-highlights'

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
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
    <Layout title="IGNITEMY2023 | Highlights">
      {/* <HeaderButtons /> */}
      {/* <Stats /> */}
      {/* <Logo /> */}
      {/* <Quotes /> */}
      <Video />
      <EventHighlights />
      <ImageWrapper>
        <Image
          src='/images/jpg/demo_rally.jpg'
          width={2400}
          height={1602}
          alt="group photo"
          loading='lazy'
        />
      </ImageWrapper>
      <Gallery />
    </Layout>
  )
}

export default Highlights
