import Graphic from "./Graphic";
import SectionTitle from "@/components/Common/SectionTitle";

export default function About() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 bg-white pb-[90px] pt-20 lg:pt-[140px]"
    >
      <div className="container">
        <SectionTitle
          mainTitle="WHAT GETS IN THE WAY"
          title="Good businesses lose leads every day because of fixable problems"
          width="700px"
          marginBottom="50px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Hard to find on Google
              </h3>
              <p className="text-base text-body-color">
                Most service businesses have a one-page site or an outdated design
                that Google can&apos;t index properly. If there&apos;s no dedicated page for
                each service, Google has nothing to rank. Competitors with 10+ pages
                show up first — even if their work isn&apos;t as good.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Ad budget burned on bad clicks
              </h3>
              <p className="text-base text-body-color">
                Broad match keywords, no negative keyword lists, and sending traffic
                to the homepage instead of a landing page — these are the most common
                ways ad budgets get wasted. Tighter targeting and proper campaign
                structure fix this fast.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                Website doesn&apos;t convert
              </h3>
              <p className="text-base text-body-color">
                Getting traffic is only half the problem. If the site loads slowly,
                doesn&apos;t have reviews, click-to-call buttons, or clear service
                descriptions — visitors leave without calling. Small structural
                improvements can double the conversion rate.
              </p>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8 rounded-xl border border-primary/20 bg-white p-8 shadow-service">
              <h3 className="mb-3 text-xl font-bold text-dark">
                No visibility into what&apos;s working
              </h3>
              <p className="text-base text-body-color">
                Without call tracking and lead source reporting, there&apos;s no way
                to know which marketing is producing real jobs. Every dollar should
                be traceable back to a call, a form, or a booked appointment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Graphic />
    </section>
  );
}
