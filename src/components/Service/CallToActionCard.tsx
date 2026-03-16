import Link from "next/link";

export default function CallToActionCard() {
  return (
    <div className="bg-primary px-7 py-10 text-center">
      <div className="mx-auto w-full max-w-[215px]">
        <h3 className="mb-5 text-2xl font-bold text-white">Get started</h3>
        <p className="mb-9 text-white">info@leadrevs.app</p>
        <Link
          href="/contact"
          className="flex h-12 w-full items-center justify-center rounded-full bg-white text-center font-medium text-black"
        >
          Request free audit
        </Link>
      </div>
    </div>
  );
}
