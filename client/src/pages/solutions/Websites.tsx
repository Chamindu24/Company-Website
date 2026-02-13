import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";

const Websites: React.FC = () => {
  const faqItems = [
    {
      question: "What is a corporate website?",
      answer:
        "A corporate website is a digital platform representing a business online, providing information, services, and engagement opportunities for clients, partners, and stakeholders."
    },
    {
      question: "How does a business website benefit my company?",
      answer:
        "It increases brand visibility, strengthens credibility, generates leads, provides customer engagement channels, and allows your business to reach a global audience."
    },
    {
      question: "Can my website be mobile-friendly?",
      answer:
        "Absolutely. All websites we design are responsive and optimized for mobile devices, ensuring an excellent user experience on smartphones and tablets."
    },
    {
      question: "Do you provide SEO and performance optimization?",
      answer:
        "Yes. Our websites follow SEO best practices, fast loading speeds, and modern web standards to help your business rank higher and perform better online."
    }
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="max-w-6xl mt-12 mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Business & Corporate Websites
            </div>
          </div>
          

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Build a Strong Digital Presence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              With Professional Websites
            </span>
          </h1>

          <p className="text-xl text-slate-600 font-medium max-w-7xl mx-auto hero-line">
            LushWare designs websites that not only look amazing but also drive engagement, convert visitors into leads, and represent your brand with excellence.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="/hero/bc.jpg"
              alt="Corporate Website Interface"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <button className="bg-white text-[#1A1A1A] px-12 py-4 rounded-full font-bold shadow-xl hover:bg-[#B89450] hover:text-white transition-all transform hover:scale-105">
                DISCOVER OUR WEBSITES
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section - Emerald Premium Style */}
        <section className="bg-white py-24 px-6 font-sans">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-emerald-800/60 uppercase tracking-[0.25em] text-xs font-bold mb-4">
                  Enterprise Solutions
                </h2>
                <h3 className="text-4xl md:text-6xl font-medium text-emerald-950 tracking-tight">
                  Modernizing <span className="text-emerald-600">Digital Assets.</span>
                </h3>
              </div>
              <p className="text-slate-700 text-lg max-w-sm pb-2 border-l-2 border-emerald-300 pl-6">
                Expertly crafted software solutions for London’s most ambitious enterprises.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-5">
              
              {/* Feature 1: The "Hero" Card */}
              <div className="col-span-12 md:col-span-8 bg-white p-10 rounded-[2.5rem] border border-emerald-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between min-h-[450px] hover:shadow-[0_8px_30px_rgb(16,185,129,0.1)] transition-all duration-500">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center text-emerald-700 mb-8  border-2 border-emerald-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-emerald-950 mb-4 tracking-tight">Institutional Credibility</h4>
                  <p className="text-slate-700 font-medium text-xl leading-relaxed max-w-xl">
                    We deliver the visual weight and technical stability required by high-growth software firms in the UK market.
                  </p>
                </div>
              </div>

              {/* Feature 2: High Contrast Emerald Card */}
              <div className="col-span-12 md:col-span-4 bg-emerald-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-between hover:bg-emerald-900 transition-colors">
                <div className="text-emerald-200 text-3xl font-light underline underline-offset-8">01.</div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">Global Uptime</h4>
                  <p className="text-white leading-relaxed">
                    Deployment on elite edge networks ensuring 99.9% availability for your global users.
                  </p>
                </div>
              </div>

              {/* Feature 3: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-300 group hover:bg-white transition-all">
                <div className="text-emerald-700 mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Search Dominance</h4>
                <p className="text-slate-700 font-medium text-sm">Strategic SEO frameworks designed for competitive software niches.</p>
              </div>

              {/* Feature 4: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-white p-8 rounded-[2rem] border border-emerald-300 shadow-sm">
                <div className="text-emerald-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Mobile Perfection</h4>
                <p className="text-slate-700 font-medium text-sm">Fluid, app-like experiences across every device and browser.</p>
              </div>

              {/* Feature 5: Small Card */}
              <div className="col-span-12 md:col-span-4 bg-white p-8 rounded-[2rem] border border-emerald-300 shadow-sm">
                <div className="text-emerald-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m14 0v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-2">Data Intelligence</h4>
                <p className="text-slate-700 font-medium text-sm">Advanced analytics integration to track enterprise-level KPIs.</p>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-white py-32 px-6 min-h-[150vh] relative">
          {/* Sticky Container - Keeps the laptop in view while scrolling */}
          <div className="sticky top-20 max-w-7xl mx-auto overflow-visible">
            
            {/* Header Text - Fades out as you scroll */}
                <div className="text-center mb-20 relative z-30">
                  <div className="inline-block px-4 py-1 rounded-full border border-emerald-100 bg-white/50 backdrop-blur-md mb-6 shadow-sm">
                    <span className="text-emerald-800 font-bold tracking-[0.4em] text-[10px] uppercase">
                      Precision Engineering
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-serif text-slate-900 mb-4 tracking-tight">
                    Experience the <span className=" font-light text-emerald-800">Interface.</span>
                  </h3>
                  <p className="text-slate-400 font-medium">Scroll to engage the system</p>
                </div>

            {/* The Laptop Rig */}
            <div className="relative perspective-[2000px] w-full flex flex-col items-center">
              
              {/* LID / SCREEN (The part that opens) */}
              <div 
                className="relative z-20 w-full max-w-[900px] aspect-[16/10] bg-[#020617] rounded-2xl p-2 shadow-2xl border border-slate-800 origin-bottom transition-all duration-100 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  animation: 'open-lid linear both',
                  animationTimeline: 'view()',
                  animationRange: 'entry 10% cover 40%'
                }}
              >
                {/* Screen Content (Your Live Site) */}
                <div className="w-full h-full bg-white rounded-xl overflow-hidden relative border border-slate-900">
                    {/* Glass Reflection Layer */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                    
                    <iframe 
                      src="https://lushware.vercel.app/" 
                      className="w-full h-full border-none"
                      title="Lushware Interactive"
                    />
                </div>

                {/* Camera Notch Detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#020617] rounded-b-xl flex items-center justify-center border-x border-b border-slate-800">
                    <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
                </div>
              </div>

              {/* BASE / KEYBOARD (The part that stays flat) */}
              <div className="relative z-10 w-full max-w-[920px] h-[20px] bg-gradient-to-b from-slate-800 to-black rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-[-2px]">
                {/* Reflection on the desk surface */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-900/10 blur-3xl rounded-full -z-10"></div>
              </div>

            </div>
          </div>

          {/* Spacer to allow for scrolling room */}
          <div className="h-[50vh]"></div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes open-lid {
              from { transform: rotateX(-95deg); opacity: 0.8; }
              to { transform: rotateX(0deg); opacity: 1; }
            }
          `}} />
        </section>


        {/* Value Section */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              How We Add Value to Your Website
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              LushWare doesn’t just build websites—we create digital experiences aligned with your business goals. Our approach ensures that your site not only looks great but also drives measurable outcomes such as lead generation, brand recognition, and user engagement.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Mobile Friendly",
                desc: "All websites are fully responsive and optimized for devices of any size, ensuring a seamless user experience on smartphones and tablets."
              },
              {
                title: "UI/UX Design",
                desc: "Intuitive, modern, and visually appealing interfaces designed to engage users and improve conversion rates."
              },
              {
                title: "SEO Optimization",
                desc: "Websites built with SEO best practices to improve search engine visibility, attract organic traffic, and enhance online presence."
              }
            ].map((item, index) => (
              <ValueCard
                key={index}
                num={`0${index + 1}`}
                title={item.title}
                desc={item.desc}
                link={item.title}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-24 border-t border-slate-200"></div>

        
        {/* Why Choose LushWare */}
        <WhyChooseLushWare />

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4">
              Website FAQ
            </h3>
            <p className="text-xl text-slate-600 font-medium">
              Clear answers to common questions about business websites.
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

        <div className="my-24 border-t border-slate-200"></div>


      </div>
    </section>
  );
};

export default Websites;
