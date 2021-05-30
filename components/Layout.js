import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { GlobalStyle, theme } from "../styles";

const Layout = ({ children, menu, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Ignite 2021"}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header menu={menu} />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
