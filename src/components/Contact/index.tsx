export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left: what you get in the audit */}
          <div className="w-full px-4 lg:w-5/12">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FREE AUDIT
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-[45px]/[55px]">
              See what&apos;s costing you calls right now
            </h2>
            <p className="mb-8 text-base text-body-color">
              Not a generic PDF. Not a sales pitch. I personally review your
              business and send you a custom report with specific findings.
            </p>

            <h3 className="mb-5 text-xl font-bold text-dark">What you get:</h3>
            <div className="mb-8 space-y-4 lg:mb-0">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Where your site is underperforming</strong> — speed,
                  structure, missing pages, mobile issues
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">Which services to prioritize</strong> — based on
                  search volume, competition, and your margins
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">What competitors are doing better</strong> — their
                  keyword count, page count, review volume vs yours
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">What&apos;s likely wasting budget</strong> — broad
                  match keywords, wrong targeting, missing landing pages
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-base text-body-color">
                  <strong className="text-dark">What to fix now vs later</strong> — a clear,
                  prioritized action plan you can use with or without me
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
              <form action="https://formspree.io/f/xwvrnzzw" method="POST">
                <input type="hidden" name="_next" value="https://leadrevs.app/contact?submitted=true" />
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="input-field"
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
                        placeholder="What's your biggest challenge? (not enough calls, bad website, wasted ad spend, etc.)"
                        className="input-field resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="bg-primary hover:bg-primary/90 w-full rounded-md p-4 text-base font-semibold text-white transition">
                      Send Me My Free Audit
                    </button>
                    <p className="mt-4 text-center text-sm text-body-color">
                      No spam. No sales pitch. Just a real audit from a real person.
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
