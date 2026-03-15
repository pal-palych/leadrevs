import { Portfolio } from "@/types/portfolio";
import { v4 as uuid } from "uuid";

const caseStudyDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      This client came to us with an outdated website and zero Google visibility.
      Within 90 days, we had them ranking in the top 3 of the Google Map Pack
      for their primary service keywords.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> What we did
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Complete Google Business Profile overhaul</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Built a fast, mobile-first website with click-to-call</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Launched targeted Google Ads for emergency service keywords</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Built 50+ local citations across directories</span>
      </li>
    </ul>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">02.</span> Results
    </h4>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      312% increase in organic traffic. 2.5x more inbound calls per month.
      Google Ads generating $15 leads with a 6:1 return on ad spend.
    </p>
  </div>
);

export const portfolioData: Portfolio[] = [
  {
    id: uuid(),
    title: "HVAC company: 312% traffic increase",
    slug: "hvac-traffic-increase",
    sortDescription:
      "Took a local HVAC company from page 3 to the Google Map Pack in 90 days. Calls doubled within the first quarter.",
    image: "/images/portfolio/portfolio-01.jpg",
    tags: ["local-seo", "google-ads"],
    categories: ["Local SEO"],
    details: caseStudyDetails,
  },
  {
    id: uuid(),
    title: "Plumber: 47 leads/month from Google Ads",
    slug: "plumber-google-ads",
    sortDescription:
      "Built and managed a Google Ads campaign generating 47 qualified leads per month at $12 cost per lead.",
    image: "/images/portfolio/portfolio-02.jpg",
    tags: ["google-ads"],
    details: caseStudyDetails,
  },
  {
    id: uuid(),
    title: "Roofer: new website + 3x more bookings",
    slug: "roofer-website-redesign",
    sortDescription:
      "Redesigned a roofing company's website for mobile-first speed and conversion. Online bookings tripled in 60 days.",
    image: "/images/portfolio/portfolio-03.jpg",
    tags: ["web-design"],
    details: caseStudyDetails,
  },
  {
    id: uuid(),
    title: "Electrician: #1 in Google Maps",
    slug: "electrician-google-maps",
    sortDescription:
      "Full Local SEO campaign that put this electrician at #1 in the Google Map Pack for 12 target keywords across 3 cities.",
    image: "/images/portfolio/portfolio-04.jpg",
    tags: ["local-seo", "web-design"],
    details: caseStudyDetails,
  },
];
