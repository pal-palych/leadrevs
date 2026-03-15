import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative z-10 flex w-full max-w-[600px] pt-11 lg:justify-end lg:pt-0">
      <Image
        src="/images/hero/hero-image-01.jpg"
        alt="Marketing consultant reviewing Google Ads analytics dashboard"
        width={1200}
        height={896}
        className="rounded-lg"
        priority
      />

      <span className="absolute -bottom-8 -left-8 z-[-1]">
        <svg
          width="93"
          height="93"
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#384bf8" />
          <circle cx="2.5" cy="24.5" r="2.5" fill="#384bf8" />
          <circle cx="2.5" cy="46.5" r="2.5" fill="#384bf8" />
          <circle cx="2.5" cy="68.5" r="2.5" fill="#384bf8" />
          <circle cx="2.5" cy="90.5" r="2.5" fill="#384bf8" />
          <circle cx="24.5" cy="2.5" r="2.5" fill="#384bf8" />
          <circle cx="24.5" cy="24.5" r="2.5" fill="#384bf8" />
          <circle cx="24.5" cy="46.5" r="2.5" fill="#384bf8" />
          <circle cx="24.5" cy="68.5" r="2.5" fill="#384bf8" />
          <circle cx="24.5" cy="90.5" r="2.5" fill="#384bf8" />
          <circle cx="46.5" cy="2.5" r="2.5" fill="#384bf8" />
          <circle cx="46.5" cy="24.5" r="2.5" fill="#384bf8" />
          <circle cx="46.5" cy="46.5" r="2.5" fill="#384bf8" />
          <circle cx="46.5" cy="68.5" r="2.5" fill="#384bf8" />
          <circle cx="46.5" cy="90.5" r="2.5" fill="#384bf8" />
          <circle cx="68.5" cy="2.5" r="2.5" fill="#384bf8" />
          <circle cx="68.5" cy="24.5" r="2.5" fill="#384bf8" />
          <circle cx="68.5" cy="46.5" r="2.5" fill="#384bf8" />
          <circle cx="68.5" cy="68.5" r="2.5" fill="#384bf8" />
          <circle cx="68.5" cy="90.5" r="2.5" fill="#384bf8" />
          <circle cx="90.5" cy="2.5" r="2.5" fill="#384bf8" />
          <circle cx="90.5" cy="24.5" r="2.5" fill="#384bf8" />
          <circle cx="90.5" cy="46.5" r="2.5" fill="#384bf8" />
          <circle cx="90.5" cy="68.5" r="2.5" fill="#384bf8" />
          <circle cx="90.5" cy="90.5" r="2.5" fill="#384bf8" />
        </svg>
      </span>
    </div>
  );
}
