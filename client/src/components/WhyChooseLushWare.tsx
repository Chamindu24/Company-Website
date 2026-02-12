import React from "react";
import { useNavigate } from "react-router-dom";

const WhyChooseLushWare: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FCFCFC] py-24 lg:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Main Grid: 12-Column System like high-end SaaS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
          
          {/* TEXT CONTENT - Spanning the first 6 columns */}
          <div className="lg:col-span-6 lg:pr-12 z-10">
            <div className="space-y-8">
              {/* Premium Label - Using your Emerald & Gold */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#B89450]"></span>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/60">
                  Engineering Excellence
                </p>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black text-emerald-950 leading-[0.9] tracking-tighter">
                A Technology Partner <br /> 
                <span className="text-emerald-800">Focused on Results.</span>
              </h2>

              <p className="max-w-xl text-lg lg:text-xl text-emerald-900/80 font-bold leading-relaxed border-l-2 border-[#B89450]/20 pl-6">
                At LushWare, we don’t just build software — we solve business problems. 
                Our solutions are tailored to your goals, processes, and customers, 
                delivering measurable value through scalable, secure, and future-ready technology.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-10 py-5 bg-emerald-950 text-white text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:bg-[#B89450] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,44,34,0.15)]"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION - Spanning the last 6 columns but "Bleeding" off the edge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] lg:aspect-square w-full">
              {/* The "Big Tech" Accent Box */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              
              {/* Main Image Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(2,44,34,0.2)]">
                <img 
                  src="/solution/customer.jpg" 
                  alt="LushWare Business Outcomes" 
                  className="h-full w-full object-cover grayscale-[20%] contrast-125 hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Emerald & Gold Gradient Glass Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-white/10"></div>
                
                {/* Minimal Overlay Info - Common in Apple design */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-[10px] font-black uppercase tracking-widest opacity-70">Project Capacity</p>
                      <p className="text-white text-xl font-bold italic">Enterprise Ready</p>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-[#B89450] flex items-center justify-center">
                      <div className="h-2 w-2 bg-[#B89450] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Geometric Gold Element */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border-b-2 border-r-2 border-[#B89450] opacity-40"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseLushWare;