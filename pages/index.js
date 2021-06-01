import { Client } from "../prismic-configuration";
import { useGetStaticProps } from "next-slicezone/hooks";
import styled from "styled-components";
import React, { useEffect } from 'react';
// import SliceZone from "next-slicezone";
// import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";
import MuiButton from "./../components/Button";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

const Page = (props) => {
  return (
    <Layout menu={props.menu} title="Ignite 2021 | Homepage">
      {/* <SliceZone {...props} resolver={resolver} /> */}
      <Container>
        <h1>Hello homepage!</h1>
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
