import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
];

const solutionItems = [
  { label: "Property Operations", to: "/real-estate-control", icon: "apartment" },
  { label: "Guest House Operations", to: "/hotelcloud", icon: "hotel" },
  { label: "Marine Transport", to: "/viduvaru", icon: "directions_boat" },
  { label: "Travel Operations", to: "/travel-crm", icon: "luggage" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-[100] bg-white border-b transition-colors duration-300 ${
        isScrolled ? "border-slate-200" : "border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:h-20 h-20 flex items-center justify-between">

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link to="/" className="group flex items-center gap-2 shrink-0">
            <div className="relative flex h-8 w-18 items-center justify-center rounded-md overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="Lushware Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tighter text-slate-900">
                LUSHWARE
              </span>
              <span className="text-[9px] font-black tracking-[0.85em] text-cyan-600 uppercase">
                Maldives
              </span>
            </div>
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold uppercase tracking-[0.05em] text-slate-600 hover:text-slate-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative py-8">
            <span className="text-sm font-bold uppercase tracking-[0.05em] text-slate-950 cursor-pointer flex items-center gap-1.5">
              Solutions <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
            </span>
            <div className="absolute top-full right-0 pt-4  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-[300px] bg-white border rounded-md border-slate-200 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                {solutionItems.map((item) => (
                  <Link key={item.to} to={item.to} className="flex items-center gap-4 px-4 py-4 rounded-md hover:bg-slate-50 transition-colors group/item">
                    <span className="text-cyan-600 material-symbols-outlined">{item.icon}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-5 py-2 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg text-[12px] font-medium uppercase tracking-[0.05em] shadow-lg shadow-cyan-900/10 hover:opacity-90 hover:shadow-xl transition-all active:scale-95"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden text-slate-950" aria-label="Open menu">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

{/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-2xl z-[99] flex flex-col lg:hidden"
          >
            {/* Drawer Container sliding from right with frosted glass luxury treatment */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 280 }}
              className="absolute inset-y-0 right-0 w-full max-w-md bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col border-l border-slate-100"
            >
              {/* Top bar: logo + close */}
              <div className="flex items-center justify-between px-6 sm:px-8 h-24 border-b border-slate-100/80 shrink-0 bg-white/50">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-8 w-18 items-center justify-center overflow-hidden ">
                    <img src="/logo.jpeg" alt="Lushware Logo" className="h-full w-full object-cover" />
                  </div>
                  <span className="text-lg font-black text-slate-950 tracking-tighter">LUSHWARE</span>
                </div>
                <button 
                  onClick={() => setIsMobileOpen(false)} 
                  aria-label="Close menu" 
                  className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-100/80 text-slate-950 transition-all hover:bg-slate-200 hover:rotate-90 active:scale-95 shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Scrollable content with fine-tuned padding & executive spacing */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 flex flex-col custom-scrollbar">
                
                {/* Primary Navigation Links */}
                <div className="flex flex-col gap-1 mb-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 * i }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center justify-between py-4 text-lg font-bold tracking-tight text-slate-900 border-b border-slate-100 transition-all hover:text-cyan-600 hover:pl-1.5"
                      >
                        <span className="transition-transform">{item.label}</span>
                        <span className="material-symbols-outlined text-xl text-slate-300 transition-all group-hover:translate-x-1.5 group-hover:text-cyan-600">arrow_forward</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Solutions Section Header */}
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-cyan-600">Solutions Suite</p>
                  <div className="h-[1px] flex-1 bg-slate-100" />
                </div>

                {/* Solutions Items */}
                <div className="flex flex-col gap-1.5 mb-8">
                  {solutionItems.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 * (i + navItems.length) }}
                    >
                      <Link 
                        to={item.to} 
                        onClick={() => setIsMobileOpen(false)}
                        className="group flex items-center gap-4 py-2 px-3 rounded-2xl active:scale-[0.98] transition-all hover:bg-slate-50/80 border border-transparent hover:border-slate-100/80"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100/90 text-slate-600 transition-all group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:scale-105 shrink-0 shadow-xs">
                          <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </span>
                        <div className="flex flex-col">
                          <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-4 pb-6">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-xs font-black uppercase tracking-[0.25em] text-white shadow-xl shadow-cyan-950/15 transition-all hover:opacity-95 active:scale-[0.98]"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;