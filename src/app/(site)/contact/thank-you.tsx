import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="bg-white pb-[120px] pt-[150px]">
      <div className="container">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="mb-5 text-3xl font-bold text-dark sm:text-4xl md:text-[45px]">
            Got it — audit on the way
          </h1>
          <p className="mb-8 text-lg text-body-color">
            I&apos;ll personally review your business and send you a custom
            audit within 24-48 hours. Check your inbox for a confirmation.
          </p>
          <Link
            href="/"
            className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-10 py-4 text-base font-semibold text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
