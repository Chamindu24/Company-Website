const featureCards = [
  {
    icon: 'history_edu',
    iconColor: 'text-tertiary',
    title: 'Smart Follow-ups',
    description:
      'Automated post-trip surveys and "Welcome Home" sequences to build lifelong loyalty.',
  },
]

function TravelCrmPage() {
  return (
    <main className="overflow-x-hidden bg-background pt-24 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <section className="relative mx-auto flex min-h-[921px] max-w-7xl items-center px-6 md:px-8">
        <div className="z-10 grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-fixed-dim/20 px-4 py-2 font-label text-xs font-bold tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              NEXT-GEN TRAVEL CRM
            </div>
            <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
              Automate Your <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Travel Agency
              </span>{' '}
              <br />
              Lifecycle
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
              The all-in-one digital sanctuary for modern travel curators. From lead generation to tropical touchdown,
              manage every detail with ethereal ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-primary px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-primary transition-colors hover:bg-surface-dim">
                Explore Features
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary-container/30 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-tertiary-container/20 blur-[80px]" />
            <div className="glass-card relative z-10 rotate-3 rounded-xl p-4 shadow-2xl transition-transform duration-700 hover:rotate-0">
              <img
                alt="Luxury Resort"
                className="h-[400px] w-full rounded-lg object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2cimSHhy24Em-REcFIBYQP_4prlHCgvVCWKKk35eH7gtqaTKE9Dk-zCLh10KpyES7CQxumejVL2cWV5_hvXBQ7blITZxzGRlNuU2MiwvioAbFHOANR02w-TRVFVsAx4CI_BfMJMv03-PMXiB9WWjfGd5XYGEo7OwiNwCCYx64lMHNAzbOi4KR7AFeXL9j7bzmH7ympniAD6wDm8mRO7Sb61zQXpnRoNqco9WjTuPl0gAq0nzapb5fmx8cizF6--QYoMIU-R9-Le0"
              />

              <div className="glass-card absolute -left-12 top-1/4 animate-bounce rounded-lg p-6 shadow-xl" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant">Payment Received</p>
                    <p className="text-sm font-black">$4,250.00</p>
                  </div>
                </div>
              </div>

              <div className="glass-card absolute -bottom-8 -right-8 rounded-lg p-6 shadow-xl">
                <div className="mb-3 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary-container" />
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Itinerary Built</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-32 rounded-full bg-surface-container" />
                  <div className="h-2 w-24 rounded-full bg-surface-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight">Precision Tools for Global Explorers</h2>
          <p className="text-on-surface-variant">
            Our CRM bridges the gap between chaotic spreadsheets and seamless guest experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="glass-card group relative overflow-hidden rounded-xl p-10 md:col-span-8">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-6 text-4xl text-primary">query_stats</span>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">Lead-to-Trip Pipeline</h3>
              <p className="mb-8 max-w-md text-on-surface-variant">
                Visualize every stage of the traveler&apos;s journey. Drag-and-drop inquiries through custom stages from
                &apos;Dreaming&apos; to &apos;Departure&apos;.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 rounded-lg bg-surface-container-low p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Inquiry</span>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-md border-l-4 border-primary bg-white p-3 shadow-sm">
                      <div className="text-[11px] font-bold">Maldives Escape</div>
                    </div>
                    <div className="rounded-md bg-white p-3 shadow-sm">
                      <div className="text-[11px] font-bold">Swiss Alps</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg bg-surface-container-low p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Proposal</span>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-md border border-dashed border-outline-variant bg-white/50 p-3" />
                  </div>
                </div>
                <div className="flex-1 rounded-lg bg-surface-container-low p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Won</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 h-80 w-80 bg-primary-fixed/20 blur-[100px] transition-colors group-hover:bg-primary-fixed/30" />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-secondary p-10 text-on-secondary md:col-span-4">
            <span className="material-symbols-outlined mb-6 text-4xl">credit_score</span>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">Payment Tracking</h3>
            <p className="text-sm leading-relaxed text-secondary-fixed/80">
              Automated invoicing and payment reconciliation. Never miss a final balance or vendor deposit again.
            </p>
            <div className="mt-12 space-y-4">
              <div className="h-[2px] w-full bg-secondary-container/30">
                <div className="h-full w-[70%] bg-secondary-fixed" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">70% Collected</p>
            </div>
          </div>

          {featureCards.map((card) => (
            <div key={card.title} className="rounded-xl bg-surface-container-lowest p-10 shadow-[0_20px_40px_rgba(0,104,116,0.04)] md:col-span-4">
              <span className={`material-symbols-outlined mb-6 text-4xl ${card.iconColor}`}>{card.icon}</span>
              <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{card.description}</p>
            </div>
          ))}

          <div className="flex flex-col items-center gap-10 overflow-hidden rounded-xl bg-white p-10 md:col-span-8 md:flex-row">
            <div className="flex-1">
              <span className="material-symbols-outlined mb-6 text-4xl text-secondary">map</span>
              <h3 className="mb-4 text-2xl font-bold tracking-tight">Itinerary Creation</h3>
              <p className="leading-relaxed text-on-surface-variant">
                Drag-and-drop blocks to build stunning mobile-first itineraries that travelers will love to share.
              </p>
            </div>
            <div className="relative w-full flex-1">
              <div className="rounded-lg bg-surface-container-low p-6 shadow-inner">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-container/20 text-primary">
                    <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                  </div>
                  <span className="text-xs font-bold">SQ-425 Arrives Male</span>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary-container/20 text-secondary">
                    <span className="material-symbols-outlined text-sm">sailing</span>
                  </div>
                  <span className="text-xs font-bold">Speedboat Transfer</span>
                </div>
                <div className="flex h-24 items-center justify-center rounded-md border-2 border-dashed border-outline-variant bg-surface-container-high">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-outline">+ Add Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight">The Command Center</h2>
            <p className="text-on-surface-variant">Clean. Fast. Intuitively Maldivian.</p>
          </div>

          <div className="glass-card mx-auto max-w-5xl rounded-xl border border-white/50 p-2 shadow-[0_40px_100px_-20px_rgba(0,104,116,0.15)]">
            <div className="flex min-h-[500px] overflow-hidden rounded-lg bg-surface">
              <div className="flex w-16 flex-col items-center gap-6 bg-surface-container-low py-6">
                <div className="mb-4 h-8 w-8 rounded-full bg-primary" />
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  dashboard
                </span>
                <span className="material-symbols-outlined text-outline">group</span>
                <span className="material-symbols-outlined text-outline">calendar_month</span>
                <span className="material-symbols-outlined text-outline">settings</span>
              </div>

              <div className="flex-1 p-8">
                <div className="mb-10 flex items-end justify-between">
                  <div>
                    <h4 className="text-2xl font-black text-on-surface">Agency Overview</h4>
                    <p className="text-sm text-on-surface-variant">Active Trips: 142</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 items-center gap-2 rounded-md border border-outline-variant/20 bg-white px-4 text-xs font-bold text-outline">
                      <span className="material-symbols-outlined text-sm">filter_list</span>
                      Filter
                    </div>
                    <div className="flex h-10 items-center rounded-md bg-primary px-6 text-xs font-bold text-on-primary shadow-lg shadow-primary/20">
                      + New Trip
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <p className="mb-2 text-[10px] font-bold uppercase text-outline-variant">Revenue Month</p>
                    <p className="text-2xl font-black text-secondary">$148,200</p>
                    <div className="mt-4 flex h-12 items-end gap-1">
                      <div className="h-[40%] flex-1 rounded-t-sm bg-secondary-container/20" />
                      <div className="h-[60%] flex-1 rounded-t-sm bg-secondary-container/20" />
                      <div className="h-[50%] flex-1 rounded-t-sm bg-secondary-container/20" />
                      <div className="h-[90%] flex-1 rounded-t-sm bg-secondary" />
                    </div>
                  </div>

                  <div className="col-span-2 rounded-xl bg-white p-6 shadow-sm">
                    <p className="mb-6 text-[10px] font-bold uppercase text-outline-variant">Upcoming Departures</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-surface-container pb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary-container/10 text-tertiary">
                            <span className="material-symbols-outlined text-sm">flight</span>
                          </div>
                          <span className="text-xs font-bold">The Henderson Group • Bora Bora</span>
                        </div>
                        <span className="text-[10px] font-bold text-tertiary">TOMORROW</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container/10 text-secondary">
                            <span className="material-symbols-outlined text-sm">hotel</span>
                          </div>
                          <span className="text-xs font-bold">L. Martinez • Kyoto Retreat</span>
                        </div>
                        <span className="text-[10px] font-bold text-outline">SEP 24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-primary p-16 shadow-2xl">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-4xl font-black leading-tight text-white">
              Scale Your Agency with the <br />
              Spirit of the Maldives.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/80">
              Join over 200+ luxury agencies managing paradise through Viduvaru.
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-full bg-white px-10 py-5 font-black text-primary transition-transform hover:scale-105">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TravelCrmPage