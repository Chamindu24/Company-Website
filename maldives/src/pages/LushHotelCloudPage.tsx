import FAQSection from "../components/FAQSection";

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
  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        <section className="relative overflow-hidden px-6 py-20 lg:py-32 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
            <div className="z-10 w-full space-y-8 lg:w-1/2">
              <span className="inline-block rounded-full bg-tertiary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-tertiary font-label">
                The Next Era of Hospitality
              </span>
              <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface lg:text-7xl">
                Elevate Your{" "}
                <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                  Resort Operations
                </span>
              </h1>
              <p className="max-w-xl text-lg font-light leading-relaxed text-on-surface-variant lg:text-xl">
                Experience the ultimate cloud-based command center designed
                exclusively for luxury Maldivian atolls and global high-end
                resorts.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-bold text-on-primary shadow-lg transition-transform hover:scale-105">
                  Explore Cloud PMS
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <button className="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-primary transition-colors hover:bg-surface-container">
                  View Virtual Tour
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="Resort Vista"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFfSvDAm_x-yhHmiixk8kjJEnsi5m_ubMJLnbyzfs54qlOCWYG4d9CZC1UuPOeT6qe8umewoc91ZN1M9PUtnM3UAM1UQxGJT2cDB4sS7e_fcnjJq6htP40QEX2q8HG7D60MncEkzXDtBVdXOrvYPmw8ACc1WkO_TGo_6pm_zJJH7Z-g2-IOYhJ_hKQOduOSgn2QFykw8OwaFPeVGIXpnfnqocKUg0k8JKC1UBrHd0kpgM38w73lSbBTOPEooVMJaWo81enBxDw2C4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />

                <div className="glass-panel absolute -bottom-10 -left-2 hidden rounded-lg border border-white/20 p-6 shadow-xl md:-left-10 md:block">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container text-white">
                      <span className="material-symbols-outlined">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-on-surface-variant">
                        Daily Revenue
                      </div>
                      <div className="text-xl font-bold text-on-surface">
                        $142,500.00
                      </div>
                    </div>
                  </div>
                  <div className="h-1 w-48 overflow-hidden rounded-full bg-surface-variant">
                    <div className="h-full w-3/4 bg-tertiary-container" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-primary-container/10 to-transparent opacity-50 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 -z-10 h-96 w-96 rounded-full bg-tertiary-container/10 blur-[100px]" />
        </section>

        <section className="bg-surface-container-low px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 space-y-4">
              <h2 className="font-headline text-4xl font-bold tracking-tight">
                Precision Management <br />
                <span className="text-secondary">for Every Department</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="group flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm md:col-span-8">
                <div className="max-w-md">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[32px]">
                      calendar_month
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    Smart Reservations Engine
                  </h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    Unified booking platform for multi-property resorts. Handle
                    complex guest itineraries, villa upgrades, and direct
                    channel management with AI-driven rate optimization.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {reservationTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-container px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-primary p-10 text-on-primary shadow-lg md:col-span-4">
                <div className="relative z-10">
                  <span className="material-symbols-outlined mb-6 text-4xl">
                    cleaning_services
                  </span>
                  <h3 className="mb-4 text-2xl font-bold">
                    Housekeeping Tracking
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-fixed/80">
                    Mobile-first workforce management for villa attendants and
                    maintenance crews. Instant status updates and task
                    prioritization.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform group-hover:scale-125">
                  <span className="material-symbols-outlined text-[200px]">
                    mop
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-tertiary-container p-10 text-on-primary shadow-lg md:col-span-4">
                <span className="material-symbols-outlined mb-6 text-4xl">
                  analytics
                </span>
                <h3 className="mb-4 text-2xl font-bold">Financial Reporting</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Deep-dive into ADR, RevPAR, and operational costs. Integrated
                  automated reconciliation for complex currency exchanges.
                </p>
              </div>

              <div className="group flex flex-col items-center gap-8 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-10 shadow-sm md:col-span-8 md:flex-row">
                <div className="flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-transform group-hover:rotate-12">
                    <span className="material-symbols-outlined text-[32px]">
                      inventory_2
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Inventory Control</h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    From F&amp;B supplies to resort-wide luxury amenities.
                    Predict stock needs based on occupancy and historical lead
                    times.
                  </p>
                </div>

                <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-surface-variant md:w-1/2">
                  <img
                    alt="Inventory Visualization"
                    className="h-full w-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjVgkDXOoVc5i2SvQdQhmAND4N_UF0uao7nmADP01sIMumXWnBtMaO-_x77wb0B4kNS-NtI50mEl0z-dupEC9-jZNIEuVGOUj3Kj7YxGzAGBLf1u4FnS1uL6ZXfipNlUMOPrZ7aAY3zPebFxLVd8cWS2Z2Uf7s981JW6H9BhS0DrMRMzlXf4ee5nm4k1V30vWe2JdM73yC1qhVLLqywg1TA30owVCR4f5cXXmaStpI4qNzJ7E9DuSB-nuXSSkNERk9cFIL9GIPAc"
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

        <section className="overflow-hidden bg-surface px-6 py-32 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 lg:flex-row">
            <div className="w-full space-y-8 lg:w-2/5">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                The Intelligence of{" "}
                <span className="text-primary">
                  Multi-Property Orchestration
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Our cloud architecture is purpose-built for resort groups.
                Switch between island properties in a single click, or view
                consolidated performance metrics for your entire portfolio.
              </p>

              <div className="space-y-6">
                {checklistItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-container">
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

            <div className="w-full lg:w-3/5">
              <div className="relative mx-auto max-w-5xl [perspective:2200px]">
                <div className="absolute -bottom-10 left-1/2 h-16 w-[88%] -translate-x-1/2 rounded-[100%] bg-black/30 blur-2xl" />

                <div className="relative rounded-[3.2rem] border-[10px] border-[#121212] bg-gradient-to-b from-[#222] to-[#0f0f0f] p-[10px] shadow-[0_70px_120px_-35px_rgba(0,0,0,0.6),0_35px_60px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/10 [transform:rotateX(10deg)_rotateY(-8deg)_rotateZ(1deg)] transition-transform duration-700 hover:[transform:rotateX(6deg)_rotateY(-4deg)_rotateZ(0deg)]">
                  <div className="absolute -right-[3px] top-24 h-20 w-[4px] rounded-l bg-[#2b2b2b]" />
                  <div className="absolute -right-[3px] top-52 h-14 w-[4px] rounded-l bg-[#2b2b2b]" />
                  <div className="absolute left-10 top-[5px] h-[2px] w-20 rounded-b bg-[#363636]" />

                  <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[2.5rem]">
                    <div className="absolute -left-[12%] -top-[10%] h-[150%] w-[35%] rotate-[20deg] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  </div>

                  <div className="absolute left-1/2 top-4 z-40 h-2 w-16 -translate-x-1/2 rounded-full bg-[#0a0a0a]" />
                  <div className="absolute left-[52%] top-[1.05rem] z-40 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1e3a8a] shadow-[0_0_8px_rgba(59,130,246,0.45)]" />

                  <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0b1118] p-3 ring-1 ring-white/10 shadow-inner">
                    <div className="overflow-hidden rounded-[2rem] bg-[#f8fafc]">
                      <div className="border-b border-slate-200/80 bg-white/90 px-6 py-3">
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

                      <div className="grid grid-cols-12">
                        <aside className="col-span-3 min-h-[460px] space-y-6 border-r border-slate-200 bg-slate-50 p-5">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                            Resort Stack
                          </p>
                          <div className="space-y-4">
                            {[
                              "Dashboard",
                              "Reservations",
                              "Housekeeping",
                              "Revenue",
                              "Concierge",
                            ].map((item, index) => (
                              <div
                                key={item}
                                className={`text-[10px] font-bold uppercase tracking-wider ${index === 0 ? "text-primary" : "text-slate-500"}`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                              Alerts
                            </p>
                            <p className="mt-2 text-[10px] font-semibold text-slate-700">
                              2 Transfers delayed
                            </p>
                          </div>
                        </aside>

                        <div className="col-span-9 space-y-5 bg-white p-5">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div>
                              <h3 className="text-lg font-bold tracking-tight text-slate-900">
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

                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                                Occupancy
                              </p>
                              <p className="mt-1 text-2xl font-black text-slate-900">94.2%</p>
                              <p className="text-[10px] font-bold text-emerald-600">+4.1% vs LY</p>
                            </div>
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                                ADR
                              </p>
                              <p className="mt-1 text-2xl font-black text-slate-900">$2,140</p>
                              <p className="text-[10px] font-bold text-emerald-600">+12% vs LY</p>
                            </div>
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                                Check-ins
                              </p>
                              <p className="mt-1 text-2xl font-black text-slate-900">184</p>
                              <p className="text-[10px] font-bold text-primary">Today</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                              <div className="mb-3 flex items-center justify-between">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                  Arrival Density
                                </p>
                                <p className="text-[10px] font-semibold text-slate-400">Weekly</p>
                              </div>
                              <div className="flex h-20 items-end justify-between gap-1">
                                {[58, 72, 66, 81, 77, 90, 86].map((barValue, index) => (
                                  <div key={index} className="h-full flex-1 rounded-full bg-slate-200/70">
                                    <div
                                      className="w-full rounded-full bg-gradient-to-t from-primary to-primary-container"
                                      style={{ height: `${barValue}%` }}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Live Tasks
                              </p>
                              <div className="space-y-2">
                                {[
                                  "4 Villas pending prep",
                                  "2 VIP arrivals at 15:20",
                                  "Spa staffing auto-adjusted",
                                ].map((task) => (
                                  <div key={task} className="flex items-start gap-2 text-[10px] text-slate-600">
                                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{task}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
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
                                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm transition-all hover:scale-[1.01]"
                                >
                                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-slate-200 ring-1 ring-black/5">
                                    <img
                                      alt="Property"
                                      className="h-full w-full object-cover"
                                      src={property.image}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[11px] font-bold text-slate-900">
                                      {property.name}
                                    </div>
                                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                      {property.type}
                                    </div>
                                  </div>
                                  <div className="text-right">
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
                      </div>

                      <div className="mx-auto my-2 h-1.5 w-32 rounded-full bg-slate-300/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-primary overflow-hidden">
          {/* Decorative Royal Crest Element (Subtle BG) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Geometric Gallery Cluster (Preserving all 4 images) */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative h-[700px]">
              {/* Image 01: The Anchor */}
              <div className="absolute top-0 left-0 w-3/5 aspect-[3/4] z-20 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Poolside service"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_T41ySmPMfXFE3_3_sOvKP5tYk2lSO5jMNODjVQoHVm3xwygOa1R5FE48RiDPUy-xsm-znULPXvxzAT973DDdTGmIvJ--Uu2FGbUYSmksbFfN9PHsxuBMypNnKDHWpSjJkMhDr46acAzLw7T92W5HIPlSrhAnapQ8mWbtTo5l1a73LqQ84LfeJQDjSmGt46vehuoFYP3lWF2a7ejR5XPDypIJWdCILn0vPJKOKVpz8D8mLSK9kq6Y5MG1607gpoEeuGyQqJQrhLd"
                />
              </div>

              {/* Image 02: The Horizon */}
              <div className="absolute top-12 right-0 w-1/2 aspect-square z-10 rounded-2xl overflow-hidden border border-white/10">
                <img
                  alt="Resort Pool"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzS9SqQ94hf-jUlJQ8LxWrEb33_Snh_2kNUjL8zqEBz1i-I9OPv3qkzweQdYsS4HGRrQjNVU3D22_ony_5TzFiBMY9w1VV47ow1lFwkwUO-maUFLyGjPXLfc71yDnOrQvtWzvBUruyXuacqleOV5XUhCM88NX0GH5vA0hJ8AgMhw6ZpJlXYEoclKNlREMZ_GcUCZIzERKnco0EF4sQPq58KZVVb0qYcq_zIbxRcriouhZ3DlkIg3FxTJssC98zgNbHAtMOtxfmqkU"
                />
              </div>

              {/* Image 03: The Detail */}
              <div className="absolute bottom-12 right-12 w-2/5 aspect-[3/4] z-30 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Spa treatment"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP7ymOSVisSnAvo2Cl5Us9iVBpoR-mz6TzCWsSZTLdObdnBcmzb7W6vJVLRXla6oYAvlX2sCJV6XtInWC5D_Jfi1r8ODz3GuqJvfWtATrSde7HCSwJQ7Tv-aSCXiFPuKPtsAMwGCyXvGXrHqkzjcAgRNU1aMHFLYVgsYj5vSL6xWJn4FkicaElNez6hU-vXK9lPFpR5sGq4kT5k8C5nBxsdJl5YCorsOVz0Nld719ms_Ehsgc-rs_csb60SnSiW1wLdunxkXDDlCm"
                />
              </div>

              {/* Image 04: The Accent */}
              <div className="absolute bottom-0 left-12 w-1/3 aspect-square z-40 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  alt="Villa Bedroom"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXAL4WZPgdkODo_4OvoJOQIfbw_R5x0M7iUTNU-whx_tpgYDVWHquVj0cwe68ZXY8QTRHfQ7T18MpQJpgRHu-3ODs51UjkgtUo8Gm5cLfjzMy6WGScWuKXAIrEfhaP4VE5bSn8BmazmoW87MUGiPMw8pEJxMRgAl__gUuv_xOVgm97TBCHKn1iRc7e4ZaVcqlucfNKCclLQza8kS93y_RvE6hq8RkjxHw_4lYLNvQ0lp4wUpEHk95W_JOZJAJJ9UwzgxFl_Gj7OBv"
                />
              </div>
            </div>

            {/* Structured Editorial Content (Preserving all text) */}
            <div className="lg:col-span-5 order-1 lg:order-2 text-white pl-0 lg:pl-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-[0.85] tracking-tighter">
                Elevate Every <br />
                <span className="text-secondary-fixed font-light ">
                  Guest Moment
                </span>
              </h2>

              <div className="space-y-16">
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
                  <div key={idx} className="group flex items-start gap-10">
                    <div className="relative pt-1">
                      <span className="text-white font-bold text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.num}
                      </span>
                      <div className="w-[1px] h-12 bg-white/10 absolute -bottom-14 left-1/2 -translate-x-1/2 group-last:hidden" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 tracking-widest uppercase text-white/90 group-hover:text-secondary-fixed transition-colors">
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
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-headline font-bold text-primary mb-4">
                Precision Components
              </h2>
              <p className="text-on-surface-variant max-w-md">
                Every aspect of the guest journey, meticulously orchestrated
                through our intelligent suite.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl overflow-hidden group border border-transparent hover:border-secondary/20 transition-all">
              <div className="p-8 h-1/2">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-on-secondary-fixed"
                    data-icon="calendar_month"
                  >
                    calendar_month
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">
                  Reservation Management
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Intelligent booking engine with dynamic pricing models and
                  seamless OTA integration for effortless occupancy control.
                </p>
              </div>
              <div className="h-1/2 relative overflow-hidden">
                <img
                  alt="Luxury lobby"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="Interior of a luxury hotel lobby with minimalist modern furniture, warm ambient lighting, and high ceilings reflecting upscale hospitality"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD16gMD8PHUSFk4Hr-LOhZ5OEgveUgzUkmqAZUQdVWg_n-XhWwRPo9Gz38-K-bYUoMlxOz_B6hm5p3i49dA2UhvU_q0zw-Sxle51ABG1panL0HTx53ZaCllsmWU3Hwx_HTFRzNEh03t1uu0J_OZwX_TYa8FcNXqnBGp6ILlkOGN0H8W_ycDNZDnOaW44-sPqQUHA1YLy--Vvrqcz6vwTxLiejjNyw0yL8KlYGvBN6hS9KEmk-9De0nrh_p9rWGl16Q9oQhRumopdUg2"
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold font-headline mb-2">
                    Housekeeping Tracking
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    Real-time room status and staff dispatching.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="cleaning_services"
                >
                  cleaning_services
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs rounded-full font-medium">
                  14 Villas Ready
                </span>
                <span className="px-3 py-1 bg-error-container text-on-error-container text-xs rounded-full font-medium">
                  3 Maintenance
                </span>
              </div>
            </div>
            <div className="bg-primary text-white rounded-xl p-8 flex flex-col justify-between">
              <span
                className="material-symbols-outlined text-secondary-fixed text-3xl"
                data-icon="inventory_2"
              >
                inventory_2
              </span>
              <div>
                <h3 className="text-lg font-bold font-headline mb-1">
                  Inventory Control
                </h3>
                <p className="text-secondary-fixed-dim text-xs">
                  Automated procurement workflows.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between">
              <span
                className="material-symbols-outlined text-secondary text-3xl"
                data-icon="analytics"
              >
                analytics
              </span>
              <div>
                <h3 className="text-lg font-bold font-headline mb-1 text-primary">
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

        <section className="px-6 py-24 md:px-8">
          <div className="relative mx-auto max-w-7xl space-y-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-12 text-center shadow-2xl lg:p-20">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <h2 className="font-headline text-4xl font-extrabold leading-tight text-on-primary lg:text-5xl">
              Ready to transform your <br />
              resort&apos;s digital backbone?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-fixed">
              Join the world&apos;s most prestigious resorts moving to
              Viduvaru&apos;s next-generation cloud infrastructure.
            </p>
            <div className="relative z-10 flex flex-col justify-center gap-4 pt-6 sm:flex-row">
              <button className="rounded-full bg-white px-10 py-4 font-bold text-primary shadow-xl transition-all hover:bg-opacity-90">
                Schedule a Private Demo
              </button>
              <button className="rounded-full border border-white/20 bg-primary-container/20 px-10 py-4 font-bold text-on-primary backdrop-blur-md">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LushHotelCloudPage;
