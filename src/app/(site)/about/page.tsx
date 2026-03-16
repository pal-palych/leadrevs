import PageTitle from "@/components/Common/PageTitle";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LeadRevs | Marketing for Service Businesses in the Triangle",
  description:
    "LeadRevs helps service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill get more qualified calls through better websites, Google Ads, local SEO, and clear monthly reporting.",
};

export default function AboutPage() {
  return (
    <>
      <PageTitle
        pageTitle="About LeadRevs"
        pageDescription="Marketing for local service businesses across the Triangle — focused on qualified calls, tracked leads, and clear monthly reporting."
      />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">

            {/* Why LeadRevs Exists */}
            <div className="mb-16">
              <span className="mb-2 block text-lg font-semibold text-primary">
                WHY LEADREVS EXISTS
              </span>
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-4xl">
                Most local businesses don&apos;t need more marketing activity
              </h2>
              <p className="mb-5 text-base text-body-color">
                They need a website that ranks for the services they actually offer. Ads
                that target people ready to book — not random clicks. A Google Business
                Profile that shows up in the Map Pack. And reporting clear enough to
                know what&apos;s working and what isn&apos;t.
              </p>
              <p className="text-base text-body-color">
                LeadRevs exists to fix the specific gaps between a service business
                and the calls it should be getting from Google. No bloated retainers.
                No vague dashboards. Just the work that moves the phone.
              </p>
            </div>

            {/* What LeadRevs Does */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                What LeadRevs does
              </h2>
              <ul className="space-y-4">
                {[
                  "Builds websites structured to rank on Google — with a page for every service and city served",
                  "Manages Google Ads campaigns targeting high-intent local searches",
                  "Optimizes Google Business Profiles for Map Pack visibility and review growth",
                  "Sets up call tracking and form tracking so every lead has a source",
                  "Delivers monthly reports with calls received, cost per lead, and clear next steps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-base text-body-color">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-4xl">
                Built for local service businesses
              </h2>
              <p className="mb-5 text-base text-body-color">
                LeadRevs works with businesses where the phone call is the sale —
                plumbers, HVAC companies, electricians, roofers, auto repair shops,
                locksmiths, med spas, and other trades across the Triangle.
              </p>
              <p className="text-base text-body-color">
                If the business depends on customers in Raleigh, Durham, Cary, Apex,
                or Chapel Hill finding it through Google — this is what LeadRevs is
                built to improve.
              </p>
            </div>

            {/* Problems This Solves */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                Problems this solves
              </h2>
              <ul className="space-y-4">
                {[
                  "Website doesn't rank for the services actually offered",
                  "Google Ads spend is producing clicks but not enough booked jobs",
                  "Google Business Profile is incomplete, stale, or not competitive",
                  "No call tracking or lead attribution — unclear what marketing is working",
                  "Past marketing produced reports but not real leads",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-base font-bold text-primary">—</span>
                    <p className="text-base text-body-color">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Clients Get */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                What clients get
              </h2>
              <div className="-mx-4 flex flex-wrap">
                {[
                  { title: "Tracked results", desc: "Every call and form submission is logged with its source." },
                  { title: "Monthly reporting", desc: "Cost per lead, call volume, keyword performance, and clear next steps." },
                  { title: "Direct communication", desc: "No account managers, no ticket systems, no middlemen." },
                  { title: "Transparent ad spend", desc: "Billed directly through Google — never bundled or marked up." },
                  { title: "Month-to-month", desc: "No long-term contracts. Cancel anytime, no penalties." },
                  { title: "Prioritized action", desc: "Fixes ranked by what produces calls first." },
                ].map((card) => (
                  <div key={card.title} className="w-full px-4 md:w-1/2">
                    <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                      <h3 className="mb-2 text-lg font-bold text-dark">{card.title}</h3>
                      <p className="text-sm text-body-color">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                How it works
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 1.</span> Audit the current setup
                  </h3>
                  <p className="text-base text-body-color">
                    Free review of the website, Google visibility, ad accounts (if active),
                    and competitor landscape. The deliverable is a report with specific
                    findings and a prioritized action plan.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 2.</span> Fix the gaps costing calls
                  </h3>
                  <p className="text-base text-body-color">
                    Start with the changes most likely to generate calls — ad targeting,
                    site structure, tracking setup, or Google Business Profile optimization.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 3.</span> Track results and report monthly
                  </h3>
                  <p className="text-base text-body-color">
                    Every call and lead is tracked. Monthly reports show what was spent,
                    what came back, and what to adjust. No vanity metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* What a Free Audit Covers — proof of method */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-4xl">
                What a free audit covers
              </h2>
              <p className="mb-8 text-base text-body-color">
                Every audit is a custom review — not a generated PDF or a sales pitch.
                It typically includes:
              </p>
              <div className="-mx-4 flex flex-wrap">
                {[
                  { title: "Website structure", desc: "Missing service pages, slow load times, weak mobile experience, unclear CTAs." },
                  { title: "Google visibility", desc: "Which keywords rank, which don't, and how the business compares to local competitors." },
                  { title: "Google Business Profile", desc: "Category setup, review volume, photo quality, post activity, and citation consistency." },
                  { title: "Ad account review", desc: "If Google Ads are running — keyword match types, negative lists, landing pages, and wasted spend." },
                  { title: "Tracking gaps", desc: "Whether calls and form submissions are being tracked, and whether lead sources are identifiable." },
                  { title: "Priority action plan", desc: "A clear list of what to fix first, what can wait, and what the expected impact looks like." },
                ].map((card) => (
                  <div key={card.title} className="w-full px-4 md:w-1/2">
                    <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                      <h3 className="mb-2 text-lg font-bold text-dark">{card.title}</h3>
                      <p className="text-sm text-body-color">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Approach */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-4xl">
                The approach
              </h2>
              <p className="text-base text-body-color">
                LeadRevs is built on direct experience in SEO, paid acquisition, and
                conversion strategy across competitive local markets — where results
                are measured in calls and booked jobs. The focus is practical: find the
                gaps costing a business leads, fix them in priority order, and report
                clearly on what changed.
              </p>
            </div>

            {/* Final CTA */}
            <div className="rounded-xl bg-primary/5 p-8 text-center sm:p-12">
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
                See where the gaps are
              </h2>
              <p className="mx-auto mb-8 max-w-[600px] text-base text-body-color">
                Every audit covers the website, Google rankings, competitor activity,
                and ad performance if applicable. The deliverable is a prioritized
                action plan. No cost. No obligation.
              </p>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-10 py-4 text-base font-semibold text-white transition"
              >
                Request a Free Audit
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
