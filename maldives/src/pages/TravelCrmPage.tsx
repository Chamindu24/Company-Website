import FAQSection from "../components/FAQSection";

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
  return (
    <main className="overflow-x-hidden bg-[#ffffff] pt-24 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <section className="relative mx-auto flex min-h-[921px] max-w-7xl items-center px-6 md:px-8">
        <div className="z-10 grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-fixed-dim/20 px-4 py-2 font-label text-xs font-bold tracking-widest text-primary">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              NEXT-GEN TRAVEL CRM
            </div>
            <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
              Automate Your <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Travel Agency
              </span>{" "}
              <br />
              Lifecycle
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
              The all-in-one digital sanctuary for modern travel curators. From
              lead generation to tropical touchdown, manage every detail with
              ethereal ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-primary px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-primary transition-colors hover:bg-surface-dim">
                Explore Features
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary-container/30 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-tertiary-container/20 blur-[80px]" />
            <div className="glass-card relative z-10 rotate-3 rounded-xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-0">
              <img
                alt="Luxury Resort"
                className="h-[400px] w-full rounded-lg object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cimSHhy24Em-REcFIBYQP_4prlHCgvVCWKKk35eH7gtqaTKE9Dk-zCLh10KpyES7CQxumejVL2cWV5_hvXBQ7blITZxzGRlNuU2MiwvioAbFHOANR02w-TRVFVsAx4CI_BfMJMv03-PMXiB9WWjfGd5XYGEo7OwiNwCCYx64lMHNAzbOi4KR7AFeXL9j7bzmH7ympniAD6wDm8mRO7Sb61zQXpnRoNqco9WjTuPl0gAq0nzapb5fmx8cizF6--QYoMIU-R9-Le0"
              />

              <div
                className="glass-card absolute -left-12 top-1/4 animate-bounce rounded-lg p-6 shadow-xl"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant">
                      Payment Received
                    </p>
                    <p className="text-sm font-black">$4,250.00</p>
                  </div>
                </div>
              </div>

              <div className="glass-card absolute -bottom-8 -right-8 rounded-lg p-6 shadow-xl">
                <div className="mb-3 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary-container" />
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Itinerary Built
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-32 rounded-full bg-surface-container" />
                  <div className="h-2 w-24 rounded-full bg-surface-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight">
            Precision Tools for Global Explorers
          </h2>
          <p className="text-on-surface-variant">
            Our CRM bridges the gap between chaotic spreadsheets and seamless
            guest experiences.
          </p>
        </div>

        <div className="grid grid-cols-1   gap-6 md:grid-cols-12">
          <div className="glass-card group  border  relative overflow-hidden rounded-xl p-10 md:col-span-8">
            <div className="relative  z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-primary">
                query_stats
              </span>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">
                Lead-to-Trip Pipeline
              </h3>
              <p className="mb-8 max-w-md text-on-surface-variant">
                Visualize every stage of the traveler&apos;s journey.
                Drag-and-drop inquiries through custom stages from
                &apos;Dreaming&apos; to &apos;Departure&apos;.
              </p>
<div className="mt-12 grid grid-cols-3 gap-12 p-8">
  
  {/* Column 1: 3D Fanned Stack (Inquiry) */}
  <div className="relative group">
    <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
      Inquiry Stack
    </span>
    <div className="relative h-48 w-full">
      {/* Back Card (Visual Only) */}
      <div className="absolute inset-0 translate-x-4 translate-y-2 rotate-3 rounded-2xl border border-slate-200 bg-slate-100/50 shadow-sm transition-transform group-hover:rotate-6"></div>
      
      {/* Middle Card (Visual Only) */}
      <div className="absolute inset-0 translate-x-2 translate-y-1 rotate-1 rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition-transform group-hover:rotate-3"></div>
      
      {/* Main Top Card */}
      <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition-transform group-hover:-translate-y-2">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <h4 className="text-[13px] font-bold text-slate-900">Maldives Escape</h4>
            </div>
            <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              Luxury water villa booking for Marcelin Group.
            </p>
          </div>
          <div className="flex justify-between items-center border-t border-slate-100 pt-3">
            <span className="text-[10px] font-mono text-slate-400">#INV-2026</span>
            <div className="text-[10px] font-bold bg-slate-900 text-white px-2 py-1 rounded">2 New</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Column 2: The Floating Proposal Slot */}
  <div className="flex flex-col justify-center items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6">
    <div className="relative">
      <div className="h-16 w-12 rounded border border-slate-300 bg-white shadow-2xl rotate-12 origin-bottom-right opacity-40"></div>
      <div className="absolute inset-0 h-16 w-12 rounded border border-slate-300 bg-white shadow-lg -rotate-6"></div>
    </div>
    <span className="mt-6 text-[11px] font-medium text-slate-400">Drop Proposal Here</span>
  </div>



