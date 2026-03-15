import Graphic from "./Graphic";
import SectionTitle from "@/components/Common/SectionTitle";

export default function About() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-white pb-[90px] pt-20 lg:pt-[140px]"
    >
      <div className="container">
        <SectionTitle
          mainTitle="WHAT I HELP YOU FIX"
          title="What local businesses usually need first"
          width="600px"
          marginBottom="50px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Your business is hard to find on Google
              </h3>
              <p className="text-base text-body-color">
                I build service pages and local pages so Google can actually rank you.
                If you offer 15 services but have a one-page site, Google can only
                show you for one thing. Your competitors with 10+ pages win every time.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Your ad budget gets wasted on bad clicks
              </h3>
              <p className="text-base text-body-color">
                I set up tighter campaigns around the services that actually make you
                money. Exact match keywords only — so you pay for &ldquo;water heater
                repair Raleigh,&rdquo; not random searches that never convert.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Your site doesn&apos;t convert visitors into calls
              </h3>
              <p className="text-base text-body-color">
                I improve the structure, speed, trust elements, and service messaging
                so more visitors turn into calls. Reviews on every page, click-to-call
                buttons, before/after photos, and clear pricing signals.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                You don&apos;t know what&apos;s working
              </h3>
              <p className="text-base text-body-color">
                I set up call tracking and lead tracking so you can see where every
                job comes from — Google Ads, SEO, Instagram, or referrals. No more
                guessing which marketing is worth it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
