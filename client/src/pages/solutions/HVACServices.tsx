import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import QuestionItem from "@/components/QuestionItem";
import ValueCard from "@/components/ValueCard";
import InquiryForm from "@/components/InquiryForm";
import SolutionTopicStepper from "@/components/SolutionTopicStepper";

const faqItems = [
  {
    question: "How can software help HVAC service businesses?",
    answer:
      "Custom software helps HVAC companies manage service requests, technician scheduling, maintenance contracts, and customer relationships more efficiently while reducing manual work.",
  },
  {
    question: "Can the system handle HVAC job scheduling and dispatch?",
    answer:
      "Yes. The system includes smart scheduling tools that can assign technicians, estimate job duration, and optimize routes for faster service delivery.",
  },
  {
    question: "Does the system support recurring HVAC maintenance services?",
    answer:
      "Yes. Preventive maintenance contracts and recurring service schedules can be automatically managed, tracked, and reminded to customers.",
  },
  {
    question: "Can HVAC companies track technicians in real time?",
    answer:
      "Yes. The platform includes technician tracking, job status updates, and mobile access for field teams so dispatchers always have full visibility.",
  },
  {
    question: "Do I need to pay before development starts?",
    answer:
      "No. We first build the solution based on your requirements. If it fits your business needs, you can then use it as a managed pay-as-you-go software service.",
  },
];

const benefits = [
  {
    title: "Perfect Fit for Business Processes",
    desc: "Built specifically around your HVAC workflows instead of forcing your team to adapt to a generic system.",
  },
  {
    title: "Higher Operational Efficiency",
    desc: "Eliminates unnecessary features and focuses only on functions that create real value for HVAC operations.",
  },
  {
    title: "Better Integration",
    desc: "Easily integrates with existing internal systems, databases, supplier tools, and accounting platforms.",
  },
  {
    title: "Competitive Advantage",
    desc: "Unique capabilities that competitors using the same off-the-shelf SaaS platforms simply cannot replicate.",
  },
  {
    title: "Full Control & Ownership",
    desc: "You control features, updates, security policies, and data without depending on a vendor's roadmap.",
  },
  {
    title: "Scalability for Future Needs",
    desc: "The system evolves as your business grows, adds technicians, or expands service territories.",
  },
  {
    title: "Enhanced Security & Compliance",
    desc: "Security mechanisms designed specifically for your operational and regulatory requirements.",
  },
];

