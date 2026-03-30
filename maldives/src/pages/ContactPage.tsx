import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";

const accentItems = [
  { title: "RESORT", subtitle: "Digital Concierge", color: "bg-primary" },
  {
    title: "HOSPITALITY",
    subtitle: "Eco-Systems",
    color: "bg-primary-container",
  },
  { title: "GROWTH", subtitle: "Island Expansion", color: "bg-secondary" },
  { title: "CONNECT", subtitle: "Global Reach", color: "bg-tertiary" },
];

function ContactPage() {
  return (
    <main className="bg-[#ffffff] pt-24 font-body text-on-surface">
      <PinnedScrollHeadlineSection
        badge="Partner with us"
        titlePrefix="Let's Scale Your"
        highlightText="Island Business"
        titleSuffix=""
        description="Transform your Maldivian hospitality experience with digital solutions designed for the horizon."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(0,104,116,0.06)] md:p-12 lg:col-span-7">
            <h2 className="mb-8 font-headline text-3xl font-bold text-on-surface">
              Send a Message
            </h2>
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
                    <span className="material-symbols-outlined text-outline">
                      expand_more
                    </span>
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
              <h3 className="relative z-10 mb-6 font-headline text-2xl font-bold">
                Direct Contact
              </h3>
              <div className="relative z-10 space-y-6">
                <a
                  href="https://wa.me/9600000000"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container shadow-lg">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      chat
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/70">
                      WhatsApp
                    </p>
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
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      alternate_email
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/70">
                      Email Us
                    </p>
                    <p className="font-headline font-semibold">
                      hello@viduvaru.mv
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/50 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl overflow-hidden h-[340px] relative">
              <img
                className="w-full h-full object-cover opacity-80"
                data-alt="stylized map of maldives atolls with glowing turquoise ocean and dark land masses, high contrast editorial aesthetic"
                data-location="Maldives"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmo2fABHlQGgzC0A8gqLBqWNaQ1oX7FZSVU0aZoy-JWBqwyL3yhXaVuMTnPkbKnm2HsGpBHlRR_mTjAkuh4QY-8HwtCuBoq8y-7UcWmOyKnHLPGiUgH41rZuYe_G2oauqJ_9K0kp3pFwHAx7H0V_MxkWXj6jFCdiqZuB7arPpUJ_Iop7fzdC9ltEztcTTbNpliAqpqufPLXQY_A2d1noVM5SQxIOsjj39w1Zl-BrWuzE3PmjDKICkmXKreMZOVwFMNum5JgBqXhoCV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white font-headline font-bold text-xl">
                    Male', Maldives
                  </h4>
                  <p className="text-white/80 text-sm">
                    Hulhumale' Innovation Park, Phase II
                  </p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-secondary-container animate-ping opacity-75"></div>
                  <div className="relative bg-secondary-container w-4 h-4 rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#26AEBF] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {accentItems.map((item) => (
              <div key={item.title} className="space-y-4">
                <div className={`h-[2px] w-12 bg-white`} />
                <h4 className="select-none font-headline text-4xl  text-white">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-white/80">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
