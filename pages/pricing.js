import Footer from "components/FooterBar";
import Header from "components/HeaderData";
import Nav from "components/Navbar";
import { COMPANY } from "data/company.json";
import HeadTitle from "components/HeadTitle";
import Section from "components/Section";
import Container from "components/Container";

// Will work on actual calculations once the overall website is complete. These
// are just temporary values for now. WIll also include other parts such as OS,
// motherboard, and power supply.
// Order: name, gpu, cpu, ram, storage, additional fees, total price
const pcPresets = [
  {
    name: "PC 1",
    gpu: "nVidia RTX 3070",
    cpu: "AMD Ryzen 9 3900X",
    ram: "16 GB DDR4",
    storage: "1 TB SSD",
    fees: "$50",
    total: "~$1500",
  },
  {
    name: "PC 2",
    gpu: "nVidia RTX 2070",
    cpu: "AMD Ryzen 7 3700X",
    ram: "16 GB DDR4",
    storage: "1 TB SSD",
    fees: "$96",
    total: "~$1600",
  },
  {
    name: "PC 3",
    gpu: "nVidia RTX 2070",
    cpu: "AMD Ryzen 7 3700X",
    ram: "16 GB DDR4",
    storage: "1 TB SSD",
    fees: "$96",
    total: "~$1600",
  },
];

// For the row titles of the table.
const tableHeads = [
  "Example",
  "GPU",
  "CPU",
  "RAM",
  "Storage",
  "Additional Fees*",
  "Total Price**",
];

export default function Pricing() {
  // Define classes for the table rows.
  // Variable borderClasses needs a space in front in order for the website
  // to recognize them as classes (otherwise they'll get mixed up with the other classes).
  const itemOneClasses = "px-4 py-8";
  const borderClasses = " border-t-2 border-gray-200";

  return (
    <>
      <HeadTitle>Pricing</HeadTitle>

      <Header />
      <Nav />

      {/* Hero section */}
      <Section background="bg-gray-100">
        <Container classes="flex items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font uppercase sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              There are no fixed prices for our computers.
            </h1>
            <p className="mb-8 leading-relaxed">
              At {COMPANY.name}, the prices varies on the level of performance.
              For example, if you're looking for a computer that is able to play
              high intensive games at maximum graphics, that computer will
              require more expensive components, increasing the costs.
              Conversely, if you're looking for a general-purpose computer, the
              costs of the components will decrease. Ultimately, the pricing of
              our computers depends on your needs.
            </p>
          </div>
        </Container>
      </Section>

      {/* Pricing section */}
      <Section>
        <Container>
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing Examples
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p> */}
          </div>
          {/* Table section */}
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  {/* Fill row titles */}
                  {tableHeads.map((item, key) => (
                    <th
                      key={key}
                      className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Iterate each row and fill them with information using an array defined above. */}
                {pcPresets.map((item, key) => (
                  <tr key={key}>
                    {/* In the most unlikely event that the table only contains one object, the variable
                        borderClasses won't be included. Even if the chances are super slim, I'll keep the 
                        additional code just in case! */}
                    {pcPresets.length > 1 ? (
                      <>
                        <td className={itemOneClasses + borderClasses}>
                          {item.name}
                        </td>
                        <td className={itemOneClasses + borderClasses}>
                          {item.gpu}
                        </td>
                        <td className={itemOneClasses + borderClasses}>
                          {item.cpu}
                        </td>
                        <td className={itemOneClasses + borderClasses}>
                          {item.ram}
                        </td>
                        <td className={itemOneClasses + borderClasses}>
                          {item.storage}
                        </td>
                        <td
                          className={
                            // The string needs a space at the front so it can count as
                            // a class. Plus, the data should be centered because it really
                            // looks odd if its aligned to the left.
                            itemOneClasses + borderClasses + " text-center"
                          }
                        >
                          {item.fees}
                        </td>
                        <td className={itemOneClasses + borderClasses}>
                          {item.total}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className={itemOneClasses}>{item.name}</td>
                        <td className={itemOneClasses}>{item.gpu}</td>
                        <td className={itemOneClasses}>{item.cpu}</td>
                        <td className={itemOneClasses}>{item.ram}</td>
                        <td className={itemOneClasses}>{item.storage}</td>
                        <td className={itemOneClasses}>{item.fees}</td>
                        <td className={itemOneClasses}>{item.total}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="flex mt-8 lg:w-2/3 lg:text-left text-center w-full mx-auto">
            *Costs include operating system, Wifi adapter, coolants, and labor.
          </p>
          <p className="flex mt-4 lg:w-2/3 lg:text-left text-center w-full mx-auto">
            **Price calculated based on market prices.
          </p>
        </Container>
      </Section>

      {/* Email section */}
      <Section background="bg-gray-100">
        <Container>
          <div className="text-center">
            <h1 className="title-font uppercase lg:text-5xl text-4xl mb-4 font-medium text-gray-900">
              Ready to Order?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We'll respond ASAP! Promise!
            </p>
          </div>
          <div className="flex mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={COMPANY.email}
              className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Email
            </a>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
