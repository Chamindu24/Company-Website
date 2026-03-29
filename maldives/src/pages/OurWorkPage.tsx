const stats = [
  {
    value: '+120',
    label: 'Projects Delivered',
    valueColor: 'text-primary',
    cardClass: 'bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]',
    labelClass: 'text-on-surface-variant',
  },
  {
    value: '+80',
    label: 'Strategic Clients',
    valueColor: 'text-on-primary',
    cardClass: 'bg-gradient-to-br from-primary to-primary-container shadow-xl text-on-primary',
    labelClass: 'text-white/80',
  },
  {
    value: '+99%',
    label: 'Satisfaction Rate',
    valueColor: 'text-tertiary',
    cardClass: 'bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]',
    labelClass: 'text-on-surface-variant',
  },
]

const projects = [
  {
    category: 'Luxury Resort',
    categoryColor: 'text-secondary',
    title: 'The Azure Atoll Suite',
    description:
      'A comprehensive end-to-end guest management and staff coordination platform designed for multi-island logistics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC92qGdoQ4o_1CUFPkCcBKmIoRERHmbV9s7DShhjkysm1vgYp19XNT_eTYq6KjN9P8mT8Jtac0ptWj3zVQZXm6EZIm64nPtklzNVK-ST5AOkNAzPnNq7QXHh7QrPo5M5h8h810RaWPgA29ZCuBfZbtli_oSkILrn5UsiaeCT4MSah6nVi6qOJir9S23xjGXGg3FgCw83zJlCpC4PoV_YcLgLR0QluSYJlRuBnROC69w_bBE2Kdnhm6wAMlx19rLQYPzdOgV0gI8_0o',
    overlayClass: 'from-primary/80 to-transparent',
    topOffset: '',
    panel: (
      <div className="glass-card w-full rounded-lg p-6">
        <p className="mb-2 font-medium text-on-surface">Operational Excellence</p>
        <div className="flex gap-4">
          <div className="h-12 w-full rounded-md bg-surface-container-high" />
          <div className="h-12 w-1/3 rounded-md bg-primary-container" />
        </div>
      </div>
    ),
  },
  {
    category: 'Marine',
    categoryColor: 'text-tertiary',
    title: 'BlueHorizon Reef Tracker',
    description:
      'Real-time coral health monitoring and guest engagement portal for sustainable tourism initiatives across 15 atolls.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0gbtluuEEsSdm-BEvNqyCAadWwrD7Uo7scSXxmF7YxZZI_Md5mVjDP8wjRha8hwU9k7_JV3w0NBg3leZf_82GHisE7XpJ37XI8VvDDrDB6yhTnhBgKkEI2SZL7RDd2sr6391kpISmmdQZVgOY-5p84GNILBpjz-cMfMilOGHRXL9C5B29neQPUnygxDzkXPRc5q9sePUvB3O4yeZkA9VdlX_UQSN4laLyzLklCNpwfIDB1848jX4RpIS-TOcrgtrcnNZV4x40Pjw',
    overlayClass: 'from-tertiary/80 to-transparent',
    topOffset: 'lg:mt-24',
    panel: (
      <div className="glass-card w-full rounded-lg p-6">
        <p className="mb-2 font-medium text-on-surface">Conservation Impact</p>
        <div className="flex gap-4">
          <div className="h-3 w-full overflow-hidden rounded-full bg-outline-variant/30">
            <div className="h-full w-3/4 bg-tertiary" />
          </div>
        </div>
      </div>
    ),
  },
  {
    category: 'Hotel',
    categoryColor: 'text-secondary',
    title: 'Velana Boutique Portal',
    description:
      'Optimized booking engine and personalized guest concierge mobile app for independent luxury hotels.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDP5GdL5PhB2mzoEiDB9-k_CGss_Ki1d89_uN4kHXyI6E2vRVIhkv39inE_wFsgsrlbkmLG64__5VEi-ZF1A0bjYTNYRusVHIbTPSsoJOZvSAJ1YkCNei6sA9GJ-tQ9QGhfeS4tMvFCpnF7fzKwNoM13DZEFc-V-BvPK6lqxNIuXIP7DoKlCYSKBK01-ZfB-DnYlCGCXsdPtQFYCy71yE5ET9VWkjp2_k-iwy6zNmQQ4seKbbRWdHXf9vgOZIo2uNzrETVWppLEvUI',
    overlayClass: 'from-secondary/80 to-transparent',
    topOffset: '',
    panel: (
      <div className="glass-card w-full rounded-lg p-6">
        <p className="mb-2 font-medium text-on-surface">Revenue Growth</p>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-1/2 rounded-sm bg-secondary-container" />
          <div className="h-4 w-2/3 rounded-sm bg-outline-variant/20" />
        </div>
      </div>
    ),
  },
  {
    category: 'Marine',
    categoryColor: 'text-secondary',
    title: 'OceanLink Fleet Ops',
    description:
      'Real-time GPS tracking and maintenance scheduling for luxury speedboat and seaplane fleets.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdy0n13V0XJbkgVFNH6bNOzeKvqZps1mvo2HkcdvXow9qhjLY5n8S2YjHZoDnTHcZut9irm4z89IPZMTXDDd5zBT1BycrZuAxXK9T_fBC0HjrckfAcfczqt4-nbNrjS_3ib_HFxq916E87J_wHwQSxS2Gv0l6SYIH6JIRiLVe96x3M8tRdCbc-1XiiXbmGA8AcfHvMkh_446ymQ6weTrHP7jyIrntspoKLUwN1e9xQ14IH-wXldTsGQ49EsUmNyOt3DjR9eg33UNk',
    overlayClass: 'from-primary/80 to-transparent',
    topOffset: 'lg:mt-24',
    panel: (
      <div className="glass-card w-full rounded-lg p-6">
        <p className="mb-2 font-medium text-on-surface">Smart Logistics</p>
        <div className="grid grid-cols-4 gap-2">
          <div className="h-8 rounded-md bg-primary/20" />
          <div className="h-8 rounded-md bg-primary/40" />
          <div className="h-8 rounded-md bg-primary/60" />
          <div className="h-8 rounded-md bg-primary" />
        </div>
      </div>
    ),
  },
]

