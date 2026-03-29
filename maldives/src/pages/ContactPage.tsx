const accentItems = [
  { title: 'RESORT', subtitle: 'Digital Concierge', color: 'bg-primary' },
  { title: 'HOSPITALITY', subtitle: 'Eco-Systems', color: 'bg-primary-container' },
  { title: 'GROWTH', subtitle: 'Island Expansion', color: 'bg-secondary' },
  { title: 'CONNECT', subtitle: 'Global Reach', color: 'bg-tertiary' },
]

function ContactPage() {
  return (
    <main className="bg-background pt-24 font-body text-on-surface">
      <section className="relative flex h-[614px] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover"
            alt="Maldivian atoll"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZPwpB0AiEk22CS-6uZh-GGTOSeD_-xw7z9a7WMD8eN9DXJVJ8UY8jTq5ff2G97gIEO1p5YgSOjZmOVMg0cd-B6J_0BAewB0CYpYGihkMy13Ql-zcE9Dm9Y6OqUz8cYFcXMdUCONPs8D3x6CiRAWIuJ8vqPgHsSW372iGMt6axNTojcTbXOegcMlKd7yIs6JJhIQcWRlCk-qZtof5PCpEXK0RJOaD0MlknGxBJUo9OBvrCYrAJgaJkFEtkiEVwANUWU17XvLYGo0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <span className="mb-6 inline-block rounded-full bg-primary-fixed-dim/20 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-primary">
              Partner with us
            </span>
            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
              Let&apos;s Scale Your{' '}
              <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                Island Business
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Transform your Maldivian hospitality experience with digital solutions designed for the horizon.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,104,116,0.06)] md:p-12 lg:col-span-7">
            <h2 className="mb-8 font-headline text-3xl font-bold text-on-surface">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Abdulla Ahmed"
                    className="w-full rounded-lg border-none bg-surface-container-low px-6 py-4 text-on-surface outline-none transition-all placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="contact@resort.mv"
                    className="w-full rounded-lg border-none bg-surface-container-low px-6 py-4 text-on-surface outline-none transition-all placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Business Type
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border-none bg-surface-container-low px-6 py-4 text-on-surface outline-none transition-all focus:ring-2 focus:ring-secondary/40">
                    <option>Resort</option>
                    <option>Hotel</option>
                    <option>Guesthouse</option>
                    <option>Travel Agency</option>
                    <option>Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-outline">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full resize-none rounded-lg border-none bg-surface-container-low px-6 py-4 text-on-surface outline-none transition-all placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-primary to-primary-container px-10 py-4 text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-95 md:w-auto"
              >
                Start the Conversation
              </button>
            </form>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-xl bg-primary p-8 text-on-primary">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <h3 className="relative z-10 mb-6 font-headline text-2xl font-bold">Direct Contact</h3>
              <div className="relative z-10 space-y-6">
                <a
                  href="https://wa.me/9600000000"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/70">WhatsApp</p>
                    <p className="font-headline font-semibold">+960 777-1234</p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/50 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="mailto:hello@viduvaru.mv"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container shadow-lg">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                      alternate_email
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/70">Email Us</p>
                    <p className="font-headline font-semibold">hello@viduvaru.mv</p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/50 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="flex min-h-[300px] h-full flex-col overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
              <div className="p-6">
                <h3 className="mb-1 font-headline text-xl font-bold text-on-surface">Our Hub</h3>
                <p className="flex items-center text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined mr-1 text-lg text-primary">location_on</span>
                  Male&apos;, Republic of Maldives
                </p>
              </div>
              <div className="relative flex-grow bg-surface-container-highest">
                <img
                  className="h-full w-full object-cover opacity-40 grayscale contrast-125"
                  alt="Map of Maldives"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA70hKTKgSpTLmH3rCVRzJLWtxjpEOO-PDZM51ew_FZyKLqjpVqHmmeUPyAe5l0dH8HfCD74LBcm_q3NbL4ijRHVMheaJ-RagZsO4yQ8n0qwPTQL-mm_nknncXadRsLvyzw3oB_hnjzfRA6AIiXJWjCpirASJjJSFpa25waRT6xwpPb4gT6WufF-zPinPEAPymkx4C6i6qfkuCGndZFesZ3cM2Hr2OMa9rwRPjzWcFufHX3_dNaa2Ru3KBAyfAJvMqaiXd0aD1b2xo"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {accentItems.map((item) => (
              <div key={item.title} className="space-y-4">
                <div className={`h-[2px] w-12 ${item.color}`} />
                <h4 className="select-none font-headline text-4xl font-black text-on-surface/10">{item.title}</h4>
                <p className="text-sm font-medium text-on-surface-variant">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage