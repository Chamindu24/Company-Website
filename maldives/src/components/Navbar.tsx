import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
];

const solutionItems = [
  { label: "Property Management System", to: "/real-estate-control" },
  { label: "Lush Hotel Cloud", to: "/hotelcloud" },
  { label: "Viduvaru", to: "/viduvaru" },
  { label: "Travel CRM", to: "/travel-crm" },
];

function Navbar() {
  const { pathname } = useLocation();
  const isSolutionsActive = solutionItems.some((item) => item.to === pathname);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,104,116,0.06)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          className="text-2xl font-extrabold tracking-tighter text-cyan-700"
          to="/"
        >
          Lushware
        </Link>

        <div className="hidden items-center space-x-10 text-sm font-medium tracking-tight md:flex font-headline">
          <div className="group relative">
            <button
              className={`flex items-center gap-1 transition-colors duration-300 ${
                isSolutionsActive
                  ? "border-b-2 border-cyan-500 pb-1 font-semibold text-cyan-700"
                  : "text-slate-600 hover:text-cyan-600"
              }`}
              type="button"
            >
              Our Solutions
              <span className="material-symbols-outlined text-base">
                expand_more
              </span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-md border border-slate-200/70 bg-white/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {solutionItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "bg-cyan-50 font-semibold text-cyan-700"
                        : "text-slate-700 hover:bg-cyan-50/70 hover:text-cyan-700"
                    }`
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "border-b-2 border-cyan-500 pb-1 font-semibold text-cyan-700"
                    : "text-slate-600 hover:text-cyan-600"
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            className="hidden scale-95 rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-2.5 text-sm font-semibold text-on-primary shadow-lg transition-transform active:scale-90 md:block"
            to="/contact"
          >
            Book Demo
          </Link>
          <button className="text-on-surface md:hidden" aria-label="Open menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-slate-200/20" />
    </nav>
  );
}

export default Navbar;
