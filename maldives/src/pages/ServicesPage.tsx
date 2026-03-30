const serviceCards = [
  {
    title: "AI Agents & Chatbots",
    description:
      "24/7 guest support and lead qualification powered by advanced LLMs trained on your business data.",
    icon: "smart_toy",
    iconWrap: "bg-tertiary/10 text-tertiary",
    linkColor: "text-tertiary",
    span: "md:col-span-4",
  },
  {
    title: "BPM Software",
    description:
      "Optimize logistics and supply chain workflows between Male' and outer atolls with precision.",
    icon: "account_tree",
    iconWrap: "bg-secondary/10 text-secondary",
    linkColor: "text-secondary",
    span: "md:col-span-4",
  },
  {
    title: "Corporate Websites",
    description:
      "High-performance, SEO-optimized web experiences that capture the essence of luxury hospitality.",
    icon: "web",
    iconWrap: "bg-primary-container/10 text-primary-container",
    linkColor: "text-primary",
    span: "md:col-span-4",
  },
  {
    title: "Mobile Apps",
    description:
      "Native iOS and Android applications for guest services, booking engines, and staff management.",
    icon: "phone_iphone",
    iconWrap: "bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant",
    linkColor: "text-on-primary-fixed-variant",
    span: "md:col-span-4",
  },
];

