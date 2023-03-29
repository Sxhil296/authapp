import Head from "next/head";
import React from "react";
import Layout from "../src/Layout";

const login = () => {
  return (
    <Layout>
      <Head>
        <title>NextAuthApp | Log in</title>
      </Head>
      <h1>Log in</h1>
    </Layout>
  );
};

export default login;
