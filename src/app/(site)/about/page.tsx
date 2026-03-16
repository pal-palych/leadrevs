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
        pageTitle="More calls from Google. Clear reporting on what's working."
        pageDescription="LeadRevs helps service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill get more qualified calls through better websites, tighter Google Ads, and stronger local visibility. Every lead is tracked. Every month is reported. No long-term contracts."
      />

      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">

            {/* What LeadRevs Does */}
            <div className="mb-16">
              <span className="mb-2 block text-lg font-semibold text-primary">
                WHAT LEADREVS DOES
              </span>
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                What LeadRevs does
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-base text-body-color">
                    Builds websites structured to rank on Google — with a page for every service and city served
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-base text-body-color">
                    Manages Google Ads campaigns targeting people actively searching for local services
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-base text-body-color">
                    Optimizes Google Business Profiles to improve Map Pack visibility and review volume
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-base text-body-color">
                    Sets up call tracking and form tracking — so every lead has a source
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-base text-body-color">
                    Delivers monthly reports showing calls received, cost per lead, and what to adjust
                  </p>
                </li>
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-black sm:text-4xl">
                Built for local service businesses
              </h2>
              <p className="mb-6 text-base text-body-color">
                LeadRevs works with businesses where the phone call is the sale —
                plumbers, HVAC companies, electricians, roofers, auto repair shops,
                locksmiths, med spas, and other trades across the Triangle.
              </p>
              <p className="text-base text-body-color">
                If the business depends on local customers finding it through Google,
                this is what LeadRevs is set up to improve.
              </p>
            </div>

            {/* What Clients Get */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                What clients get
              </h2>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Tracked results</h3>
                    <p className="text-sm text-body-color">
                      Every call and form submission is logged with its source.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Monthly reporting</h3>
                    <p className="text-sm text-body-color">
                      Cost per lead, call volume, keyword performance, and next steps.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Direct communication</h3>
                    <p className="text-sm text-body-color">
                      No account managers, no ticket systems, no middlemen.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Transparent ad spend</h3>
                    <p className="text-sm text-body-color">
                      Billed directly through Google, never bundled or marked up.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Month-to-month</h3>
                    <p className="text-sm text-body-color">
                      No long-term contracts. Cancel anytime.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6 rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                    <h3 className="mb-2 text-lg font-bold text-dark">Prioritized action</h3>
                    <p className="text-sm text-body-color">
                      Fixes ranked by what produces calls first, not what looks good in a deck.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problems This Solves */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                Problems this solves
              </h2>
              <ul className="space-y-3">
                {[
                  "Website doesn't rank for the services actually offered",
                  "Google Ads budget is being spent but not producing enough booked jobs",
                  "Google Business Profile is incomplete, stale, or not competitive",
                  "No call tracking — no way to know which marketing is working",
                  "No monthly reporting — unclear what the budget is doing",
                  "Previous agency or freelancer delivered traffic reports but not real leads",
                  "Website gets some visitors but doesn't convert them into calls",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg font-bold text-primary">&#8250;</span>
                    <p className="text-base text-body-color">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl">
                How it works
              </h2>
              <div className="space-y-8">
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 1.</span>Audit
                  </h3>
                  <p className="text-base text-body-color">
                    Free review of the website, Google visibility, ad accounts (if active),
                    and competitor landscape. The deliverable is a report with specific
                    findings and a prioritized action plan.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 2.</span>Fix what moves the phone
                  </h3>
                  <p className="text-base text-body-color">
                    Start with the changes most likely to generate calls — ad targeting,
                    site structure, tracking setup, or Google Business Profile optimization.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-service">
                  <h3 className="mb-3 text-lg font-bold text-dark">
                    <span className="mr-2 text-primary">Step 3.</span>Track and report monthly
                  </h3>
                  <p className="text-base text-body-color">
                    Every call and lead is tracked. Monthly reports show what was spent,
                    what came back, and what to adjust. No vanity metrics.
                  </p>
                </div>
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
                are measured in calls and booked jobs. The focus is on finding the gaps
                that cost businesses leads, fixing them in priority order, and reporting
                clearly on what changed.
              </p>
            </div>

            {/* Final CTA */}
            <div className="rounded-xl bg-primary/5 p-8 text-center sm:p-12">
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
                See where the gaps are
              </h2>
              <p className="mx-auto mb-8 max-w-[600px] text-base text-body-color">
                Every audit is custom — covering the website, Google rankings, competitor
                activity, and ad performance if applicable. The deliverable is a clear
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
