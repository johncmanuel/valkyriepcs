import Link from 'next/link'


export default function Footer() {
    return <footer className="bg-gray-100">
        <div className="pt-6">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                {/* Company */}
                <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Company</div>
                    {/* Span for adding alerts on the links */}
                    {/* <span className="text-teal-600 text-xs p-1" /> */}
                    <Link href="/about">
                        <a className="my-3 block">
                            About
                        </a>
                    </Link>
                    <Link href="/pricing">
                        <a className="my-3 block">
                            Pricing
                        </a>
                    </Link>
                    <Link href="/services">
                        <a className="my-3 block">
                            Services
                        </a>
                    </Link>
                    <Link href="/careers">
                        <a className="my-3 block">
                            Careers
                        </a>
                    </Link>
                </div>
                {/* Resources */}
                <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Resources</div>
                    <Link href="/blog">
                        <a className="my-3 block">
                            Blog
                        </a>
                    </Link>
                    <Link href="/customers">
                        <a className="my-3 block">
                            Customers
                        </a>
                    </Link>
                </div>
                {/* Products */}
                <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Products</div>
                    <Link href="/computers">
                        <a className="my-3 block">
                            Computers
                        </a>
                    </Link>
                    {/* Soon! */}
                    {/* <a className="my-3 block">Software<span className="text-teal-600 text-xs p-1" /></a> */}
                    {/* <a className="my-3 block">Great Deals <span className="text-teal-600 text-xs p-1"></span></a> */}
                    {/* <a className="my-3 block">Mobile <span className="text-teal-600 text-xs p-1" /></a> */}
                </div>
                {/* Will be enabled again once company gets bigger */}
                {/* <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Support</div>
                    <a className="my-3 block">Help Center <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block">Privacy Policy <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block">Conditions <span className="text-teal-600 text-xs p-1" /></a>
                </div> */}
                {/* Social Media */}
                <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Social</div>
                    <a className="my-3 block" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/valkyriepcs_/" >Instagram</a>
                </div>
                {/* Contact */}
                <div className="p-5 w-48">
                    <div className="text-xs uppercase text-gray-500 font-medium">Contact</div>
                    <a className="my-3 block" target="_blank" rel="noopener noreferrer" href="#">valkyriepcs@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 pt-6">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
                            md:flex-row max-w-6xl">
                <div className="mt-2">{`© Copyright ${new Date().getFullYear()} Valkyrie PCs. All Rights Reserved.`}</div>
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <Link href="/legal/privacy">
                        {`Privacy Policy`}              
                    </Link>
                    &nbsp; | &nbsp;
                    <Link href="/legal/terms">
                        {`Terms of Service`}
                    </Link>
                </div>
            </div>
        </div>
    </footer>
}