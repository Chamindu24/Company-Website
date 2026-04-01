const steps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Consultation & Audit",
    description:
      "We analyze your business model, identify pain points, and conduct a deep audit of your existing systems to uncover growth opportunities.",
    icon: "lightbulb",
    img: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "02",
    title: "Custom Configuration",
    subtitle: "Tailored System Design",
    description:
      "We configure Lushware around your workflows and integrate seamlessly with your existing tools — no forced workarounds.",
    icon: "settings",
    img: "https://thumbs.dreamstime.com/b/system-engineer-checking-code-multiple-monitors-working-app-developer-system-engineer-checking-code-multiple-277461401.jpg?w=1200",
  },
  {
    id: "03",
    title: "Deployment",
    subtitle: "Launch & Training",
    description:
      "Our team ensures a smooth deployment with zero downtime while training your staff for full system mastery.",
    icon: "school",
    img: "https://media.gettyimages.com/id/863553004/photo/happy-businessman-writing-on-whiteboard-during-business-presentation-in-the-office.jpg?s=612x612&w=0&k=20&c=7yhfziehnL2gXOkbFaAvutquxuYU3SJhhxIopJhmRDo=",
  },
  {
    id: "04",
    title: "Optimization",
    subtitle: "Performance & Growth",
    description:
      "We continuously monitor, refine, and optimize your system to maximize ROI and long-term efficiency.",
    icon: "trending_up",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

import { useState } from "react";

function HowItWorksPremium() {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="bg-[#F8F7F4] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tighter text-primary md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
            A seamless 4-step journey from discovery to optimization. We guide
            you through every phase.
          </p>
        </div>

        {/* STEPPER */}
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-2">
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
