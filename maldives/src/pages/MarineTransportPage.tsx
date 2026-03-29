const miniFeatures = [
  {
    icon: 'qr_code_2',
    iconColor: 'text-secondary',
    title: 'E-ticketing System',
    description:
      'Instant PDF and mobile wallet tickets delivered automatically after payment confirmation.',
  },
  {
    icon: 'verified_user',
    iconColor: 'text-tertiary',
    title: 'QR Boarding',
    description:
      'Seamless validation at the jetty. Crew can scan tickets via our mobile app in milliseconds.',
  },
  {
    icon: 'settings_suggest',
    iconColor: 'text-primary-container',
    title: 'Smart Automation',
    description: 'Automatic manifest generation and port authority reporting with a single click.',
  },
]

function MarineTransportPage() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24">
        <section className="relative overflow-hidden px-6 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="z-10">
              <span className="mb-6 inline-block rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-secondary-container font-label">
                Marine Excellence
              </span>
              <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl font-headline">
                Seamless Marine <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Transport Management
                </span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant font-body">
                The ultimate booking engine for Maldivian waters. Automate ticketing, manage fleet capacity in
                real-time, and deliver a premium boarding experience for every passenger.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-on-primary transition-shadow hover:shadow-lg font-headline">
                  Start Free Trial
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-primary font-headline">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-primary/10 blur-[100px]" />
              <div className="glass-panel relative rounded-xl border border-white/20 p-4 shadow-2xl">
                <img
                  alt="Marine Excellence"
                  className="aspect-video w-full rounded-lg object-cover shadow-inner"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlMixPeRe71mvfRBtAGvKJWVwvPXA_YairMD26oQ-iP0zylN2IeufWdnqmEG8P_F7yjbCACzq5DrAyqbkBaN8xjL85Axn_IOAoIJ-u-ba0gKHV6gLYnOxFlJAPWOBbty_X01n-3QgOgvFUSFSWXVZkXiPke82-9Sj3FQcXgnaB15ESHdp4EzuGnCIJUsz1jN3X8AU9flTxOmY4hACKN9SX0V9jQYLx9snJ3TeMeQsXg7g5Z9ycL_Ia0jCWQr6jkRwovbRPgcTOa4c"
                />

                <div className="glass-panel absolute -bottom-10 -left-2 max-w-[280px] rounded-lg border border-white/40 p-6 shadow-xl md:-left-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-container">
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        confirmation_number
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase leading-none tracking-wider text-on-surface-variant">
                        Live Bookings
                      </p>
                      <p className="text-xl font-black text-on-surface font-headline">
                        1,284 <span className="text-xs text-tertiary">+12%</span>
                      </p>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
                    <div className="h-full w-3/4 bg-primary" />
                  </div>
                  <p className="mt-2 text-[10px] font-medium text-on-surface-variant">Daily Capacity Utilization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <h2 className="mb-4 text-3xl font-bold text-on-surface font-headline">Integrated Fleet Automation</h2>
              <p className="max-w-2xl text-on-surface-variant font-body">
                Everything you need to run a high-traffic marine transport business from a single, unified interface.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass-panel md:col-span-2 flex min-h-[400px] flex-col justify-between rounded-xl border border-outline-variant/10 p-10">
                <div>
                  <span className="material-symbols-outlined mb-6 text-4xl text-primary">language</span>
                  <h3 className="mb-4 text-2xl font-bold font-headline">Online Ticket Booking</h3>
                  <p className="max-w-md text-lg leading-relaxed text-on-surface-variant font-body">
                    A high-conversion booking engine that works on every device. Allow your customers to secure their
                    voyage in under 60 seconds.
                  </p>
                </div>
                <div className="mt-8 overflow-hidden rounded-lg">
                  <img
                    alt="Mobile Booking Interface"
                    className="h-48 w-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZtbk7gaCIq1alkkSH4t6IZNoM07GHubtIK8Ieyd4bbGN2aTbWDv6zBgmHgeknVokdmhoaOf7JCJtowkLXYHwzf_iZ4R1U9ypTPNKB_3txVNRvm6VVjnJjlc3mAMLb1fJf7mz5lPD7QFGi4ebhllgZn-e2t3H_-zl3Uwvqip5jRMK8G5qFo7RvlZOAfhbUrDb5I3oEgN_UqZSGwIpCLr_IlZqEg3vSK-enZGyZiB14KhTj0ZI7qK2V0MCidzqgt-98RhVlyN2TEEE"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-xl bg-primary p-10 text-on-primary">
                <div>
                  <span className="material-symbols-outlined mb-6 text-4xl">analytics</span>
                  <h3 className="mb-4 text-2xl font-bold font-headline">Real-time Capacity</h3>
                  <p className="font-body opacity-90">
                    Never overbook again. Automated seat tracking across multiple routes and vessel types.
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-6xl font-black opacity-20">98%</span>
                  <span className="material-symbols-outlined text-5xl">trending_up</span>
                </div>
              </div>

              {miniFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8">
                  <span className={`material-symbols-outlined mb-4 text-3xl ${feature.iconColor}`}>{feature.icon}</span>
                  <h4 className="mb-2 text-xl font-bold text-on-surface font-headline">{feature.title}</h4>
                  <p className="text-sm text-on-surface-variant font-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-6 py-24 md:px-8">
          <div className="mx-auto mb-16 max-w-7xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold text-on-surface font-headline">
              Command Your Fleet with Precision
            </h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant font-body">
              The Viduvaru Command Center gives you total visibility over bookings, revenue, and vessel locations in
              one beautiful dashboard.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/20 blur-[120px]" />
            <div className="glass-panel relative overflow-hidden rounded-xl border border-white/30 shadow-[0_40px_100px_rgba(0,104,116,0.1)]">
              <div className="flex items-center justify-between border-b border-outline-variant/10 bg-white/50 px-8 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-error/40" />
                  <div className="h-3 w-3 rounded-full bg-secondary/40" />
                  <div className="h-3 w-3 rounded-full bg-tertiary/40" />
                </div>
                <div className="flex gap-4">
                  <div className="h-2 w-32 rounded-full bg-surface-container" />
                  <div className="h-2 w-20 rounded-full bg-surface-container" />
                </div>
              </div>

              <div className="grid h-[500px] grid-cols-12">
                <aside className="col-span-3 hidden bg-surface-container-low/50 p-6 md:block">
                  <div className="space-y-4">
                    <div className="flex h-8 items-center gap-3 rounded-lg bg-primary/10 px-3">
                      <span className="material-symbols-outlined text-sm text-primary">dashboard</span>
                      <div className="h-2 w-16 rounded-full bg-primary/40" />
                    </div>
                    <div className="flex h-8 items-center gap-3 rounded-lg px-3 opacity-40">
                      <span className="material-symbols-outlined text-sm">sailing</span>
                      <div className="h-2 w-20 rounded-full bg-on-surface-variant" />
                    </div>
                    <div className="flex h-8 items-center gap-3 rounded-lg px-3 opacity-40">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <div className="h-2 w-12 rounded-full bg-on-surface-variant" />
                    </div>
                  </div>
                </aside>

                <div className="col-span-12 p-8 md:col-span-9">
                  <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[10px] font-bold uppercase text-on-surface-variant">Total Revenue</div>
                      <div className="text-xl font-bold text-primary font-headline">MVR 42,850</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[10px] font-bold uppercase text-on-surface-variant">Active Vessels</div>
                      <div className="text-xl font-bold text-secondary font-headline">12 / 14</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-1 text-[10px] font-bold uppercase text-on-surface-variant">
                        Daily Passengers
                      </div>
                      <div className="text-xl font-bold text-tertiary font-headline">342</div>
                    </div>
                  </div>

                  <div className="h-[390px] rounded-lg bg-white p-4 shadow-sm">
                    <img
                      alt="Analytics View"
                      className="h-full w-full rounded object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqxkwkKuQ8o9dFrCd-wDo3WO3rsv4hl9Gf6hc3lwNgnpRfoWAfuL4fykEUpFuFUBds8ZhW1O6MaQNFHN38SYtJwHpBJpFcYnBGRcCwwMxMZVoEibd7GVSHNXVaaouBouCOT-NnBDri-4A03AvINxE0BUcoEEny1FREMQlce1UL7ViZbPE_XY5MobGE4ucRtw6gfb2mtOiF5xV5NfXh2c39KvPkLzSUsHRfUvAZFEeBSE628032JCSe3Ln43x8w9w8xa6pet9GRu0M"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-12 text-center text-on-primary shadow-2xl">
            <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-bold font-headline">Ready to Digitalize Your Fleet?</h2>
              <p className="mx-auto mb-10 max-w-xl text-lg opacity-90 font-body">
                Join the leading transport providers in the Maldives who have already automated their booking
                operations.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-10 py-4 font-bold text-primary shadow-xl transition-transform hover:scale-105 font-headline">
                  Get Started Today
                </button>
                <button className="rounded-full border-2 border-white/30 bg-transparent px-10 py-4 font-bold text-white transition-colors hover:bg-white/10 font-headline">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MarineTransportPage