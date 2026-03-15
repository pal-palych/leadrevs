import { Service } from "@/types/service";
import { v4 as uuid } from "uuid";

const websiteDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Your one-page Tilda or Wix site is costing you customers every day. While
      your competitors have 10+ pages ranking for every service they offer, Google
      can&apos;t even find you. We build WordPress sites with individual pages for every
      service and location — so when someone searches &ldquo;brake repair Raleigh&rdquo;
      or &ldquo;water heater replacement Cary,&rdquo; you actually show up.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> What you get
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">15+ pages — one for each service you offer</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Mobile-first design with click-to-call buttons</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">SEO-optimized content for your city and services</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Google reviews displayed on every page</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Before/after project photos with professional presentation</span>
      </li>
    </ul>
  </div>
);

const googleAdsDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Stop burning money on broad match keywords and random clicks. We set up
      exact match campaigns targeting people who are actively searching for your
      specific services right now. One bathroom remodel booking from Google Ads
      can pay for your entire monthly ad budget.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> What you get
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Exact match keyword targeting — no wasted clicks</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Dedicated landing page for each campaign</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Call tracking so you know which ads drive real calls</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Monthly report showing cost per lead and ROI</span>
      </li>
    </ul>
  </div>
);

const gbpDetails = (
  <div>
    <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
      Your Google Business Profile is the first thing people see when they search
      for your business. We optimize it so you rank higher in the Map Pack, get
      more calls directly from Google, and build a review machine that runs on
      autopilot through your existing CRM.
    </p>
    <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
      <span className="text-primary">01.</span> What you get
    </h4>
    <ul className="list mb-7 list-inside list-disc">
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Complete profile optimization (photos, services, hours, description)</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Automated review requests after every job</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Weekly posts to keep your profile active and ranking</span>
      </li>
      <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
        <span className="text-body-color">Citation building across 50+ directories</span>
      </li>
    </ul>
  </div>
);

export const serviceData: Service[] = [
  {
    id: uuid(),
    title: "Website That Actually Ranks",
    description:
      "Your one-page site can't compete. We build 15+ page WordPress sites with a page for every service — so Google can actually find you.",
    slug: "website-design",
    image: "/images/services/service-01.jpg",
    details: websiteDetails,
  },
  {
    id: uuid(),
    title: "Google Ads That Pay For Themselves",
    description:
      "Exact match targeting only. One bathroom remodel or engine replacement from a Google Ad can cover your entire monthly budget.",
    slug: "google-ads",
    image: "/images/services/service-02.jpg",
    details: googleAdsDetails,
  },
  {
    id: uuid(),
    title: "Google Business Profile & Local SEO",
    description:
      "Show up in the Map Pack when people search for your services. Automated reviews, fresh photos, weekly posts, and citation building.",
    slug: "google-business-profile",
    image: "/images/services/service-03.jpg",
    details: gbpDetails,
  },
];
