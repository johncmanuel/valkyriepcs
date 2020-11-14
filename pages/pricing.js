import Footer from "components/footer";
import Header from "components/header";
import Nav from "components/nav";
import { COMPANY } from "data/company.json";
import HeadTitle from "components/HeadTitle";

export default function Pricing() {
  return (
    <>
      <HeadTitle>{COMPANY.meta_title}</HeadTitle>

      <Header />
      <Nav />
      <p>Pricing</p>
      <Footer />
    </>
  );
}
