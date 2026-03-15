import Link from "next/link";
import SinglePricingGraphic from "./SinglePricingGraphic";
import SingleOffer from "./SingleOffer";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-[#f8f9ff] pb-20 pt-20 lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[560px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                WAYS TO START
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark sm:text-4xl md:text-[45px]/[55px]">
                Start small. Scale when it works.
              </h2>
              <p className="text-lg font-medium text-body-color">
                No setup fees. No long-term contracts. Month-to-month.
                Ad budget goes directly to Google from your card.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {/* Tier 1: Free Audit */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary/20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:px-10 2xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Audit + Action Plan
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark">
                Free
              </h2>
              <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
                For business owners who want clarity before spending more.
              </p>
              <div className="mb-7 space-y-1">
                <SingleOffer text="Where your site is underperforming" />
                <SingleOffer text="Which services to prioritize first" />
                <SingleOffer text="What competitors do better" />
                <SingleOffer text="What's likely wasting budget" />
                <SingleOffer text="What to fix now vs later" />
              </div>
              <Link
                href="#contact"
                className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                Request Free Audit
              </Link>
              <SinglePricingGraphic />
            </div>
          </div>

          {/* Tier 2: Lead Generation */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary/20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:px-10 2xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Lead Generation Setup
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark">
                $500{" "}
                <span className="text-base font-medium text-body-color">
                  / month
                </span>
              </h2>
              <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
                For businesses ready to improve ads, visibility, and tracking.
                + your ad budget (billed to your card).
              </p>
              <div className="mb-7 space-y-1">
                <SingleOffer text="Google Ads setup & management" />
                <SingleOffer text="Google Business Profile optimization" />
                <SingleOffer text="Call & lead tracking setup" />
                <SingleOffer text="Monthly reporting with real ROI" />
                <SingleOffer text="Cancel anytime" />
              </div>
              <Link
                href="#contact"
                className="block w-full rounded-md border border-primary bg-primary p-4 text-center text-base font-semibold text-white duration-200 hover:bg-primary/90"
              >
                Get Started
              </Link>
              <SinglePricingGraphic />
            </div>
          </div>

          {/* Tier 3: Website + Growth */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary/20 bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:px-10 2xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Website + Growth Foundation
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark">
                $4,000{" "}
                <span className="text-base font-medium text-body-color">
                  one-time
                </span>
              </h2>
              <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
                For businesses that need a stronger site before scaling.
                Then $500/mo for ongoing lead generation.
              </p>
              <div className="mb-7 space-y-1">
                <SingleOffer text="New WordPress site (15+ pages)" />
                <SingleOffer text="SEO-optimized service & location pages" />
                <SingleOffer text="Mobile-first, fast-loading design" />
                <SingleOffer text="Everything in Lead Generation" />
                <SingleOffer text="Cancel anytime" />
              </div>
              <Link
                href="#contact"
                className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                Get Started
              </Link>
              <SinglePricingGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
