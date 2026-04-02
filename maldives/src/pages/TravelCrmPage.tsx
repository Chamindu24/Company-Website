import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";
import InquiryForm from "../components/InquiryForm";

const featureCards = [
  {
    icon: "history_edu",
    iconColor: "text-tertiary",
    title: "Smart Follow-ups",
    description:
      'Automated post-trip surveys and "Welcome Home" sequences to build lifelong loyalty.',
  },
];

const travelCrmFAQs = [
  {
    id: "crm-faq-1",
    question:
      "How does the Travel CRM handle itinerary building and customization?",
    answer:
      "Our intelligent itinerary builder leverages AI to suggest personalized experiences based on guest preferences, past travel history, and seasonal availability. You can customize every detail—from seaplane transfers to spa reservations—with a single click.",
  },
  {
    id: "crm-faq-2",
    question: "What integration options are available for booking systems?",
    answer:
      "We support integrations with all major booking platforms including Booking.com, Airbnb, Expedia, and custom APIs. Availability, pricing, and guest data sync automatically across all channels in real-time to prevent overbooking.",
  },
  {
    id: "crm-faq-3",
    question: "Can the CRM help with automated follow-ups and guest retention?",
    answer:
      "Yes! Our automated post-trip surveys, personalized thank-you sequences, and 'Welcome Home' campaigns build lasting relationships. The system tracks guest preferences and suggests re-engagement offers for repeat bookings and referrals.",
  },
  {
    id: "crm-faq-4",
    question: "How does payment processing work within the platform?",
    answer:
      "We handle all payment processing securely with support for multiple currencies and payment methods. Deposits, final payments, and split payments between multiple guests are configured easily. Automated invoicing and payment reminders keep bookings on track.",
  },
  {
    id: "crm-faq-5",
    question: "What reporting and analytics are available for travel agencies?",
    answer:
      "Access comprehensive dashboards showing booking trends, revenue per guest, agent performance, seasonal patterns, and ROI metrics. Export custom reports for client meetings or use real-time dashboards to monitor agency performance at a glance.",
  },
];

function TravelCrmPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <main className="bg-[#ffffff] pt-24 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <PinnedScrollHeadlineSection
        badge="NEXT-GEN TRAVEL CRM"
        titlePrefix="Automate Your"
        highlightText="Travel Agency Lifecycle"
        titleSuffix=""
        description="The all-in-one digital sanctuary for modern travel curators. From lead generation to tropical touchdown, manage every detail with ethereal ease."
        sectionClassName="bg-[#ffffff]"
      >
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={openInquiryModal}
            className="rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform hover:scale-105"
          >
            Send Requirements
          </button>
          <Link
            to="/contact"
            className="rounded-full border-2 border-primary px-8 py-4 font-bold text-primary transition-colors hover:bg-surface-container"
          >
            Explore Features
          </Link>
        </div>
      </PinnedScrollHeadlineSection>

      {isInquiryOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 md:p-8">
            <InquiryForm
              topic="Travel CRM"
              ctaLabel="Submit Inquiry"
              onSuccess={closeInquiryModal}
              onClose={closeInquiryModal}
              showCloseButton
            />
          </div>
        </div>
      ) : null}

