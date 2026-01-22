import { useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";

type Program = {
  title: string;
  description: string;
};

const programs: Program[] = [
  {
    subtitle: "Software Development Project Base",
    description:
      "Join structured builds with mentors, code reviews, and delivery rituals. Perfect for engineers growing into product ownership.",
  },
  {
    subtitle: "AI & Automation Project Base",
    description:
      "Hands-on automation and agent projects: data pipelines, workflow orchestration, and LLM-powered copilots.",
  },
];

export default function ProjectBasePage() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="project-base" className="scroll-mt-24  px-6 py-20">
      <div className="mx-auto max-w-6xl">
<div className="max-w-7xl mx-auto px-6">
    
    {/* Header Section */}
    <div className="mb-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Project Base
      </p>
      <h2 className="mt-2 text-4xl md:text-5xl font-black text-gray-900">
        Build with us.
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl leading-relaxed">
        Choose a track and send an inquiry. We will align scope, timelines, and the outcomes you need to bridge the gap between learning and industry.
      </p>
    </div>

    {/* Primary Hero: Join/Skills Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-3xl p-8 md:p-16 text-white mb-20">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Let’s join to <span className="text-blue-400">add value to your skills</span> with real-world experience.
        </h3>
        <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>
      <div className="border-l border-slate-700 pl-8 hidden lg:block">
        <p className="text-slate-400 italic text-lg">
          "The best way to predict the future is to build it. Join a community where your code translates into real-world impact."
        </p>
      </div>
    </div>

    {/* Details Grid: What is & Legacy */}
    <div className="grid md:grid-cols-2 gap-16">
      
      {/* Column 1: What is Lush Project Base */}
      <div className="space-y-6">
        <div className="inline-block p-3 bg-blue-50 rounded-xl">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        </div>
        <h4 className="text-2xl font-bold text-gray-900">What is Lush Project Base?</h4>
        <p className="text-gray-600 leading-relaxed">
          Here you can contribute to the software projects that we continue building as our products. This isn't just practice; it's an opportunity to learn and experience high-level production environments.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Software Development Tracks
          </li>
          <li className="flex items-center gap-3 text-gray-700 font-medium">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> AI Research & Development
          </li>
        </ul>
        <button className="text-blue-600 font-bold hover:underline flex items-center gap-2">
          Apply Now <span>→</span>
        </button>
      </div>

      {/* Column 2: Legacy/Mission */}
      <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-100 md:pl-16 pt-12 md:pt-0">
        <h4 className="text-2xl font-bold text-gray-900 tracking-tight">
          A Legacy of Innovation
        </h4>
        <p className="text-gray-600 leading-relaxed">
          As <strong>LushWare ORG</strong>, we produce new platforms designed to make daily life easier. We consistently push boundaries by embracing cutting-edge technologies.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our journey is marked by a commitment to excellence and a customer-centric focus, creating solutions that drive both lives and businesses forward.
        </p>
      </div>

    </div>
  </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              <p className="mt-2 text-sm font-medium text-emerald-600">{program.subtitle}</p>
              <p className="mt-3 text-gray-600">{program.description}</p>
              
              <button
                onClick={() => setSelectedProgram(program)}
                className="group mt-6 relative rounded-lg flex items-center gap-3 overflow-hidden bg-slate-900 px-6 py-3 text-white transition-all duration-300 active:scale-95"
              >
                {/* The Emerald Slider */}
                <span className="absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-emerald-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                  Send Inquiry
                  <svg 
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProgram && createPortal(
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-all duration-500" 
            onClick={() => setSelectedProgram(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

            {/* Form Content */}
            <div className="p-12 lg:p-20">
              <div className="max-w-2xl">
                <InquiryForm 
                  topic={selectedProgram.title}
                  industry={selectedProgram.subtitle}
                  onSuccess={() => setSelectedProgram(null)}
                  onClose={() => setSelectedProgram(null)}
                  showCloseButton={true}
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
