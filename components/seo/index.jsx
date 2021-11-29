import React from "react";
import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <title>Lukman Aisyah</title>
      <meta name="description" content="Contoh Undangan Pernikahan" />

      <meta name="og:title" content="Lukman Aisyah" key="title" />
      <meta
        name="og:description"
        content="Contoh Undangan Pernikahan"
        key="og:description"
      />

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default Seo;
