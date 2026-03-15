"use client";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mb-4">
        <div className="group shadow-service relative mb-8 aspect-518/291 overflow-hidden rounded-md">
          <Image src={portfolio?.image} alt="image" fill className="w-full" />
          <div className="bg-primary/[17%] invisible absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 transition group-hover:visible group-hover:opacity-100">
            <button
              onClick={() => setOpen(true)}
              className="glightbox bg-primary flex h-10 w-10 items-center justify-center rounded-full text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="mt-6">
          <Link
            href={`/portfolio/${portfolio?.slug}`}
            className="hover:text-primary mb-3 inline-block text-xl font-semibold text-black"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-body-color text-base font-medium">
          {portfolio?.sortDescription}
        </p>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: portfolio?.image as string,
          },
        ]}
      />
    </>
  );
}
