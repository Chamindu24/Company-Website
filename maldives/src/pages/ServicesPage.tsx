const serviceCards = [
  {
    title: 'AI Agents & Chatbots',
    description:
      '24/7 guest support and lead qualification powered by advanced LLMs trained on your business data.',
    icon: 'smart_toy',
    iconWrap: 'bg-tertiary/10 text-tertiary',
    linkColor: 'text-tertiary',
    span: 'md:col-span-4',
  },
  {
    title: 'BPM Software',
    description: "Optimize logistics and supply chain workflows between Male' and outer atolls with precision.",
    icon: 'account_tree',
    iconWrap: 'bg-secondary/10 text-secondary',
    linkColor: 'text-secondary',
    span: 'md:col-span-4',
  },
  {
    title: 'Corporate Websites',
    description:
      'High-performance, SEO-optimized web experiences that capture the essence of luxury hospitality.',
    icon: 'web',
    iconWrap: 'bg-primary-container/10 text-primary-container',
    linkColor: 'text-primary',
    span: 'md:col-span-4',
  },
  {
    title: 'Mobile Apps',
    description:
      'Native iOS and Android applications for guest services, booking engines, and staff management.',
    icon: 'phone_iphone',
    iconWrap: 'bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant',
    linkColor: 'text-on-primary-fixed-variant',
    span: 'md:col-span-4',
  },
]

function ServicesPage() {
  return (
    <main className="bg-background pb-24 pt-24 text-on-surface antialiased">
      <section className="hero-gradient relative overflow-hidden px-6 py-20 md:py-32 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start text-left">
          <span className="mb-6 inline-block rounded-full bg-primary-fixed-dim/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Elevating Hospitality &amp; Enterprise
          </span>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Expert Digital Services for{' '}
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Island Businesses
            </span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Transforming the Maldivian business landscape with tailored software solutions, automated intelligence,
            and premium digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-on-primary transition-all hover:opacity-90">
              Get Started <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="rounded-full bg-surface-container-highest/50 px-8 py-4 font-semibold text-primary backdrop-blur-sm transition-all hover:bg-surface-container-highest">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary-container/10 blur-[100px]" />
        <div className="absolute bottom-0 right-40 h-80 w-80 rounded-full bg-tertiary-container/10 blur-[80px]" />
      </section>

      <section className="bg-surface px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="glass-card group relative overflow-hidden rounded-xl border border-white/20 p-10 shadow-[0_20px_40px_rgba(0,104,116,0.06)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,104,116,0.1)] md:col-span-8">
              <div className="relative z-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">CRM Software</h3>
                <p className="mb-8 max-w-md text-lg text-on-surface-variant">
                  Centralize your guest relations and business leads with our custom-built CRM systems tailored for
                  resort management and local operations.
                </p>
                <a className="group/link inline-flex items-center gap-2 font-bold text-primary" href="#">
                  Learn More{' '}
                  <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
                    chevron_right
                  </span>
                </a>
              </div>
              <div className="absolute bottom-0 right-0 hidden h-full w-1/2 lg:block">
                <img
                  alt="Dashboard Interface"
                  className="h-full w-full object-cover object-left opacity-20 transition-opacity duration-700 group-hover:opacity-40"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh1eXM2YTD7h-vCqSHRZ_SeErplZ1S4bH9Q77kx5mlwrWAsodRqrt6PW2avap97Tr4ipG1sDkl4Fea5vI8uDAAxTl7GnxI1JcT1T5iSlYBFTpk5chft1ogOVfO7wl1hIGbhorumaacoAdeEirP-loe6WQGwQCiO87aEhSQrbChnKvaIOWmRG-4hVbos2bHlz649gGX1N2nQV5fpsdQO0yDTKvlF66oN39UHcxUFkmDJENR4i06iv_t3PEVqxPobcoRlkW7JUs1RFg"
                />
              </div>
            </div>

            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`${card.span} group glass-card rounded-xl border border-white/20 p-10 shadow-[0_20px_40px_rgba(0,104,116,0.06)] transition-all`}
              >
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconWrap}`}>
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">{card.title}</h3>
                <p className="mb-8 text-on-surface-variant">{card.description}</p>
                <a className={`inline-flex items-center gap-2 font-bold ${card.linkColor}`} href="#">
                  Learn More <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-12 text-center shadow-2xl shadow-primary/30 md:p-20">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-6 font-headline text-3xl font-bold text-on-primary md:text-5xl">
              Ready to start your digital journey?
            </h2>
            <p className="mb-10 text-lg text-on-primary/80">
              Join the leading resorts and businesses in the Maldives who trust Viduvaru for their digital
              transformation.
            </p>
            <button className="rounded-full bg-surface-container-lowest px-10 py-4 font-bold text-primary shadow-xl transition-all hover:scale-105 active:scale-95">
              Schedule a Free Consultation
            </button>
          </div>
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </main>
  )
}

export default ServicesPage