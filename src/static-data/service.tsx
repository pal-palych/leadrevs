import { Service } from "@/types/service";
import { v4 as uuid } from "uuid";
import Link from "next/link";

/* ─── Shared styles ─── */
const p = "mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg";
const h4 = "mb-6 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl";
const li = "mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg";
const span = "text-body-color";
const trustItem = "flex items-start gap-2 text-sm text-body-color";
const faqQ = "mb-3 text-lg font-bold text-black";
const faqA = "mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg";

/* ═══════════════════════════════════════════════════
   SERVICE 1: WEBSITE DESIGN
   ═══════════════════════════════════════════════════ */

const websiteDetails = (
  <div>
    {/* Trust strip */}
    <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-stroke/30 pb-8">
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        No long-term contracts
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Clear monthly reporting
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Serving the Triangle
      </div>
    </div>

    {/* Problem */}
    <h4 className={h4}>
      <span className="text-primary">The Problem.</span> Why most service business websites don&apos;t generate calls
    </h4>
    <p className={p}>
      Most local service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill have a
      one-page site or an outdated design built on Wix, Tilda, or Squarespace. These sites
      look fine — but Google can&apos;t index them properly.
    </p>
    <p className={p}>
      If there&apos;s no dedicated page for each service, Google has nothing to rank.
      Competitors with 10+ pages show up first — even if their work isn&apos;t as good.
      Meanwhile, visitors who do land on the site leave because there&apos;s no clear CTA,
      no reviews, no click-to-call, and no reason to trust the business over anyone else.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>15+ pages — one for each service offered</span></li>
      <li className={li}><span className={span}>Dedicated location pages for each city served</span></li>
      <li className={li}><span className={span}>Mobile-first design with click-to-call buttons on every page</span></li>
      <li className={li}><span className={span}>SEO-optimized page titles, headings, and content structure</span></li>
      <li className={li}><span className={span}>Google reviews displayed on service pages</span></li>
      <li className={li}><span className={span}>Before/after project photos with professional presentation</span></li>
      <li className={li}><span className={span}>Contact form and phone number visible on every page</span></li>
      <li className={li}><span className={span}>FAQ section on key service pages</span></li>
      <li className={li}><span className={span}>Call tracking and form submission tracking setup</span></li>
      <li className={li}><span className={span}>Fast-loading, accessibility-friendly build</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this works
    </h4>
    <p className={p}>
      A properly structured website does two things: it helps Google understand what the
      business does and where it operates, and it helps visitors convert into calls faster.
      Every page targets a specific service and location — which means more rankings, more
      traffic, and more calls from people who are actively searching.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Service businesses with an outdated site,
      a one-page site, a site on Wix/Tilda/Squarespace that isn&apos;t ranking, or no site at all.
      Businesses that offer multiple services across multiple cities in the Triangle.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Businesses that already have a
      strong, well-structured WordPress site with good SEO foundations. In that case, targeted
      improvements or Google Ads may be a better starting point.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the current site, Google visibility, and competitor landscape</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Site architecture plan — pages, content structure, tracking setup</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Build, launch, and connect to Google Analytics and call tracking</span></li>
    </ul>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> Common questions
    </h4>

    <h5 className={faqQ}>How long does the build take?</h5>
    <p className={faqA}>Most sites are completed within 3–4 weeks, depending on the number of service and location pages.</p>

    <h5 className={faqQ}>How many pages will the site have?</h5>
    <p className={faqA}>Typically 15–25 pages. One page for each service, one for each key city, plus home, about, contact, and FAQ.</p>

    <h5 className={faqQ}>Who writes the content?</h5>
    <p className={faqA}>LeadRevs handles the copy. Content is based on real service descriptions, competitive research, and SEO keyword data.</p>

    <h5 className={faqQ}>Is this a redesign or a full rebuild?</h5>
    <p className={faqA}>It depends on the current site. If the existing platform is limiting performance, a full rebuild on WordPress is recommended. If the site is already on WordPress, a restructure and content overhaul may be enough.</p>

    <h5 className={faqQ}>Will SEO be included?</h5>
    <p className={faqA}>Yes. Every page is built with SEO-optimized titles, headings, internal links, and schema. The site is structured to rank.</p>

    <h5 className={faqQ}>Will tracking be set up?</h5>
    <p className={faqA}>Yes. Google Analytics, call tracking, and form submission tracking are included in every build.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">Get a free website audit</h4>
      <p className="mb-5 text-base text-body-color">
        Find out what&apos;s holding the current site back — and what a stronger site could do for calls and visibility.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request Free Audit
      </Link>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   SERVICE 2: GOOGLE ADS
   ═══════════════════════════════════════════════════ */

const googleAdsDetails = (
  <div>
    {/* Trust strip */}
    <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-stroke/30 pb-8">
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Month-to-month
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Call and lead tracking
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Ad spend billed directly to you
      </div>
    </div>

    {/* Problem */}
    <h4 className={h4}>
      <span className="text-primary">The Problem.</span> Why most local businesses waste money on Google Ads
    </h4>
    <p className={p}>
      Many service businesses across the Triangle have tried Google Ads — and stopped because
      the results didn&apos;t justify the spend. The usual causes: broad match keywords that
      attract irrelevant clicks, no negative keyword lists, traffic sent to the homepage
      instead of a service-specific landing page, and no tracking to measure what actually
      converted.
    </p>
    <p className={p}>
      The problem is almost never Google Ads itself. It&apos;s how the campaigns were set up.
      Tighter targeting, proper landing pages, and call tracking can turn the same budget into
      a reliable source of qualified calls.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>Keyword research focused on high-intent, high-margin services</span></li>
      <li className={li}><span className={span}>Exact match and phrase match targeting — no broad match waste</span></li>
      <li className={li}><span className={span}>Negative keyword lists to block irrelevant searches</span></li>
      <li className={li}><span className={span}>Location targeting for Raleigh, Durham, Cary, Apex, and Chapel Hill</span></li>
      <li className={li}><span className={span}>Ad copy written for local service intent</span></li>
      <li className={li}><span className={span}>Landing page recommendations for each campaign</span></li>
      <li className={li}><span className={span}>Call tracking setup — every call tied to the ad that produced it</span></li>
      <li className={li}><span className={span}>Conversion tracking — forms, calls, and click-to-call</span></li>
      <li className={li}><span className={span}>Monthly reporting with cost per lead, call volume, and ROI</span></li>
      <li className={li}><span className={span}>Ongoing optimization — bids, keywords, ad copy, and budget allocation</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this works
    </h4>
    <p className={p}>
      Google Ads targets people who are actively searching for a specific service right now.
      When the targeting is tight, the landing page is relevant, and every call is tracked —
      one booked job from Google Ads can cover the entire monthly budget. The key is
      discipline: exact keywords, proper exclusions, and clear reporting every month.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Service businesses that want more calls
      fast and have at least $800–$1,500/month for ad spend. Businesses with high-ticket services
      (bathroom remodels, engine replacements, water heater installs, re-pipes) where one job
      can cover the ad budget.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Businesses with no website or a
      site that can&apos;t handle ad traffic. In that case, a website build or improvement should
      come first — otherwise ad spend gets wasted on a page that doesn&apos;t convert.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the current ad account (or competitor landscape if starting fresh)</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Campaign setup — keywords, ads, landing pages, tracking</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Monthly management, reporting, and optimization</span></li>
    </ul>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> Common questions
    </h4>

    <h5 className={faqQ}>How much ad budget is needed?</h5>
    <p className={faqA}>Most local service campaigns start between $800–$1,500/month. The ad budget is billed directly to the business through Google — it&apos;s never bundled or marked up.</p>

    <h5 className={faqQ}>How fast do results come?</h5>
    <p className={faqA}>Campaigns can start generating calls within the first week. Optimization improves results over the first 30–60 days as data builds.</p>

    <h5 className={faqQ}>Do you build landing pages?</h5>
    <p className={faqA}>Landing page recommendations are included. If the current site needs a dedicated landing page, that can be added as part of a website build or as a standalone page.</p>

    <h5 className={faqQ}>How is performance tracked?</h5>
    <p className={faqA}>Every campaign includes call tracking and conversion tracking. Monthly reports show exactly which keywords, ads, and campaigns drove real calls and form submissions.</p>

    <h5 className={faqQ}>Can you take over an existing Google Ads account?</h5>
    <p className={faqA}>Yes. LeadRevs can audit an existing account, identify waste, and restructure it — or build a new one from scratch.</p>

    <h5 className={faqQ}>Is there a contract?</h5>
    <p className={faqA}>No. Management is month-to-month. Cancel anytime — no penalties, no notice period.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">Get a free Google Ads audit</h4>
      <p className="mb-5 text-base text-body-color">
        Find out where the current budget is being wasted — or get a recommendation for starting from scratch.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request Free Audit
      </Link>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   SERVICE 3: GBP & LOCAL SEO
   ═══════════════════════════════════════════════════ */

const gbpDetails = (
  <div>
    {/* Trust strip */}
    <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-stroke/30 pb-8">
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Direct communication
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Monthly reporting
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Serving the Triangle
      </div>
    </div>

    {/* Problem */}
    <h4 className={h4}>
      <span className="text-primary">The Problem.</span> Why local customers can&apos;t find the business
    </h4>
    <p className={p}>
      When someone in Raleigh, Durham, Cary, Apex, or Chapel Hill searches for a service —
      plumber, HVAC repair, auto mechanic — Google shows a Map Pack with three businesses.
      Getting into that Map Pack depends on the strength of the Google Business Profile:
      categories, reviews, photos, activity, and consistency across directories.
    </p>
    <p className={p}>
      Most local businesses have an incomplete or stale profile. Missing service categories,
      no recent photos, no review strategy, and inconsistent business info across the web.
      These are fixable problems that directly affect visibility.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>Full Google Business Profile audit and optimization</span></li>
      <li className={li}><span className={span}>Service category setup matched to actual offerings</span></li>
      <li className={li}><span className={span}>Photo and content recommendations</span></li>
      <li className={li}><span className={span}>Review generation strategy — automated requests through existing CRM</span></li>
      <li className={li}><span className={span}>Weekly profile posts to keep the listing active</span></li>
      <li className={li}><span className={span}>Citation consistency audit across 50+ directories</span></li>
      <li className={li}><span className={span}>Local on-page SEO guidance for the website</span></li>
      <li className={li}><span className={span}>Monthly reporting on profile views, calls, and direction requests</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this works
    </h4>
    <p className={p}>
      The Google Business Profile is where many local customers make their decision — before
      they ever visit the website. A strong profile with fresh reviews, complete service info,
      and recent photos builds trust before the click. Combined with consistent local citations
      and on-page signals, it strengthens visibility in Maps and local organic results.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Service businesses that depend on local
      customers finding them through Google — especially those with a physical location or
      defined service area in the Triangle. Businesses with fewer than 50 Google reviews or
      an inactive profile.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Online-only businesses or
      businesses that don&apos;t serve a specific local area. For those, paid search or content
      marketing may be a better starting point.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the current Google Business Profile, reviews, and local citations</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Optimization — categories, services, photos, posts, and citation cleanup</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Ongoing management, review strategy, and monthly performance reporting</span></li>
    </ul>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> Common questions
    </h4>

    <h5 className={faqQ}>How long before results show?</h5>
    <p className={faqA}>Profile improvements can affect visibility within 2–4 weeks. Review growth and citation consistency typically show measurable impact within 60–90 days.</p>

    <h5 className={faqQ}>Can you help get more Google reviews?</h5>
    <p className={faqA}>Yes. LeadRevs sets up automated review requests through the existing CRM or scheduling tool — so customers are asked to review right after the job is done.</p>

    <h5 className={faqQ}>What&apos;s the difference between GBP and website SEO?</h5>
    <p className={faqA}>The Google Business Profile controls visibility in the Map Pack. Website SEO controls visibility in organic search results below the map. Both matter — but GBP is often the faster win for local businesses.</p>

    <h5 className={faqQ}>Do you create city/service area pages?</h5>
    <p className={faqA}>That falls under the website build service. Local on-page SEO guidance is included with GBP optimization, and city pages can be added as part of a website project.</p>

    <h5 className={faqQ}>Can Local SEO and Google Ads work together?</h5>
    <p className={faqA}>Yes. Strong local visibility builds trust and organic traffic over time, while Google Ads generates calls immediately. Most businesses benefit from running both.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">Get a free local SEO audit</h4>
      <p className="mb-5 text-base text-body-color">
        Find out how the business appears in local search — and what&apos;s needed to improve Map Pack visibility.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request Free Audit
      </Link>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   SERVICE DATA EXPORT
   ═══════════════════════════════════════════════════ */

export const serviceData: Service[] = [
  {
    id: uuid(),
    title: "Website That Actually Ranks",
    description:
      "A structured, SEO-optimized website built for local service businesses across the Triangle — designed to rank on Google and convert visitors into calls.",
    slug: "website-design",
    image: "/images/services/service-01.jpg",
    details: websiteDetails,
  },
  {
    id: uuid(),
    title: "Google Ads That Pay For Themselves",
    description:
      "Targeted Google Ads campaigns for service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill — with call tracking, clear reporting, and no wasted spend.",
    slug: "google-ads",
    image: "/images/services/service-02.jpg",
    details: googleAdsDetails,
  },
  {
    id: uuid(),
    title: "Google Business Profile & Local SEO",
    description:
      "Google Business Profile optimization and local SEO for service businesses across the Triangle — built to improve Map Pack visibility and generate more local calls.",
    slug: "google-business-profile",
    image: "/images/services/service-03.jpg",
    details: gbpDetails,
  },
];
