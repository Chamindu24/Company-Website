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
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[99] flex flex-col lg:hidden"
          >
            {/* Top bar: logo + close */}
            <div className="flex items-center justify-between px-6 h-24 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-[50px] items-center justify-center  overflow-hidden">
                  <img src="/logo.jpeg" alt="Lushware Logo" className="h-full w-full object-cover" />
                </div>
                <span className="text-lg font-black text-slate-950 tracking-tighter">LUSHWARE</span>
              </div>
              <button onClick={() => setIsMobileOpen(false)} aria-label="Close menu" className="text-slate-950">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col">
              <div className="flex flex-col gap-1 mb-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between py-4 text-xl font-bold tracking-wide text-slate-950 border-b border-slate-100"
                    >
                      {item.label}
                      <span className="material-symbols-outlined text-2xl text-slate-300">chevron_right</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">Solutions</p>
              <div className="flex flex-col gap-1 mb-10">
                {solutionItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * (i + navItems.length) }}
                  >
                    <Link to={item.to} className="group flex items-center gap-4 py-3 active:scale-[0.98] transition-transform">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-cyan-100 group-hover:text-cyan-700 shrink-0">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </span>
                      <span className="text-lg font-semibold tracking-tight text-slate-800 group-hover:text-cyan-700 transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-4 pb-4">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;