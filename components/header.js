import Head from "next/head";
import { COMPANY } from "data/company.json";

export default function Header() {
  return (
    <Head>
      {/* Fonts */}
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="stylesheet"
      />

      {/* Primary Meta Tags */}
      <meta name="title" content={COMPANY.meta_title} />
      <meta name="description" content={COMPANY.meta_desc} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={COMPANY.url} />
      <meta property="og:title" content={COMPANY.meta_title} />
      <meta property="og:description" content={COMPANY.meta_desc} />
      <meta property="og:image" content={COMPANY.img} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={COMPANY.url} />
      <meta property="twitter:title" content={COMPANY.meta_title} />
      <meta property="twitter:description" content={COMPANY.meta_desc} />
      <meta property="twitter:image" content={COMPANY.img} />
    </Head>
  );
}