const steps = [
  {
    title: (
      <>
        Discuss Your <span className="text-emerald-600">Requirements</span>
      </>
    ),
    desc: "Share your HVAC business challenges and goals with us. We listen, analyse your workflows, and define the exact solution you need.",
  },
  {
    title: (
      <>
        We Build — <span className="text-emerald-600">No Upfront Payment</span>
      </>
    ),
    desc: "Our team develops the full custom solution tailored to your HVAC operations. No payment required until it's ready and approved by you.",
    badge: "No Initial Payment",
  },
  {
    title: (
      <>
        <span className="text-emerald-600">Pay-as-You-Go</span>, Fully Managed
      </>
    ),
    desc: "If the solution fits your business, you adopt it as a fully managed pay-as-you-go service. We handle hosting, updates, and support.",
  },
];
export default function HVACServices() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [coverVisible, setCoverVisible] = useState(false);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const coverObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setCoverVisible(true);
      },
      { threshold: 0.15 },
    );
    if (coverRef.current) coverObs.observe(coverRef.current);

    const benefObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setBenefitsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (benefitsRef.current) benefObs.observe(benefitsRef.current);

    return () => {
      coverObs.disconnect();
      benefObs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .hvac-root * { font-family: 'DM Sans', sans-serif; }
        .hvac-serif { font-family: 'DM Serif Display', serif; }

        .hvac-hero-line {
          animation: hvac-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hvac-hero-line:nth-child(2) { animation-delay: 0.1s; }
        .hvac-hero-line:nth-child(3) { animation-delay: 0.2s; }
        .hvac-hero-line:nth-child(4) { animation-delay: 0.3s; }

        @keyframes hvac-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hvac-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Rotating image squares */
        .hvac-img-wrap {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s;
        }
        .hvac-img-wrap:hover {
          transform: rotate(0deg) scale(1.04) !important;
          box-shadow: 0 32px 72px rgba(5,150,105,0.22);
          z-index: 10;
        }
        .hvac-img-inner {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-img-wrap:hover .hvac-img-inner {
          transform: rotate(0deg) !important;
        }

        /* Steps scroll animation */
        .hvac-step {
          opacity: 0;
          transform: translateX(-48px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-step.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .hvac-step:nth-child(1) { transition-delay: 0s; }
        .hvac-step:nth-child(2) { transition-delay: 0.15s; }
        .hvac-step:nth-child(3) { transition-delay: 0.3s; }

        /* Cover reveal */
        .hvac-cover {
          opacity: 0;
          transform: scale(0.97);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-cover.visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Benefits stagger */
        .hvac-benefit {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .hvac-benefit.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hvac-tag {
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .hvac-tag:hover {
          background: #ecfdf5;
          border-color: #6ee7b7;
          color: #065f46;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <section className="hvac-root w-full py-16 md:py-32 lg:py-32 bg-[#ffffff]">
        <div className="mx-auto">
          <div className="max-w-8xl px-4 sm:px-8 lg:px-24">
            {/* ── HVAC SERVICES EDITORIAL HERO ───────────────────────────────── */}
            <div className="relative min-h-[90vh] lg:px-6 px-0 lg:py-0 sm:py-8 py-8 bg-[#FAFAFA] flex items-center rounded-lg overflow-hidden font-sans selection:bg-emerald-100 selection:text-emerald-900">
              {/* ARCHITECTURAL BACKGROUND ELEMENTS */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/[0.35] border-l border-slate-200/60 hidden lg:block" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] bg-emerald-50/50 blur-[120px] rounded-full" />
              </div>

              <div className="relative max-w-[1400px] mx-auto w-full px-8 p-8 lg:px-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
                {/* LEFT SIDE: EDITORIAL CONTENT */}
                <div className="lg:col-span-6 xl:col-span-5 text-left md:text-center lg:text-left">
                  <div className="hvac-hero-line flex items-center gap-4 mb-8 overflow-hidden justify-start md:justify-center lg:justify-start">
                    <span className="lg:text-[12px] text-[12px] md:text-[16px] font-bold text-emerald-700 uppercase tracking-[0.3em] whitespace-nowrap">
                      Industry Solutions
                    </span>
                    <div className="h-[1px] w-12 bg-emerald-200" />
                  </div>

                  <h1 className="hvac-hero-line hvac-serif text-5xl sm:text-6xl md:text-8xl xl:text-7xl font-normal text-slate-950 leading-[0.8]  mb-8">
                    HVAC <br />
                    <span className="text-emerald-600">Solutions</span>
                    <br />
                    <span className="text-slate-900 hvac-serif">
                      Architected.
                    </span>
                  </h1>

                  <div className="hvac-hero-line flex gap-6 items-start justify-center lg:justify-start">
                    <div className="w-1 h-20 bg-emerald-600 mt-2 hidden sm:block lg:block" />
                    <p className="text-lg md:text-3xl lg:text-lg text-slate-600 lg:max-w-md max-w-xl leading-relaxed">
                      Smart software built specifically for HVAC enterprises.
                      Seamlessly manage{" "}
                      <span className="text-emerald-700 font-medium">
                        service jobs, technicians, and maintenance contracts
                      </span>{" "}
                      with unrivaled precision.
                    </p>
                  </div>

                  {/* REFINED TAGS */}
                  <div className="hvac-hero-line mt-8 flex flex-wrap gap-3 justify-start md:justify-center lg:justify-start">
                    {[
                      "Scheduling & Dispatch",
                      "AI-Assisted CRM",
                      "Technician Tracking",
                      "Maintenance Contracts",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="hvac-tag text-[9px] lg:text-[10px] md:text-[14px] font-bold text-slate-500 uppercase tracking-widest border border-slate-400 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="hvac-hero-line mt-8 flex items-center gap-8 justify-start md:justify-center lg:justify-start">
                    <button
                      onClick={() => setShowInquiryForm(true)}
                      className="group/btn relative cursor-pointer overflow-hidden px-8 py-4 bg-slate-950 text-white lg:text-xs text-xs md:text-xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-2"
                    >
                      <span className="relative z-10 transition-colors duration-300">
                        Send Requirements
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
                <div className=" lg:col-span-6 xl:col-span-7 relative">
                  <div className="relative group animate-float">
                    {/* THE "PLATFORM" */}
                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-md rounded-sm border border-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] -rotate-2 transition-transform duration-700 group-hover:rotate-0" />

                    {/* MAIN IMAGE CONTAINER */}
                    <div className="relative z-20 pt-4 px-0 lg:px-14 md:px-16 sm:px-4 animate-float">
                      <img
                        src="/Industry/hvachero-Photoroom.png"
                        alt="HVAC service software"
                        className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] brightness-[1.01] contrast-[1.01]"
                      />
                    </div>

                    {/* DESIGN ACCENTS */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-emerald-200/50 -z-10" />
                    <div className="absolute bottom-0 right-20 w-32 h-px bg-emerald-600/30 z-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3 STEPS ─────────────────────────────── */}
          <div className="-mt-38 sm:mt-0 md:-mt-38 lg:mt-0">
            <SolutionTopicStepper steps={steps} threshold={0.45} />
          </div>

          {/*  COVER IMAGE BANNER  */}
          <div
            ref={coverRef}
            className={`hvac-cover w-full mb-16 md:mb-28 ${coverVisible ? "visible" : ""}`}
          >
            <div className="relative lg:pl-108 md:pl-72 pl-32 overflow-hidden">
              <img
                src="/Industry/hvac.jpg"
                alt="HVAC professional at work"
                className="w-full h-[380px] sm:h-[440px] md:h-[580px] object-cover object-top"
              />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl w-full mx-auto px-8 sm:px-14">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/10 border border-black/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-black text-[12px] font-bold uppercase tracking-[0.2em]">
                        HVAC Software Experts
                      </span>
                    </div>

                    <h3 className="hvac-serif text-4xl sm:text-6xl font-normal text-black leading-[1.1] mb-5">
                      Run your HVAC business{" "}
                      <span className="text-emerald-600">
                        like never before.
                      </span>
                    </h3>

                    <p className="text-black text-base sm:text-xl  leading-relaxed mb-8 max-w-md">
                      From the first call to the final invoice — every part of
                      your workflow, automated and optimised.
                    </p>

                    <button
                      onClick={() => {
                        document
                          .getElementById("hvac-services-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="group cursor-pointer relative inline-flex items-center gap-3 px-10 py-4 bg-emerald-600 text-slate-50 font-semibold text-xs uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Explore Services
                      </span>
                      <svg
                        className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
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
                      <div className="absolute inset-0 bg-slate-900 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TAILORED SOFTWARE SECTION ────────────── */}
          <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left */}
              <div className="group py-12 md:py-16 md:pr-16 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-emerald-600" />
                    <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-[0.2em]">
                      Our Approach
                    </span>
                  </div>

                  <h2 className="hvac-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.1]">
                    We provide tailored software services for your{" "}
                    <span className="text-emerald-600  transition-colors duration-500">
                      trades business.
                    </span>
                  </h2>

                  <p className="text-slate-500 leading-relaxed text-base md:text-lg ">
                    Generic SaaS platforms are built for everyone — which means
                    they're perfect for no one. Your HVAC business has unique
                    workflows, seasonal patterns, and compliance needs that
                    demand a system built around{" "}
                    <span className="text-slate-900 font-medium">
                      your reality, not a template
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Right — benefits grid */}
              <div ref={benefitsRef} className="py-12 md:py-16 md:pl-16">
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div
                      key={b.title}
                      className={`hvac-benefit group/b flex items-start gap-4 p-4 border border-transparent hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 cursor-default ${benefitsVisible ? "visible" : ""}`}
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <div className="mt-1 w-5 h-5 shrink-0 border border-emerald-400 flex items-center justify-center group-hover/b:bg-emerald-500 transition-colors duration-300">
                        <svg
                          className="w-2.5 h-2.5 text-emerald-600 group-hover/b:text-white transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900 mb-0.5">
                          {b.title}
                        </p>
                        <p className="text-slate-500 text-md leading-relaxed ">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── TRIPTYCH SPLIT IMAGE SECTION ──────────────────── */}
          <div className="max-w-7xl mx-auto px-2 md:px-6 pt-12 mb-20 md:mb-32">
            <div
              className="grid items-center"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr", // Always 3 cols — never collapse
                gap: "clamp(4px, 1.5vw, 24px)", // Gap scales with viewport
              }}
            >
              {[
                { index: 0, label: "Air Conditioning" },
                { index: 1, label: "Heating Systems" },
                { index: 2, label: "Ventilation" },
              ].map(({ index, label }) => {
                const isMiddle = index === 1;

                return (
                  <div
                    key={index}
                    className={`relative overflow-hidden border-[3px] border-slate-900 group transition-all duration-500
                      ${isMiddle ? "shadow-2xl z-10 aspect-[3/6.4] md:aspect-[3/5.2]" : "shadow-lg z-0 aspect-[3/6.1] md:aspect-3/5"}`}
                  >
                    <div
                      className="absolute inset-0  w-full h-full transition-transform duration-1000 group-hover:scale-105"
                      style={{
                        backgroundImage: "url('/Industry/havc.jpg')",
                        backgroundSize: "300% 100%",
                        backgroundPosition: `${index * 50}% center`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div
                      className={`absolute font-mono font-bold ${isMiddle ? "text-emerald-600" : "text-black/90"}`}
                      style={{
                        top: "clamp(4px, 6%, 16px)",
                        right: "clamp(4px, 8%, 24px)",
                        fontSize: "clamp(8px, 1.2vw, 12px)",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── SERVICES ─────────────────────────────── */}
          <div
            id="hvac-services-section"
            className="max-w-7xl mx-auto px-6 lg:px-6 md:px-8 mb-20 md:mb-28"
          >
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-emerald-600" />
                  <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                    What We Offer
                  </span>
                </div>
                <h2 className="hvac-serif text-4xl sm:text-6xl font-normal tracking-tight text-slate-900 leading-none">
                  Our <span className="text-emerald-600">Services.</span>
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-[0.15em]">
                <span> available solutions </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard
                num="01"
                title="AI Assisted CRM"
                desc="Continuous follow-ups, churn prediction, and customer retention tools that keep your HVAC clients coming back."
                link="CRM"
              />
              <ValueCard
                num="02"
                title="Smart Job Scheduling & Dispatch"
                desc="Duration prediction, route optimisation, and technician assignment so every job runs on time and on budget."
                link="Scheduling"
              />
              <ValueCard
                num="03"
                title="Custom Software & AI Solutions"
                desc="Bespoke platforms and AI-powered tools designed entirely around your HVAC business workflows and growth goals."
                link="Custom AI"
              />
            </div>
          </div>

          {/* ── FAQ ──────────────────────────────────── */}
          <div className="max-w-7xl mx-auto px-6 pt-4">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-emerald-600" />
                <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold tracking-[0.22em] text-emerald-700 uppercase">
                  HVAC Software
                </span>
                <div className="h-px w-8 bg-emerald-600" />
              </div>

              <h2 className="hvac-serif text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-5 leading-tight">
                Frequently Asked{" "}
                <span className="text-emerald-600">Q &amp; A</span>
              </h2>

              <p className="text-xl text-slate-500  max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about adopting custom software for
                your HVAC business.
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
        </div>
      </section>

      {/* ── INQUIRY FORM MODAL ── */}
      {showInquiryForm &&
        createPortal(
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
              onClick={() => setShowInquiryForm(false)}
            />
            <div
              data-lenis-prevent
              className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
            >
              <div className="p-6 sm:p-8 lg:p-14">
                <InquiryForm
                  inquiryType="solution"
                  topic="HVAC Services"
                  industry="HVAC Services"
                  onSuccess={() => setShowInquiryForm(false)}
                  onClose={() => setShowInquiryForm(false)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
