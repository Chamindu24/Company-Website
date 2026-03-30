import FAQSection from "../components/FAQSection";

const transportFAQs = [
  {
    id: "transport-faq-1",
    question: "How does Viduvaru's real-time capacity management work?",
    answer:
      "Our system uses GPS and IoT sensors to provide live occupancy data for every vessel in your fleet. You can view capacity, fuel efficiency, and passenger counts across all routes simultaneously. The dashboard updates every 30 seconds for real-time visibility.",
  },
  {
    id: "transport-faq-2",
    question: "Can the booking system work offline?",
    answer:
      "Yes! Our system is designed for remote island operations. The QR boarding validation and ticket verification work completely offline. Data automatically syncs once connectivity is restored, ensuring seamless operations even in areas with intermittent connectivity.",
  },
  {
    id: "transport-faq-3",
    question: "What payment methods does the online booking system support?",
    answer:
      "Our payment gateway supports all major credit cards, digital wallets, and local Maldivian payment methods. We handle multi-currency transactions with real-time conversion and integrated compliance for international travelers.",
  },
  {
    id: "transport-faq-4",
    question: "How does the automated revenue split system work?",
    answer:
      "The system automatically calculates and distributes commissions to agents, partners, and operators based on configurable rules. Payments are processed through our secure escrow system with detailed audit trails and instant visibility into payouts.",
  },
  {
    id: "transport-faq-5",
    question: "Is Viduvaru compliant with Maldivian maritime regulations?",
    answer:
      "Absolutely. Our system maintains full compliance with Maldivian Maritime Authority requirements including passenger manifests, vessel documentation, safety records, and coast guard communications. All documents are automatically generated and stored for instant retrieval.",
  },
];

