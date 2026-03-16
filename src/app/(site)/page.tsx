import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import Pricing from "@/components/Home/Pricing";
import Service from "@/components/Home/Service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeadRevs | More Calls From Google for Service Businesses in the Triangle",
  description: "LeadRevs helps plumbers, HVAC companies, roofers, electricians, and local service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill get more qualified calls from Google through better websites, ads, and local SEO.",
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
