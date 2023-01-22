import Header from "@/components/organisms/Header";
import Head from "next/head";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Kentara</title>
      </Head>
      <Header />
    </>
  );
};

export default index;
