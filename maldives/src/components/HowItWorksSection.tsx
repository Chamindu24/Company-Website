const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Consultation & Audit",
    description:
      "We analyze your business model, identify pain points, and conduct a deep audit of your existing systems to uncover growth opportunities.",
    icon: "lightbulb",
    img: "/implementation/Discovery.jpg",
  },
  {
    id: "02",
    title: "Custom Configuration",
    subtitle: "Tailored System Design",
    description:
      "We configure Lushware around your workflows and integrate seamlessly with your existing tools — no forced workarounds.",
    icon: "settings",
    img: "/implementation/Configuration.jpg",
  },
  {
    id: "03",
    title: "Deployment",
    subtitle: "Launch & Training",
    description:
      "Our team ensures a smooth deployment with zero downtime while training your staff for full system mastery.",
    icon: "school",
    img: "/implementation/Deployment.jpg",
  },
  {
    id: "04",
    title: "Optimization",
    subtitle: "Performance & Growth",
    description:
      "We continuously monitor, refine, and optimize your system to maximize ROI and long-term efficiency.",
    icon: "trending_up",
    img: "/implementation/Optimization.jpg",
  },
];

import { useState } from "react";

function HowItWorksPremium() {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="bg-[#F8F7F4] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="relative mb-6 md:mb-12 w-full  py-8 sm:py-10 overflow-visible md:py-12">
          {/* Giant Structural Background Typography - Pure Royal Editorial Aesthetic */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none font-headline font-black text-[5.5rem] tracking-tighter leading-none text-primary-container/[0.14] dark:text-white/[0.01] whitespace-nowrap xs:text-[6rem] sm:-top-4 sm:text-[9rem] md:top-20 md:text-[10rem] lg:top-9 lg:text-[14rem]">
            PROCESS
          </div>

          {/* Main Content Layout Container */}
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center pt-8 text-center sm:pt-12 md:pt-16 lg:pt-20">
            {/* Minimalist Category Kicker */}
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] md:text-xs md:tracking-[0.25em]">
              Discovery to Optimization
            </span>

            {/* Headline */}
            <h2 className="mt-0 md:mt-2 text-5xl font-extrabold font-headline tracking-tight text-on-background sm:text-6xl md:text-8xl lg:text-8xl dark:text-white">
              How It Works
            </h2>

            {/* Editorial Description */}
            <p className="mt-8 sm:mt-10 max-w-xl text-balance text-base font-light font-body leading-relaxed tracking-wide text-on-surface-variant sm:text-lg md:text-xl dark:text-zinc-400">
              A seamless{" "}
              <span className="relative inline-block font-bold text-on-background dark:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary-container transition-all duration-350 hover:after:h-[4px]">
                4-step journey
              </span>{" "}
              from discovery to optimization. We guide you through every phase.
            </p>
          </div>
        </div>

        {/* STEPPER */}
        <div className="flex flex-col md:flex-row h-[700px] md:h-[600px] gap-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onMouseEnter={() => setHovered(index)}
              className={`relative flex flex-col justify-end rounded-3xl overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.19,1,0.22,1)]
                ${hovered === index ? "flex-[5]" : "flex-1 filter grayscale brightness-75 hover:brightness-100 hover:grayscale-0"}
              `}
            >
              {/* IMAGE WITH PARALLAX MASK */}
              <div className="absolute inset-0">
                <img
                  src={step.img}
                  alt={step.title}
                  className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out
                  ${hovered === index ? "scale-100 rotate-0" : "scale-125 rotate-2"}`}
                />
                {/* DUAL GRADIENT FOR READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
              </div>

              {/* FLOATING INDEX */}
              <div
                className={`absolute top-10 left-10 transition-all duration-700 
                ${hovered === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
                  Phase
                </span>
                <p className="text-4xl font-serif italic text-white">
                  {step.id}
                </p>
              </div>

              {/* CONTENT REVEAL */}
              <div className="relative p-10 md:p-14 text-white z-10 overflow-hidden">
                <div
                  className={`transition-all duration-1000 transform 
                  ${hovered === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                >
                  <h4 className="text-[12px] font-black uppercase  text-white/80 mb-2">
                    {step.subtitle}
                  </h4>

                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                    {step.title}
                  </h3>

                  <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-md  mb-0">
                    {step.description}
                  </p>
                </div>

                {/* PLACEHOLDER TITLE (When Collapsed) */}
                <div
                  className={`absolute bottom-10 left-10 transition-all duration-700 
                  ${hovered === index ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}
                >
                  <h3 className="text-lg font-semibold tracking-widest uppercase md:-rotate-90 md:origin-left md:translate-x-4 md:whitespace-nowrap">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* THIN BORDER DECOR */}
              <div
                className={`absolute inset-0 border-[0.5px] border-white/10 pointer-events-none transition-opacity duration-1000
                ${hovered === index ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksPremium;
