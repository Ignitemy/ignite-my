import Layout from '../../components/Layout'
import styled from 'styled-components'
import ResourceComponent from './_resources'

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgcolor || 'var(--color-white)'};
  background: ${(props) => props.background};
`

const Resources = () => {

  const handleZoomBackgrounds = () => {
    console.log('Put zoom background link here')
  };

  return (
    <Layout title="IGNITEMY2021 | Resources">
      <SectionContainer bgcolor="var(--color-black)">
        <ResourceComponent handleZoomBackgrounds={handleZoomBackgrounds} />
      </SectionContainer>
    </Layout>
  )
}

export default Resources
