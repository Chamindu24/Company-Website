import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type DesktopDropdown = "services" | "solutions" | null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] =
    useState<DesktopDropdown>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeDropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeDropdownTimeoutRef.current) {
        clearTimeout(closeDropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      setMobileServicesOpen(false);
      setMobileSolutionsOpen(false);
      setDesktopDropdownOpen(null);
    }, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const serviceLinks = [
    { name: "Customer Relationship Management Software", to: "/solutions/crm" },
    { name: "AI Agents & AI Chatbots", to: "/solutions/ai-agents" },
    { name: "Business Process Management Software", to: "/solutions/bpm" },
    { name: "Business & Corporate Websites", to: "/solutions/websites" },
    { name: "Mobile Apps", to: "/solutions/mobile-apps" },
    { name: "IoT Product Development", to: "/solutions/iot-product-development" },
  ];

  const solutionLinks = [
    { name: "HVAC Solutions", to: "/industries/hvac" },
    { name: "Plumbing Solutions", to: "/industries/plumbing" },
    { name: "Electrical Solutions", to: "/industries/electrical" },
    { name: "Travel Solutions", to: "/solutions" },
  ];

  const links = [
    { name: "Our Work", to: "/work" },
    { name: "Project Base", to: "/project-base" },
  ];

  const isServicesActive = serviceLinks.some(
    (item) => location.pathname === item.to,
  );
  const isSolutionsActive = solutionLinks.some(
    (item) => location.pathname === item.to,
  );

  const openDesktopDropdown = (dropdown: Exclude<DesktopDropdown, null>) => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }

    setDesktopDropdownOpen(dropdown);
  };

  const closeDesktopDropdown = () => {
    if (closeDropdownTimeoutRef.current) {
      clearTimeout(closeDropdownTimeoutRef.current);
    }

    closeDropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(null);
      closeDropdownTimeoutRef.current = null;
    }, 140);
  };

  const renderDropdownPanel = (items: { name: string; to: string }[]) => (
    <div className="overflow-hidden rounded-[2px] bg-white  shadow-[0_20px_50px_-12px_rgba(28,25,23,0.4)]">
      <div className="w-[720px] px-10 py-8">
        <nav className="grid grid-cols-2 gap-x-14 gap-y-3">
          {items.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group/item relative flex flex-col justify-between py-1 border-b border-stone-100 transition-colors duration-300"
              >
                <div className="flex items-center justify-between w-full">
                  {/* Clean, Editorial Typography */}
                  <span
                    className={`text-[16px] tracking-wide font-medium transition-all duration-300 ${isActive
                      ? "text-stone-950 font-semibold"
                      : "text-stone-600 group-hover/item:text-stone-950 group-hover/item:translate-x-2"
                      }`}
                  >
                    {item.name}
                  </span>

                  {/* Ultra-minimal Micro-indicator */}
                  <span
                    className={`text-[11px] tracking-widest uppercase transition-all duration-500 font-light ${isActive
                      ? "text-stone-950 opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 text-stone-400 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                      }`}
                  >
                    {isActive ? "Active" : "Discover"}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white backdrop-blur-md py-3 shadow-sm sm:shadow-md lg:shadow-lg shadow-emerald-200/20"
        : "bg-white py-4 lg:py-5"
        }`}
    >
      <div className="w-[98%] max-w-[1800px] px-5 sm:px-8 lg:px-14 xl:px-20 mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center gap-4">
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex items-center group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-10 w-12 sm:h-11 sm:w-14 lg:h-12 lg:w-18 rounded-xl mr-0 md:mr-2">
              <img
                src="/logo.jpeg"
                alt="LushWare ORG"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col space-y-0.5 md:space-y-1">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-stone-700 leading-none">
                LUSH
                <span
                  style={{
                    WebkitTextStroke: "1px #1c1917",
                    color: "transparent",
                  }}
                >
                  WARE
                </span>
              </span>
              <span className="text-[7px] sm:text-[8px] lg:text-[10px] tracking-tight lg:tracking-tighter text-emerald-600 font-bold uppercase leading-none ">
                Business Operations on Autopilot
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-11">
          <div
            className="relative"
            onMouseEnter={() => openDesktopDropdown("services")}
            onMouseLeave={closeDesktopDropdown}
          >
            <div
              className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${isServicesActive
                ? "text-emerald-900"
                : "text-stone-800 hover:text-emerald-700"
                }`}
            >
              <span>Services</span>
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${desktopDropdownOpen === "services" ? "rotate-180" : ""
                  } ${isServicesActive ? "text-emerald-900" : "text-stone-800"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </div>

            <div
              className={`absolute left-0 top-full pt-4 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${desktopDropdownOpen === "services"
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 translate-y-2"
                }`}
              onMouseEnter={() => openDesktopDropdown("services")}
              onMouseLeave={closeDesktopDropdown}
            >
              {renderDropdownPanel(serviceLinks)}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => openDesktopDropdown("solutions")}
            onMouseLeave={closeDesktopDropdown}
          >
            <div
              className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors relative cursor-pointer ${isSolutionsActive
                ? "text-emerald-900"
                : "text-stone-800 hover:text-emerald-700"
                }`}
            >
              <span>Solutions</span>
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${desktopDropdownOpen === "solutions" ? "rotate-180" : ""
                  } ${isSolutionsActive ? "text-emerald-900" : "text-stone-800"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${isSolutionsActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </div>

            <div
              className={`absolute left-0 top-full pt-4 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${desktopDropdownOpen === "solutions"
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 translate-y-2"
                }`}
              onMouseEnter={() => openDesktopDropdown("solutions")}
              onMouseLeave={closeDesktopDropdown}
            >
              {renderDropdownPanel(solutionLinks)}
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-sm font-bold tracking-widest uppercase whitespace-nowrap hover:text-emerald-700 transition-colors relative group ${location.pathname === link.to
                ? "text-emerald-700"
                : "text-stone-800"
                }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${location.pathname === link.to
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-end">
          <Link
            to="/contact"
            className="relative px-5 py-2 overflow-hidden group hover:scale-105 bg-stone-900 rounded-xs transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-colors duration-500">
              Free Tech Consultation
            </span>
          </Link>
        </div>

        <div className="hidden md:flex lg:hidden items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="relative px-4 py-2 overflow-hidden group bg-stone-900 rounded-sm transition-all duration-500"
          >
            <span className="absolute inset-0 w-0 h-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
            <span className="relative z-10 text-[9px] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap">
              Free Consultation
            </span>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors ml-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.25" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.25" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 h-screen lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />

          <div
            className="absolute top-0 right-0 h-full w-[82%] max-w-xs sm:max-w-sm md:max-w-xl sm:p-4 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 pt-5 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px w-6 bg-emerald-600" />
                    <span className="nb-sans text-[9px] sm:text-lg font-bold text-emerald-600 uppercase tracking-[0.25em]">
                      Navigation
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <span className="block text-lg leading-none">x</span>
                </button>
              </div>

              <div className="flex flex-col px-4 py-5 space-y-1">
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="nb-sans group px-4 py-3.5 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 transition-all duration-300 font-bold text-[10px] sm:text-lg uppercase tracking-[0.18em] text-left"
                  style={{ animation: "slideIn 0.4s ease-out 0s backwards" }}
                >
                  <span className="flex items-center justify-between">
                    <span>Services</span>
                    <span
                      className={`text-emerald-600 transition-transform duration-300 text-base leading-none ${mobileServicesOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-0 pl-4 pb-2 border-l border-emerald-100 ml-4">
                    {serviceLinks.map((item, i) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="nb-sans group/sub px-4 py-3 text-[11px] sm:text-lg font-medium text-slate-500 hover:text-emerald-700 hover:bg-emerald-50/40 transition-all duration-300 flex items-center justify-between"
                        style={{
                          animation: `slideIn 0.4s ease-out ${0.05 + i * 0.06}s backwards`,
                        }}
                      >
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 text-emerald-400 opacity-0 group-hover/sub:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="nb-sans group px-4 py-3.5 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 transition-all duration-300 font-bold text-[10px] sm:text-lg uppercase tracking-[0.18em] text-left"
                  style={{ animation: "slideIn 0.4s ease-out 0.08s backwards" }}
                >
                  <span className="flex items-center justify-between">
                    <span>Solutions</span>
                    <span
                      className={`text-emerald-600 transition-transform duration-300 text-base leading-none ${mobileSolutionsOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </span>
                </button>

                {mobileSolutionsOpen && (
                  <div className="flex flex-col gap-0 pl-4 pb-2 border-l border-emerald-100 ml-4">
                    {solutionLinks.map((item, i) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="nb-sans group/sub px-4 py-3 text-[11px] sm:text-lg font-medium text-slate-500 hover:text-emerald-700 hover:bg-emerald-50/40 transition-all duration-300 flex items-center justify-between"
                        style={{
                          animation: `slideIn 0.4s ease-out ${0.05 + i * 0.06}s backwards`,
                        }}
                      >
                        <span>{item.name}</span>
                        <svg
                          className="w-3 h-3 text-emerald-400 opacity-0 group-hover/sub:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                {links.map((link, i) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                    className={`nb-sans group px-4 py-3.5 font-bold text-[10px] sm:text-lg uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-between ${location.pathname === link.to
                      ? "text-emerald-700 bg-emerald-50/60"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                      }`}
                    style={{
                      animation: `slideIn 0.4s ease-out ${0.15 + i * 0.1}s backwards`,
                    }}
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-3.5 h-3.5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mt-auto px-6 pb-8 pt-4 border-t border-slate-100">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-emerald-600" />
                  <span className="nb-sans text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Get Started
                  </span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="nb-sweep nb-sans group relative w-full overflow-hidden bg-slate-900 px-6 py-4 font-bold tracking-wide transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] inline-flex items-center justify-center"
                >
                  <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-white leading-none">
                    Free Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
      `}</style>
    </nav>
  );
}
