const ecosystemCards = [
  {
    icon: 'hub',
    title: 'Viduvaru',
    description:
      'The central intelligence hub connecting your entire digital infrastructure seamlessly.',
    textColor: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: 'cloud_queue',
    title: 'Lush Hotel Cloud',
    description:
      'Premium guest experience platform optimized for luxury island resort environments.',
    textColor: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: 'apartment',
    title: 'Property Management',
    description:
      'Next-generation PMS specifically engineered for multi-island property scaling.',
    textColor: 'text-tertiary',
    bgColor: 'bg-tertiary/10',
  },
  {
    icon: 'diversity_3',
    title: 'Agency CRM',
    description:
      'Deep relationship management for travel agencies and destination managers.',
    textColor: 'text-primary-container',
    bgColor: 'bg-primary-container/10',
  },
]

const industries = [
  { icon: 'developer_board', label: 'Resorts' },
  { icon: 'hotel', label: 'Hotels' },
  { icon: 'holiday_village', label: 'Guesthouses' },
  { icon: 'directions_boat', label: 'Liveaboards' },
  { icon: 'sailing', label: 'Yacht Marina' },
  { icon: 'kayaking', label: 'Bareboat' },
  { icon: 'home_work', label: 'Homestay' },
]

const whyChooseItems = [
  {
    icon: 'flight_land',
    title: 'Built for Islands',
    description:
      'Infrastructure designed to work across distributed islands with optimized sync and low-latency connectivity.',
    color: 'bg-primary',
  },
  {
    icon: 'cloud_sync',
    title: 'Cloud-based',
    description:
      'Access your entire operation from anywhere in the world. Real-time updates and effortless synchronization.',
    color: 'bg-secondary',
  },
  {
    icon: 'auto_awesome',
    title: 'AI-Powered',
    description:
      'Predictive analytics and intelligent automation that handles repetitive tasks so your team can focus on the guest.',
    color: 'bg-tertiary',
  },
  {
    icon: 'trending_up',
    title: 'Scalable',
    description:
      'From a single guest house to a portfolio of luxury resorts, our system grows with your ambition.',
    color: 'bg-primary-container',
  },
]

function MaldivesLandingPage() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="pt-20">
        <section className="relative flex min-h-[921px] items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH6Ukxkl60qGtQk0wMSBbRnwa8S1xrD1Tq6TCSTqfxrv16UVXtwU-mio5vFtfpxbYJFniwdl7AS5grVJYN-0fJP6cM4NHQENY2OACh7YjG6FCD-fINFS22MIbdP9xVzB1CEx2hHfIHnPrumF9s29ofUAWmyypNZQFGnVv7RvZ0_DSGbb7Vkf4vvH8YW0Cd7zNPXZ0qkDNsGxQBk7jomr9fUXCR60f4Y0xGpedzE6tTYXYcNxgfvUmhkDz2OvdJKEGMhyjcm0BShQk"
              alt="Aerial view of overwater villas in the Maldives"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8">
            <div className="max-w-3xl">
              <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Experience the Future
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tighter md:text-7xl">
                Smart Digital <span className="text-primary">Solutions</span> for Maldives Hospitality
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
                Elevating island hospitality through intelligent automation and AI-driven management. Seamless,
                scalable, and built for the unique demands of the archipelago.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-lg font-bold text-on-primary shadow-xl transition-all hover:-translate-y-1 hover:shadow-primary/20">
                  Get Started
                </button>
                <button className="glass-card rounded-full px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-white">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center md:text-left">
              <h2 className="mb-4 text-4xl font-bold tracking-tighter">Our Ecosystem</h2>
              <p className="max-w-2xl text-lg text-on-surface-variant">
                Integrated tools designed to streamline every touchpoint of the guest journey and back-office
                operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {ecosystemCards.map((card) => (
                <div
                  key={card.title}
                  className="glass-card group rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${card.bgColor} ${card.textColor} transition-transform group-hover:scale-110`}
                  >
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">{card.description}</p>
                  <div
                    className={`flex items-center text-xs font-bold uppercase tracking-widest ${card.textColor} transition-all group-hover:gap-2`}
                  >
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tighter">Industries We Serve</h2>
                <p className="text-lg text-on-surface-variant">
                  From luxury private islands to intimate homestays, our technology adapts to your scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
              {industries.map((industry) => (
                <div
                  key={industry.label}
                  className="cursor-default rounded-lg border border-transparent bg-surface-container-low p-6 text-center transition-colors hover:border-primary/10 hover:bg-white"
                >
                  <span className="material-symbols-outlined mb-4 block text-3xl text-primary">{industry.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-xl shadow-2xl">
                <img
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR0HbO4hIlmaq03ebd37Db10pVjx6YOe5AwjpRTDLmuamcCas-6e4_tFL4xjHnQQV0KU3NIyliC1yf9ZOpUjM8SexggASPN1TieNX1Mrm3v7JgeYNSfesClv1MxnMUt4i0AMgoSttSqCHaljWli1tSvvkuanaVhvsx2ax4o0Dp6hAGBA0V8VTWXhtkwdbNhqUxZTuaD0gbPlaXrRvv5S2geGOH8vKzl-hiLeJEAyaver7u9AT_wivac8HiEb4bxMaKN0bTA15RizQ"
                  alt="Interior of a modern luxury resort villa"
                />
              </div>
              <div className="glass-card absolute -bottom-10 -right-10 hidden max-w-xs rounded-lg p-10 shadow-2xl md:block">
                <h4 className="mb-2 font-bold text-primary">Built for the Islands</h4>
                <p className="text-sm text-on-surface-variant">
                  Designed specifically for the geographical challenges of the Maldives.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-12 text-4xl font-bold tracking-tighter">
                Why Industry Leaders <span className="text-primary">Choose Viduvaru</span>
              </h2>
              <div className="space-y-8">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${item.color} text-on-primary`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                      <p className="leading-relaxed text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-12 text-center md:p-24">
            <div className="absolute inset-0 opacity-10">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDOhuteQmcK_zdeVItlnPL-Mj11GxM7RYUy0eF4FTZ8UwdIwaqbjH2hQabjr41IbhExmc9AQdef1p3lxiaeVFC_n9V9PpgeX1VgyqZob_lIvYtaAxMzEt8TwjzhYk8ZNahGIp1KbJdCsLgtppJDGVsiR8pIRcCmW8Wv18Ac3r59WZp0zWOMqrOnH38d7A91xjedgiWJUDmJcZlq2zaOj_w2z3NNbjjmJ0HJD-NSfuWqyhk2vwB55WyLmZoIxAUlKPDU_t5lheYEeY"
                alt="Abstract water ripple texture"
              />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-8 text-4xl font-extrabold tracking-tighter text-on-primary md:text-5xl">
                Ready to transform your hospitality experience?
              </h2>
              <p className="mb-12 text-lg text-primary-fixed opacity-90">
                Join the growing network of Maldivian properties leading the digital revolution with Viduvaru.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-all hover:bg-primary-fixed">
                  Get Started Now
                </button>
                <button className="rounded-full border-2 border-white/30 bg-transparent px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MaldivesLandingPage