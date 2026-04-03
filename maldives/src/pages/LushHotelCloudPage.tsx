import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";
import InquiryForm from "../components/InquiryForm";

const reservationTags = ["Real-time Sync", "Direct Booking", "Channel Manager"];

const hotelCloudFAQs = [
  {
    id: "hotel-faq-1",
    question: "How does Lush Hotel Cloud integrate with our existing PMS?",
    answer:
      "Lush Hotel Cloud seamlessly integrates with 50+ major PMS systems through APIs and direct connectors. Our integration team handles the setup process, typically completing within 48-72 hours with zero downtime to your operations.",
  },
  {
    id: "hotel-faq-2",
    question: "Can we manage multiple properties from a single dashboard?",
    answer:
      "Absolutely! Our unified dashboard allows you to oversee all properties simultaneously or drill down into individual properties. Switch between islands in a single click, view consolidated KPIs, and manage everything from inventory to staffing across your entire resort group.",
  },
  {
    id: "hotel-faq-3",
    question: "What kind of support is provided during onboarding?",
    answer:
      "We provide comprehensive white-glove onboarding including staff training, customization to your specific workflows, and dedicated support during the ramp-up period. Our team works in your timezone with 24/7 availability for critical issues.",
  },
  {
    id: "hotel-faq-4",
    question: "How does the mobile key feature improve guest experience?",
    answer:
      "Guests receive digital keys on their smartphones, eliminating front-desk friction and enabling contactless check-in. They can access their villa 15 minutes before arrival, and the system automatically adjusts access times based on room status and housekeeping completion.",
  },
  {
    id: "hotel-faq-5",
    question: "What are the uptime SLAs and disaster recovery measures?",
    answer:
      "We guarantee 99.99% uptime with redundant servers across multiple geographic regions. All data is backed up every 15 minutes with automatic failover protocols. In the unlikely event of service disruption, our team is immediately notified and prioritizes recovery.",
  },
];

const checklistItems = [
  {
    title: "Consolidated Guest Profiles",
    description:
      "Identify VIPs across your entire brand, tracking preferences from one resort to another.",
  },
  {
    title: "Dynamic Revenue Management",
    description:
      "Automated price fluctuations based on total inventory across your archipelago.",
  },
];

const topProperties = [
  {
    name: "Viduvaru North Atoll",
    type: "Luxury Overwater Villas",
    revenue: "$42k",
    soar: "SOAR 98%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYr5bgIkxai71JOS4mGb5krp1wwbdkIS5U2fpAzeSQyst_sTsYwy2jmDJWN1FnGdj42zEQdc-B_cv4TcIrvj84527r2jIuveC8DCT8mL_0fjV54ZDiTstm_CPBwsJ9R5-I126e04dgbZoxSBMMU8Mqoi4dafwmc7XyWMZ0alTdJC9Rifx0jQRwx4Za5KD0VQkNXAS_MO5qEPaEXXbqPLe5wm6BMICDmGCNgUCB6oha5sF4017Ao7nFQqJK9vcpiUOQjXGi_YFpL0w",
  },
  {
    name: "Viduvaru Private Island",
    type: "Exclusive Sanctuary",
    revenue: "$89k",
    soar: "SOAR 100%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLA0QvhRpk7gmYr1My8nZoWXQq3A5HsJtpxrDRLUGW68VDFoQqxPJNdqY5Jet6ggD_2P5OGPwQ3T8LakexKtwTEiEuMVwk-i_94ZUg7oKUW1zmfYxFZWn197cd5BeTrI2tc3CL5p56Sqm4X8yJZL0j5KdWoQ_-6fcuT6YACGLrQDwlVWGIQIDPB4ABAIwoXC4etTpdaAJm_r4tPb481zDgqmxNk1HLPKVz_G_kcgPv77pUcB7dCBeEJ-rxV_p8YDtQUFXVSZK6Wy4",
  },
];

function LushHotelCloudPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <main className="pt-24 bg-[#ffffff] selection:bg-primary-container selection:text-on-primary-container">
      <PinnedScrollHeadlineSection
        badge="The Next Era of Hospitality"
        titlePrefix="Elevate Your"
        highlightText="Resort Operations"
        titleSuffix=""
        description="Experience the ultimate cloud-based command center designed exclusively for luxury Maldivian atolls and global high-end resorts."
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 w-full max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={openInquiryModal}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-6 sm:px-10 lg:px-10 py-3 sm:py-4 font-bold text-on-primary shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Send Requirements
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:flex-1 text-center rounded-full border-2 border-primary px-6 sm:px-10 lg:px-10 py-3 sm:py-4 font-bold text-primary transition-all hover:bg-surface-container hover:scale-105 active:scale-95"
          >
            View Virtual Tour
          </Link>
        </div>
      </PinnedScrollHeadlineSection>

      {isInquiryOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 md:p-8">
            <InquiryForm
              topic="Lush Hotel Cloud"
              ctaLabel="Submit Inquiry"
              onSuccess={closeInquiryModal}
              onClose={closeInquiryModal}
              showCloseButton
            />
          </div>
        </div>
      ) : null}

      <section className="bg-[#ffffff] px-6 pb-12 sm:pb-16 md:py-20 lg:py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4 text-center md:text-left">
            <h2 className="font-headline font-bold tracking-tight text-4xl sm:text-4xl md:text-5xl lg:text-5xl">
              Precision Management <br />
              <span className="text-secondary">for Every Department</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-10 shadow-sm md:col-span-8">
              <div className="max-w-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[32px]">
                    event_available
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold">
                  Smart Reservations Engine
                </h3>
                <p className="leading-relaxed text-md">
                  Unified booking platform for multi-property resorts. Handle
                  complex guest itineraries, villa upgrades, and direct channel
                  management with AI-driven rate optimization.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {reservationTags.map((tag) => (
                  <div
                    key={tag}
                    className="
                        relative flex items-center px-5 py-2
                        bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                        border-l-2 border-primary
                        transition-transform duration-200 hover:-translate-y-0.5
                      "
                  >
                    <span className="text-[11px] font-bold uppercase tracking-tighter text-on-surface">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-10 text-on-primary shadow-lg md:col-span-4">
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-6 text-4xl">
                  fact_check
                </span>
                <h3 className="mb-4 text-2xl font-bold">
                  Housekeeping Tracking
                </h3>
                <p className="text-md leading-relaxed text-white">
                  Mobile-first workforce management for villa attendants and
                  maintenance crews. Instant status updates and task
                  prioritization.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-primary to-primary-container p-10 text-on-primary shadow-lg md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-4xl">
                monitoring
              </span>
              <h3 className="mb-4 text-2xl font-bold">Financial Reporting</h3>
              <p className="text-md leading-relaxed text-white">
                Deep-dive into ADR, RevPAR, and operational costs. Integrated
                automated reconciliation for complex currency exchanges.
              </p>
            </div>

            <div className="group flex flex-col items-center gap-8 rounded-xl border border-outline-variant bg-surface-container-lowest p-10 shadow-sm md:col-span-8 md:flex-row">
              <div className="flex-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-transform ">
                  <span className="material-symbols-outlined text-[32px]">
                    warehouse
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Inventory Control</h3>
                <p className="leading-relaxed text-md">
                  From F&amp;B supplies to resort-wide luxury amenities. Predict
                  stock needs based on occupancy and historical lead times.
                </p>
              </div>

              <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg  md:w-1/2">
                <img
                  alt="Inventory Visualization"
                  className="h-full w-full object-cover "
                  src="https://axolonerp.com/wp-content/uploads/2022/11/Inventory_tab-new-1024x743.webp"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-panel rounded-full px-4 py-2 text-xs font-bold text-primary">
                    Live Stock Update: 94%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="w-full space-y-8 lg:px-0 px-2 lg:w-2/5">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
              The Intelligence of{" "}
              <span className="text-primary">Multi-Property Orchestration</span>
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Our cloud architecture is purpose-built for resort groups. Switch
              between island properties in a single click, or view consolidated
              performance metrics for your entire portfolio.
            </p>

            {/* Checklist — 1-col on mobile, 2-col on tablet, 1-col on desktop */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {checklistItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <span
                      className="material-symbols-outlined text-[14px] text-on-secondary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Device mockup */}
          <div className="w-full lg:w-3/5">
            <div className="relative mx-auto max-w-5xl [perspective:2200px]">
              {/* Shadow blob */}
              <div className="absolute -bottom-10 left-1/2 h-16 w-[88%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-2xl" />

              {/* Device frame — flat on mobile, tilted on md+ */}
              <div className="relative rounded-[3.2rem] border-[10px] border-[#121212] bg-gradient-to-b from-[#222] to-[#0f0f0f] p-[10px] shadow-[0_70px_120px_-35px_rgba(0,0,0,0.6),0_35px_60px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform duration-700 md:[transform:rotateX(10deg)_rotateY(-8deg)_rotateZ(1deg)] md:hover:[transform:rotateX(6deg)_rotateY(-4deg)_rotateZ(0deg)]">
                {/* Side buttons */}
                <div className="absolute -right-[3px] top-24 h-20 w-[4px] rounded-l bg-[#2b2b2b]" />
                <div className="absolute -right-[3px] top-52 h-14 w-[4px] rounded-l bg-[#2b2b2b]" />
                <div className="absolute left-10 top-[5px] h-[2px] w-20 rounded-b bg-[#363636]" />

                {/* Glare overlay */}
                <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[2.5rem]">
                  <div className="absolute -left-[12%] -top-[10%] h-[150%] w-[35%] rotate-[20deg] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </div>

                {/* Notch */}
                <div className="absolute left-1/2 top-4 z-40 h-2 w-16 -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
                <div className="absolute left-[52%] top-[1.05rem] z-40 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1e3a8a] shadow-[0_0_8px_rgba(59,130,246,0.45)]" />

                {/* Screen */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0b1118] p-3 ring-1 ring-white/10 shadow-inner">
                  <div className="overflow-hidden rounded-[2rem] bg-[#f8fafc]">
                    {/* Status bar */}
                    <div className="border-b border-slate-200/80 bg-white/90 px-4 py-3 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-20 rounded-md bg-slate-100" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Ops Cloud
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                          <span className="material-symbols-outlined text-sm">
                            wifi
                          </span>
                          11:38 AM
                          <span className="material-symbols-outlined text-sm">
                            battery_full_alt
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* App body */}
                    {/*
                      Layout:
                        - Mobile (<480px):  sidebar becomes a horizontal scrollable nav strip on top
                        - Tablet (480–767px): narrow sidebar (col 1) + main (col 2)
                        - Desktop (768px+):  wider sidebar (col 1) + main (col 2)
                    */}
                    <div className="flex flex-col xs:grid xs:grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[minmax(90px,25%)_1fr]">
                      {/* SIDEBAR */}
                      <aside
                        className="
                        {/* Mobile: horizontal scrollable strip */}
                        flex flex-row items-center gap-4 overflow-x-auto border-b border-slate-200 bg-slate-50 px-4 py-2 scrollbar-hide
                        {/* 480px+: vertical sidebar */}
                        xs:flex-col xs:items-start xs:gap-0 xs:space-y-4 xs:overflow-x-visible xs:border-b-0 xs:border-r xs:p-4
                        min-h-0 xs:min-h-[460px]
                      "
                      >
                        <p className="hidden xs:block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 mb-2">
                          Resort Stack
                        </p>
                        <div className="flex flex-row gap-4 xs:flex-col xs:gap-0 xs:space-y-4">
                          {[
                            "Dashboard",
                            "Reservations",
                            "Housekeeping",
                            "Revenue",
                            "Concierge",
                          ].map((item, index) => (
                            <div
                              key={item}
                              className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                                index === 0 ? "text-primary" : "text-slate-500"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="hidden xs:block rounded-xl bg-white p-3 shadow-sm mt-4">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            Alerts
                          </p>
                          <p className="mt-2 text-[10px] font-semibold text-slate-700">
                            2 Transfers delayed
                          </p>
                        </div>
                      </aside>

                      {/* MAIN CONTENT */}
                      <div className="space-y-4 bg-white p-3 sm:p-4 md:p-5">
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 sm:pb-4">
                          <div>
                            <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                              Portfolio Overview
                            </h3>
                            <p className="text-[11px] font-medium text-slate-500">
                              October 2024 Performance
                            </p>
                          </div>
                          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                            <span className="material-symbols-outlined text-sm">
                              sync
                            </span>
                            Live
                          </div>
                        </div>

                        {/* KPI cards */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              Occupancy
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              94.2%
                            </p>
                            <p className="text-[10px] font-bold text-emerald-600">
                              +4.1% vs LY
                            </p>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              ADR
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              $2,140
                            </p>
                            <p className="text-[10px] font-bold text-emerald-600">
                              +12% vs LY
                            </p>
                          </div>
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                              Check-ins
                            </p>
                            <p className="mt-1 text-lg font-black text-slate-900 sm:text-2xl">
                              184
                            </p>
                            <p className="text-[10px] font-bold text-primary">
                              Today
                            </p>
                          </div>
                        </div>

                        {/* Charts row */}
                        <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:gap-3">
                          {/* Bar chart */}
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <div className="mb-3 flex items-center justify-between">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Arrival Density
                              </p>
                              <p className="text-[10px] font-semibold text-slate-400">
                                Weekly
                              </p>
                            </div>
                            <div className="flex h-20 items-end justify-between gap-1">
                              {[58, 72, 66, 81, 77, 90, 86].map(
                                (barValue, index) => (
                                  <div
                                    key={index}
                                    className="h-full flex-1 rounded-full bg-slate-200/70"
                                  >
                                    <div
                                      className="w-full rounded-full bg-gradient-to-t from-primary to-primary-container"
                                      style={{ height: `${barValue}%` }}
                                    />
                                  </div>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Live tasks */}
                          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2 sm:p-3">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                              Live Tasks
                            </p>
                            <div className="space-y-2">
                              {[
                                "4 Villas pending prep",
                                "2 VIP arrivals at 15:20",
                                "Spa staffing auto-adjusted",
                              ].map((task) => (
                                <div
                                  key={task}
                                  className="flex items-start gap-2 text-[10px] text-slate-600"
                                >
                                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                  <span>{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Top Properties */}
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                              Top Properties
                            </p>
                            <span className="cursor-pointer text-[10px] font-bold text-primary hover:opacity-70">
                              View All
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            {topProperties.map((property) => (
                              <div
                                key={property.name}
                                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-2 shadow-sm transition-all hover:scale-[1.01] sm:gap-3 sm:p-2.5"
                              >
                                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-slate-200 ring-1 ring-black/5 sm:h-10 sm:w-10">
                                  <img
                                    alt="Property"
                                    className="h-full w-full object-cover"
                                    src={property.image}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="truncate text-[11px] font-bold text-slate-900">
                                    {property.name}
                                  </div>
                                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                    {property.type}
                                  </div>
                                </div>
                                <div className="shrink-0 text-right">
                                  <div className="text-[11px] font-bold text-slate-900">
                                    {property.revenue}
                                  </div>
                                  <div className="text-[9px] font-black text-emerald-600">
                                    {property.soar}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* /main */}
                    </div>
                    {/* /body grid */}

                    {/* Home indicator */}
                    <div className="mx-auto my-2 h-1.5 w-32 rounded-full bg-slate-300/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-2 md:px-4 lg:px-0 py-16 sm:py-20 md:py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center relative z-10">
          {/* Content — first on mobile, second on desktop */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-white pl-0 lg:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-[0.9] lg:leading-[0.85] tracking-tighter">
              Elevate Every <br />
              <span className="text-secondary-fixed font-light">
                Guest Moment
              </span>
            </h2>

            <div className="space-y-8 sm:space-y-10 lg:space-y-16">
              {[
                {
                  num: "01",
                  title: "Automated Personalization",
                  desc: "Guest preferences are tracked globally, allowing your staff to anticipate needs before they are voiced.",
                },
                {
                  num: "02",
                  title: "Seamless Mobile Key",
                  desc: "Direct-to-room check-in experiences that eliminate front-desk friction for your VIP guests.",
                },
                {
                  num: "03",
                  title: "Concierge Intelligence",
                  desc: "Smart itinerary management for excursions, dining, and spa treatments across multiple properties.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-6 sm:gap-8 lg:gap-10"
                >
                  <div className="relative pt-1 flex-shrink-0">
                    <span className="text-white font-bold text-base sm:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.num}
                    </span>
                    <div className="w-[1px] h-8 sm:h-10 lg:h-12 bg-white/10 absolute -bottom-10 sm:-bottom-12 lg:-bottom-14 left-1/2 -translate-x-1/2 group-last:hidden" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 tracking-widest uppercase text-white/90 group-hover:text-secondary-fixed transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed max-w-sm text-sm group-hover:text-secondary-fixed-dim/90 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:col-span-7 order-2 lg:order-1 w-full">
            {/* Mobile & Tablet: 2×2 staggered grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  alt="Poolside service"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_T41ySmPMfXFE3_3_sOvKP5tYk2lSO5jMNODjVQoHVm3xwygOa1R5FE48RiDPUy-xsm-znULPXvxzAT973DDdTGmIvJ--Uu2FGbUYSmksbFfN9PHsxuBMypNnKDHWpSjJkMhDr46acAzLw7T92W5HIPlSrhAnapQ8mWbtTo5l1a73LqQ84LfeJQDjSmGt46vehuoFYP3lWF2a7ejR5XPDypIJWdCILn0vPJKOKVpz8D8mLSK9kq6Y5MG1607gpoEeuGyQqJQrhLd"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden mt-8 sm:mt-10">
                <img
                  alt="Resort Pool"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzS9SqQ94hf-jUlJQ8LxWrEb33_Snh_2kNUjL8zqEBz1i-I9OPv3qkzweQdYsS4HGRrQjNVU3D22_ony_5TzFiBMY9w1VV47ow1lFwkwUO-maUFLyGjPXLfc71yDnOrQvtWzvBUruyXuacqleOV5XUhCM88NX0GH5vA0hJ8AgMhw6ZpJlXYEoclKNlREMZ_GcUCZIzERKnco0EF4sQPq58KZVVb0qYcq_zIbxRcriouhZ3DlkIg3FxTJssC98zgNbHAtMOtxfmqkU"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden -mt-6 sm:-mt-8">
                <img
                  alt="Villa Bedroom"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXAL4WZPgdkODo_4OvoJOQIfbw_R5x0M7iUTNU-whx_tpgYDVWHquVj0cwe68ZXY8QTRHfQ7T18MpQJpgRHu-3ODs51UjkgtUo8Gm5cLfjzMy6WGScWuKXAIrEfhaP4VE5bSn8BmazmoW87MUGiPMw8pEJxMRgAl__gUuv_xOVgm97TBCHKn1iRc7e4ZaVcqlucfNKCclLQza8kS93y_RvE6hq8RkjxHw_4lYLNvQ0lp4wUpEHk95W_JOZJAJJ9UwzgxFl_Gj7OBv"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  alt="Spa treatment"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP7ymOSVisSnAvo2Cl5Us9iVBpoR-mz6TzCWsSZTLdObdnBcmzb7W6vJVLRXla6oYAvlX2sCJV6XtInWC5D_Jfi1r8ODz3GuqJvfWtATrSde7HCSwJQ7Tv-aSCXiFPuKPtsAMwGCyXvGXrHqkzjcAgRNU1aMHFLYVgsYj5vSL6xWJn4FkicaElNez6hU-vXK9lPFpR5sGq4kT5k8C5nBxsdJl5YCorsOVz0Nld719ms_Ehsgc-rs_csb60SnSiW1wLdunxkXDDlCm"
                />
              </div>
            </div>

            {/* Desktop: original absolute cluster — completely untouched */}
            <div className="hidden lg:block relative h-[700px]">
              <div className="absolute top-0 left-0 w-3/5 aspect-[3/4] z-20 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Poolside service"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_T41ySmPMfXFE3_3_sOvKP5tYk2lSO5jMNODjVQoHVm3xwygOa1R5FE48RiDPUy-xsm-znULPXvxzAT973DDdTGmIvJ--Uu2FGbUYSmksbFfN9PHsxuBMypNnKDHWpSjJkMhDr46acAzLw7T92W5HIPlSrhAnapQ8mWbtTo5l1a73LqQ84LfeJQDjSmGt46vehuoFYP3lWF2a7ejR5XPDypIJWdCILn0vPJKOKVpz8D8mLSK9kq6Y5MG1607gpoEeuGyQqJQrhLd"
                />
              </div>
              <div className="absolute top-12 right-0 w-1/2 aspect-square z-10 rounded-2xl overflow-hidden border border-white/10">
                <img
                  alt="Resort Pool"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzS9SqQ94hf-jUlJQ8LxWrEb33_Snh_2kNUjL8zqEBz1i-I9OPv3qkzweQdYsS4HGRrQjNVU3D22_ony_5TzFiBMY9w1VV47ow1lFwkwUO-maUFLyGjPXLfc71yDnOrQvtWzvBUruyXuacqleOV5XUhCM88NX0GH5vA0hJ8AgMhw6ZpJlXYEoclKNlREMZ_GcUCZIzERKnco0EF4sQPq58KZVVb0qYcq_zIbxRcriouhZ3DlkIg3FxTJssC98zgNbHAtMOtxfmqkU"
                />
              </div>
              <div className="absolute bottom-12 right-12 w-2/5 aspect-[3/4] z-30 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Spa treatment"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP7ymOSVisSnAvo2Cl5Us9iVBpoR-mz6TzCWsSZTLdObdnBcmzb7W6vJVLRXla6oYAvlX2sCJV6XtInWC5D_Jfi1r8ODz3GuqJvfWtATrSde7HCSwJQ7Tv-aSCXiFPuKPtsAMwGCyXvGXrHqkzjcAgRNU1aMHFLYVgsYj5vSL6xWJn4FkicaElNez6hU-vXK9lPFpR5sGq4kT5k8C5nBxsdJl5YCorsOVz0Nld719ms_Ehsgc-rs_csb60SnSiW1wLdunxkXDDlCm"
                />
              </div>
              <div className="absolute bottom-0 left-12 w-1/3 aspect-square z-40 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Villa Bedroom"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXAL4WZPgdkODo_4OvoJOQIfbw_R5x0M7iUTNU-whx_tpgYDVWHquVj0cwe68ZXY8QTRHfQ7T18MpQJpgRHu-3ODs51UjkgtUo8Gm5cLfjzMy6WGScWuKXAIrEfhaP4VE5bSn8BmazmoW87MUGiPMw8pEJxMRgAl__gUuv_xOVgm97TBCHKn1iRc7e4ZaVcqlucfNKCclLQza8kS93y_RvE6hq8RkjxHw_4lYLNvQ0lp4wUpEHk95W_JOZJAJJ9UwzgxFl_Gj7OBv"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row  px-2 justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-5 sm:gap-8">
          <div className="">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-primary mb-3 md:mb-4">
              Precision Components
            </h2>
            <p className="text-base sm:text-lg max-w-md">
              Every aspect of the guest journey, meticulously orchestrated
              through our intelligent suite.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4  flex-shrink-0">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg sm:text-xl">
                arrow_back
              </span>
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg sm:text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 md:grid-rows-2 md:h-[500px]">
          {/* Featured Card: Reservation Management */}
          <div className="sm:col-span-2 md:col-span-2 md:row-span-2 border border-outline-variant bg-surface-container-lowest rounded-xl overflow-hidden group hover:border-secondary/20 transition-all flex flex-col">
            <div className="p-5 sm:p-6 md:p-8 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed text-lg sm:text-xl">
                  calendar_month
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-headline mb-2 sm:mb-4">
                Reservation Management
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Intelligent booking engine with dynamic pricing models and
                seamless OTA integration for effortless occupancy control.
              </p>
            </div>
            <div className="h-48 sm:h-56 md:h-1/2 relative overflow-hidden flex-shrink-0">
              <img
                alt="Luxury lobby"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16gMD8PHUSFk4Hr-LOhZ5OEgveUgzUkmqAZUQdVWg_n-XhWwRPo9Gz38-K-bYUoMlxOz_B6hm5p3i49dA2UhvU_q0zw-Sxle51ABG1panL0HTx53ZaCllsmWU3Hwx_HTFRzNEh03t1uu0J_OZwX_TYa8FcNXqnBGp6ILlkOGN0H8W_ycDNZDnOaW44-sPqQUHA1YLy--Vvrqcz6vwTxLiejjNyw0yL8KlYGvBN6hS9KEmk-9De0nrh_p9rWGl16Q9oQhRumopdUg2"
              />
            </div>
          </div>

          {/* Housekeeping Tracking */}
          <div className="sm:col-span-2 md:col-span-2 border border-outline-variant bg-surface-container-lowest rounded-xl p-7 sm:p-6 md:p-8 flex flex-col justify-between group">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-headline mb-1 sm:mb-2">
                  Housekeeping Tracking
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Real-time room status and staff dispatching.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl flex-shrink-0">
                cleaning_services
              </span>
            </div>
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] uppercase font-bold tracking-wider rounded-md">
                14 Available
              </span>
              <span className="px-3 py-1 bg-rose-50 text-rose-700 border border-rose-100 text-[10px] uppercase font-bold tracking-wider rounded-md">
                3 In Repair
              </span>
            </div>
          </div>

          {/* Inventory Control */}
          <div className="bg-gradient-to-br from-primary to-primary-container text-white rounded-xl p-7 sm:p-6 md:p-8 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
            <span className="material-symbols-outlined text-secondary-fixed text-2xl sm:text-3xl">
              inventory_2
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-headline mb-1">
                Inventory Control
              </h3>
              <p className="text-white text-xs">
                Automated procurement workflows.
              </p>
            </div>
          </div>

          {/* Financial Reporting */}
          <div className="bg-surface-container-lowest rounded-xl p-7 sm:p-8 md:p-8 border border-outline-variant flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
            <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl">
              analytics
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-headline mb-1 text-primary">
                Financial Reporting
              </h3>
              <p className="text-on-surface-variant text-xs">
                Instant P&amp;L at property or group level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={hotelCloudFAQs}
        title="Lush Hotel Cloud FAQs"
        subtitle="Common questions about our cloud-based resort management solution"
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-7xl space-y-5 sm:space-y-6 lg:space-y-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container p-7 text-center shadow-2xl sm:p-10 md:p-12 lg:p-20">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <h2 className="relative z-10 font-headline text-2xl font-extrabold leading-tight text-on-primary sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to transform your <br className="hidden sm:block" />
            resort&apos;s digital backbone?
          </h2>

          <p className="relative z-10 mx-auto max-w-2xl text-sm text-primary-fixed sm:text-base md:text-lg">
            Join the world&apos;s most prestigious resorts moving to
            Viduvaru&apos;s next-generation cloud infrastructure.
          </p>

          <div className="relative z-10 flex flex-col items-center gap-3 pt-3 sm:flex-row sm:justify-center sm:gap-4 sm:pt-4 lg:pt-6">
            <button
              type="button"
              onClick={openInquiryModal}
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-bold text-primary shadow-xl transition-all hover:bg-opacity-90 active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              Schedule a Private Demo
            </button>
            <Link
              to="/contact"
              className="w-full rounded-full border border-white/20 bg-primary-container/20 px-8 py-3 text-sm font-bold text-on-primary backdrop-blur-md transition-all hover:bg-primary-container/30 active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LushHotelCloudPage;