function ServicesPage() {
  return (
    <main className="bg-background pb-24 pt-24 text-on-surface antialiased">
      <section className="hero-gradient relative overflow-hidden px-6 py-20 md:py-32 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start text-left">
          <span className="mb-6 inline-block rounded-full bg-primary-fixed-dim/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Elevating Hospitality &amp; Enterprise
          </span>
          <h1 className="mb-8 max-w-4xl font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Expert Digital Services for{" "}
            <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              Island Businesses
            </span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Transforming the Maldivian business landscape with tailored software
            solutions, automated intelligence, and premium digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-on-primary transition-all hover:opacity-90">
              Get Started{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
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
                  <span className="material-symbols-outlined text-3xl">
                    groups
                  </span>
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                  CRM Software
                </h3>
                <p className="mb-8 max-w-md text-lg text-on-surface-variant">
                  Centralize your guest relations and business leads with our
                  custom-built CRM systems tailored for resort management and
                  local operations.
                </p>
                <a
                  className="group/link inline-flex items-center gap-2 font-bold text-primary"
                  href="#"
                >
                  Learn More{" "}
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
                <div
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconWrap}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-on-surface">
                  {card.title}
                </h3>
                <p className="mb-8 text-on-surface-variant">
                  {card.description}
                </p>
                <a
                  className={`inline-flex items-center gap-2 font-bold ${card.linkColor}`}
                  href="#"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group">
            <div className="flex-1 z-10">
              <div className="w-16 h-16 bg-primary-container/5 rounded-2xl flex items-center justify-center mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  data-icon="hub"
                >
                  hub
                </span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary mb-4">
                CRM Software
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-md">
                Centralize guest experiences and property management with a
                suite designed for the unique demands of resort hospitality and
                island operations.
              </p>
              <button className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-headline font-bold flex items-center gap-2 transition-all hover:bg-primary-container active:scale-95">
                Learn More
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="flex-1 w-full h-full min-h-[300px] rounded-lg overflow-hidden relative shadow-2xl">
              <img
                alt="CRM Dashboard"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                data-alt="Modern high-tech dashboard showing complex data visualization with sleek dark ocean blue UI design and glass textures"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmtzxPn1C4wC0C0KD5N5l9jixHcKgUvF7ECoAaS5TqyiaFDOllIOf794BRjwxZzDySxIKiklXhVZduch1Q2TuvgYjqufnZFJfRlAGNFZ_m31vjtVRbY1NWTJ1z0PxvV_lW8hza4osANnBKOOuJG18nU8BZNHoeuOQwHAt3bFfMgSK4VFwNuhCamBpeWsNU00OMAbv6Dmrt7H38reTNKJ3OpQHWd0TDhwCWvmOSDdncCgs_1vsffm4BJJVg8OP9-yYhfrojrY8NtbR"
              />
            </div>
          </div>
          <div className="md:col-span-4 bg-tertiary-container p-8 md:p-10 rounded-xl flex flex-col justify-between text-on-tertiary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-on-tertiary-container/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div>
              <div className="w-14 h-14 bg-on-tertiary-container rounded-xl flex items-center justify-center mb-12">
                <span
                  className="material-symbols-outlined text-3xl text-white"
                  data-icon="smart_toy"
                >
                  smart_toy
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                AI Agents &amp; Chatbots
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                24/7 intelligent concierges that speak multiple languages and
                handle bookings instantly across all your digital channels.
              </p>
            </div>
            <button className="text-tertiary-fixed font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Deploy AI
              <span
                className="material-symbols-outlined"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
          <div className="md:col-span-4 bg-surface-container-low p-8 md:p-10 rounded-xl border border-outline-variant/10">
            <div className="w-14 h-14 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-8">
              <span
                className="material-symbols-outlined text-3xl text-secondary"
                data-icon="account_tree"
              >
                account_tree
              </span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
              BPM Software
            </h3>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Optimize logistics, supply chains, and staff workflows across
              distributed island locations with powerful process automation.
            </p>
            <button className="w-full py-4 rounded-xl border-2 border-primary/10 text-primary font-headline font-bold hover:bg-primary hover:text-white transition-all">
              Streamline Workflows
            </button>
          </div>
          <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row-reverse gap-8 items-center overflow-hidden">
            <div className="flex-1">
              <div className="w-16 h-16 bg-on-tertiary-container/10 rounded-2xl flex items-center justify-center mb-8">
                <span
                  className="material-symbols-outlined text-4xl text-on-tertiary-container"
                  data-icon="language"
                >
                  language
                </span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary mb-4">
                Corporate Websites
              </h3>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Premium, editorial-grade web experiences that reflect the luxury
                and serenity of your brand. Optimized for global visibility and
                high-conversion.
              </p>
              <button className="bg-primary-container text-white px-8 py-3.5 rounded-full font-headline font-bold flex items-center gap-2 transition-all hover:bg-primary active:scale-95">
                View Portfolio
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="open_in_new"
                >
                  open_in_new
                </span>
              </button>
            </div>
            <div className="flex-1 w-full h-full min-h-[300px] rounded-lg overflow-hidden shadow-xl border border-outline-variant/20">
              <img
                alt="Web Design Project"
                className="w-full h-full object-cover"
                data-alt="Clean minimalist website design displayed on a sleek laptop screen, featuring luxury travel imagery and elegant typography in a bright studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIolQu6Ls0XnaZI4REXwli0M9CXpfIprVfYT1iUlYLk6oS-EspRkshTP-VpjusXbDz7j_hK4XWR-Y5k1uppF5OH3h84wglAYJvxP3teB11itXu9A4Zj1N-LFoFVSztjPbt7Iwv3QWZjQF0Dt7v2Ea3HCVBpoXiYYgnGi5mPJmU4FxHFbLbChZ9582XsxQ3PJLy-CKtc_jQhFfnpgVtHOg0glrhAx3aJS1of5lFktGQdcDEupVPZfHMaLLEHcb7-M6hlOj6sOJ9XVeg"
              />
            </div>
          </div>
          <div className="md:col-span-12 bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                className="w-full h-full"
              >
                <path
                  d="M0 100 Q 50 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
              </svg>
            </div>
            <div className="md:w-1/2 z-10">
              <span className="text-secondary font-label text-sm font-bold uppercase tracking-widest mb-6 block">
                Native &amp; Cross-Platform
              </span>
              <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                Mobile App Development
              </h3>
              <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Bring your services to your guests' fingertips. We build
                high-performance mobile apps for resort bookings, internal staff
                comms, and island guides.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-headline font-extrabold shadow-xl hover:brightness-105 transition-all">
                  Start Building
                </button>
                <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                  <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="apple"
                  >
                    ios
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="android"
                  >
                    android
                  </span>
                  <span className="text-sm font-medium">iOS &amp; Android</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary blur-[100px] opacity-20"></div>
                <img
                  alt="Mobile App Preview"
                  className="relative z-10 rounded-3xl shadow-2xl border-8 border-primary-container"
                  data-alt="A premium smartphone displaying a luxury resort booking app with vivid turquoise ocean photos and clean white user interface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaUa0b185zLe0XklyLbggDtvpiY2A40VTkZqgzb_bZ87dcCuO1Tm_SSmwc-cABqbaeWJhoUnjHPMLxglSZb0JJPlVJQn-vsMlMIw874vSHospgFsh3t-jyrNuJzbIYXkPmauaY029aHAj0LVHwQGLecX3Zal3u9WDNfXV56r41JNx2T7fNt_wgeD-hIK_zmaVjlwmgSIP7z-y3cKHoJWppMH1J6pCGOiyAm-VvrPqy8moclphd2uiArBa3eVVivdZ3qr0bKd3vd-2D"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-12 text-center shadow-2xl shadow-primary/30 md:p-20">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf_jCDnFb7ScgTd7MCsxJ6ubygfDu0eC7oJrB4PuKZIYkAkzy2etBnT28oCsfh9lScHb_BzOHPrFkBSd40EZpXLCUzIXv6LBMFQXC0d52JRJcRBU3iNls9_zKuMJDKOLjgnixN_fJUyWzKlXicrQjg5mM6x-aGcEOMDLjwb39YF6BjC5tamMXaCGWW72V-uhzARgu-7ELWJNlJqccNBKBOBbjGpUnHAf5X0TWDeBfeifAsRe1K_Fq0noM0nqbQRTBTII-lKzOTjnA')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-6 font-headline text-3xl font-bold text-on-primary md:text-5xl">
              Ready to start your digital journey?
            </h2>
            <p className="mb-10 text-lg text-on-primary/80">
              Join the leading resorts and businesses in the Maldives who trust
              Viduvaru for their digital transformation.
            </p>
            <button className="rounded-full bg-surface-container-lowest px-10 py-4 font-bold text-primary shadow-xl transition-all hover:scale-105 active:scale-95">
              Schedule a Free Consultation
            </button>
          </div>
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>

      <section className="mt-24 px-6 md:px-8">
        <div className="relative mx-auto h-[500px] w-full max-w-7xl overflow-hidden rounded-xl">
          <img
            alt=""
            className="h-full w-full object-cover"
            data-alt="Luxurious infinity pool overlooking the turquoise ocean at a high-end Maldives resort during a serene sunset with warm glow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT3R1Ov40-ImoSyDxyoSpTsRdRzOjTeyyIrIERC9urRWV91AMSHO-wepRaNc-_3d5mSIW_zTZaAajSNElZZH8aTwHF2lqR4bAfKjNa3hLe_0J4hlkas8aNrUFZVsbuerkMEPHaDlpIyK8ypahBNARCXrYeSaeWcAIPSxbOWmmZkhQ1s24ouVhonwWUNNwmQpYGeMvcMTURhHGNz2gyF1tQQ3jN8SOB23k8bhJ7MMoAmWyJjWsuRn-bJsZv9HckOxy15I1CYYN3ackA"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-12">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight text-white md:text-4xl">
                Excellence in every pixel.
              </h2>
              <p className="mb-8 text-slate-200">
                Our solutions currently power operations for over 45 luxury island
                destinations across the Indian Ocean.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-secondary-container px-8 py-3 font-bold text-on-secondary-container transition-transform hover:scale-105">
                  View Case Studies
                </button>
                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-md">
                  Client Testimonials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
