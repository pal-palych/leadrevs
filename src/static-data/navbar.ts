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
    title: "Pricing",
    href: "#pricing",
    external: false,
  },
  {
    id: uuid(),
    title: "Contact",
    href: "/contact",
    external: false,
  },
];
