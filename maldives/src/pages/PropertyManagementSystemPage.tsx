const featureCards = [
  {
    icon: "engineering",
    iconColor: "text-tertiary",
    title: "Maintenance",
    description:
      "Smart ticketing and real-time vendor dispatch for flawless property upkeep.",
  },
  {
    icon: "forum",
    iconColor: "text-secondary",
    title: "Communication",
    description:
      "Unified inbox for guest requests and tenant agreements with auto-translation.",
  },
  {
    icon: "verified_user",
    iconColor: "text-error",
    title: "Compliance",
    description:
      "Automated local tax reporting and legal documentation for Maldivian regulations.",
  },
  {
    icon: "support_agent",
    iconColor: "text-primary",
    title: "24/7 Concierge",
    description:
      "Dedicated account managers for white-glove platform assistance.",
  },
];

const occupancyBars = [80, 90, 40, 95, 85, 100, 98];
const occupancyDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function PropertyManagementSystemPage() {
  return (
    <main className="overflow-hidden bg-surface pb-24 pt-24 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <section className="relative overflow-hidden px-6 py-20 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <span className="mb-6 inline-block rounded-full bg-secondary-container/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              Premium Management Solution
            </span>
            <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface lg:text-7xl">
              Advanced Property &amp;{" "}
              <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                Real Estate
              </span>{" "}
              Control
            </h1>
            <p className="mb-12 max-w-xl text-lg leading-relaxed text-on-surface-variant lg:text-xl">
              Experience the digital sanctuary of property management.
              Effortlessly oversee luxury villas and island retreats with
              Maldivian precision and global intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-lg font-bold text-on-primary shadow-[0_10px_20px_rgba(0,104,116,0.15)] transition-transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="rounded-full bg-surface-container-highest px-8 py-4 text-lg font-bold text-primary transition-colors hover:bg-surface-container-high">
                View Showcase
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:h-[600px]">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-tertiary-container/10 blur-3xl" />

            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
              <img
                alt="Luxury villa Maldives"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAogCZLQISwKOmjWDJ2SGbcMS4EKmdfc_j2qcvDksP74FHmnalm0OmY3cjwtxT3ImH0KZh-BkhXm0nMrEYgdU4lPWhfL50nSgS1JcTNILQ02uJeI61VrOsKOFqTUDr2ByCEnoFFww-mF8kPVjbesAsoB7VOeiWjbkc67Al-MVQiCwhs4xNGySFZutcC9N-AYZ1MjmPlKf6AAy-ugFMcESmNUUojO3hnqTnPmhAQ2ahk-SAGxJ9UsSlsv3r-bBfGxBa6wqrnSLnc-oc"
              />

              <div className="glass-panel absolute bottom-8 left-8 right-8 rounded-lg p-6 shadow-xl">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Average Occupancy
                    </p>
                    <h3 className="font-headline text-3xl font-extrabold text-primary">
                      94.2%
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex h-12 w-2 flex-col justify-end rounded-full bg-primary-container/20">
                      <div className="h-4/5 rounded-full bg-primary" />
                    </div>
                    <div className="flex h-12 w-2 flex-col justify-end rounded-full bg-primary-container/20">
                      <div className="h-3/5 rounded-full bg-primary" />
                    </div>
                    <div className="flex h-12 w-2 flex-col justify-end rounded-full bg-primary-container/20">
                      <div className="h-5/6 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-on-surface lg:text-5xl">
              Integrated Control, Reimagined.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
              Four core pillars designed to streamline your property empire with
              elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,104,116,0.03)] transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-2">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed-dim/20 text-primary">
                  <span className="material-symbols-outlined">
                    house_with_shield
                  </span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold">
                  Listings Management
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Centralize your entire portfolio. Dynamic pricing and rich
                  media management for every unit across global platforms.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-outline-variant/10 pt-8">
                <span className="text-sm font-bold text-primary">
                  Explore Listings
                </span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-primary-container/10 bg-primary-container/5 p-8 md:col-span-1 lg:col-span-2">
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold">
                  Revenue Analytics
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Predictive insights into cash flow, yield optimization, and
                  seasonal performance trends.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[200px]">
                  show_chart
                </span>
              </div>
            </div>

            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,104,116,0.03)] transition-shadow hover:shadow-lg"
              >
                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${card.iconColor === "text-error" ? "bg-error/10" : card.iconColor === "text-tertiary" ? "bg-tertiary/10" : card.iconColor === "text-secondary" ? "bg-secondary/10" : "bg-primary-fixed-dim/20"} ${card.iconColor}`}
                  >
                    <span className="material-symbols-outlined">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_40px_80px_rgba(0,104,116,0.08)]">
            <div className="flex items-center justify-between bg-surface-container-high px-8 py-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-error/40" />
                  <div className="h-3 w-3 rounded-full bg-secondary-container/40" />
                  <div className="h-3 w-3 rounded-full bg-tertiary-container/40" />
                </div>
                <div className="mx-2 h-6 w-px bg-outline-variant/30" />
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Property Dashboard v4.2
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-xl text-on-surface-variant">
                  search
                </span>
                <span className="material-symbols-outlined text-xl text-on-surface-variant">
                  notifications
                </span>
                <div className="h-8 w-8 overflow-hidden rounded-full bg-primary-container">
                  <img
                    alt="User profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe4b6PVIeNtoB7pmZyAPP4AWXrHUs8LFg-qMCBWLinuLxjtFj_p136uiM-1eLqcv3HyUg9-fyZOU16AOtBFq_d5_GYcAuU5zGujYXFIydeyK3NrnqNj2un6qssDBuTmeojAV26CvTSoSyfqdsQDQ-N1J5UwgRDup7Fv34ow3J1u28Ww58hNe1C_2sCAPqADaTZsSXsvTGM2Ts_V_gGN-WPNE2NpEZcg2563vF0_TyR79Z2Zv5WLUn2ylp8cA0sgkYEqAaF8OrYMRc"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <aside className="hidden bg-surface-container-low p-6 lg:col-span-2 lg:block">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 font-bold text-primary">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="text-sm">Overview</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary">
                    <span className="material-symbols-outlined">apartment</span>
                    <span className="text-sm">Properties</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary">
                    <span className="material-symbols-outlined">payments</span>
                    <span className="text-sm">Finances</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary">
                    <span className="material-symbols-outlined">group</span>
                    <span className="text-sm">Tenants</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant transition-colors hover:text-primary">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                    <span className="text-sm">Schedule</span>
                  </div>
                </div>
              </aside>

              <div className="p-8 lg:col-span-10">
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="flex flex-col gap-2 rounded-lg bg-surface-container p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Total Revenue
                    </span>
                    <span className="font-headline text-3xl font-extrabold text-on-surface">
                      $142,500
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-tertiary">
                      <span className="material-symbols-outlined text-sm">
                        trending_up
                      </span>
                      +12.4% vs last month
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-surface-container p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Active Bookings
                    </span>
                    <span className="font-headline text-3xl font-extrabold text-on-surface">
                      184
                    </span>
                    <span className="text-xs font-bold text-secondary">
                      89 Units occupied
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 rounded-lg bg-surface-container p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      Maintenance
                    </span>
                    <span className="font-headline text-3xl font-extrabold text-on-surface">
                      12
                    </span>
                    <span className="text-xs font-bold text-error">
                      3 Urgent tickets
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-surface-container bg-white p-6 shadow-sm">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="font-headline text-lg font-bold">
                      Occupancy Status
                    </h4>
                    <select className="rounded-full border-none bg-surface-container px-4 py-1.5 text-xs font-bold focus:ring-primary/20">
                      <option>Last 30 Days</option>
                      <option>Last 6 Months</option>
                    </select>
                  </div>

                  <div className="flex h-64 items-end justify-between gap-4">
                    {occupancyBars.map((value, index) => (
                      <div
                        key={occupancyDays[index]}
                        className="group relative h-full flex-1"
                      >
                        <div
                          className="relative rounded-t-full bg-surface-container-high"
                          style={{ height: `${60 + index * 5}%` }}
                        >
                          <div
                            className="absolute bottom-0 w-full rounded-t-full bg-primary transition-all duration-500 group-hover:bg-primary-container"
                            style={{ height: `${value}%` }}
                          />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-on-surface-variant">
                          {occupancyDays[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <p className="text-center font-label text-sm font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-12">
            Trusted by the Maldives' Finest Portfolios
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="text-3xl font-black text-primary tracking-tighter">
              LAGOON<span className="text-secondary">ELITE</span>
            </div>
            <div className="text-3xl font-black text-primary tracking-tighter">
              AZURE<span className="text-secondary">HOMES</span>
            </div>
            <div className="text-3xl font-black text-primary tracking-tighter">
              SANDS<span className="text-secondary">MANAGEMENT</span>
            </div>
            <div className="text-3xl font-black text-primary tracking-tighter">
              OCEANIC<span className="text-secondary">VILLAS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-12 text-center lg:p-20">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10">
            <h2 className="mb-6 font-headline text-4xl font-extrabold text-on-primary lg:text-5xl">
              Elevate Your Property Standards
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
              Join the leading real estate firms in the Maldives using Viduvaru
              to scale their excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-shadow hover:shadow-xl">
                Request Custom Quote
              </button>
              <button className="rounded-full border border-white/30 px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PropertyManagementSystemPage;
