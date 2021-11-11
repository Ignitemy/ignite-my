import { useRef } from 'react'
import styled from 'styled-components'
import { SRLWrapper } from 'simple-react-lightbox'
import useDraggableScroll from 'use-draggable-scroll'
import { Heading } from '@/components/typography'

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
const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  @media (max-width: 768px) {
    font-size: 3.2rem;
    margin: 2.4rem 0;
  }
`

const Gallery = () => {
  const dragToScrollRef = useRef(null)
  const { onMouseDown } = useDraggableScroll(dragToScrollRef, { direction: 'horizontal' })
  return (
    <FlexCenter>
      <StyledHeading size="4.8rem" color="white" fstyle="italic" align="center" mb="4rem">
        PHOTO GALLERY
      </StyledHeading>
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
    </FlexCenter>
  )
}

export default Gallery
