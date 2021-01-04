import { COMPANY } from "data/company.json";
import Flag from "components/icons/Flag";
import BlogIcon from "./icons/BlogIcon";

const links = [
  {
    category: "Company",
    items: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Pricing",
        link: "/pricing",
      },
      {
        name: "Careers",
        link: "/careers",
      },
    ],
  },
  {
    category: "Resources",
    items: [
      {
        name: "Blog",
        link: "/blog",
        icon: Flag,
      },
      {
        name: "FAQ",
        link: "/faq",
        icon: BlogIcon,
      },
      // Will add later on in the future.
      // {
      //   name: "Customers",
      //   link: "/customers",
      // },
    ],
  },
  {
    category: "Contact",
    items: [
      {
        name: "Email",
        link: COMPANY.email,
      },
    ],
  },
  {
    category: "Social",
    items: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/valkyriepcs_/",
      },
    ],
  },
];

export default links;
