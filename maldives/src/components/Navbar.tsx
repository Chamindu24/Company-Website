import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const solutionItems = [
  { label: "Property Management System", to: "/real-estate-control", icon: "domain" },
  { label: "Lush Hotel Cloud", to: "/hotelcloud", icon: "bed" },
  { label: "Viduvaru", to: "/viduvaru", icon: "school" },
  { label: "Travel CRM", to: "/travel-crm", icon: "explore" },
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
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 z-[100] w-full transition-all duration-700 ease-in-out">

      {/* ── Outer wrapper ─────────────────────────────────────────────────────
          FIX: single max-w + padding that transitions cleanly on scroll.
          Before: two conflicting classes (max-w-7xl + max-w-8xl / px-24)
          caused the nav to jump width when isScrolled changed.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled
            ? "max-w-7xl md:px-0 px-4 mt-4"   // compact pill when scrolled
            : "max-w-screen-2xl px-6 sm:px-10 lg:px-20 mt-6"  // full-bleed on top
        }`}
      >
        <nav
          className={`relative flex items-center justify-between rounded-2xl border border-white/40 px-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ${
            isScrolled
              ? "bg-white/85 backdrop-blur-2xl py-2.5"
              : "bg-white/30 backdrop-blur-md py-3"
          }`}
        >

          {/* ── Logo ──────────────────────────────────────────────────────── */}
          <Link to="/" className="group flex items-center gap-2 shrink-0">
            <div className="relative flex h-8 w-18 items-center justify-center rounded-md overflow-hidden">
              <img src="/logo.jpeg" alt="Lushware Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tighter text-slate-900">LUSHWARE</span>
              <span className="text-[9px] font-black tracking-[0.3em] text-cyan-600 uppercase">Premium Systems</span>
            </div>
          </Link>

          {/* ── Desktop Navigation ────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-10">

            {/* Solutions Dropdown */}
            <div className="group relative">
              <button
                className={`flex items-center gap-1.5 text-sm uppercase font-bold tracking-tight transition-colors ${
                  isSolutionsActive ? "text-cyan-700" : "text-slate-800 hover:text-slate-900"
                }`}
              >
                Our Solutions
                <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">
                  expand_more
                </span>
              </button>

              <div className="invisible absolute left-1/2 -translate-x-1/2 top-full z-50 mt-4 w-72 rounded-2xl border border-slate-200/70 bg-white/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:mt-2">
                <div className="grid gap-1">
                  {solutionItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-50 font-bold text-cyan-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                        }`
                      }
                    >
                      <span className="material-symbols-outlined text-lg opacity-70">{item.icon}</span>
                      {item.label}
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
                    isActive ? "text-cyan-700" : "text-slate-800 hover:text-slate-900"
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

      {/* ── Mobile Menu ─────────────────────────────────────────────────────
          FIX: replaced height-based animation (jumpy on some devices) with
          a clean translateY + opacity approach. Full-screen overlay with
          clear visual hierarchy and proper safe-area insets.
      ──────────────────────────────────────────────────────────────────────── */}
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
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
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