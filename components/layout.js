import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";
import { COMPANY } from "data/company.json"

export default function Layout({ children }) {
    return <>
        <Header />
        <Nav info={COMPANY} />
        {children}
        <Footer info={COMPANY} />
    </>
}