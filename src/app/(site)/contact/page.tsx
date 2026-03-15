import PageTitle from "@/components/Common/PageTitle";
import Contact from "@/components/Contact";
import ThankYou from "./thank-you";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Marketing Audit | LeadRevs",
  description: "Request a free, no-obligation marketing audit for your home service business. We'll show you exactly where you're losing leads and how to fix it.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const params = await searchParams;
  const submitted = params?.submitted === "true";

  if (submitted) {
    return <ThankYou />;
  }

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
