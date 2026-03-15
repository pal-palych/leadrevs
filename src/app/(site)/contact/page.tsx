import PageTitle from "@/components/Common/PageTitle";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Marketing Audit | LeadRevs",
  description: "Request a free, no-obligation marketing audit for your home service business. We'll show you exactly where you're losing leads and how to fix it.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        pageTitle="Get Your Free Audit"
        pageDescription="Tell us about your business and we'll send you a custom report showing where you're losing leads — and how to fix it. No cost, no obligation."
      />

      <Contact />
    </>
  );
}