</div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 bg-primary-fixed/20 blur-[100px] transition-colors group-hover:bg-primary-fixed/30" />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-10 text-on-secondary md:col-span-4">
            <span className="material-symbols-outlined mb-6 text-4xl">
              credit_score
            </span>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              Payment Tracking
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              Automated invoicing and payment reconciliation. Never miss a final
              balance or vendor deposit again.
            </p>
            <div className="mt-12 space-y-4">
              <div className="h-[2px] w-full bg-secondary-container/30">
                <div className="h-full w-[70%] bg-secondary-fixed" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">
                70% Collected
              </p>
            </div>
          </div>

          {featureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-surface-container-lowest p-10 border shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4"
            >
              <span
                className={`material-symbols-outlined mb-6 text-4xl ${card.iconColor}`}
              >
                {card.icon}
              </span>
              <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {card.description}
              </p>
            </div>
          ))}

          <div className="flex flex-col items-center gap-10 overflow-hidden border rounded-xl bg-white p-10 md:col-span-8 md:flex-row">
            <div className="flex-1">
              <span className="material-symbols-outlined mb-6 text-4xl text-secondary">
                map
              </span>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">
                Itinerary Creation
              </h3>
              <p className="leading-relaxed text-on-surface-variant">
                Drag-and-drop blocks to build stunning mobile-first itineraries
                that travelers will love to share.
              </p>
            </div>
