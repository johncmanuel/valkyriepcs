import Link from 'next/link'


export default function Footer() {
    return <footer className="border-gray-200 border-t">
        <div className="container p-6">
            <nav>
                <ul className="flex justify-between flex-wrap md:flex-no-wrap">
                    <li className="w-full mb-2 md:mb-0 md:w-auto pt-0 md:pt-1">
                        {/* Img logo */}
                        <Link href="/">
                            <img src="/imagehere" alt="Company Logo"></img>
                        </Link>
                    </li>
                    <li className="w-1/2 md:w-auto mb-6 md:mb-0 leading-loose">
                        <h2 className="font-bold text-sm mb-1 md:mb-2 uppercase tracking-widest">
                            Company
                        </h2>
                        <ul>
                            <li className="text-sm mb-3 flex">
                                <Link href="/about">
                                    {/* Create a JSON that tracks all of the 'Company' listings */}
                                    <a className="font-normal text-black hover:text-g   rey-800">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="text-sm mb-3 flex">
                                <Link href="/pricing">
                                    {/* Create a JSON that tracks all of the 'Company' listings */}
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/* Copyright */}
            <div className="flex justify-between flex-col md:flex-row pt-2 mt-2 md:mt-9 pb-4 border-gray-200 border-t">
                <span className="text-sm text-black">
                    Copyright © 2020 Valkyrie PCs. All rights reserved.
                </span>
            </div>
        </div>
    </footer>
}