function ViduvaruTransportPage() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              data-alt="cinematic aerial shot of a luxury yacht cruising through crystal clear turquoise maldivian waters with white sand banks in the background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKoyiWa4D-HlgXAJXYpVIDaPhneG9bUJKWnFI24S2bhL7errYxleukzrqM-T8BplGjkWcq6ABlBFxeYT081iDEwSHFDjVY-LydF27_MNQKWFk8ua68cWYkpm74q8PFSaAUcwuy4_EY7nAqRVB3LtHIBrlQzwycMJ6f5P0BR-2ipwxnyw3nj-dBve0TGgcFjTSmy6QwhRmB-fz5yhs9RVr82_zV5YjniDr-GqvXNcIO4RCMGDNOCDQpIEelZ0NzpPIXnhvQsOBeZMn"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase">
                The Fluid Horizon
              </span>
              <h1 className="text-display-lg font-headline text-white leading-tight -tracking-[0.02em] font-bold text-5xl md:text-7xl">
                Seamless Marine <br />
                Transport Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                A digital concierge for the waves. Viduvaru streamlines fleet
                management and passenger experiences with enterprise-grade
                precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="submerged-gradient text-white px-8 py-4 rounded-full font-headline font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                  Explore Fleet
                </button>
                <button className="glass-panel text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-headline-md text-primary mb-4 font-semibold text-4xl">
              Engineered for Excellence
            </h2>
            <div className="h-1 w-20 submerged-gradient mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 overflow-hidden relative group">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                    Real-time Capacity Management
                  </h3>
                  <p className="text-on-surface-variant max-w-md">
                    Live visual telemetry of your entire fleet's occupancy and
                    fuel efficiency across the horizon.
                  </p>
                </div>
                <div className="mt-auto glass-panel rounded-lg p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-on-tertiary-container"
                          data-icon="directions_boat"
                        >
                          directions_boat
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          Coral Express V
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          Route: Male' to Maafushi
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">
                        84% Capacity
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full mb-2">
                    <div
                      className="h-full submerged-gradient rounded-full"
                      style={{ width: "84%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-outline">
                    <span>Departure: 14:00</span>
                    <span>ETA: 14:45</span>
                  </div>
                </div>
                <img
                  className="absolute bottom-0 right-0 w-2/3 opacity-20 -mr-20 -mb-20 pointer-events-none"
                  data-alt="close up of a modern high tech glass dashboard with financial and logistics charts glowing in blue light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuBOdtk0eF7vWAWGZ8JOJtDMPM2Vj2oR0esKC9EYlFvi-oUH6s6WdMOgNa8tvPQlCUjyCZud_w5Fv0no5Ku4EVKb5A8_3OYQtsDOdEsfuWPJo8jWgt8OhnIdDaJimVk-usYjtB7fzN3MSEwzWTDcFLeFf0Ts1WUjBwA6_iYcBMTzy46M0ne4_iQ9JakiZ4Ge5UjsvBXcj-vBOBRfUpdbdp8RD45M5QGD3yvMFfhtAuAYOIFlnP2XR-8HgqMTv4MXClwBqbgGKZkZCZ"
                />
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary-container rounded-xl p-8 relative overflow-hidden text-on-secondary-container flex flex-col justify-between">
              <div>
                <span
                  className="material-symbols-outlined text-4xl mb-6"
                  data-icon="confirmation_number"
                >
                  confirmation_number
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Online Ticket Booking
                </h3>
                <p className="opacity-90">
                  An effortless consumer interface designed for travelers
                  worldwide.
                </p>
              </div>
              <div className="mt-8 glass-panel rounded-lg p-4 bg-white/30 border-white/40">
                <div className="space-y-3">
                  <div className="h-8 w-full bg-white/40 rounded-sm"></div>
                  <div className="h-8 w-full bg-white/40 rounded-sm"></div>
                  <div className="h-10 w-full submerged-gradient rounded-full mt-4"></div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col items-center text-center justify-center border border-outline-variant/15">
              <div className="w-20 h-20 rounded-full submerged-gradient flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-white text-3xl"
                  data-icon="qr_code_2"
                >
                  qr_code_2
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-2">
                E-ticketing System
              </h3>
              <p className="text-on-surface-variant text-sm">
                Paperless journeys with instant digital delivery to any mobile
                device.
              </p>
            </div>
            <div className="md:col-span-8 bg-primary-container rounded-xl p-8 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-white mb-4">
                    QR Boarding Validation
                  </h3>
                  <p className="text-primary-fixed-dim mb-6 leading-relaxed">
                    Lightning-fast boarding with offline validation capabilities
                    for remote islands.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white text-sm">
                      <span
                        className="material-symbols-outlined text-secondary-fixed text-lg"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      Zero-latency verification
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                      <span
                        className="material-symbols-outlined text-secondary-fixed text-lg"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      Encrypted security tokens
                    </li>
                  </ul>
                </div>
                <div className="relative h-full min-h-[200px] flex items-center justify-center">
                  <div className="w-48 h-64 glass-panel rounded-lg rotate-6 flex flex-col p-4 shadow-2xl bg-white/10 border-white/20">
                    <div className="bg-white p-2 rounded-sm mb-4">
                      <img
                        className="w-full aspect-square object-cover"
                        data-alt="minimalist white qr code on a clean square background with soft shadows"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkGBDf_5Dt2U00b27qs0dzTDvrONvTJjeT_pInUEWjM7g8BjR1JS-76GzQ2V2EH_18sTFDJL54d3SEQ_NPW2HaGakZ9JXrDhkP9K5pe1v9tou8Mqffk9pwEUvtkKmEpIBxQi0rqB_2yZ6hDgYjw7YTZVxIDLauGb29z4sW4yS6hXAiHztVAp-uaCVHbrY8GXU1uZA7S_gAV7itvey2fqxxxdde10948nnzPFxwqUZ1sYfy0NPKrmTG9fcaq5-i61k6f6VJxtRzlpVC"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                      <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-2">
                <img
                  className="rounded-lg w-full"
                  data-alt="Sophisticated software interface showing complex marine logistics data, bar charts, and a map of tropical islands with shipping routes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC90m-mOQRaBNSXHFEHgeUkmJohmTfo3FJ4gZJbLO1R9m57lZU2KRH3Kjru4uLiKPwqJuEKyySwd5PfcqijiLMToWwNO50F2WzdhexS9ZOrvevXg5XZ7gIKSG1ZlSNTZuowIE2UJh9bm-OE869CRto5ALVAReXbOeuoHp_PL_wqRm4UVnu99pN2pzqIR8-3sBmvKwP2PBdIUPXofDaz9Xb3Xbzy8nWBth5RuHYlvz9UEWIqb8aaUKlsIz1Lj1x8UKfA4VbtuZS7jHfK"
                />
                <div className="absolute top-10 -right-10 glass-panel p-6 rounded-lg shadow-2xl border border-white/50 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-full">
                      <span className="material-symbols-outlined">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
                        Efficiency
                      </p>
                      <p className="text-2xl font-headline font-extrabold text-primary">
                        +24.8%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                Advanced Logistics
              </span>
              <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-primary mt-6 mb-8 tracking-tight leading-tight">
                Command your fleet with absolute precision.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    analytics
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Automated Revenue Splits
                    </h4>
                    <p className="text-on-surface-variant">
                      Intelligent escrow and payout management for agents and
                      operators.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-secondary text-3xl shrink-0">
                    speed
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-2">
                      Real-time manifest
                    </h4>
                    <p className="text-on-surface-variant">
                      Instant access to passenger manifests and vessel documents
                      for coastguard compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          items={transportFAQs}
          title="Viduvaru Transport FAQs"
          subtitle="Everything you need to know about our fleet management and booking system"
        />

        <section className="px-6 py-20 md:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-12 text-center text-on-primary shadow-2xl">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold font-headline">
                Ready to Digitalize Your Fleet?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg opacity-90 font-body">
                Join the leading transport providers in the Maldives who have
                already automated their booking operations.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-10 py-4 font-bold text-primary shadow-xl transition-transform hover:scale-105 font-headline">
                  Get Started Today
                </button>
                <button className="rounded-full border-2 border-white/30 bg-transparent px-10 py-4 font-bold text-white transition-colors hover:bg-white/10 font-headline">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViduvaruTransportPage;
