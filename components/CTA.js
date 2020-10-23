import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-4 lg:flex lg:items-center lg:justify-between">
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
  );
}
