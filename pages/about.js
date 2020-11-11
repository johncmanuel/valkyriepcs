import Footer from "components/Footer";
import Nav from "components/Nav";
import Header from "components/Header";
import HeadTitle from "components/HeadTitle";
import CTA from "components/CTA";
import Section from "components/Section";
import Container from "components/Container";
import Image from "next/image";

// Array of objects that contain all the sweet information about us three.
const bio = [
  {
    name: "John Carlo Manuel",
    label: "Co-Founder, Developer, & Entrepreneur",
    desc:
      "Hi there! I'm a software developer with interest in web development, video game development, and artifical intelligence. In my free time, I enjoy reading books and playing video games. With my fellow peers, I hope to share my love for computers and provide people with machines capable of standing the test of time!",
    img_path: "/imgs/people/john.jpg",
    alt: "John Carlo Manuel",
  },
  {
    name: "Shania Hao",
    label: "Intern",
    desc: "desc",
    img_path: "/imgs/people/shania.jpg",
    alt: "Shania Hao",
  },
  {
    name: "Emmanuel Flores",
    label: "Co-Founder, Developer, & Entrepreneur",
    desc:
      "Hello! I specialize in webbrowser automation, webscraping, and API integration, as well extensive knowledge in ecommerce including techniques for optimizing listings and increasing traffic. I have combined my passion for programming and entrepreneurship to develop innovative methods for growing businesses.",
    img_path: "/imgs/people/eman.jpg",
    alt: "Emmanuel Flores",
  },
];

export default function About() {
  return (
    <>
      <HeadTitle>About Us</HeadTitle>

      <Header />
      <Nav />

      {/* Team Section */}
      <Section>
        <Container>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium mb-4 text-gray-900">
              OUR TEAM
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">team desc</p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            {bio.map((item, key) => (
              <div className="p-4 lg:w-1/3 md:w-1/2" key={key}>
                <div className="h-full flex flex-col items-center text-center">
                  <Image
                    alt={item.alt}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                    src={item.img_path}
                    quality={100}
                    height={500}
                    width={500}
                  />
                  <div className="w-full pt-4">
                    <h2 className="font-medium text-lg text-gray-900">
                      {item.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3 pt-2">{item.label}</h3>
                    <p className="mb-4 text-sm">{item.desc}</p>
                    <span className="inline-flex">
                      {/* <a className="text-gray-500"></a>
                    <a className="ml-2 text-gray-500"></a>
                    <a className="ml-2 text-gray-500"></a> */}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTA />

      <Footer />
    </>
  );
}