<section className="mx-auto max-w-7xl px-6 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24">
  <div className="mx-auto mb-10 md:mb-16 max-w-2xl text-center">
    <h2 className="mb-4 font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
      Precision Tools for Global Explorers
    </h2>
    <p className="text-sm sm:text-base text-on-surface-variant">
      Our CRM bridges the gap between chaotic spreadsheets and seamless
      guest experiences.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12">

    {/* Lead-to-Trip Pipeline — full width on mobile */}
    <div className="glass-card group border relative overflow-hidden rounded-xl p-8 sm:p-8 md:p-10 md:col-span-8">
      <div className="relative z-10">
        <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-primary">
          query_stats
        </span>
        <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
          Lead-to-Trip Pipeline
        </h3>
        <p className="mb-6 md:mb-8 max-w-md text-sm md:text-base text-on-surface-variant">
          Visualize every stage of the traveler&apos;s journey.
          Drag-and-drop inquiries through custom stages from
          &apos;Dreaming&apos; to &apos;Departure&apos;.
        </p>
        <div className="mt-6 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 p-4 md:p-8">
          {/* Column 1: 3D Fanned Stack */}
          <div className="relative group">
            <span className="mb-4 md:mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Inquiry Stack
            </span>
            <div className="relative h-40 md:h-48 w-full">
              <div className="absolute inset-0 translate-x-4 translate-y-2 rotate-3 rounded-2xl border border-slate-200 bg-slate-100/50 shadow-sm transition-transform group-hover:rotate-6" />
              <div className="absolute inset-0 translate-x-2 translate-y-1 rotate-1 rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition-transform group-hover:rotate-3" />
              <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-xl transition-transform group-hover:-translate-y-2">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <h4 className="text-[12px] md:text-[13px] font-bold text-slate-900">
                        Maldives Escape
                      </h4>
                    </div>
                    <p className="mt-2 text-[10px] md:text-[11px] text-slate-500 leading-relaxed">
                      Luxury water villa booking for Marcelin Group.
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                    <span className="text-[9px] md:text-[10px] font-mono text-slate-400">
                      #INV-2026
                    </span>
                    <div className="text-[9px] md:text-[10px] font-bold bg-slate-900 text-white px-2 py-1 rounded">
                      2 New
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Floating Proposal Slot */}
          <div className="flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-4 md:p-6">
            <div className="relative">
              <div className="h-14 w-10 md:h-16 md:w-12 rounded border border-slate-300 bg-white shadow-2xl rotate-12 origin-bottom-right opacity-40" />
              <div className="absolute inset-0 h-14 w-10 md:h-16 md:w-12 rounded border border-slate-300 bg-white shadow-lg -rotate-6" />
            </div>
            <span className="mt-4 md:mt-6 text-[10px] md:text-[11px] font-medium text-slate-400">
              Drop Proposal Here
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 -right-20 h-80 w-80 bg-primary-fixed/20 blur-[100px] transition-colors group-hover:bg-primary-fixed/30" />
    </div>

    {/* Payment Tracking */}
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 sm:p-8 md:p-10 text-on-secondary md:col-span-4">
      <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl">
        credit_score
      </span>
      <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
        Payment Tracking
      </h3>
      <p className="text-sm leading-relaxed text-white/90">
        Automated invoicing and payment reconciliation. Never miss a final
        balance or vendor deposit again.
      </p>
      <div className="mt-8 md:mt-12 space-y-4">
        <div className="h-[2px] w-full bg-secondary-container/30">
          <div className="h-full w-[70%] bg-secondary-fixed" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest">
          70% Collected
        </p>
      </div>
    </div>

    {/* Feature Cards */}
    {featureCards.map((card) => (
      <div
        key={card.title}
        className="rounded-xl bg-surface-container-lowest p-8 sm:p-10 md:p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4"
      >
        <span
          className={`material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl ${card.iconColor}`}
        >
          {card.icon}
        </span>
        <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-bold">{card.title}</h3>
        <p className="text-sm leading-relaxed text-on-surface-variant">
          {card.description}
        </p>
      </div>
    ))}

    {/* Itinerary Creation */}
    <div className="flex flex-col gap-6 md:gap-10 overflow-hidden border rounded-xl bg-white p-6 sm:p-8 md:p-10 md:col-span-8 md:flex-row md:items-center">
      <div className="flex-1">
        <span className="material-symbols-outlined mb-4 md:mb-6 text-3xl md:text-4xl text-secondary">
          map
        </span>
        <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold tracking-tight">
          Itinerary Creation
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-on-surface-variant">
          Drag-and-drop blocks to build stunning mobile-first itineraries
          that travelers will love to share.
        </p>
      </div>
      <div className="relative w-full flex-1">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05),_inset_0_-4px_8px_rgba(0,0,0,0.05)]">
          {/* Activity Item 1 */}
          <div className="group mb-3 md:mb-4 flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-secondary text-white shadow-lg shadow-black/20 shrink-0">
              <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                flight_takeoff
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Arrival
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-800">
                SQ-425 Arrives Male
              </span>
            </div>
          </div>

          {/* Activity Item 2 */}
          <div className="group mb-4 md:mb-6 flex items-center gap-3 md:gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-amber-500/20 shrink-0">
              <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                sailing
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Transport
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-800">
                Speedboat Transfer
              </span>
            </div>
          </div>

          {/* Add Button */}
          <button className="group flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-4 md:py-6 transition-all hover:border-slate-400 hover:bg-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-slate-600">
                add
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Add Activity
            </span>
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