<div className="relative w-full flex-1">
  {/* The Main Container: Using glassmorphism and deep soft shadows for 3D depth */}
  <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05),_inset_0_-4px_8px_rgba(0,0,0,0.05)]">
    
    {/* Activity Item 1 */}
    <div className="group mb-4 flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-white shadow-lg shadow-black/20">
        <span className="material-symbols-outlined text-[20px]">
          flight_takeoff
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Arrival</span>
        <span className="text-sm font-semibold text-slate-800">SQ-425 Arrives Male</span>
      </div>
    </div>

    {/* Activity Item 2 */}
    <div className="group mb-6 flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-amber-500/20">
        <span className="material-symbols-outlined text-[20px]">
          sailing
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Transport</span>
        <span className="text-sm font-semibold text-slate-800">Speedboat Transfer</span>
      </div>
    </div>

    {/* Modern Add Button: Neumorphic / Glass Hybrid */}
    <button className="group flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-6 transition-all hover:border-slate-400 hover:bg-white">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-110">
        <span className="material-symbols-outlined text-slate-600">add</span>
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
            <div className="relative rounded-[3.5rem] border-[1px] border-slate-500/30 bg-[#121212] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] [transform:rotateX(8deg)_rotateY(-4deg)_rotateZ(1deg)] transition-transform duration-700 hover:rotate-0">
              {/* Physical Hardware Buttons */}
              <div className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-l-sm bg-slate-700" />
              <div className="absolute -right-[2px] top-52 h-16 w-[3px] rounded-l-sm bg-slate-700" />

              {/* The Screen Bezel */}
              <div className="relative overflow-hidden rounded-[2.8rem] bg-[#050505] p-4 ring-1 ring-inset ring-white/10 shadow-inner">
                {/* Glass Reflection Overlay */}
                <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40" />

                {/* Front Camera Lens */}
                <div className="absolute left-1/2 top-5 z-50 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-white/5">
                  <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-blue-900/40" />
                </div>

                {/* INTERNAL SCREEN: PMS INTERFACE */}
                <div className="relative overflow-hidden rounded-[2.2rem] bg-surface-container-lowest min-h-[600px]">
                  <div className="flex h-full min-h-[600px]">
                    {/* Ultra-Modern Vertical Nav */}
                    <div className="flex w-20 flex-col items-center gap-8 bg-white border-r border-slate-100 py-10">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-xl">
                          pepper
                        </span>
                      </div>
                      <span
                        className="material-symbols-outlined text-primary cursor-pointer"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        dashboard
                      </span>
                      <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                        bed
                      </span>
                      <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                        sailing
                      </span>
                      <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                        analytics
                      </span>
                      <div className="mt-auto">
                        <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                          settings
                        </span>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-10 bg-[#fbfcfd]">
                      <div className="mb-10 flex items-end justify-between">
                        <div>
                          <h4 className="text-2xl font-black tracking-tight text-slate-900">
                            Island Briefing
                          </h4>
                          <p className="text-sm font-medium text-slate-500">
                            Baa Atoll • Resort Operations
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-600 shadow-sm">
                            <span className="material-symbols-outlined text-lg">
                              calendar_today
                            </span>
                            Today
                          </div>
                          <div className="flex h-11 items-center rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-xl shadow-primary/20">
                            + New Booking
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-8">
                        {/* Revenue Card (Maldives RevPAR) */}
                        <div className="col-span-4 rounded-3xl bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Daily RevPAR
                          </p>
                          <p className="text-3xl font-black text-slate-900">
                            $2,840
                            <span className="text-sm font-bold text-slate-400">
                              .00
                            </span>
                          </p>
                          <div className="mt-6 flex h-20 items-end gap-1.5">
                            {[40, 65, 45, 90, 55, 80, 95].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 rounded-t-md transition-all ${i === 6 ? "bg-primary shadow-[0_-4px_10px_rgba(var(--primary-rgb),0.3)]" : "bg-slate-100"}`}
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                          <p className="mt-4 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              trending_up
                            </span>{" "}
                            +12% Peak Performance
                          </p>
                        </div>

                        {/* Operational Logistics Card */}
                        <div className="col-span-8 rounded-3xl bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                          <p className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Critical Transfers & Maintenance
                          </p>
                          <div className="space-y-6">
                            {/* Entry 1 */}
                            <div className="flex items-center justify-between border-b border-slate-50 pb-5">
                              <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                                  <span className="material-symbols-outlined text-xl">
                                    flight_land
                                  </span>
                                </div>
                                <div>
                                  <span className="block text-xs font-black text-slate-900">
                                    Seaplane Arrival • TMA Flight 402
                                  </span>
                                  <span className="text-[10px] font-medium text-slate-500">
                                    14 Guests from Velana Int. Airport
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-3 py-1 rounded-full uppercase tracking-tighter">
                                In 12 Mins
                              </span>
                            </div>

                            {/* Entry 2 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                                  <span className="material-symbols-outlined text-xl">
                                    villa
                                  </span>
                                </div>
                                <div>
                                  <span className="block text-xs font-black text-slate-900">
                                    Villa 402 • Deep Clean
                                  </span>
                                  <span className="text-[10px] font-medium text-slate-500">
                                    Butler: Ahmed Hussain • Ready for 15:00
                                    Check-in
                                  </span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter tracking-widest">
                                In Progress
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Summary Footer Statistics */}
                        <div className="col-span-12 grid grid-cols-3 gap-6 pt-2">
                          <div className="flex items-center gap-4 px-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              Island Capacity: 98%
                            </span>
                          </div>
                          <div className="flex items-center gap-4 px-2 border-x border-slate-100">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              Butler Active: 24/24
                            </span>
                          </div>
                          <div className="flex items-center gap-4 px-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              Yacht Transfers: 04
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* iOS Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 h-1.5 w-32 -translate-x-1/2 rounded-full bg-slate-200" />
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

      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-primary p-16 shadow-2xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-4xl font-black leading-tight text-white">
              Scale Your Agency with the <br />
              Spirit of the Maldives.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Join over 200+ luxury agencies managing paradise through Viduvaru.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-full bg-white px-10 py-5 font-black text-primary transition-transform hover:scale-105">
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
