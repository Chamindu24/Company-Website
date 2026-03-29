const solutionLinks = ['Products', 'Services', 'Our Work']
const companyLinks = ['About Us', 'Privacy Policy', 'Terms of Service']

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="w-full px-6 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="mb-6 block text-xl font-black text-cyan-800">Viduvaru</span>
            <p className="text-sm leading-relaxed text-slate-500">
              Defining the digital frontier for Maldivian hospitality. Innovating since 2014.
            </p>
          </div>

          <div>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-cyan-700">Solutions</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a
                    className="opacity-80 underline-offset-4 transition-opacity hover:text-cyan-500 hover:underline hover:opacity-100"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-cyan-700">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    className="opacity-80 underline-offset-4 transition-opacity hover:text-cyan-500 hover:underline hover:opacity-100"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-xs font-bold uppercase tracking-widest text-cyan-700">Connect</h5>
            <p className="mb-4 text-sm text-slate-500">Subscribe to our hospitality newsletter.</p>
            <div className="flex gap-2">
              <input
                className="w-full rounded-lg border-0 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
                placeholder="Email address"
                type="email"
              />
              <button className="rounded-lg bg-primary p-2 text-white" aria-label="Subscribe">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-slate-200/50 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">© 2024 Viduvaru Maldives. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined cursor-pointer text-slate-400 hover:text-primary">share</span>
            <span className="material-symbols-outlined cursor-pointer text-slate-400 hover:text-primary">language</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer