import Head from "next/head"


function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" key="http" />
      </Head>
      <Component {...pageProps} />
    </>
}

export default MyApp
