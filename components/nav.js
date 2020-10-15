import { Transition } from "@tailwindui/react";
import { useState } from "react";
import Link from "next/link";

function Dropdown() {
  const [isOn, setIsOn] = useState(false);
  const [inMenu, setInMenu] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-checked={isOn}
        onMouseEnter={() => {
          setIsOn(!isOn);
          console.log("isOn: " + !isOn);
          if (isOn === true) {
            console.log("isOn is true, thus inMenu is true!");
            setInMenu(!inMenu);
          }
        }}
        onMouseLeave={() => {
          if (inMenu !== true) {
            console.log("inMenu is false, so I must make isOn false.");
            setIsOn(false);
          }
        }}
        className={`${
          isOn ? "text-gray-900" : "text-gray-500"
        } inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
      >
        <span>Company</span>
      </button>

      <Transition
        // Transition component triggered by button
        show={isOn}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        onMouseEnter={() => {
          setInMenu(!inMenu);
          console.log("inMenu: " + inMenu);
        }}
        onMouseLeave={() => {
          setIsOn(false);
          console.log("inMenu: " + inMenu);
        }}
      >
        {/* Show desktop menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pt-3 px-2 w-screen max-w-md sm:px-0">
          <div className="rounded-lg shadow-2xl">
            <div className="rounded-lg shadow-xs overflow-hidden">
              <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="space-y-1">
                    {/* Create a JSON that tracks all of the 'Company' listings */}
                    <p className="text-base leading-6 font-medium text-gray-900">
                      About
                    </p>
                    {/* <p className="text-sm leading-5 text-gray-500">
                                        
                                    </p> */}
                  </div>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div className="space-y-1">
                    <p className="text-base leading-6 font-medium text-gray-900">
                      Events
                    </p>
                    {/* <p className="text-sm leading-5 text-gray-500">
                                    </p> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default function Nav() {
  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="flex text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                  Valkyrie PCs
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                {/* Heroicon name: menu */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
              >
                Contact
              </a>
              <div className="relative">
                {/* Toggle dropdown menu when clicking on 'Company' */}
                <Dropdown />
              </div>
            </nav>
            {/* <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            Sign in
                        </a>
                        <span className="inline-flex rounded-md shadow-sm">
                            <a href="#" className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                Sign up
                             </a>
                        </span>
                    </div> */}
          </div>
        </div>

        {/*
                Mobile menu, show/hide based on mobile menu state.

                Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
                    Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            */}
        {/* <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg">
                    <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                                </div>
                                <div className="-mr-2">
                                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <nav className="grid gap-y-8">
                                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-gray-900">
                                            Analytics
                </div>
                                    </a>
                                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-gray-900">
                                            Engagement
                </div>
                                    </a>
                                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-gray-900">
                                            Security
                </div>
                                    </a>
                                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-gray-900">
                                            Integrations
                </div>
                                    </a>
                                    <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <div className="text-base leading-6 font-medium text-gray-900">
                                            Automations
                </div>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Pricing
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Docs
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Enterprise
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Blog
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Help Center
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Guides
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Security
            </a>
                                <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                    Events
            </a>
                            </div>
                            <div className="space-y-6">
                                <span className="w-full flex rounded-md shadow-sm">
                                    <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Sign up
              </a>
                                </span>
                                <p className="text-center text-base leading-6 font-medium text-gray-500">
                                    Existing customer?
              <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        Sign in
              </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    </>
  );
}
