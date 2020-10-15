import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-gray-100 border-t">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
            <p>img</p>
            <span className="ml-3 text-xl">Valkyrie PCs</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">High-quality PCs.</p>
        </div>
        {/* Company */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li className="my-6 md:my-3">
                <Link href="/about">
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </Link>
              </li>
              <li className="my-6 md:my-3">
                <Link href="/pricing">
                  <a className="text-gray-600 hover:text-gray-800">Pricing</a>
                </Link>
              </li>
              {/* <li className="my-6 md:my-3">
                                <Link href="/services">
                                    <a className="text-gray-600 hover:text-gray-800">Services</a>
                                </Link>
                            </li>
                            <li className="my-6 md:my-3">
                                <Link href="/careers">
                                    <a className="text-gray-600 hover:text-gray-800">Careers</a>
                                </Link>
                            </li> */}
            </nav>
          </div>
          {/* Resources */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li className="my-6 md:my-3">
                <Link href="/blog">
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </Link>
              </li>
              <li className="my-6 md:my-3">
                <Link href="/customers">
                  <a className="text-gray-600 hover:text-gray-800">Customers</a>
                </Link>
              </li>
            </nav>
          </div>
          {/* Products */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Products
            </h2>
            <nav className="list-none mb-10">
              <li className="my-6 md:my-3">
                <Link href="/computers">
                  <a className="text-gray-600 hover:text-gray-800">
                    Desktop Computers
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          {/* Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Social
            </h2>
            <nav className="list-none mb-10">
              <li className="my-6 md:my-3">
                <a
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/valkyriepcs_/"
                >
                  Instagram
                </a>
              </li>
            </nav>
          </div>
          {/* Contact */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li className="my-6 md:my-3">
                <a
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  valkyriepcs@gmail.com
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* Copyright and Legal Sections */}
      <div className="border-gray-100 border-t">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row lg:justify-evenly">
          <p className="text-gray-500 text-sm text-center sm:float-left">
            {`© Copyright ${new Date().getFullYear()} Valkyrie PCs. All Rights Reserved.`}
          </p>
          <div className="text-gray-500 text-sm text-center sm:float-right lg:my-0 my-4">
            <Link href="/legal/terms">{`Terms of Service`}</Link>
            &nbsp; | &nbsp;
            <Link href="/legal/terms">{`Privacy Policy`}</Link>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </footer>
  );
}
