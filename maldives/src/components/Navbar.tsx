import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const solutionItems = [
  { label: "Property Management", to: "/real-estate-control", icon: "apartment" },
  { label: "Hotel Cloud", to: "/hotelcloud", icon: "hotel" },
  { label: "Boat Booking", to: "/viduvaru", icon: "directions_boat" },
  { label: "Travel CRM", to: "/travel-crm", icon: "luggage" },
];

const navItems = [
  { label: "Our Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isSolutionsActive = solutionItems.some((item) => item.to === pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] w-full border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-2xl py-3 shadow-md border-slate-100"
          : "bg-white backdrop-blur-md py-5 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-28">
        <nav className="flex items-center justify-between">
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

          {/* ── Desktop Navigation ────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Solutions Dropdown */}
            <div className="group relative">
              <button
                className={`flex items-center gap-1.5 text-sm uppercase font-bold tracking-tight transition-colors ${
                  isSolutionsActive
                    ? "text-cyan-700"
                    : "text-slate-800 hover:text-slate-900"
                }`}
              >
                Our Solutions
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </button>

              <div className="invisible absolute left-1/2 -translate-x-1/2 top-full z-50 mt-8 w-80 rounded-[20px] border border-slate-100 bg-white p-2 opacity-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-500 ease-out group-hover:visible group-hover:opacity-100 group-hover:mt-4">
                <div className="relative flex flex-col gap-0.5">
                  {/* Subtle Top Notch/Pointer */}
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white/95" />

                  {solutionItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `group/nav flex items-center justify-between rounded-[14px] px-5 py-4 transition-all duration-300 ${
                          isActive ? "bg-slate-50/80" : "hover:bg-slate-50/50"
                        }`
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 transition-all duration-500 group-hover/nav:scale-110 group-hover/nav:text-cyan-600 group-hover/nav:shadow-sm`}
                        >
                          <span className="material-symbols-outlined text-[24px]">
                            {item.icon}
                          </span>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[15px] font-medium tracking-tight text-slate-800 transition-colors duration-300 group-hover/nav:text-cyan-700">
                            {item.label}
                          </span>
                          <span className="text-[12px] text-slate-500 font-light">
                            Explore {item.label.toLowerCase()}
                          </span>
                        </div>
                      </div>

                      {/* Elegant Chevron that appears on hover */}
                      <span className="material-symbols-outlined text-slate-300 opacity-0 -translate-x-2 transition-all duration-300 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 text-sm">
                        arrow_forward_ios
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `group relative uppercase text-sm font-bold tracking-tight transition-colors ${
                    isActive
                      ? "text-cyan-700"
                      : "text-slate-800 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── CTA + Hamburger ───────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:block overflow-hidden relative rounded-xl bg-gradient-to-br from-primary to-primary-container px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:opacity-90 active:scale-95"
            >
              <span className="relative z-10">Request Consultation</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 origin-center ${
                  isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 ${
                  isMobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300 origin-center ${
                  isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[-1] flex flex-col bg-white lg:hidden overflow-y-auto"
          >
            {/* Top spacer so content clears the navbar */}
            <div className="h-24 shrink-0" />

            {/* Content */}
            <div className="flex flex-col flex-1 px-8 py-8 gap-0">
              {/* Primary nav */}
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                Navigation
              </p>
              <div className="flex flex-col gap-1 mb-10">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-cyan-700 active:scale-[0.98]"
                  >
                    {item.label}
                    <span className="material-symbols-outlined text-xl text-slate-300 transition-colors group-hover:text-cyan-400">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              {/* Solutions */}
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600">
                Our Solutions
              </p>
              <div className="flex flex-col gap-1 mb-10">
                {solutionItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-cyan-50 active:scale-[0.98]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-cyan-100 group-hover:text-cyan-700">
                      <span className="material-symbols-outlined text-lg">
                        {item.icon}
                      </span>
                    </span>
                    <span className="text-base font-semibold text-slate-700 group-hover:text-cyan-700 transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6 pb-safe">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:opacity-90 active:scale-[0.98]"
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