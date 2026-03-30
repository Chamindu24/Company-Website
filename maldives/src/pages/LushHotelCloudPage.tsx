const reservationTags = ["Real-time Sync", "Direct Booking", "Channel Manager"];

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
              <div className="glass-panel rounded-xl border border-white/40 p-2 shadow-2xl">
                <div className="space-y-8 rounded-lg bg-surface-container-lowest p-8">
                  <div className="flex items-center justify-between border-b border-surface-variant pb-6">
                    <div>
                      <h3 className="text-xl font-bold">Portfolio Overview</h3>
                      <p className="text-xs text-on-surface-variant">
                        October 2024 Performance
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-32 rounded-full bg-surface-container-low" />
                      <div className="h-8 w-8 rounded-full bg-primary/10" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2 rounded-xl bg-primary/5 p-6">
                      <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">
                        Total Occupancy
                      </span>
                      <div className="font-headline text-3xl font-extrabold">
                        94.2%
                      </div>
                      <div className="text-xs font-medium text-tertiary">
                        +4.1% vs LY
                      </div>
                    </div>
                    <div className="space-y-2 rounded-xl bg-secondary/5 p-6">
                      <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary">
                        Portfolio ADR
                      </span>
                      <div className="font-headline text-3xl font-extrabold">
                        $2,140
                      </div>
                      <div className="text-xs font-medium text-tertiary">
                        +12% vs LY
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-bold">
                      <span>Top Properties</span>
                      <span className="cursor-pointer text-primary hover:underline">
                        View All
                      </span>
                    </div>

                    <div className="space-y-3">
                      {topProperties.map((property) => (
                        <div
                          key={property.name}
                          className="flex items-center gap-4 rounded-lg bg-surface-container-low p-3"
                        >
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-300">
                            <img
                              alt="Property"
                              className="h-full w-full object-cover"
                              src={property.image}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold">
                              {property.name}
                            </div>
                            <div className="text-[10px] uppercase tracking-tighter text-on-surface-variant">
                              {property.type}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">
                              {property.revenue}
                            </div>
                            <div className="text-[10px] font-bold text-tertiary">
                              {property.soar}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
        <section className="py-24 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      alt="Poolside service"
                      className="w-full h-full object-cover"
                      data-alt="Close-up of a poolside refreshment tray with exotic tropical fruit and a crystal glass of sparkling water at a luxury resort"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd_T41ySmPMfXFE3_3_sOvKP5tYk2lSO5jMNODjVQoHVm3xwygOa1R5FE48RiDPUy-xsm-znULPXvxzAT973DDdTGmIvJ--Uu2FGbUYSmksbFfN9PHsxuBMypNnKDHWpSjJkMhDr46acAzLw7T92W5HIPlSrhAnapQ8mWbtTo5l1a73LqQ84LfeJQDjSmGt46vehuoFYP3lWF2a7ejR5XPDypIJWdCILn0vPJKOKVpz8D8mLSK9kq6Y5MG1607gpoEeuGyQqJQrhLd"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      alt="Villa Bedroom"
                      className="w-full h-full object-cover"
                      data-alt="Luxury overwater villa bedroom with floor-to-ceiling windows looking out over a calm turquoise ocean at sunset"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXAL4WZPgdkODo_4OvoJOQIfbw_R5x0M7iUTNU-whx_tpgYDVWHquVj0cwe68ZXY8QTRHfQ7T18MpQJpgRHu-3ODs51UjkgtUo8Gm5cLfjzMy6WGScWuKXAIrEfhaP4VE5bSn8BmazmoW87MUGiPMw8pEJxMRgAl__gUuv_xOVgm97TBCHKn1iRc7e4ZaVcqlucfNKCclLQza8kS93y_RvE6hq8RkjxHw_4lYLNvQ0lp4wUpEHk95W_JOZJAJJ9UwzgxFl_Gj7OBv"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      alt="Resort Pool"
                      className="w-full h-full object-cover"
                      data-alt="Infinity pool merging with the sea horizon under a clear blue sky at a high-end tropical destination"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzS9SqQ94hf-jUlJQ8LxWrEb33_Snh_2kNUjL8zqEBz1i-I9OPv3qkzweQdYsS4HGRrQjNVU3D22_ony_5TzFiBMY9w1VV47ow1lFwkwUO-maUFLyGjPXLfc71yDnOrQvtWzvBUruyXuacqleOV5XUhCM88NX0GH5vA0hJ8AgMhw6ZpJlXYEoclKNlREMZ_GcUCZIzERKnco0EF4sQPq58KZVVb0qYcq_zIbxRcriouhZ3DlkIg3FxTJssC98zgNbHAtMOtxfmqkU"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      alt="Spa treatment"
                      className="w-full h-full object-cover"
                      data-alt="Serene spa treatment room with natural wood textures, stone bowls, and soft warm lighting for a luxury wellness experience"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsP7ymOSVisSnAvo2Cl5Us9iVBpoR-mz6TzCWsSZTLdObdnBcmzb7W6vJVLRXla6oYAvlX2sCJV6XtInWC5D_Jfi1r8ODz3GuqJvfWtATrSde7HCSwJQ7Tv-aSCXiFPuKPtsAMwGCyXvGXrHqkzjcAgRNU1aMHFLYVgsYj5vSL6xWJn4FkicaElNez6hU-vXK9lPFpR5sGq4kT5k8C5nBxsdJl5YCorsOVz0Nld719ms_Ehsgc-rs_csb60SnSiW1wLdunxkXDDlCm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
                Elevate Every{" "}
                <span className="text-secondary-fixed">Guest Moment</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-secondary-fixed font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Automated Personalization
                    </h4>
                    <p className="text-secondary-fixed-dim/80">
                      Guest preferences are tracked globally, allowing your
                      staff to anticipate needs before they are voiced.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-secondary-fixed font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Seamless Mobile Key
                    </h4>
                    <p className="text-secondary-fixed-dim/80">
                      Direct-to-room check-in experiences that eliminate
                      front-desk friction for your VIP guests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-secondary-fixed font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Concierge Intelligence
                    </h4>
                    <p className="text-secondary-fixed-dim/80">
                      Smart itinerary management for excursions, dining, and spa
                      treatments across multiple properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-8">
          <div className="relative mx-auto max-w-5xl space-y-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-12 text-center shadow-2xl lg:p-20">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white h-64 w-64 left-0 top-0" />
              <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full border-4 border-white" />
            </div>
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
