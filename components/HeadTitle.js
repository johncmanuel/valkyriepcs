import Head from "next/head";

export default function HeadTitle({ children }) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}