<section className="bg-surface px-6 py-24 md:px-8 overflow-hidden">
  <div className="mx-auto max-w-7xl">
    {/* 3D Perspective Wrapper */}
    <div className="relative mx-auto w-full max-w-[1024px] [perspective:2000px]">
      {/* Physical iPad Hardware Chassis */}
      <div className="relative rounded-[2rem] md:rounded-[3.5rem] border-[1px] border-slate-500/30 bg-[#121212] p-[8px] md:p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] [transform:rotateX(8deg)_rotateY(-4deg)_rotateZ(1deg)] transition-transform duration-700 hover:rotate-0">
        {/* Physical Hardware Buttons */}
        <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-l-sm bg-slate-700" />
        <div className="absolute -right-[2px] top-52 h-16 w-[3px] rounded-l-sm bg-slate-700" />

        {/* The Screen Bezel */}
        <div className="relative overflow-hidden rounded-[1.6rem] md:rounded-[2.8rem] bg-[#050505] p-2 md:p-4 ring-1 ring-inset ring-white/10 shadow-inner">
          {/* Glass Reflection Overlay */}
          <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40" />

          {/* Front Camera Lens */}
          <div className="absolute left-1/2 top-3 md:top-5 z-50 h-2 w-2 md:h-3 md:w-3 -translate-x-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-white/5">
            <div className="mx-auto mt-0.5 md:mt-1 h-1 w-1 rounded-full bg-blue-900/40" />
          </div>

          {/* INTERNAL SCREEN: PMS INTERFACE */}
          <div className="relative overflow-hidden rounded-[1.2rem] md:rounded-[2.2rem] bg-surface-container-lowest min-h-[420px] md:min-h-[600px]">
            <div className="flex h-full min-h-[420px] md:min-h-[600px]">

              {/* Ultra-Modern Vertical Nav */}
              <div className="flex w-12 md:w-20 flex-col items-center gap-4 md:gap-8 bg-white border-r border-slate-100 py-6 md:py-10">
                <div className="mb-2 md:mb-4 flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm md:text-xl">
                    pepper
                  </span>
                </div>
                <span
                  className="material-symbols-outlined text-base md:text-[24px] text-primary cursor-pointer"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  dashboard
                </span>
                <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                  bed
                </span>
                <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                  sailing
                </span>
                <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 hover:text-primary cursor-pointer">
                  analytics
                </span>
                <div className="mt-auto">
                  <span className="material-symbols-outlined text-base md:text-[24px] text-slate-400 cursor-pointer">
                    settings
                  </span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 md:p-10 bg-[#fbfcfd] overflow-y-auto">

                {/* Header */}
                <div className="mb-5 md:mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h4 className="text-base md:text-2xl font-black tracking-tight text-slate-900">
                      Island Briefing
                    </h4>
                    <p className="text-[10px] md:text-sm font-medium text-slate-500">
                      Baa Atoll • Resort Operations
                    </p>
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    <div className="flex h-8 md:h-11 items-center gap-1 md:gap-2 rounded-lg md:rounded-xl border border-slate-200 bg-white px-3 md:px-5 text-[10px] md:text-xs font-bold text-slate-600 shadow-sm">
                      <span className="material-symbols-outlined text-sm md:text-lg">
                        calendar_today
                      </span>
                      Today
                    </div>
                    <div className="flex h-8 md:h-11 items-center rounded-lg md:rounded-xl bg-primary px-3 md:px-6 text-[10px] md:text-xs font-bold text-white shadow-xl shadow-primary/20">
                      + New Booking
                    </div>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">

                  {/* Revenue Card */}
                  <div className="md:col-span-4 rounded-2xl md:rounded-3xl bg-white p-5 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                    <p className="mb-1 md:mb-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Daily RevPAR
                    </p>
                    <p className="text-xl md:text-3xl font-black text-slate-900">
                      $2,840
                      <span className="text-xs md:text-sm font-bold text-slate-400">
                        .00
                      </span>
                    </p>
                    <div className="mt-4 md:mt-6 flex h-14 md:h-20 items-end gap-1 md:gap-1.5">
                      {[40, 65, 45, 90, 55, 80, 95].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-md transition-all ${i === 6 ? "bg-primary shadow-[0_-4px_10px_rgba(var(--primary-rgb),0.3)]" : "bg-slate-100"}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 md:mt-4 text-[9px] md:text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        trending_up
                      </span>{" "}
                      +12% Peak Performance
                    </p>
                  </div>

                  {/* Operational Logistics Card */}
                  <div className="md:col-span-8 rounded-2xl md:rounded-3xl bg-white p-5 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                    <p className="mb-4 md:mb-6 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Critical Transfers & Maintenance
                    </p>
                    <div className="space-y-4 md:space-y-6">
                      {/* Entry 1 */}
                      <div className="flex items-center justify-between border-b border-slate-50 pb-4 md:pb-5">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-amber-50 text-amber-600">
                            <span className="material-symbols-outlined text-base md:text-xl">
                              flight_land
                            </span>
                          </div>
                          <div>
                            <span className="block text-[10px] md:text-xs font-black text-slate-900">
                              Seaplane Arrival • TMA Flight 402
                            </span>
                            <span className="text-[9px] md:text-[10px] font-medium text-slate-500">
                              14 Guests from Velana Int. Airport
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black bg-amber-100 text-amber-700 px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                          In 12 Mins
                        </span>
                      </div>

                      {/* Entry 2 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-primary/5 text-primary">
                            <span className="material-symbols-outlined text-base md:text-xl">
                              villa
                            </span>
                          </div>
                          <div>
                            <span className="block text-[10px] md:text-xs font-black text-slate-900">
                              Villa 402 • Deep Clean
                            </span>
                            <span className="text-[9px] md:text-[10px] font-medium text-slate-500">
                              Butler: Ahmed Hussain • Ready for 15:00 Check-in
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-tighter tracking-widest whitespace-nowrap">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Footer Statistics */}
                  <div className="md:col-span-12 grid grid-cols-3 gap-2 md:gap-6 pt-1 md:pt-2">
                    <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                        Island Capacity: 98%
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2 border-x border-slate-100">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                        Butler Active: 24/24
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 px-1 md:px-2">
                      <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">
                        Yacht Transfers: 04
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 h-1.5 w-24 md:w-32 -translate-x-1/2 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>

      {/* Surface Reflection (Floor Shadow) */}
      <div className="absolute -bottom-16 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[100%] bg-slate-900/15 blur-[45px] -z-10" />
    </div>
  </div>
</section>

      <FAQSection
        items={travelCrmFAQs}
        title="Travel CRM FAQs"
        subtitle="Common questions about managing your travel agency with Lushware's CRM"
      />

<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 mb-32 md:py-20 lg:px-8 lg:py-24">
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-primary shadow-2xl">
    {/* Background image */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Content */}
    <div className="relative z-10 space-y-6 px-6 py-12 text-center sm:space-y-7 sm:px-10 sm:py-14 md:space-y-8 md:px-14 md:py-16 lg:p-16">
      <h2 className="font-headline text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
        Scale Your Agency with the{" "}
        <span className="block sm:inline">
          Spirit of the Maldives.
        </span>
      </h2>

      <p className="mx-auto max-w-xs text-sm text-white/80 sm:max-w-sm sm:text-base md:max-w-xl md:text-lg">
        Join over 200+ luxury agencies managing paradise through Viduvaru.
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <button
          onClick={openInquiryModal}
          className="w-full rounded-full bg-white px-8 py-4 font-black text-primary transition-transform hover:scale-105 sm:w-auto sm:px-10 sm:py-5"
        >
          Get Started Free
        </button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default TravelCrmPage;