function OurWorkPage() {
  return (
    <main className="bg-background pb-24 pt-32 text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <section className="mx-auto mb-24 max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-secondary-container px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            Case Studies
          </span>
          <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
            Empowering the{' '}
            <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
              Maldives Hospitality
            </span>{' '}
            Ecosystem
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            We partner with the world&apos;s most prestigious island resorts and marine conservationists to redefine
            digital operations in paradise.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-xl p-10 text-center ${stat.cardClass}`}
            >
              <span className={`mb-2 font-headline text-5xl font-extrabold md:text-6xl ${stat.valueColor}`}>{stat.value}</span>
              <span className={`font-label text-sm font-medium uppercase tracking-widest ${stat.labelClass}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className={`group relative flex flex-col space-y-6 ${project.topOffset}`}>
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-surface-container shadow-lg">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
                <div
                  className={`absolute inset-0 flex items-end bg-gradient-to-t p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.overlayClass}`}
                >
                  {project.panel}
                </div>
              </div>
              <div className="px-2">
                <div className="mb-4 flex items-center justify-between">
                  <span className={`font-label text-xs font-bold uppercase tracking-widest ${project.categoryColor}`}>
                    {project.category}
                  </span>
                  <span className="material-symbols-outlined text-primary">arrow_outward</span>
                </div>
                <h3 className="mb-4 font-headline text-3xl font-bold">{project.title}</h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-16 text-center md:p-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-8 font-headline text-4xl font-bold leading-tight text-on-primary md:text-5xl">
              Ready to transform your resort experience?
            </h2>
            <p className="mb-12 text-lg text-white/80">
              Join the Maldives&apos; leading hospitality brands in the digital future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="scale-100 rounded-full bg-surface-container-lowest px-8 py-4 text-lg font-bold text-primary transition-all active:scale-95 hover:shadow-xl">
                Start a Project
              </button>
              <button className="rounded-full border border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10">
                View all Services
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl" />
        </div>
      </section>
    </main>
  )
}

export default OurWorkPage