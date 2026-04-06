export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl  px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Image Column */}
          <div className="relative lg:col-span-5 px-12 lg:px-0 [perspective:2000px]">
            <div className="group relative transition-all duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateX(5deg)_rotateY(-5deg)]">
              {/* Floor Shadow */}
              <div className="absolute -bottom-10 left-1/2 -z-10 h-10 w-[80%] -translate-x-1/2 rounded-[100%] bg-black/20 blur-2xl transition-all duration-700 lg:bottom-[-40px] lg:bg-black/10 lg:blur-3xl" />

              {/* Image Container */}
              <div className="relative border-b-2  border-slate-500 flex justify-center overflow-visible">
                <img
                  src="/business-Photoroom.webp"
                  alt="Executive Consultation"
                  className="relative z-10
                    h-auto w-auto max-w-full
                    max-h-[380px]
                    sm:max-h-[480px]
                    md:max-h-[580px]
                    lg:h-[700px] lg:w-full lg:max-h-none lg:max-w-none
                    object-contain
                    lg:object-cover lg:object-top
                    transition-all duration-[1.5s] ease-out
                    [filter:drop-shadow(15px_15px_20px_rgba(0,0,0,0.15))_drop-shadow(30px_40px_40px_rgba(0,0,0,0.30))]"
                />
                {/* Glass Reflection */}
                <div className="pointer-events-none absolute inset-0 z-20 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -z-20 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl px-2 md:px-0 mx-auto lg:mx-0">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1]">
                Built for the <br />
                <span className="text-primary">Maldives Market.</span>
              </h2>

              <p className="mt-6 lg:mt-10 text-base lg:text-lg leading-relaxed text-slate-500">
                LushWare is exclusively focused on the Maldivian digital
                ecosystem. We understand resort operations, island logistics,
                and local business workflows—delivering software that fits
                seamlessly into how Maldives businesses actually operate.
              </p>

              {/* Feature Cards Grid */}
              <div className="mt-8 lg:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6 lg:p-8 transition-colors hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900">
                    Maldives-Focused Expertise
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Deep understanding of resorts, travel agencies, and
                    island-based operations.
                  </p>
                </div>

                <div className="rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6 lg:p-8 transition-colors hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900">
                    Built for Island Logistics
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Systems designed around transfers, bookings, and
                    multi-location coordination.
                  </p>
                </div>

                <div className="rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6 lg:p-8 transition-colors hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900">
                    Reliable Local Support
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Fast response times aligned with your timezone and business
                    hours.
                  </p>
                </div>

                <div className="rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6 lg:p-8 transition-colors hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900">
                    Scalable for Growth
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Flexible platforms that evolve with expanding resorts and
                    digital services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
