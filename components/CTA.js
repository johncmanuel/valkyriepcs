import Link from "next/link";
import Section from "./Section";
import RoundedButton from "./RoundedButton";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-4 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:text-left text-center">
          Ready for a new PC?
          <br />
          <span className="text-indigo-600">Let's build it.</span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0 justify-center">
          <div className="inline-flex">
            <Link href="/pricing" passHref>
              <RoundedButton>Get Started</RoundedButton>
            </Link>
          </div>
          <div className="inline-flex">
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
        </div>
      </div>
    </Section>
  );
}
