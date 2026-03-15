import CommonCard from "@/components/Common/CommonCard";
import { Metadata } from "next";
import Link from "next/link";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Login Success | ${siteName}`,
  description: "This is Login success page description",
};

export default function SuccessPage() {
  return (
    <>
      <section className="py-[120px] lg:pt-[200px]">
        <div className="px-4 xl:container">
          <CommonCard>
            <div className="relative pt-6 text-center md:pt-8">
              <span className="text-primary mb-2 block text-lg font-semibold">
                SUCCESS
              </span>
              <h1 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px]">
                Congratulations!
              </h1>
            </div>
            <p className="text-body-color mb-6 text-center">
              You Logged In Successfully. Thanks for being with us.
            </p>
            <div className="flex justify-center">
              <Link
                href="/"
                className="bg-primary inline-flex items-center justify-center rounded-sm px-8 py-[14px] text-sm font-semibold text-white"
              >
                Go to Home Page
              </Link>
            </div>
          </CommonCard>
        </div>
      </section>
    </>
  );
}
