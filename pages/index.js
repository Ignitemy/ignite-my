import { Client } from "../prismic-configuration";
import { useGetStaticProps } from "next-slicezone/hooks";
import styled from "styled-components";

// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";
import Button from "./../components/Button";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

const Page = (props) => {
  let buttonProps = {
    primary: true
  }
  return (
    <Layout menu={props.menu} title="Ignite 2021 | Homepage">
      {/* <SliceZone {...props} resolver={resolver} /> */}
      <Container>
        <h1>Hello homepage!</h1>
        <Button primary>Test</Button>
      </Container>
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams: {
    uid: "home",
  },
});

export default Page;
