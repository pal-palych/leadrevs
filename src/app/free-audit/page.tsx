"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FreeAuditLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    await fetch("https://formspree.io/f/xwvrnzzw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    setSubmitted(true);

    // GA event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "landing_page",
        event_label: "free_audit_fb",
      });
    }
    // Meta Pixel event (fires if pixel is installed)
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  };

  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ─── Checkmark icon reusable ─── */
  const Check = () => (
    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );

  /* ═══════════ THANK YOU STATE ═══════════ */
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="mx-auto max-w-[550px] text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
            Audit request received
          </h1>
          <p className="mb-8 text-base text-[#959cb1]">
            A custom review of your site, Google visibility, and competitor
            landscape will be sent within 48 hours. No sales pitch — just
            findings and clear next steps.
          </p>
          <Link
            href="/"
            className="text-primary text-base font-medium hover:underline"
          >
            Visit leadrevs.app →
          </Link>
        </div>
      </div>
    );
  }

  /* ═══════════ LANDING PAGE ═══════════ */
  return (
    <div className="bg-white">

      {/* ── Mini top bar ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-bold text-[#1d2144]">
            Lead<span className="text-primary">Revs</span>
          </Link>
          <button
            onClick={scrollToForm}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Get Free Audit
          </button>
        </div>
      </div>

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center gap-12 lg:flex-nowrap">
            {/* Text */}
            <div className="w-full lg:w-7/12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Free audit for local businesses
              </p>
              <h1 className="mb-5 text-[32px] font-bold leading-tight text-[#1d2144] sm:text-[42px]">
                Find Out What&apos;s Costing
                <br className="hidden sm:block" />
                Your Business Calls
              </h1>
              <p className="mb-6 max-w-[520px] text-base text-[#959cb1]">
                A free visibility and website audit for service businesses in
                Raleigh, Durham, Cary, Apex, and Chapel Hill. See where competitors
                are ahead, what&apos;s hurting your lead flow, and what to fix first.
              </p>

              {/* Bullets */}
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-[#959cb1]">See where competitors are outranking you</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-[#959cb1]">Find website issues that may be costing leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-[#959cb1]">Get clear next steps — not generic advice</span>
                </li>
              </ul>

              <button
                onClick={scrollToForm}
                className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
              >
                Get My Free Audit
              </button>

              <p className="mt-4 text-xs text-[#959cb1]">
                No cost · No obligation · Results within 48 hours
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-5/12">
              <Image
                src="/images/hero/hero-image-01.jpg"
                alt="Marketing audit review"
                width={600}
                height={448}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. PROBLEM SECTION ═══════════ */}
      <section className="bg-[#f8f9ff] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Sound familiar?
            </p>
            <h2 className="mb-4 text-2xl font-bold text-[#1d2144] sm:text-[34px] sm:leading-tight">
              What&apos;s costing you calls right now
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Competitors show up first",
                desc: "When someone searches for your service nearby, other businesses appear ahead of you — even if your work is better.",
              },
              {
                title: "Website doesn't convert visitors",
                desc: "People visit the site but leave without calling. No clear service pages, no reviews, no easy way to contact you on mobile.",
              },
              {
                title: "Google Business Profile is weak",
                desc: "Missing categories, no recent photos, few reviews, stale info. Google uses all of this to decide who shows up in Maps.",
              },
              {
                title: "Ad spend without enough leads",
                desc: "Money goes to Google Ads or social ads, but there's no tracking to know which clicks turned into real calls or jobs.",
              },
              {
                title: "No idea what's actually working",
                desc: "Without call tracking or lead source data, it's impossible to know if marketing is producing anything worth the cost.",
              },
              {
                title: "Past marketing burned budget",
                desc: "A previous agency or freelancer ran campaigns that produced reports but not real leads — and then stopped answering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/10 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <h3 className="mb-2 text-lg font-bold text-[#1d2144]">{item.title}</h3>
                <p className="text-sm text-[#959cb1]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. WHAT YOU GET ═══════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              What you get
            </p>
            <h2 className="mb-4 text-2xl font-bold text-[#1d2144] sm:text-[34px] sm:leading-tight">
              What the free audit covers
            </h2>
            <p className="text-base text-[#959cb1]">
              A custom review — not a generic PDF. Every audit is done manually
              for your specific business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Local visibility check", desc: "How your business appears in Google Search and Maps compared to nearby competitors." },
              { title: "Website structure review", desc: "Missing service pages, mobile issues, slow load times, and unclear calls to action." },
              { title: "Google Business Profile audit", desc: "Categories, photos, reviews, post activity, and overall profile completeness." },
              { title: "Competitor comparison", desc: "What nearby competitors rank for, how many reviews they have, and where they're ahead." },
              { title: "Ad account observations", desc: "If ads are running — wasted spend, targeting gaps, and landing page issues." },
              { title: "Priority action plan", desc: "A clear list of what to fix first, what can wait, and what the expected impact looks like." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-primary/10 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
              >
                <Check />
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#1d2144]">{item.title}</h3>
                  <p className="text-sm text-[#959cb1]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. HOW IT WORKS ═══════════ */}
      <section className="bg-[#1d2144] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-[500px] text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Simple process
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-[34px] sm:leading-tight">
              How it works
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Submit your info", desc: "Tell us your business name and website. Takes 30 seconds." },
              { step: "2", title: "We review everything", desc: "Google visibility, website structure, competitors, and ads if applicable." },
              { step: "3", title: "You get clear findings", desc: "A prioritized report with specific issues and practical next steps. No fluff." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToForm}
              className="rounded-lg border border-white bg-white px-8 py-4 text-base font-semibold text-[#1d2144] transition hover:bg-white/90"
            >
              Get My Free Audit
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. TRUST ═══════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-[500px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#1d2144] sm:text-[34px] sm:leading-tight">
              Why businesses trust LeadRevs
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Based in the Triangle", desc: "Not a remote agency. LeadRevs works with local service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill." },
              { title: "Direct communication", desc: "No outsourced account managers. No ticket systems. Questions get answered directly." },
              { title: "No long-term contracts", desc: "Month-to-month on everything. Cancel anytime, no penalties." },
              { title: "Clear monthly reporting", desc: "Every report shows calls tracked, cost per lead, what worked, and what to adjust next." },
              { title: "Ad spend stays transparent", desc: "Paid directly to Google from your card. Never bundled, never marked up." },
              { title: "Built for service businesses", desc: "Plumbers, HVAC, electricians, roofers, auto repair, locksmiths, med spas — not SaaS, not e-commerce." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/10 bg-[#f8f9ff] p-6"
              >
                <h3 className="mb-2 text-base font-bold text-[#1d2144]">{item.title}</h3>
                <p className="text-sm text-[#959cb1]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. WHO THIS IS FOR ═══════════ */}
      <section className="bg-[#f8f9ff] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-10 max-w-[500px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#1d2144] sm:text-[34px] sm:leading-tight">
              Built for local service businesses
            </h2>
            <p className="text-base text-[#959cb1]">
              If the business depends on local customers finding it through
              Google — this audit is designed for it.
            </p>
          </div>

          <div className="mx-auto flex max-w-[700px] flex-wrap justify-center gap-3">
            {[
              "Plumbers", "HVAC", "Electricians", "Roofers", "Contractors",
              "Auto Repair", "Locksmiths", "Med Spas", "Landscapers",
              "Cleaning Services", "Pest Control", "Painters",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-[#1d2144]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. FAQ ═══════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#1d2144] sm:text-[34px]">
            Common questions
          </h2>

          <div className="space-y-0 divide-y divide-gray-100">
            {[
              { q: "Is the audit really free?", a: "Yes. No cost, no credit card, no obligation. The audit is a custom review sent within 48 hours." },
              { q: "What do I actually get?", a: "A clear report covering your Google visibility, website structure, competitor comparison, and a prioritized list of what to fix first." },
              { q: "How long does it take?", a: "The form takes about 30 seconds. The audit is typically delivered within 48 hours." },
              { q: "Do I need to sign a contract?", a: "No. The audit is free. If you decide to work together after, all services are month-to-month." },
              { q: "Do you work with businesses in my area?", a: "LeadRevs works with local service businesses in Raleigh, Durham, Cary, Apex, and Chapel Hill." },
              { q: "What if I already run Google Ads?", a: "The audit can include an ad account review — targeting gaps, wasted spend, and landing page issues." },
              { q: "What if I only need help with one thing?", a: "That's fine. The audit will show what matters most. You can act on whatever makes sense for your business." },
            ].map((item) => (
              <details key={item.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-bold text-[#1d2144]">{item.q}</h3>
                  <svg
                    className="size-5 shrink-0 text-[#959cb1] transition-transform duration-200 group-open:-rotate-180"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#959cb1]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. FINAL CTA + FORM ═══════════ */}
      <section id="audit-form" className="bg-[#1d2144] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-start gap-12 lg:flex-nowrap">
            {/* Left copy */}
            <div className="w-full lg:w-5/12">
              <h2 className="mb-5 text-2xl font-bold text-white sm:text-[34px] sm:leading-tight">
                See what&apos;s holding back your local leads
              </h2>
              <p className="mb-8 text-base text-gray-400">
                Submit your info below and receive a custom audit covering your
                Google visibility, website, competitors, and — if ads are running —
                where budget may be going to waste. No cost, no obligation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-gray-300">Custom review — not a generic PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-gray-300">Clear findings delivered within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-gray-300">Prioritized action plan you can use independently</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm text-gray-300">No contract, no pressure, no sales pitch</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="w-full lg:w-7/12">
              <div className="rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:p-10">
                <h3 className="mb-6 text-xl font-bold text-[#1d2144]">
                  Request your free audit
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-[#f8f9ff] px-4 py-3.5 text-sm text-[#1d2144] placeholder-[#959cb1] outline-none transition focus:border-primary"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Business name"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-[#f8f9ff] px-4 py-3.5 text-sm text-[#1d2144] placeholder-[#959cb1] outline-none transition focus:border-primary"
                    />
                    <input
                      type="text"
                      name="website"
                      placeholder="Website URL (optional)"
                      className="w-full rounded-lg border border-gray-200 bg-[#f8f9ff] px-4 py-3.5 text-sm text-[#1d2144] placeholder-[#959cb1] outline-none transition focus:border-primary"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-[#f8f9ff] px-4 py-3.5 text-sm text-[#1d2144] placeholder-[#959cb1] outline-none transition focus:border-primary"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="What's your biggest challenge right now? (optional)"
                    className="mt-4 w-full rounded-lg border border-gray-200 bg-[#f8f9ff] px-4 py-3.5 text-sm text-[#1d2144] placeholder-[#959cb1] outline-none transition focus:border-primary resize-none"
                  ></textarea>
                  <input type="hidden" name="_source" value="landing-page-free-audit" />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 w-full rounded-lg bg-primary py-4 text-base font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Get My Free Audit"}
                  </button>
                  <p className="mt-3 text-center text-xs text-[#959cb1]">
                    No cost · No obligation · Results within 48 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer bar ── */}
      <div className="bg-[#1d2144] border-t border-white/10 py-6">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} LeadRevs — Marketing for service businesses across the Triangle
        </p>
      </div>
    </div>
  );
}
