import { useState } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";
import InquiryForm from "../components/InquiryForm";

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
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => setIsInquiryOpen(true);
  const closeInquiryModal = () => setIsInquiryOpen(false);

  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        <PinnedScrollHeadlineSection
          badge="The Fluid Horizon"
          titlePrefix="Seamless Marine"
          highlightText="Transport Solutions"
          titleSuffix=""
          description="A digital concierge for the waves. Viduvaru streamlines fleet management and passenger experiences with enterprise-grade precision."
          sectionClassName="bg-[#ffffff]"
        >
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-8 justify-center ">
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
              View Demo
            </Link>
          </div>
        </PinnedScrollHeadlineSection>

        {isInquiryOpen ? (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8">
              <InquiryForm
                topic="Viduvaru Transport"
                ctaLabel="Submit Inquiry"
                onSuccess={closeInquiryModal}
                onClose={closeInquiryModal}
                showCloseButton
              />
            </div>
          </div>
        ) : null}

        <section className="py-12 px-4 sm:py-16 sm:px-6 md:py-24 md:px-8 max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 text-center">
            <h2 className="font-headline text-headline-md text-primary mb-4 font-semibold text-3xl sm:text-4xl md:text-5xl">
              Engineered for Excellence
            </h2>
            <div className="h-1 w-20 submerged-gradient mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/30 border border-outline-variant/30 rounded-lg overflow-hidden bg-surface">
            {/* SECTION 1: CAPACITY MANAGEMENT */}
            <div className="md:col-span-8 bg-[#ffffff] p-6 sm:p-8 md:p-12 flex flex-col justify-between min-h-[auto] md:min-h-[500px] border-b md:border-b-0 md:border-r border-outline-variant/30">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-outline">
                    System Analytics
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary tracking-tight mb-4 md:mb-6">
                  Real-time{" "}
                  <span className="font-semibold">Capacity Management</span>
                </h3>
                <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed opacity-80">
                  Enterprise-grade visual telemetry monitoring fleet occupancy,
                  route efficiency, and live fuel consumption across your entire
                  maritime network.
                </p>
              </div>

              {/* DATA MODULE */}
              <div className="mt-8 md:mt-12 p-5 sm:p-6 md:p-8 border border-outline-variant/20 rounded-2xl bg-surface-container-low rounded-sm shadow-sm max-w-md">
                <div className="flex justify-between items-end mb-5 md:mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">
                      Vessel Identifier
                    </p>
                    <p className="text-lg md:text-xl font-bold text-primary">
                      Coral Express V
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-light text-primary">
                      84<span className="text-sm ml-1 opacity-60">%</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-tighter font-bold text-outline">
                      Live Load
                    </p>
                  </div>
                </div>

                <div className="w-full bg-outline-variant/20 h-1.5 mb-5 md:mb-6">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: "84%" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-outline-variant/10 pt-4 md:pt-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline mb-1">
                      Departure
                    </p>
                    <p className="text-xs md:text-sm font-medium text-on-surface">
                      14:00 Port Male'
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-outline mb-1">
                      Arrival (Est)
                    </p>
                    <p className="text-xs md:text-sm font-medium text-on-surface">
                      14:45 Maafushi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: BOOKING */}
            <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl md:text-4xl mb-6 md:mb-8 font-light text-white/80 block">
                  confirmation_number
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4 leading-tight tracking-tight">
                  Online Ticket <br />
                  Booking
                </h3>
                <p className="text-white leading-relaxed text-sm md:text-md">
                  A seamless, high-conversion interface engineered for global
                  travelers and high-frequency routes.
                </p>
              </div>

              <div className="mt-8 md:mt-12 space-y-3">
                <div className="h-11 md:h-12 border border-white/80 rounded-sm bg-white/5 flex items-center px-4">
                  <span className="text-xs text-white/90 font-mono">
                    01 // SELECT ROUTE
                  </span>
                </div>
                <div className="h-11 md:h-12 border border-white/80 rounded-sm bg-white/5 flex items-center px-4">
                  <span className="text-xs text-white/90 font-mono">
                    02 // PASSENGER DETAILS
                  </span>
                </div>
                <button className="w-full h-12 md:h-14 bg-white hover:text-white text-primary font-bold text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors duration-300 mt-4">
                  Initialize Booking
                </button>
              </div>
            </div>

            {/* SECTION 3: E-TICKETING */}
            <div className="md:col-span-4 bg-surface p-6 sm:p-8 md:p-12 border-t md:border-r border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-low transition-colors">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-outline-variant/40 flex rounded-lg items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary">
                  qr_code_2
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                Digital Issuance
              </h3>
              <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80">
                Paperless documentation with instantaneous delivery to mobile
                wallets via encrypted protocols.
              </p>
            </div>

            {/* SECTION 4: VALIDATION */}
            <div className="md:col-span-8 bg-surface-container-lowest p-6 sm:p-8 md:p-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
              <div className="max-w-md w-full">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                  Boarding Validation
                </h3>
                <p className="text-on-surface-variant text-sm md:text-md leading-relaxed opacity-80 mb-5 md:mb-6">
                  Proprietary offline validation technology ensuring
                  zero-latency boarding even in remote island locations without
                  stable connectivity.
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-md text-primary">
                      verified
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-outline">
                      Instant Sync
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-md text-primary">
                      shield
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-outline">
                      AES-256 Security
                    </span>
                  </div>
                </div>
              </div>

              {/* QR CODE */}
              <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary p-2 bg-white flex items-center justify-center shadow-lg shrink-0">
                <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PRO')] bg-cover opacity-90 grayscale" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 bg-[#ffffff] py-32 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden  p-2">
                <img
                  className="rounded-lg w-full"
                  data-alt="Sophisticated software interface showing complex marine logistics data, bar charts, and a map of tropical islands with shipping routes"
                  src="https://www.abswavesight.com/sites/default/files/styles/vertical_image_slider/public/2024-06/oprisk.png?itok=t5bArY_i"
                />
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

        <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-8 sm:p-10 md:p-12 text-center text-on-primary shadow-2xl">
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
              <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold font-headline">
                Ready to Digitalize Your Fleet?
              </h2>
              <p className="mx-auto mb-7 md:mb-10 max-w-xl text-sm sm:text-base md:text-lg opacity-90 font-body">
                Join the leading transport providers in the Maldives who have
                already automated their booking operations.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  onClick={openInquiryModal}
                  className="w-full sm:w-auto rounded-full bg-white px-8 md:px-10 py-3.5 md:py-4 font-bold text-primary shadow-xl transition-transform hover:scale-105 font-headline"
                >
                  Get Started Today
                </button>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-transparent px-8 md:px-10 py-3.5 md:py-4 font-bold text-white transition-colors hover:bg-white/10 font-headline"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ViduvaruTransportPage;
