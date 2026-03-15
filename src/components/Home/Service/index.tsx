export default function Service() {
  const items = [
    {
      title: "Highest-margin services",
      description: "We target the jobs that bring the most revenue per call — not oil changes or basic inspections.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
    {
      title: "Strongest search intent",
      description: 'People searching "water heater repair near me" need help now. We put you in front of them.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      ),
    },
    {
      title: "Best use of your budget",
      description: "We find where the cost per click is lowest and competition is weakest — then expand from there.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      ),
    },
    {
      title: "Strongest close rates",
      description: "We focus on keywords and channels where leads are most likely to turn into booked jobs.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      ),
    },
  ];

  return (
    <section
      id="services"
      className="bg-black pt-20 pb-20 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 mb-[60px] flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <span className="mb-2 block text-lg font-semibold text-primary">
              PRIORITIZE WHAT MATTERS
            </span>
            <h2 className="mb-5 max-w-[625px] text-3xl font-bold text-white sm:text-4xl md:text-[45px]/[55px]">
              We don&apos;t market everything at once
            </h2>
            <p className="max-w-[600px] text-lg font-medium text-body-color">
              We start with the services that matter most to your business.
              One bathroom remodel or engine replacement from a Google Ad can
              cover your entire monthly budget.
            </p>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <svg className="size-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-body-color">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
