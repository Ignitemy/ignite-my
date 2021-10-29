import Layout from '../../components/Layout'
import styled from 'styled-components'
import ResourceComponent from './_resources'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/helpers/auth'
import { SRLWrapper } from 'simple-react-lightbox'
import useDraggableScroll from 'use-draggable-scroll'

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const ROW1 = [
  {
    src: '/images/png/event-1.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 1'
  },
  {
    src: '/images/png/event-2.png',
    thumbnail: '/images/png/event-2.png',
    caption: 'Image 2'
  },
  {
    src: '/images/png/rally-banner.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 3'
  },
  {
    src: '/images/png/ignite-rally.png',
    thumbnail: '/images/png/event-2.png',
    caption: 'Image 4'
  },
  {
    src: '/images/png/event-1.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 5'
  }
]
const ROW2 = [
  {
    src: '/images/png/ignite-rally.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 1'
  },
  {
    src: '/images/png/event-2.png',
    thumbnail: '/images/png/event-2.png',
    caption: 'Image 2'
  },
  {
    src: '/images/png/event-1.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 3'
  },
  {
    src: '/images/png/paper-bg.png',
    thumbnail: '/images/png/event-2.png',
    caption: 'Image 4'
  },
  {
    src: '/images/png/event-1.png',
    thumbnail: '/images/png/event-1.png',
    caption: 'Image 5'
  }
]

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 10px;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: #616161;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-orange);
    border-radius: 4px;
  }
`

const ImageRow = styled.div`
  display: flex;
  width: fit-content;
  height: 200px;
  margin-bottom: 16px;
  cursor: grab;

  > img:not(:last-child) {
    margin-right: 16px;
    cursor: pointer;
  }
`

const Resources = () => {
  const user = useAuth()
  const router = useRouter()
  const dragToScrollRef = useRef(null)
  const { onMouseDown } = useDraggableScroll(dragToScrollRef, { direction: 'horizontal' })

  useEffect(() => {
    if (!user) router.push('/login?action=login&redirect=resources')
  }, [user])

  return (
    <Layout title="IGNITEMY2021 | Resources">
      <SectionContainer bgcolor="var(--color-black)">
        <ResourceComponent />
        <ImageContainer ref={dragToScrollRef} onMouseDown={onMouseDown}>
          <SRLWrapper>
            <ImageRow>
              {ROW1.map((image) => {
                return <img src={image.src} alt={image.caption} height={200} draggable="false" />
              })}
            </ImageRow>
            <ImageRow>
              {ROW2.map((image) => {
                return <img src={image.src} alt={image.caption} height={200} draggable="false" />
              })}
            </ImageRow>
          </SRLWrapper>
        </ImageContainer>
      </SectionContainer>
    </Layout>
  )
}

export default Resources
