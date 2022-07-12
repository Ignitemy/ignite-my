import { useRef } from 'react'
import styled from 'styled-components'
import { SRLWrapper } from 'simple-react-lightbox'
import useDraggableScroll from 'use-draggable-scroll'
import { Heading } from '@/components/Typography'

const ROW1 = [
  {
    src: '/images/jpg/Gallery-1.jpg',
    thumbnail: '/images/jpg/Gallery-1.jpg',
    caption: 'Image 1'
  },
  {
    src: '/images/jpg/Gallery-2.jpg',
    thumbnail: '/images/jpg/Gallery-2.jpg',
    caption: 'Image 2'
  },
  {
    src: '/images/jpg/Gallery-3.jpg',
    thumbnail: '/images/jpg/Gallery-3.jpg',
    caption: 'Image 3'
  },
  {
    src: '/images/jpg/Gallery-4.jpg',
    thumbnail: '/images/jpg/Gallery-4.jpg',
    caption: 'Image 4'
  },
  {
    src: '/images/jpg/Gallery-5.jpg',
    thumbnail: '/images/jpg/Gallery-5.jpg',
    caption: 'Image 5'
  },
  {
    src: '/images/jpg/Gallery-6.jpg',
    thumbnail: '/images/jpg/Gallery-6.jpg',
    caption: 'Image 6'
  },
  {
    src: '/images/jpg/Gallery-7.jpg',
    thumbnail: '/images/jpg/Gallery-7.jpg',
    caption: 'Image 7'
  },
  {
    src: '/images/jpg/Gallery-8.jpg',
    thumbnail: '/images/jpg/Gallery-8.jpg',
    caption: 'Image 8'
  },
  {
    src: '/images/jpg/Gallery-9.jpg',
    thumbnail: '/images/jpg/Gallery-9.jpg',
    caption: 'Image 9'
  },
  {
    src: '/images/jpg/Gallery-10.jpg',
    thumbnail: '/images/jpg/Gallery-10.jpg',
    caption: 'Image 10'
  },
  {
    src: '/images/jpg/Gallery-11.jpg',
    thumbnail: '/images/jpg/Gallery-11.jpg',
    caption: 'Image 11'
  },
  {
    src: '/images/jpg/Gallery-11-1.jpg',
    thumbnail: '/images/jpg/Gallery-11-1.jpg',
    caption: 'Image 11-1'
  }
]
const ROW2 = [
  {
    src: '/images/jpg/Gallery-12.jpg',
    thumbnail: '/images/jpg/Gallery-12.jpg',
    caption: 'Image 12'
  },
  {
    src: '/images/jpg/Gallery-13.jpg',
    thumbnail: '/images/jpg/Gallery-13.jpg',
    caption: 'Image 13'
  },
  {
    src: '/images/jpg/Gallery-14.jpg',
    thumbnail: '/images/jpg/Gallery-14.jpg',
    caption: 'Image 14'
  },
  {
    src: '/images/jpg/Gallery-15.jpg',
    thumbnail: '/images/jpg/Gallery-15.jpg',
    caption: 'Image 15'
  },
  {
    src: '/images/jpg/Gallery-16.jpg',
    thumbnail: '/images/jpg/Gallery-16.jpg',
    caption: 'Image 16'
  },
  {
    src: '/images/jpg/Gallery-17.jpg',
    thumbnail: '/images/jpg/Gallery-17.jpg',
    caption: 'Image 17'
  },
  {
    src: '/images/jpg/Gallery-18.jpg',
    thumbnail: '/images/jpg/Gallery-18.jpg',
    caption: 'Image 18'
  },
  {
    src: '/images/jpg/Gallery-19.jpg',
    thumbnail: '/images/jpg/Gallery-19.jpg',
    caption: 'Image 19'
  },
  {
    src: '/images/jpg/Gallery-20.jpg',
    thumbnail: '/images/jpg/Gallery-20.jpg',
    caption: 'Image 10'
  },
  {
    src: '/images/jpg/Gallery-21.jpg',
    thumbnail: '/images/jpg/Gallery-21.jpg',
    caption: 'Image 21'
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
  padding-bottom: 4rem;
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
      {/* <StyledHeading size="4.8rem" color="white" fstyle="italic" align="center" mb="4rem">
        PHOTO GALLERY
      </StyledHeading> */}
      <ImageContainer ref={dragToScrollRef} onMouseDown={onMouseDown}>
        <SRLWrapper>
          <ImageRow>
            {ROW1.map((image) => {
              return <img key={image.src} src={image.src} alt={image.caption} height={200} draggable="false" />
            })}
          </ImageRow>
          <ImageRow>
            {ROW2.map((image) => {
              return <img key={image.src} src={image.src} alt={image.caption} height={200} draggable="false" />
            })}
          </ImageRow>
        </SRLWrapper>
      </ImageContainer>
    </FlexCenter>
  )
}

export default Gallery
