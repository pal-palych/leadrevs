"use client";

import Link from "next/link";
import Graphic from "./Graphic";

export default function Newsletter() {
  return (
    <section className="bg-white pb-20 pt-20 lg:pt-[120px] lg:pb-[90px]">
      <div className="container">
        {/* Phased approach */}
        <div className="-mx-4 mb-20 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <span className="mb-2 block text-lg font-semibold text-primary">
              NOT READY FOR EVERYTHING AT ONCE?
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]/[55px]">
              Work gets phased around budget and priorities
            </h2>
            <p className="mb-8 text-base text-body-color lg:mb-0">
              Most service businesses don&apos;t need a $5,000 marketing overhaul
              on day one. LeadRevs phases the work so each step pays for the next.
            </p>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="space-y-6">
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 1</span>
                  Audit, fixes, and tracking setup
                </h3>
                <p className="text-sm text-body-color">
                  Review the current site, Google Business Profile, and ad accounts.
                  Fix the obvious gaps. Set up call tracking and lead source reporting
                  so results are measurable from the start.
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 2</span>
                  Ads and local visibility
                </h3>
                <p className="text-sm text-body-color">
                  Launch Google Ads targeting the highest-margin services. Optimize
                  the Google Business Profile for the Map Pack. Start building reviews
                  and local citations.
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 3</span>
                  Website rebuild when ready
                </h3>
                <p className="text-sm text-body-color">
                  Build a new site with 15+ service pages, location pages, and
                  conversion-focused design. This is the foundation for long-term
                  organic growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Burned before CTA */}
        <div className="bg-primary relative z-10 overflow-hidden rounded-xl py-[60px] text-center">
          <div className="relative z-10 mx-auto max-w-[700px] px-6">
            <h2 className="mb-4 text-2xl leading-tight font-bold text-white md:text-[36px]">
              Bad experience with marketing before?
            </h2>
            <p className="mb-4 text-base text-white/80 md:text-lg">
              It&apos;s common. A lot of service business owners have spent money on
              agencies or freelancers that delivered traffic reports but no real calls.
              Vague dashboards, recycled strategies — and then the
              &ldquo;marketer&rdquo; stopped answering.
            </p>
            <ul className="mx-auto mb-8 max-w-md space-y-2 text-left text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-white">&#10003;</span>
                Clear monthly reports — calls, leads, and cost per result
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-white">&#10003;</span>
                Ad spend billed directly to the business — not marked up
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-white">&#10003;</span>
                Month-to-month — cancel anytime, no penalties
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-white">&#10003;</span>
                Direct communication — no layers, no ticket systems
              </li>
            </ul>
            <Link
              href="#contact"
              className="text-primary inline-block rounded-full bg-white px-10 py-4 text-base font-semibold transition hover:bg-white/90"
            >
              Request a Free Audit — No Pressure
            </Link>
          </div>

          <Graphic />
        </div>
      </div>
    </section>
  );
}
