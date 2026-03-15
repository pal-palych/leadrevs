import PageTitle from "@/components/Common/PageTitle";
import SingleService from "@/components/Home/Service/SingleService";
import { serviceData } from "@/static-data/service";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Local Businesses | LeadRevs",
  description: "Local SEO, Google Ads, and Web Design services built for HVAC, plumbing, roofing, and electrical companies. Get more leads, more calls, more bookings.",
};

export default function page() {
  return (
    <>
      <PageTitle
        pageTitle="Our Services"
        pageDescription="Everything you need to get found online, generate qualified leads, and grow your home service business. No long-term contracts."
      />

      <section className="bg-gray-50 pt-[90px] pb-20">
        <div className="container grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]">
          {serviceData.map((service) => (
            <SingleService key={service?.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
