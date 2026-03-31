import FAQSection from "../components/FAQSection";

const faqItems = [
  {
    id: "faq-1",
    question: "What features does the Property Management System include?",
    answer:
      "Our comprehensive platform includes listings management, revenue analytics, maintenance ticketing, communication tools, compliance automation, and 24/7 concierge support. All designed specifically for Maldivian luxury property management.",
  },
  {
    id: "faq-2",
    question: "How do I integrate my existing property portfolio?",
    answer:
      "Integration is seamless! Our team assists with data migration from your current system. Typically, portfolio setup takes 3-5 business days with dedicated onboarding support. We support all major OTA platforms and custom integrations.",
  },
  {
    id: "faq-3",
    question: "What is the pricing structure for the platform?",
    answer:
      "Pricing is flexible and scales with your portfolio size. We offer tiered plans starting from single property management up to large enterprise portfolios with 100+ units. Contact our sales team for a custom quote tailored to your needs.",
  },
  {
    id: "faq-4",
    question: "Can I automate guest communication and check-ins?",
    answer:
      "Yes! Our unified communication hub supports automatic guest confirmations, check-in instructions, and multi-language support with auto-translation. You can customize templates and automate common inquiries while maintaining personal touch.",
  },
  {
    id: "faq-5",
    question: "How do you handle data security and compliance?",
    answer:
      "We maintain enterprise-grade security with 256-bit encryption, regular security audits, and compliance with Maldivian data protection regulations. Your data is backed up hourly with redundant servers and disaster recovery protocols.",
  },
];

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
    <main className="overflow-hidden bg-[#ffffff] pb-24 pt-12 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
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

      <section className="bg-[#ffffff] px-6 py-24 md:px-8">
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 text-[#1A2E35]">
            {/* Left Column: The "Hero" Feature */}
            <div className="group relative lg:col-span-4 flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-10 border border-[#26AEBF]/10 shadow-[0_30px_60px_-15px_rgba(38,174,191,0.08)] transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(38,174,191,0.15)] ">
              {/* Subtle Background Glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#26AEBF]/5 blur-3xl group-hover:bg-[#26AEBF]/10 transition-colors" />

              <div className="mb-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#26AEBF]/5 text-[#26AEBF] outline outline-1 outline-[#26AEBF]/30 outline-offset-8">
                  <span className="material-symbols-outlined text-3xl">
                    house_with_shield
                  </span>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.4em] text-[#26AEBF]/60">
                  Core Module
                </span>
                <h3 className="mb-6 font-headline text-4xl font-bold leading-[1.1] tracking-tight">
                  Listings
                  <br />
                  Management
                </h3>
                <p className="text-lg leading-relaxed text-slate-500">
                  Centralize your entire portfolio. Dynamic pricing and rich
                  media management.
                </p>

                <button className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#26AEBF] text-white transition-all duration-500 group-hover:w-full group-hover:rounded-2xl shadow-lg shadow-[#26AEBF]/20">
                  <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap px-4">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                    <span className="opacity-0 transition-opacity group-hover:opacity-100 font-bold uppercase tracking-widest text-sm">
                      Explore Portfolio
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: The "Dynamic Grid" */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Revenue Analytics (Wide Feature) */}
              <div className="group relative md:col-span-2 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#26AEBF]/10 via-white to-white p-8 border border-[#26AEBF]/10 transition-all hover:border-[#26AEBF]/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="max-w-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#26AEBF] text-white shadow-lg shadow-[#26AEBF]/20">
                      <span className="material-symbols-outlined text-2xl">
                        analytics
                      </span>
                    </div>
                    <h3 className="mb-2 font-headline text-2xl font-bold tracking-tight">
                      Revenue Analytics
                    </h3>
                    <p className="text-slate-500">
                      Predictive insights into cash flow, yield optimization,
                      and global performance.
                    </p>
                  </div>

                  {/* Modern Data Visualization Mockup */}
                  <div className="relative h-32 w-full md:w-56 overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-[#26AEBF]/10 shadow-inner flex items-center justify-center group-hover:bg-white transition-colors">
                    <div className="flex items-end gap-1.5 px-4 h-16">
                      {[30, 60, 45, 90, 55, 75, 40].map((h, i) => (
                        <div
                          key={i}
                          className="w-2.5 bg-[#26AEBF]/20 rounded-t-sm transition-all duration-1000 group-hover:bg-[#26AEBF]"
                          style={{
                            height: `${h}%`,
                            transitionDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Interactive Cards */}
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative flex items-start gap-5 rounded-[2rem] bg-white p-6 border border-slate-200 transition-all duration-300 hover:border-[#26AEBF]/20 hover:shadow-xl hover:shadow-[#26AEBF]/5"
                >
                  <div
                    className={`mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#26AEBF] transition-all duration-500 group-hover:bg-[#26AEBF] group-hover:text-white `}
                  >
                    <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-headline font-bold text-lg tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-24 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          {/* 3D Perspective Wrapper - Gives the tablet "physical" presence */}
          <div className="relative mx-auto w-full max-w-[1000px] [perspective:2000px]">
            {/* Physical iPad Hardware Chassis */}
            <div className="relative rounded-[3.5rem] border-[1px] border-slate-500/30 bg-[#121212] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_20px_40px_-15px_rgba(0,0,0,0.3)] [transform:rotateX(10deg)_rotateY(-5deg)_rotateZ(1deg)] transition-transform duration-700 hover:rotate-0">
              {/* Physical Hardware Buttons */}
              <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="absolute -right-[2px] top-52 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="absolute right-20 -top-[2px] h-[3px] w-12 rounded-b-sm bg-slate-700" />

              {/* The Screen Bezel (The black border around the glass) */}
              <div className="relative overflow-hidden rounded-[2.8rem] bg-[#050505] p-4 ring-1 ring-inset ring-white/10 shadow-inner">
                {/* Glass Reflection Overlay */}
                <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60" />

                {/* Front Camera Lens with blue optic coating */}
                <div className="absolute left-1/2 top-5 z-50 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-white/5">
                  <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-blue-900/40 shadow-[0_0_2px_rgba(0,0,255,0.5)]" />
                </div>

                {/* Software Interface (The actual Screen Content) */}
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                  {/* Top Bar - Maldives Resort PMS Status */}
                  <div className="flex items-center justify-between border-b border-outline-variant/10 bg-surface-container-lowest px-10 py-5">
                    <div className="flex items-center gap-4">
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                        LUSHWARE{" "}
                        <span className="font-light text-on-surface-variant">
                          OS v5.0
                        </span>
                      </div>
                      <div className="mx-2 h-4 w-px bg-outline-variant/50" />
                      <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                        Maldives Luxury PMS
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="material-symbols-outlined text-lg text-on-surface-variant">
                        wifi
                      </span>
                      <span className="material-symbols-outlined text-lg text-emerald-500">
                        battery_full_alt
                      </span>
                      <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white ring-1 ring-primary/20 shadow-sm">
                        <img
                          alt="General Manager"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12">
                    {/* Sidebar: Premium Maldives Operations */}
                    <aside className="col-span-3 bg-slate-50 p-8 min-h-[550px] border-r border-slate-100">
                      <div className="space-y-8">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                          Resort Hub
                        </p>
                        {[
                          {
                            icon: "bungalow",
                            label: "Villa Mgmt",
                            active: true,
                          },
                          { icon: "kayaking", label: "Excursions" },
                          { icon: "flight_land", label: "Transfers" },
                          { icon: "account_balance", label: "Revenue/Yield" },
                          { icon: "cleaning_services", label: "Butler Svc" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-4 cursor-pointer transition-all hover:translate-x-1 ${item.active ? "text-primary" : "text-slate-500"}`}
                          >
                            <span className="material-symbols-outlined text-xl">
                              {item.icon}
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </aside>

                    {/* Main Dashboard Content */}
                    <main className="col-span-9 p-10 bg-white">
                      <div className="mb-10 flex items-end justify-between">
                        <div>
                          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                            Island Overview
                          </h2>
                          <p className="text-xs text-slate-500">
                            Baa Atoll Portfolio • Live Briefing
                          </p>
                        </div>
                        <div className="flex gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                          <span className="material-symbols-outlined text-sm">
                            sync
                          </span>{" "}
                          Live Sync
                        </div>
                      </div>

                      {/* Luxury KPIs */}
                      <div className="mb-10 grid grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-md">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Daily RevPAR
                          </span>
                          <span className="text-3xl font-black text-slate-900">
                            $2,450
                            <span className="text-sm font-medium text-slate-400">
                              .00
                            </span>
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                            <span className="material-symbols-outlined text-sm">
                              trending_up
                            </span>
                            +18.4% Yield
                          </span>
                        </div>

                        <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-md">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Villa Occupancy
                          </span>
                          <span className="text-3xl font-black text-slate-900">
                            94%
                          </span>
                          <span className="text-[11px] font-bold text-primary">
                            42/45 Overwater Villas
                          </span>
                        </div>

                        <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-md">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Seaplane Hub
                          </span>
                          <span className="text-3xl font-black text-slate-900">
                            08
                          </span>
                          <span className="text-[11px] font-bold text-error">
                            2 TMA Flights in 15m
                          </span>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8">
                        <div className="mb-10 flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
                              Arrival Density
                            </h4>
                            <p className="text-[10px] text-slate-500">
                              Velana Int. Airport Sync (VIA)
                            </p>
                          </div>
                          <select className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest outline-none">
                            <option>Current Week</option>
                            <option>Peak Forecast</option>
                          </select>
                        </div>

                        <div className="flex h-44 items-end justify-between gap-4 px-4">
                          {occupancyBars.map((value, index) => (
                            <div
                              key={index}
                              className="group relative h-full flex-1"
                            >
                              <div className="relative h-full w-full rounded-full bg-slate-200/50 transition-all duration-300 group-hover:bg-slate-200">
                                <div
                                  className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-primary to-primary-container shadow-lg transition-all duration-700"
                                  style={{ height: `${value}%` }}
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-900 px-2 py-1 text-[8px] text-white transition-all group-hover:scale-100">
                                    {value}%
                                  </div>
                                </div>
                              </div>
                              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-tighter text-slate-400">
                                {occupancyDays[index]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </main>
                  </div>

                  {/* iPad Home Bar Indicator */}
                  <div className="mx-auto mb-2 h-1.5 w-32 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            {/* Surface Reflection (Floor Shadow) to ground the device */}
            <div className="absolute -bottom-16 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[100%] bg-slate-900/15 blur-[40px] -z-10" />
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

      <FAQSection
        items={faqItems}
        title="Property Management FAQs"
        subtitle="Everything you need to know about managing your Maldivian properties"
      />

      <section className="px-6 py-24 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-12 text-center lg:p-20">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
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
