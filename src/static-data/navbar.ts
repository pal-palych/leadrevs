import { NavbarItem } from "@/types/navbar";
import { v4 as uuid } from "uuid";

export const navbarData: NavbarItem[] = [
  {
    id: uuid(),
    title: "About",
    href: "#about",
    external: false,
  },
  {
    id: uuid(),
    title: "Services",
    href: "#services",
    external: false,
  },
  {
    id: uuid(),
    title: "Portfolio",
    href: "#portfolio",
    external: false,
  },
  {
    id: uuid(),
    title: "Pricing",
    href: "#pricing",
    external: false,
  },
  {
    id: uuid(),
    title: "Pages",
    submenu: [
      {
        id: uuid(),
        title: "Services",
        href: "/service",
        external: false,
      },
      {
        id: uuid(),
        title: "Portfolio",
        href: "/portfolio",
      },
      {
        id: uuid(),
        title: "Blog",
        href: "/blog",
        external: false,
      },
      {
        id: uuid(),
        title: "Contact",
        href: "/contact",
      },
    ],
  },
];
