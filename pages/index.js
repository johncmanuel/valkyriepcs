import Footer from 'components/Footer'
import Nav from 'components/Nav'
import Header from 'components/Header'


export default function Home() {
  return <>
    <Header />
    <Nav />

    {/* Hero Section */}
    <section className="pb-16 pt-16">
      <article className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <header>
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Valkyrie PCs
            </h1>
            <br className="inline-block" />
            <h3 className="sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              Building computers for anyone at any price.
            </h3>
          </header>
          <br className="inline-block" />
        </div>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get Started
            </button>
          </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div> */}
      </article>
    </section>

    {/* CTA Section */}
    <section className="pt-10 pb-10">
      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Ready for a new PC?
          <br />
            <span className="text-indigo-600">Let's build it.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Get Started
              </a>
            </div>
            {/* <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn more
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
}
