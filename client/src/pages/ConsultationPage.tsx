import { ArrowUpRight, Linkedin, Twitter, CheckCircle2,  Instagram,  Facebook } from 'lucide-react';
import { getNames } from "country-list";
import Select from "react-select";

export default function ConsultationPageV15() {
  const countries = getNames();
  const countryOptions = countries.map((c) => ({ value: c, label: c }));
  return (
    <section id="consultation" className="scroll-mt-24 px-6 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl">


        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          
          {/* LEFT: The Proposition (Column Span 5) */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-medium tracking-tighter text-gray-900 sm:text-7xl leading-[1.05]">
              Book a free <br />
              <span className="text-emerald-600">consultancy.</span>
            </h2>
            
            <p className="mt-10 text-xl text-gray-500 leading-relaxed max-w-md">
              Connect with our team and get the support you need. Start your journey with LushWare ORG today.
            </p>


            <div className="mt-10 space-y-10">
              {/* Service List */}
              <div className="space-y-4">
                {['Client Support', 'Project Guidance', 'Quick Assistance'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span className="text-md font-bold text-gray-800 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact Bar */}
            <div className="pt-10 border-t border-gray-300 flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</p>
                <a href="mailto:info@lushware.org" className="group flex items-center gap-2 text-xl font-medium text-gray-900 hover:text-green-600 transition-colors underline decoration-gray-200 underline-offset-8 decoration-1 hover:decoration-green-600">
                  info@lushware.org <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>

              {/* Phone Section */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</p>
                <a href="tel:+94716430053" className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
                  +94 71 643 0053
                </a>
              </div>

              <div >
                <div className="flex items-center gap-5">
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="LinkedIn">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Twitter">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Instagram">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors p-1" aria-label="Facebook">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-gray-50/50 p-2 ring-1 ring-gray-800/20">
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-green-50 to-transparent opacity-50" />

                <form className="relative space-y-12">
                  <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                    {/* First Name */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="text" 
                        id="fname"
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent" 
                        placeholder="First Name" 
                      />
                      <label 
                        htmlFor="fname"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        01. First Name
                      </label>
                    </div>

                    {/* Last Name */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="text" 
                        id="lname"
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent" 
                        placeholder="Last Name" 
                      />
                      <label 
                        htmlFor="lname"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        02. Last Name
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                    <input 
                      type="email" 
                      id="email"
                      className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent" 
                      placeholder="Email" 
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                    >
                      03. Business Email
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
                    {/* Country Selection */}
                    <div className="group relative border-b border-gray-500 pb-1">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700">04. Geography</label>
                      <Select
                        options={countryOptions}
                        placeholder="Select a country"
                        className="mt-2 text-sm"
                        classNamePrefix="react-select"
                        
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "none",
                            boxShadow: "none",
                            padding: "2px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            zIndex: 50,
                            maxHeight: 400,
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isFocused ? "#10B981" : "white", //
                            color: state.isFocused ? "white" : "black",
                            cursor: "pointer",
                          }),
                        }}
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="group relative border-b border-gray-500 pb-1 focus-within:border-green-600 transition-all duration-300">
                      <input 
                        type="tel" 
                        id="whatsapp"
                        className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 placeholder-transparent" 
                        placeholder="WhatsApp" 
                      />
                      <label 
                        htmlFor="whatsapp"
                        className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                      >
                        05. WhatsApp Number
                      </label>
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="group relative border-b border-gray-500 pb-4 focus-within:border-green-600 transition-all duration-300">
                    <textarea 
                      id="req"
                      rows={5} 
                      className="peer w-full bg-transparent py-2 text-sm outline-none border-none focus:ring-0 resize-none placeholder-transparent" 
                      placeholder="Requirement"
                    ></textarea>
                    <label 
                      htmlFor="req"
                      className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:text-gray-700 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-green-600"
                    >
                      06. Requirement
                    </label>
                  </div>

                    <div className="pt-8 group">
                      <button className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-900 px-10 py-5 text-[13px] font-black uppercase tracking-[0.3em] text-white transition-all shadow-xl shadow-gray-200/50 group-hover:bg-gray-800">
                        <span className="relative z-10">Start With LushWare</span>
                        <ArrowUpRight
                          size={20}
                          className="relative z-10 transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1"
                        />

                        {/* Emerald Hover Sweep */}
                        <div className="absolute inset-0 z-0 h-full w-0 bg-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                      </button>

                      {/* Trust Label */}
                      <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-emerald-600">
                        Trusted Communication
                      </p>
                    </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}