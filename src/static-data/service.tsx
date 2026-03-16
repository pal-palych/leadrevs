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
        Call and lead tracking included
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Serving the Triangle
      </div>
    </div>

    {/* Problem */}
    <h4 className={h4}>
      <span className="text-primary">The Problem.</span> Why many service business websites don&apos;t generate enough calls
    </h4>
    <p className={p}>
      A simple one-page site can work early on. But as a business grows and adds more
      services, a single page can&apos;t give Google — or visitors — enough to work with.
      Without a dedicated page for each service, Google has no clear content to rank, and
      visitors can&apos;t find the specific information they need to pick up the phone.
    </p>
    <p className={p}>
      Competitors with structured sites — separate pages for each service, each city,
      with reviews, clear CTAs, and mobile-friendly layouts — show up first and convert
      more visitors into calls. The gap is usually not about quality of work. It&apos;s about
      how the website is built.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>Service pages built around what customers actually search for</span></li>
      <li className={li}><span className={span}>Location pages for each city served across the Triangle</span></li>
      <li className={li}><span className={span}>Mobile-first layout with clear click-to-call paths on every page</span></li>
      <li className={li}><span className={span}>SEO-friendly page structure — titles, headings, and internal links</span></li>
      <li className={li}><span className={span}>Reviews and trust signals placed where they help conversion</span></li>
      <li className={li}><span className={span}>Photo and proof sections that make the business feel established</span></li>
      <li className={li}><span className={span}>Contact form and phone number visible on every page</span></li>
      <li className={li}><span className={span}>Call tracking and form tracking set up before launch</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this works
    </h4>
    <p className={p}>
      A well-structured website does two things. First, it helps Google understand what
      the business does and where it operates — which means more visibility across multiple
      services and cities. Second, it helps visitors convert. When someone lands on a clear
      service page with reviews, photos, pricing context, and an obvious way to call — they
      call. The site works for both search visibility and lead conversion at the same time.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Service businesses in Raleigh, Durham,
      Cary, Apex, or Chapel Hill with an outdated or limited site that doesn&apos;t reflect
      the full range of services offered. Businesses that want better Google visibility and
      more calls from their website — not just a fresh look.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Businesses that already have a
      strong, well-structured site with good search visibility. In that case, targeted
      improvements, Google Ads, or local SEO may be a better starting point.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the current site, Google visibility, and competitor landscape</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Site plan — page structure, content priorities, tracking setup</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Build, launch, and verify that tracking and analytics are live</span></li>
    </ul>

    {/* After launch */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> After launch
    </h4>
    <p className={p}>
      The site doesn&apos;t end at launch. Call tracking and form tracking are active from
      day one, so results are measurable immediately. If ongoing lead generation is added
      (Google Ads, local SEO), monthly reporting covers both site performance and campaign
      results — with clear numbers, not vague summaries.
    </p>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">06.</span> Common questions
    </h4>

    <h5 className={faqQ}>How long does the build take?</h5>
    <p className={faqA}>Most sites are completed within 3–4 weeks, depending on the number of service and location pages needed.</p>

    <h5 className={faqQ}>How many pages will the site have?</h5>
    <p className={faqA}>Typically 15–25 pages — one for each service, key cities served, plus home, about, contact, and FAQ. The exact count depends on the business.</p>

    <h5 className={faqQ}>Who writes the content?</h5>
    <p className={faqA}>LeadRevs handles the copy. Content is based on real service descriptions, local search data, and competitive research — not filler text.</p>

    <h5 className={faqQ}>Is this a redesign or a full rebuild?</h5>
    <p className={faqA}>It depends on the current site. If the existing platform is limiting visibility or conversion, a full rebuild is usually the better path. If the site already has decent structure, a targeted restructure and content overhaul may be enough.</p>

    <h5 className={faqQ}>Is SEO built in?</h5>
    <p className={faqA}>Yes. Every page is structured for search — titles, headings, internal links, and local signals. The goal is a site that can rank, not just a site that looks good.</p>

    <h5 className={faqQ}>Will calls and form submissions be tracked?</h5>
    <p className={faqA}>Yes. Call tracking and form submission tracking are set up before launch so results are measurable from day one.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">See what your site is missing</h4>
      <p className="mb-5 text-base text-body-color">
        A free review of the current site — covering structure, search visibility, mobile
        experience, and conversion gaps. No cost, no obligation.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request a Free Website Review
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
        Month-to-month — cancel anytime
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Every call and lead tracked
      </div>
      <div className={trustItem}>
        <span className="mt-0.5 font-bold text-primary">&#10003;</span>
        Ad spend billed directly to you
      </div>
    </div>

    {/* Problem */}
    <h4 className={h4}>
      <span className="text-primary">The Problem.</span> Why Google Ads often wastes money for local businesses
    </h4>
    <p className={p}>
      Many service businesses across the Triangle have tried Google Ads and stopped — not
      because ads don&apos;t work, but because the campaigns were set up poorly. Loose
      targeting that attracts irrelevant clicks. Traffic sent to the homepage instead of a
      page about the actual service. No way to tell which calls came from ads and which
      came from somewhere else.
    </p>
    <p className={p}>
      The result is a budget that gets spent without a clear picture of what it produced.
      With tighter targeting, service-specific landing pages, and proper call tracking,
      the same budget can produce materially better results.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>Campaign targeting focused on people actively searching for local services</span></li>
      <li className={li}><span className={span}>Targeting limited to Raleigh, Durham, Cary, Apex, and Chapel Hill</span></li>
      <li className={li}><span className={span}>Filters to reduce irrelevant clicks and low-intent searches</span></li>
      <li className={li}><span className={span}>Ad copy written around the services most likely to produce qualified calls</span></li>
      <li className={li}><span className={span}>Landing page recommendations — so visitors reach a relevant page, not the homepage</span></li>
      <li className={li}><span className={span}>Call tracking — every call tied to the campaign and keyword that generated it</span></li>
      <li className={li}><span className={span}>Form and click-to-call conversion tracking</span></li>
      <li className={li}><span className={span}>Monthly reporting with cost per lead, call volume, and clear next steps</span></li>
      <li className={li}><span className={span}>Ongoing adjustments — targeting, budget allocation, and ad copy refined based on real data</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this works
    </h4>
    <p className={p}>
      Google Ads puts the business in front of people who are actively searching for a
      specific service right now. When the targeting is focused on high-intent local
      searches, the landing page matches the search, and every call is tracked — the gap
      between ad spend and booked jobs gets much smaller. The goal is not more clicks.
      The goal is more qualified calls and better visibility into what is working.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Local service businesses that want more
      inbound calls and have $800–$1,500/month available for ad spend. Especially strong for
      businesses with higher-value services — where one qualified lead can meaningfully change
      the return on ad spend.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Businesses without a website or
      with a site that isn&apos;t ready to receive ad traffic. In that case, a website build
      or improvement should come first — running ads to a weak page wastes budget.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the current ad account — or competitor and keyword research if starting fresh</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Campaign setup — targeting, ad copy, landing pages, and tracking</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Monthly management — reporting on calls, cost per lead, and adjustments based on data</span></li>
    </ul>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> Common questions
    </h4>

    <h5 className={faqQ}>How much ad budget is recommended?</h5>
    <p className={faqA}>Most local service campaigns start between $800–$1,500/month in ad spend. This is billed directly to the business through Google — never bundled or marked up by LeadRevs.</p>

    <h5 className={faqQ}>How quickly can campaigns start producing calls?</h5>
    <p className={faqA}>Ads can begin generating calls within the first week of launch. Performance improves over the first 30–60 days as data builds and targeting is refined.</p>

    <h5 className={faqQ}>Are landing pages included?</h5>
    <p className={faqA}>Landing page recommendations are included with every campaign. If the current site doesn&apos;t have a suitable page, one can be built as part of a website project or as a standalone addition.</p>

    <h5 className={faqQ}>How is performance reported?</h5>
    <p className={faqA}>Every month includes a clear report showing calls tracked, form submissions, cost per lead, which campaigns performed best, and specific recommendations for the next month.</p>

    <h5 className={faqQ}>Can LeadRevs take over an existing Google Ads account?</h5>
    <p className={faqA}>Yes. An existing account can be audited, restructured, and improved — or a new account can be built from scratch if that makes more sense.</p>

    <h5 className={faqQ}>Is there a contract?</h5>
    <p className={faqA}>No. Management is month-to-month. Cancel anytime — no penalties, no notice period.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">Find out what your ads are missing</h4>
      <p className="mb-5 text-base text-body-color">
        A free review of the current ad account — or, if starting fresh, a recommendation
        on targeting, budget, and expected lead volume. No cost, no obligation.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request a Free Google Ads Review
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
      <span className="text-primary">The Problem.</span> Why local customers aren&apos;t finding the business
    </h4>
    <p className={p}>
      When someone in Raleigh, Durham, Cary, Apex, or Chapel Hill searches for a local
      service — plumber, HVAC repair, auto mechanic — Google shows a short list of nearby
      businesses. Whether a business appears in that list depends heavily on how complete,
      active, and trusted its Google Business Profile is.
    </p>
    <p className={p}>
      Many local businesses have profiles that are missing key service categories, have no
      recent photos, haven&apos;t been updated in months, and have inconsistent business
      information across the web. These are straightforward problems — and fixing them can
      directly improve how often the business shows up in local results.
    </p>

    {/* What's included */}
    <h4 className={h4}>
      <span className="text-primary">01.</span> What&apos;s included
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}>Full Google Business Profile audit — categories, services, description, and completeness</span></li>
      <li className={li}><span className={span}>Profile optimization to better reflect the business and its service area</span></li>
      <li className={li}><span className={span}>Review request support — helping generate more recent customer feedback through existing tools</span></li>
      <li className={li}><span className={span}>Photo and content recommendations to keep the profile active and credible</span></li>
      <li className={li}><span className={span}>Business information consistency check across important directories</span></li>
      <li className={li}><span className={span}>Local SEO guidance for the website — service pages, location relevance, trust signals</span></li>
      <li className={li}><span className={span}>Monthly reporting on profile views, calls from Google, and direction requests</span></li>
    </ul>

    {/* Why it works */}
    <h4 className={h4}>
      <span className="text-primary">02.</span> Why this matters
    </h4>
    <p className={p}>
      For many local customers, the Google Business Profile is where the decision happens —
      before they ever visit a website. A complete profile with recent reviews, clear service
      information, and fresh photos makes the business easier to trust and more likely to
      get the call. When the profile is backed by consistent business information across the
      web and stronger local signals on the website, visibility in local results improves
      over time.
    </p>

    {/* Who it's for */}
    <h4 className={h4}>
      <span className="text-primary">03.</span> Good fit / not the best fit
    </h4>
    <p className={p}>
      <strong className="text-black">Good fit:</strong> Service businesses in Raleigh, Durham,
      Cary, Apex, or Chapel Hill that depend on local customers finding them through Google.
      Especially useful for businesses with an inactive profile, few recent reviews, or
      inconsistent business information online.
    </p>
    <p className={p}>
      <strong className="text-black">Not the best fit:</strong> Online-only businesses or
      businesses that don&apos;t serve a specific local area. For those, paid search or a
      website-first approach may be more effective.
    </p>

    {/* Process */}
    <h4 className={h4}>
      <span className="text-primary">04.</span> How it works
    </h4>
    <ul className="list mb-10 list-inside list-disc">
      <li className={li}><span className={span}><strong>Step 1:</strong> Free audit of the Google Business Profile, reviews, and local presence</span></li>
      <li className={li}><span className={span}><strong>Step 2:</strong> Profile cleanup and optimization — categories, services, photos, and consistency fixes</span></li>
      <li className={li}><span className={span}><strong>Step 3:</strong> Ongoing support — review generation, profile updates, and monthly reporting on visibility and calls</span></li>
    </ul>

    {/* FAQ */}
    <h4 className={h4}>
      <span className="text-primary">05.</span> Common questions
    </h4>

    <h5 className={faqQ}>How long before visibility improves?</h5>
    <p className={faqA}>Profile improvements can begin affecting local visibility within 2–4 weeks. Review growth and consistency improvements typically show measurable progress within 60–90 days.</p>

    <h5 className={faqQ}>Can LeadRevs help get more Google reviews?</h5>
    <p className={faqA}>Yes. LeadRevs helps set up review request workflows through the existing CRM or scheduling tool — so satisfied customers are asked for feedback shortly after the job is done.</p>

    <h5 className={faqQ}>What&apos;s the difference between profile optimization and website SEO?</h5>
    <p className={faqA}>The Google Business Profile affects visibility in the map results that appear at the top of local searches. Website SEO affects the organic results below the map. Both contribute to local visibility — but profile optimization is often the faster starting point.</p>

    <h5 className={faqQ}>Are city or service-area pages included?</h5>
    <p className={faqA}>Location-specific pages fall under the website build service. Local on-page guidance is included with profile optimization, and city pages can be added as part of a website project.</p>

    <h5 className={faqQ}>Does this work alongside Google Ads?</h5>
    <p className={faqA}>Yes. Local SEO builds visibility and trust over time. Google Ads generates calls more immediately. Running both creates a stronger overall presence in local search.</p>

    <h5 className={faqQ}>What does the monthly report include?</h5>
    <p className={faqA}>Each report covers profile views, calls from Google, direction requests, review activity, and practical recommendations for the next month.</p>

    {/* CTA */}
    <div className="mt-10 rounded-xl bg-primary/5 p-8">
      <h4 className="mb-3 text-xl font-bold text-black">See how the business appears in local search</h4>
      <p className="mb-5 text-base text-body-color">
        A free review of the Google Business Profile, review presence, and local visibility —
        with clear findings and practical next steps. No cost, no obligation.
      </p>
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition"
      >
        Request a Free Local Visibility Review
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
    title: "Websites Built to Generate Calls",
    description:
      "Website design for local service businesses across the Triangle — structured for Google visibility, mobile conversion, and tracked results.",
    slug: "website-design",
    image: "/images/services/service-01.jpg",
    details: websiteDetails,
  },
  {
    id: uuid(),
    title: "Google Ads Built for Better Leads",
    description:
      "Google Ads management for service businesses across the Triangle — focused on qualified calls, tighter targeting, tracked results, and clear monthly reporting.",
    slug: "google-ads",
    image: "/images/services/service-02.jpg",
    details: googleAdsDetails,
  },
  {
    id: uuid(),
    title: "Stronger Local Visibility on Google",
    description:
      "Google Business Profile optimization and local SEO for service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill — stronger reviews, better visibility, more calls from local search.",
    slug: "google-business-profile",
    image: "/images/services/service-03.jpg",
    details: gbpDetails,
  },
];
