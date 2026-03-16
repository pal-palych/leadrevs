"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xwvrnzzw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);
    setSubmitted(true);

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "form",
        event_label: "free_audit_request",
      });
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-white py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="mb-5 text-3xl font-bold text-dark sm:text-4xl md:text-[45px]">
              Audit request received
            </h2>
            <p className="text-lg text-body-color">
              A custom review of your site, Google visibility, and competitor
              landscape will be sent within 48 hours. No sales pitch — just findings
              and next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left: what the audit includes */}
          <div className="w-full px-4 lg:w-5/12">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FREE AUDIT
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]/[55px]">
              Find out why the phone isn&apos;t ringing
            </h2>
            <p className="mb-8 text-base text-body-color">
              Every audit is custom. It includes a review of the website, Google
              visibility, competitor activity, and — if ads are running — where
              budget is being wasted. The deliverable is a clear, prioritized
              action plan. No sales pitch. No generic PDF.
            </p>

            <h3 className="mb-5 text-xl font-bold text-dark">What&apos;s included:</h3>
            <div className="mb-8 space-y-4 lg:mb-0">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Website performance and structure review</strong> — speed,
                  mobile usability, missing service pages
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Google ranking and visibility analysis</strong> — keywords,
                  Map Pack position, search volume
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Competitor keyword and review comparison</strong> — what
                  they rank for that you don&apos;t
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Ad targeting and budget assessment</strong> — if
                  applicable
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Prioritized action plan</strong> — usable
                  independently
                </p>
              </div>
            </div>
          </div>

          <div className="hidden px-4 lg:block lg:w-1/12"></div>

          {/* Right: form */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-pricing sm:p-10 lg:p-12">
              <h3 className="mb-6 text-xl font-bold text-dark">
                Request your free audit
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="company"
                        placeholder="Business name"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="website"
                        placeholder="Website URL (optional)"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-5">
                      <textarea
                        rows={3}
                        name="message"
                        placeholder="What's your biggest challenge right now?"
                        className="input-field resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-primary hover:bg-primary/90 w-full rounded-md p-4 text-base font-semibold text-white transition disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Request Free Audit"}
                    </button>
                    <p className="mt-4 text-center text-sm text-body-color">
                      No cost. No obligation. Results sent within 48 hours.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
