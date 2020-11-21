import Container from "components/Container";
import Footer from "components/FooterBar";
import Header from "components/HeaderData";
import HeadTitle from "components/HeadTitle";
import Nav from "components/Navbar";
import Section from "components/Section";
import { COMPANY } from "data/company.json";

const faqContent = [
  {
    question: "Where are you located?",
    answer: "We are located in San Francisco, CA, United States.",
  },
  {
    question: "Where do you get your parts?",
    answer: "We get our parts from retail sellers, such as Newegg and Amazon.",
  },
  {
    question: "How does the shipping work?",
    answer: "Loren yo mama",
  },
];

export default function FAQ() {
  return (
    <>
      <HeadTitle>FAQ</HeadTitle>
      <Header />

      <Nav />

      <Section>
        <Container>
          <div className="flex flex-wrap mx-auto sm:flex-row flex-col py-4 mb-4">
            <h1 className=" text-gray-900 text-center md:text-left font-medium text-4xl mb-2 sm:mb-0">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex">
            <div className="py-2">
              {faqContent.map((item, key) => (
                <div className="my-12" key={key}>
                  <h1 className="font-medium py-1">{item.question}</h1>
                  <p className="">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="container mx-auto px-4 sm:px-6 flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="lg:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 mx-auto sm:mb-2">
              <p>hello</p>
            </div>
          </div> */}
        </Container>
      </Section>

      {/* <Section>
        <Container>
          <div className="text-center mb-12">
            <h1 className="lg:text-4xl text-3xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 mx-auto sm:mb-2">
            <div className="w-full lg:w-1/2 mx-auto px-4 py-2">
              {faqContent.map((item, key) => (
                <details className="mb-4 py-4" key={key}>
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    {item.question}
                  </summary>
                  <span className="px-4 py-6">{item.answer}</span>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section> */}
      <Footer />
    </>
  );
}
