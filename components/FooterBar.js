import Link from "next/link";
import Links from "components/Links";
import { COMPANY } from "data/company.json";

export default function Footer() {
  return (
    <footer className="border-gray-100 border-t">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* Placeholder image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{COMPANY.name}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{COMPANY.motto}</p>
        </div>
        {/* Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {Links.map((element, key) => (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={key}>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                {element.category}
              </h2>
              <nav className="list-none mb-10">
                {element.items.map((item, key) => (
                  <li className="my-6 md:my-3" key={key}>
                    {/* Since the links in the 'Social' category and 'Contact' 
                        redirects the user to external sites, it's best to use an
                        <a> tag that opens to a new tab. Hence, this avoids using the
                        Link component provided by Next.js, which only opens in the
                        same tab. */}
                    {element.category === "Social" ||
                    element.category === "Contact" ? (
                      <a
                        className="text-gray-600 hover:text-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.link}>
                        <a className="text-gray-600 hover:text-gray-800">
                          {item.name}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      {/* Copyright and Legal Sections */}
      <div className="border-gray-100 border-t">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row lg:justify-evenly">
          <p className="text-gray-500 text-sm text-center sm:float-left">
            {`© Copyright ${new Date().getFullYear()} ${
              COMPANY.name
            }. All Rights Reserved.`}
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
