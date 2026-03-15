import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Pricing from "@/components/Home/Pricing";
import Service from "@/components/Home/Service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadRevs | Digital Marketing for Local Home Service Businesses",
  description: "Stop losing leads to competitors. We help HVAC, plumbing, roofing, auto repair, and electrical companies get found on Google, get more calls, and book more jobs. Raleigh-Durham, NC.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Newsletter />
      <Pricing />
      <Contact />
    </>
  );
}
