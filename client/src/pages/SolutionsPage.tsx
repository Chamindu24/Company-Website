// pages/SolutionsPage.tsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";
import QuestionItem from "../components/QuestionItem";
import SolutionTopicStepper from "../components/SolutionTopicStepper";

type Solution = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
};

const solutions: Solution[] = [
  {
    title: "Viduvaru",
    subtitle: "Online Ticket Booking for Boat Services",
    description:
      "Self-service bookings, capacity management, e-ticketing, and boarding validation designed for marine transport.",
    image: "/solution/boat.png",
  },
  {
    title: "Lush Hotel Cloud",
    subtitle: "Hotel Internal Management System",
    description:
      "A centralized cloud suite for reservations, housekeeping, inventory, and finance, built for multi-property operations.",
    image: "/solution/hotel.png",
  },
  {
    title: "Property Management System",
    subtitle: "Unified property oversight",
    description:
      "Digital workflows for property listings, maintenance tracking, tenant relations, and revenue oversight.",
    image: "/solution/realstate.png",
  },
  {
    title: "Travel Agency CRM System",
    subtitle: "Lead-to-trip lifecycle",
    description:
      "Automate inquiries, itineraries, payments, and post-trip follow-ups with a CRM tuned for travel teams.",
    image: "/solution/travel.png",
  },
];

const faqItems = [
  {
    question: "What are LushWare's Travel Management Solutions?",
    answer:
      "Our travel management solutions are specialized software platforms designed to help travel agencies, tour operators, and travel businesses streamline their operations, from booking management to itinerary planning and customer relationship management.",
  },
  {
    question: "How can these solutions improve our travel business operations?",
    answer:
      "Our solutions automate repetitive tasks, centralize customer data, improve booking accuracy, streamline payments, and provide real-time reporting—enabling your team to focus on delivering exceptional travel experiences.",
  },
  {
    question:
      "Are these solutions suitable for all sizes of travel businesses?",
    answer:
      "Yes. Our solutions are scalable and can be customized for solo travel consultants, small travel agencies, large tour operators, and enterprise travel management companies.",
  },
  {
    question:
      "Can these solutions integrate with existing travel industry tools?",
    answer:
      "Yes. Our solutions integrate seamlessly with GDS systems, payment processors, email platforms, and other third-party travel tools to create a unified ecosystem.",
  },
  {
    question: "Is customer data secure in your travel management solutions?",
    answer:
      "Absolutely. We use industry-standard security measures including encryption, access controls, compliance with data protection regulations, and regular security audits to protect sensitive customer and business data.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on your specific needs and complexity, but typically range from a few weeks to a few months. Our team provides guided onboarding and training to ensure smooth adoption.",
  },
];

