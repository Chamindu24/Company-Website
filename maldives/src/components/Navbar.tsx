import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Hospitality', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Marine Transport', to: '/marine-transport' },
  { label: 'Resort Operations', to: '/resort-operations' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Real Estate', to: '/real-estate-control' },
  { label: 'Contact', to: '/contact' },
  { label: 'Travel CRM', to: '/travel-crm' },
]

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,104,116,0.06)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link className="text-2xl font-extrabold tracking-tighter text-cyan-700" to="/">
          Viduvaru
        </Link>

        <div className="hidden items-center space-x-10 text-sm font-medium tracking-tight md:flex font-headline">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? 'border-b-2 border-cyan-500 pb-1 font-semibold text-cyan-700'
                    : 'text-slate-600 hover:text-cyan-600'
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden scale-95 rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-2.5 text-sm font-semibold text-on-primary shadow-lg transition-transform active:scale-90 md:block">
            Book Demo
          </button>
          <button className="text-on-surface md:hidden" aria-label="Open menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-slate-200/20" />
    </nav>
  )
}

export default Navbar