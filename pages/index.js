import Link from "next/link";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Header from "components/Header";
import ComputerMemory from "components/ComputerMemory";
import Tools from "components/Tools";
import Desktop from "components/Desktop";
import ShippingFast from "components/ShippingFast";
import Checkmark from "components/Checkmark";
import { COMPANY } from "data/company.json";
import HeadTitle from "components/HeadTitle";

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
    img_path: "/imgs/pc2_int.jpg",
    alt: "Computer 2 Interior",
  },
  {
    img_path: "/imgs/pc1_int.jpg",
    alt: "Computer 1 Interior",
  },
  {
    img_path: "/imgs/pc3_int.jpg",
    alt: "Computer 3 Interior",
  },
];

// Using an array of objects to store text and avoid repeating HTML and CSS
// in the gallery section
const pc_list = [
  {
    img_path: "/imgs/pc2.jpg",
    alt: "Computer 2",
  },
  {
    img_path: "/imgs/pc1.jpg",
    alt: "Computer 1",
  },
  {
    img_path: "/imgs/pc3.jpg",
    alt: "Computer 3",
  },
];

export default function Home() {
  return (
    <>
      <HeadTitle>{COMPANY.name}</HeadTitle>

      <Header />
      <Nav />

      {/* Hero Section */}
      <section className="py-24 bg-transparent">
        <article className="container mx-auto px-4 sm:px-6 flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <header>
              <h1 className="lg:text-5xl text-4xl mb-4 font-medium text-gray-900">
                {COMPANY.name}
              </h1>
              <br className="inline-block" />
              <h3 className="sm:text-2xl text-xl mb-4 font-medium text-gray-900">
                {COMPANY.motto}
              </h3>
            </header>
            <br className="inline-block" />
          </div>
          <div className="flex justify-center">
            <Link href="/pricing">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="ml-4 sinline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                About Us
              </button>
            </Link>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div> */}
        </article>
      </section>

      {/* Showcase */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 text-center md:text-left font-medium title-font text-4xl mb-2 sm:mb-0">
                Products
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
                    <img
                      alt={item.alt}
                      className="object-cover object-center h-full w-full rounded-lg"
                      src={item.img_path}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
              Why Pick Us?
            </h1>
            <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
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
        </div>
      </section>

      {/* Steps section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-wrap px-4 sm:px-6">
          <div className="flex flex-col w-full text-center mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium text-center title-font text-gray-900 mb-4">
              How We Work
            </h1>
            <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We take pride in our craft, but we also take pride in our process.
            </p>
          </div>
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
                  Beginning
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
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="lg:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
              Our Past Sales
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
              Here are some pictures of computers that we built for our very
              first customers!
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 overflow-hidden">
            <div className="my-4 px-4 w-full xl:w-1/2">
              <div className="bg-gray-200 bg-cover shadow-lg rounded-lg py-4 px-4">
                <img
                  src="/imgs/pc1.jpg"
                  className="rounded-lg"
                  alt="First Computer"
                />
              </div>
            </div>
            <div className="my-4 px-4 w-full xl:w-1/2">
              <div className="bg-gray-200 bg-cover shadow-lg rounded-lg py-4 px-4">
                <img
                  src="/imgs/pc2.jpg"
                  className="rounded-lg"
                  alt="Second Computer"
                />
              </div>
            </div>
            <div className="my-4 px-4 w-full xl:w-1/2">
              <div className="bg-gray-200 bg-cover shadow-lg rounded-lg py-4 px-4">
                <img
                  src="/imgs/pc3.jpg"
                  className="rounded-lg shadow-md"
                  alt="Third Computer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5">
        <div className="max-w-screen-xl mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:text-left text-center">
            Ready for a new PC?
            <br />
            <span className="text-indigo-600">Let's build it.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 justify-center">
            <div className="inline-flex">
              <Link href="/pricing">
                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="inline-flex">
              <Link href="/about">
                <button className="ml-4 sinline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
