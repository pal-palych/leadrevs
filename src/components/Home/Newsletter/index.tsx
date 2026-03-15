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
              You don&apos;t need to do everything at once
            </h2>
            <p className="mb-8 text-base text-body-color lg:mb-0">
              Most business owners I talk to want to improve their marketing but
              don&apos;t want to spend $5,000 upfront. I get it. We can phase
              the work based on your budget and priorities.
            </p>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="space-y-6">
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 1</span>
                  Audit, fixes, targeting, tracking
                </h3>
                <p className="text-sm text-body-color">
                  Understand where you stand, fix the obvious gaps, set up tracking
                  so we know what&apos;s working.
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 2</span>
                  Ads and local visibility improvements
                </h3>
                <p className="text-sm text-body-color">
                  Launch Google Ads on your highest-margin services. Optimize Google
                  Business Profile. Start building reviews and citations.
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-service">
                <h3 className="mb-2 text-base font-bold text-dark">
                  <span className="mr-2 text-primary">Phase 3</span>
                  Full website rebuild when budget is ready
                </h3>
                <p className="text-sm text-body-color">
                  New WordPress site with 15+ service pages, location pages, and
                  conversion-optimized design. This is the foundation for long-term SEO.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Been burned CTA */}
        <div className="bg-primary relative z-10 overflow-hidden rounded-xl py-[60px] text-center">
          <div className="relative z-10 mx-auto max-w-[700px] px-6">
            <h2 className="mb-4 text-2xl leading-tight font-bold text-white md:text-[36px]">
              Been burned by an agency before?
            </h2>
            <p className="mb-8 text-base text-white/80 md:text-lg">
              I&apos;ve heard the stories — $2,000 spent, fake followers, no real
              leads, and then the &ldquo;marketer&rdquo; stopped answering. I&apos;m one
              person, local to Raleigh-Durham, and I show you exactly where every
              dollar goes. If it&apos;s not working, you&apos;ll know — and you can
              cancel anytime.
            </p>
            <Link
              href="#contact"
              className="text-primary inline-block rounded-full bg-white px-10 py-4 text-base font-semibold transition hover:bg-white/90"
            >
              Let&apos;s Talk — No Pressure
            </Link>
          </div>

          <Graphic />
        </div>
      </div>
    </section>
  );
}