const travelSteps = [
  {
    title: (
      <>
        Share Your <span className="text-emerald-600">Workflow</span>
      </>
    ),
    desc: "Tell us how your travel business runs today: inquiries, bookings, supplier coordination, and reporting. We map your exact operational flow.",
  },
  {
    title: (
      <>
        We Build Your <span className="text-emerald-600">Custom Platform</span>
      </>
    ),
    desc: "Our team designs and develops a tailored travel management system around your processes, team structure, and growth targets.",
    badge: "Build Phase",
  },
  {
    title: (
      <>
        Launch, Optimize, and <span className="text-emerald-600">Scale</span>
      </>
    ),
    desc: "Go live with confidence while we support onboarding, improvements, and ongoing enhancements as your travel operations expand.",
  },
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null,
  );
  const [visibleSolutions, setVisibleSolutions] = useState<Set<number>>(
    new Set(),
  );
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = solutionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              setVisibleSolutions((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );
    solutionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .sol-root * { font-family: 'DM Sans', sans-serif; }
        .sol-serif  { font-family: 'DM Serif Display', serif; }

        .sol-fadeUp {
          animation: solFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .sol-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .sol-fadeUp:nth-child(3) { animation-delay: 0.16s; }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sol-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .sol-modal-animate {
          animation: solModalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes solModalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
                      .sol-serif {
              font-family:
                "Playfair Display", serif; /* Or your specific serif font */
            }
            @keyframes float {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0px);
              }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
      `}</style>

      <section
        id="solutions"
        className="sol-root px-4 sm:px-6 py-16 sm:py-24 bg-white selection:bg-emerald-50"
      >
        <div className="mx-auto pt-8 max-w-7xl ">
          {/* HERO  */}
          <div className="relative min-h-[90vh] lg:px-6 px-0 py-8 bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden font-sans selection:bg-emerald-100 selection:text-emerald-900">
            {/* ARCHITECTURAL BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/[0.3] border-l border-slate-200/60 hidden lg:block" />
            </div>

            <div className="relative max-w-[1400px] mx-auto w-full px-8 p-8 lg:px-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
              {/* LEFT SIDE: EDITORIAL CONTENT */}
              <div className="lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left ">
                <div className="sol-fadeUp flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                  <span className=" lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                    Travel Solutions
                  </span>
                  <div className="h-[1px] w-12 bg-emerald-200" />
                </div>

                <h1 className="sol-fadeUp sol-serif text-5xl sm:text-6xl md:text-8xl xl:text-8xl font-normal text-slate-950 leading-[0.9] tracking-tight mb-8">
                  Advanced <br />
                  <span className="text-emerald-600">Technology</span>
                  <br />
                  <span className="text-slate-900 sol-serif">for Travel.</span>
                </h1>

                <div className="sol-fadeUp flex gap-6 items-start justify-center lg:justify-start">
                  <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                  <p className="text-lg md:text-2xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                    From booking management to itinerary planning and automated
                    workflows, our travel platform helps agencies operate faster
                    and deliver exceptional travel experiences.
                  </p>
                </div>

                <div className="sol-fadeUp mt-8 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
                  <button
                    onClick={() =>
                      setSelectedSolution({
                        title: "Travel Solutions",
                        subtitle: "Travel management consultation",
                        description: "Inquiry submitted from travel solutions.",
                      })
                    }
                    className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white lg:text-xs text-xs md:text-lg font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2"
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      Send Requirement
                    </span>

                    <svg
                      className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>

                    <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: THE EXECUTIVE SHOWCASE */}
              <div className="lg:col-span-6 xl:col-span-7 relative ">
                <div className="relative group ">
                  {/* THE "PLATFORM" */}
                  <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] -rotate-2 transition-transform duration-700" />

                  {/* MAIN IMAGE CONTAINER */}
                  <div className="relative z-20 pt-4 px-2 lg:px-8 md:px-10 sm:px-8">
                    <img
                      src="/Industry/travelhero-Photoroom.png"
                      alt="Travel management system"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] brightness-[1.02] contrast-[1.02]"
                    />
                  </div>

                  {/* ACCENT LINE */}
                  <div className="absolute bottom-0 right-20 w-32 h-px bg-emerald-600/30 z-40" />
                </div>
              </div>
            </div>
          </div>

          {/* ── PROCESS STEPPER ──────────────────────── */}
          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            <SolutionTopicStepper steps={travelSteps} />
          </div>

          {/* ── SOLUTION GRID ────────────────────────── */}
          <div className="grid gap-px border border-slate-100 overflow-hidden">
            {solutions
              .slice()
              .reverse()
              .map((solution, index) => (
                <div
                  key={solution.title}
                  ref={(el) => {
                    solutionRefs.current[index] = el;
                  }}
                  className={`group relative gap-12 md:gap-4 grid md:grid-cols-2 bg-white transition-all duration-700 ${
                    visibleSolutions.has(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index % 2) * 150}ms` }}
                >
                  {/* ── IMAGE SIDE — UNCHANGED ── */}
                  <div
                    className={`relative flex h-72 sm:h-96 md:h-[450px] lg:h-[550px] items-center justify-center overflow-hidden bg-white p-6 sm:p-12 ${index % 2 === 1 ? "md:order-last" : ""}`}
                  >
                    <div className="absolute h-52 w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-[3rem] sm:rounded-[4rem] bg-white border border-slate-100 scale-110 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]" />
                    <div className="absolute h-52 w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-[3rem] sm:rounded-[4rem] border-2 border-emerald-600/60 rotate-[25deg] scale-110" />
                    <div className="absolute top-16 right-12 sm:top-20 sm:right-16 md:top-24 md:right-20 z-0 h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-3xl bg-emerald-50/40 backdrop-blur-md border border-white/50 shadow-sm rotate-12" />
                    <div className="relative z-10 flex flex-col items-center -translate-y-6 sm:-translate-y-8 md:-translate-y-12">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full sm:scale-110 md:scale-125 lg:w-[90%] lg:scale-110 object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.12)]"
                      />
                      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 h-6 sm:h-8 md:h-10 w-3/4 rounded-[100%] bg-emerald-600/50 blur-3xl opacity-100" />
                      <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 h-2 w-1/2 rounded-[100%] bg-emerald-950/20 blur-md opacity-100" />
                    </div>
                  </div>

                  {/* ── TEXT SIDE ── */}
                  <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-20 lg:py-28 bg-white border-l border-slate-100 transition-all duration-500 overflow-hidden">
                    {/* Left accent on hover */}
                    <div className="absolute top-0 left-0 w-0.5 h-0 bg-emerald-500 group-hover:h-full transition-all duration-700" />

                    {/* Index number — editorial detail */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className="sol-serif text-xs italic text-slate-300 tabular-nums">
                        {String(solutions.length - index).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-slate-100 group-hover:bg-emerald-200 transition-colors duration-500" />
                    </div>

                    <div className="flex-1">
                      {/* Subtitle */}
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em] mb-3">
                        {solution.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="sol-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05] mb-5 group-hover:translate-x-1 transition-transform duration-500">
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed max-w-md border-b border-slate-100 pb-8 group-hover:border-emerald-200 transition-colors duration-500">
                        {solution.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <button
                        onClick={() => setSelectedSolution(solution)}
                        className="group/btn relative cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.18em] overflow-hidden transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                      >
                        <span className="relative z-10 transition-colors duration-300">
                          Send Requirement
                        </span>
                        <svg
                          className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-emerald-600 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ── FAQ ──────────────────────────────────── */}
        <div className="mt-20 sm:mt-32 lg:px-0 px-1 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-emerald-600" />
              <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                Travel Solutions FAQ
              </span>
              <div className="h-px w-8 bg-emerald-600" />
            </div>

            <h3 className="sol-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4 leading-tight">
              Frequently Asked{" "}
              <span className=" text-emerald-600">Questions</span>
            </h3>

            <p className="text-slate-500 font-light max-w-2xl text-base sm:text-lg mx-auto leading-relaxed">
              Clear answers to common questions about our travel management
              solutions.
            </p>
          </div>

          <div>
            {faqItems.map((item, index) => (
              <QuestionItem
                key={`${item.question}-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        {/* ── MODAL ──────────────────────────────────── */}
        {selectedSolution &&
          createPortal(
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <div
                className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
                onClick={() => setSelectedSolution(null)}
              />
              <div
                data-lenis-prevent
                className="sol-modal-animate relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
              >
                <div className="p-6 sm:p-8 lg:p-14">
                  <InquiryForm
                    inquiryType="solution"
                    topic={selectedSolution.title}
                    industry={selectedSolution.title}
                    onSuccess={() => setSelectedSolution(null)}
                    onClose={() => setSelectedSolution(null)}
                    showCloseButton={true}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )}
      </section>
    </>
  );
}
