import Link from "next/link";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Header from "components/Header";
import ComputerMemory from "components/icons/ComputerMemory";
import Tools from "components/icons/Tools";
import Desktop from "components/icons/Desktop";
import ShippingFast from "components/icons/ShippingFast";
import Checkmark from "components/icons/Checkmark";
import { COMPANY } from "data/company.json";
import HeadTitle from "components/HeadTitle";
import CTA from "components/CTA";
import Container from "components/Container";
import Section from "components/Section";
import RoundedButton from "components/RoundedButton";
import QuotationMark from "components/icons/QuotationMark";
import Image from "next/image";

// Using an array to store text and avoid repeating HTML and CSS
// in the features section
const features_list = [
  "Fast and Efficent",
  "Carefully Selected Parts From Trusted Brands",
  "Handled Carefully",
  "Quick Construction Time",
  "Stress Tested",
  "High Durability",
];

// Using an array of objects to store text and avoid repeating HTML and CSS
// in the showcase section
const pc_int_list = [
  {
    img_path: "/imgs/pcs/pc2_int.jpg",
    alt: "Computer 2 Interior",
  },
  {
    img_path: "/imgs/pcs/pc1_int.jpg",
    alt: "Computer 1 Interior",
  },
  {
    img_path: "/imgs/pcs/pc3_int.jpg",
    alt: "Computer 3 Interior",
  },
];

// Using an array of objects to store text and avoid repeating HTML and CSS
// in the gallery section
const pc_list = [
  {
    img_path: "/imgs/pcs/pc2.jpg",
    alt: "Computer 2",
  },
  {
    img_path: "/imgs/pcs/pc1.jpg",
    alt: "Computer 1",
  },
  {
    img_path: "/imgs/pcs/pc3.jpg",
    alt: "Computer 3",
  },
];

export default function Home() {
  return (
    <>
      <HeadTitle>{COMPANY.meta_title}</HeadTitle>

      <Header />
      <Nav />

      {/* Hero Section */}

      {/* Making this specific section tag different from the normal Section component. 
          Will consider making the Section component more customizable */}
      <section className="py-32 bg-transparent">
        <article className="container mx-auto px-4 sm:px-6 flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <header>
              <h1 className="text-4xl mb-4 font-medium text-gray-900">
                The Independent Computer Building Business
              </h1>
              <br className="inline-block" />
              <h3 className="sm:text-2xl text-xl mb-4 font-medium font-serif text-gray-900">
                {COMPANY.motto}
              </h3>
            </header>
            <br className="inline-block" />
          </div>
          <div className="flex justify-center">
            <Link href="/pricing" passHref>
              <RoundedButton>Get Started</RoundedButton>
            </Link>
            <Link href="/about" passHref>
              <RoundedButton
                classes="ml-4"
                textColor="text-gray-700"
                background="bg-gray-200"
                backgroundHover="hover:bg-gray-300"
              >
                About Us
              </RoundedButton>
            </Link>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div> */}
        </article>
      </section>

      {/* Showcase */}
      <Section background="bg-gray-100">
        <Container>
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 text-center md:text-left font-medium text-4xl mb-2 sm:mb-0">
                Our Products
              </h1>
              {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {pc_int_list.map((item, key) => (
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={key}>
                <div className="h-65">
                  <div className="bg-gray-200 bg-cover shadow-lg rounded-lg py-4 px-4">
                    <Image
                      alt={item.alt}
                      className="object-cover object-center h-full w-full rounded-lg"
                      src={item.img_path}
                      quality={100}
                      // It seems like height and width doesn't override the classes
                      // provided by Tailwind CSS. Odd.
                      height={500}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features section */}
      <Section>
        <Container>
          <div className="text-center mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium text-center text-gray-900 mb-4">
              Why Pick Us?
            </h1>
            <p className="text-xl font-serif leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              At Valkyrie PCs, we ensure that our computers are carefully built
              to meet your expectations.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {features_list.map((item, key) => (
              <div className="p-2 sm:w-1/2 w-full" key={key}>
                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                  <Checkmark />
                  <span className="title-font font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Steps section */}
      <Section background="bg-gray-100">
        <Container>
          <div className="flex flex-col flex-wrap w-full text-center mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium text-center text-gray-900 mb-4">
              How We Work
            </h1>
            <p className="text-xl font-serif leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We take pride in our craft, but we also take pride in our process.
            </p>
          </div>
          {/* The actual step process right here */}
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <ComputerMemory />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Start
                </h2>
                <p className="leading-relaxed">
                  After sending us your parts list, we order the exact,
                  necessary components for your computer.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Tools />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Assembly
                </h2>
                <p className="leading-relaxed">
                  Once the parts have been shipped to us, we assemble your
                  computer, ensuring that each piece of hardware is properly
                  embedded.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Desktop />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Testing & Final Touches
                </h2>
                <p className="leading-relaxed">
                  Next, we begin stress-testing your computer (via UNIGINE
                  Benchmarks) for performance stability at maximum usage.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <ShippingFast />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Delivery
                </h2>
                <p className="leading-relaxed">
                  Finally, we contact you for pick-ups. Once the PC delivers
                  safely in your hands, it is yours to keep, forever!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
              Our Past Sales
            </h1>
            <p className="lg:w-2/3 font-serif mx-auto leading-relaxed text-xl">
              Here are some pictures of computers that we built for our very
              first customers!
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 overflow-hidden">
            {pc_list.map((item, key) => (
              <div className="my-4 px-4 w-full xl:w-1/2" key={key}>
                <div className="bg-gray-200 bg-cover shadow-lg rounded-lg py-4 px-4">
                  <Image
                    src={item.img_path}
                    className="rounded-lg"
                    alt={item.alt}
                    quality={100}
                    // Now this one is affected by Image component's
                    // height and width
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      {/* <Section background="bg-gray-100">
        <Container>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded shadow-lg">
                <QuotationMark />
                <p className="leading-relaxed mb-6 font-serif">
                  This is a great company that is adept at creating computers.
                  Customer service is some of the best I have encountered so
                  far. Despite all of this their prices are incredibly
                  reasonable and fair. Worth every penny! 5 stars!
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      John Ishibashi
                    </span>
                    <span className="text-gray-500 text-sm">CUSTOMER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded shadow-lg">
                <QuotationMark />
                <p className="leading-relaxed mb-6 font-serif">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-sm">CUSTOMER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section> */}

      {/* One-Testimonal Section Only */}
      <Section background="bg-gray-100">
        <Container>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <QuotationMark />
            <p className="leading-relaxed text-lg">
              This is a great company that is adept at creating computers.
              Customer service is some of the best I have encountered so far.
              Despite all of this their prices are incredibly reasonable and
              fair. Worth every penny! 5 stars!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              John Ishibashi
            </h2>
            <p className="text-gray-500">Customer</p>
          </div>
        </Container>
      </Section>

      <CTA />

      <Footer />
    </>
  );
}
