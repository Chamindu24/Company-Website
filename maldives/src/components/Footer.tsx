import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const solutionLinks = ['Digital Transformation', 'Hospitality Tech', 'Cloud Solutions', 'UI/UX Design', 'Systems Integration'];
const companyLinks = ['Our Vision', 'Privacy Policy', 'Terms of Service', 'Corporate Governance', 'Contact Us'];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#0A192F]">
      
      {/* --- 1. THE SHORELINE (Wave Transition) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[200%] h-[60px] md:h-[100px] animate-wave-flow" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* --- 2. UNDERWATER CAUSTICS (Shallow Water Glow) --- */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#26AEBF] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-[#26AEBF] rounded-full blur-[100px]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* 
        Mobile:  pt-20  (wave is shorter on mobile, ~60px)
        Tablet:  pt-32  (wave grows to ~100px on md)
        Desktop: pt-48  (unchanged)
      */}
      <div className="relative z-30 mx-auto max-w-7xl px-6 md:px-8 pt-20 md:pt-32 lg:pt-48 pb-16">
        <div className="grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-12">
          
          {/* Brand Identity */}
          {/* Mobile: full width stacked | Tablet: full width | Desktop: 5 cols */}
          <div className="lg:col-span-5">
            <div className="mb-6 md:mb-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white">
                LUSHWARE<span className="text-[#26AEBF] animate-pulse">.</span>
              </h2>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.6em] text-[#26AEBF]">
                The Maldives Digital Frontier
              </p>
            </div>
            
            <p className="max-w-md text-[16px] md:text-[17px] leading-relaxed text-slate-200 font-light">
              Designing the future of <span className="text-white font-medium underline decoration-[#26AEBF] decoration-2 underline-offset-4">Island Tech</span>. 
              Bridging the gap between the tranquility of the atolls and the global technology grid.
            </p>

            <div className="mt-8 md:mt-10 flex gap-3 md:gap-4">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all hover:bg-[#26AEBF] hover:text-[#0A192F] hover:scale-110">
                  <Icon className="text-base md:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {/* Mobile: 2 cols spanning full width | Tablet: 2 cols spanning full width | Desktop: 4 cols */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h5 className="mb-6 md:mb-10 text-[11px] font-black uppercase tracking-[0.4em] text-white/80">Solutions</h5>
              <ul className="space-y-4 md:space-y-5 text-[14px] md:text-[15px]">
                {solutionLinks.map(link => (
                  <li key={link} className="group flex items-center gap-3">
                    <span className="h-[2px] w-0 bg-[#26AEBF] transition-all group-hover:w-4 shrink-0" />
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-6 md:mb-10 text-[11px] font-black uppercase tracking-[0.4em] text-white/80">Company</h5>
              <ul className="space-y-4 md:space-y-5 text-[14px] md:text-[15px]">
                {companyLinks.map(link => (
                  <li key={link} className="group flex items-center gap-3">
                    <span className="h-[2px] w-0 bg-[#26AEBF] transition-all group-hover:w-4 shrink-0" />
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Card */}
          {/* Mobile & Tablet: full width | Desktop: 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl transition-all hover:border-[#26AEBF]/40">
              <h4 className="text-lg font-medium text-white mb-2">Island Insights</h4>
              <p className="text-[13px] text-slate-400 mb-6">Receive curated tech updates from the heart of the Indian Ocean.</p>
              <div className="space-y-3 md:space-y-4">
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white outline-none focus:border-[#26AEBF] placeholder:text-slate-600"
                />
                <button className="w-full bg-[#26AEBF] text-[#0A192F] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#26AEBF]/20">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* Mobile: stacked center-aligned | Desktop: flex row (unchanged) */}
        <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#26AEBF] shadow-[0_0_8px_#26AEBF] shrink-0" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-300">HQ: Male', Maldives</span>
          </div>
          
          <p className="text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            © {currentYear} Lushware Maldives • <span className="text-[#26AEBF]">Digital Atoll Co.</span>
          </p>

          <div className="flex gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-[#26AEBF] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#26AEBF] transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wave-flow {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-wave-flow {
          animation: wave-flow 12s ease-in-out infinite;
        }
      `}} />
    </footer>
  );
}

export default Footer;