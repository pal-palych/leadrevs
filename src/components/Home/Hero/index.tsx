import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-white pt-[120px] pb-20 lg:pt-[150px] lg:pb-[110px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="hero-content">
              <h1 className="text-dark mb-3 text-4xl leading-snug font-bold sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Get More Calls
                <br />
                From Google —
                <br />
                Without Wasting Money
              </h1>
              <p className="text-body-color mb-8 max-w-[480px] text-base">
                I help Raleigh-area service businesses improve their website,
                Google visibility, and ads — so they get more real calls, better
                jobs, and clearer ROI. No bloated retainers. No outsourced
                account managers.
              </p>
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <Link
                    href="#contact"
                    className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-10 py-4 text-center text-base font-normal text-white lg:px-8 xl:px-10"
                  >
                    See What&apos;s Costing You Calls
                  </Link>
                </li>
                <li className="leading-none">
                  <Link
                    href="#how-it-works"
                    className="text-body-color hover:text-primary inline-flex items-center justify-center py-1 text-center text-base font-normal"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="11" fill="#384bf8" />
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    How It Works
                  </Link>
                </li>
              </ul>

              {/* Trust strip */}
              <div className="mt-12 border-t border-stroke/30 pt-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  <div className="flex items-start gap-2">
                    <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-dark">Based in Raleigh-Durham</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-dark">You work directly with me</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-dark">No long-term contracts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-dark">Leads, not vanity metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 xl:block xl:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex w-full max-lg:mt-10 lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
