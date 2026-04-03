import { Link } from "react-router-dom";
import HowItWorksSection from "../components/HowItWorksSection";
import LandingHeroSection from "../components/LandingHeroSection";

const ecosystemCards = [
  {
    icon: "directions_boat",
    title: "Viduvaru Boats",
    description:
      "Reliable inter-island boat service connecting resorts and local destinations.",
    route: "/viduvaru",
    textColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: "holiday_village",
    title: "Lush Hotel Cloud",
    description:
      "Premium guest experience platform optimized for luxury island resort environments.",
    route: "/hotelcloud",
    textColor: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: "apartment",
    title: "Property Management",
    description:
      "Next-generation PMS specifically engineered for multi-island property scaling.",
    route: "/real-estate-control",
    textColor: "text-tertiary",
    bgColor: "bg-tertiary/10",
  },
  {
    icon: "diversity_3",
    title: "Agency CRM",
    description:
      "Deep relationship management for travel agencies and destination managers.",
    route: "/travel-crm",
    textColor: "text-primary-container",
    bgColor: "bg-primary-container/10",
  },
];

const industries = [
  {
    label: "Resorts",
    icon: "hotel",
    hoverDescription:
      "Streamline villas, experiences, and guest journeys with one luxury-ready operations core.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmEcra37Tlk_kQTdctZ4DD9TZy4YNi_D64JQikv4lwyzXFQJEooM-Gi-V0XAFDA6bJ7iof3pH8wuBvsWXq7b6ypoPfwukDNYVUs6l5905NpnzFilj_tSrCVBm57V39GYhdymrz_LEAKopOVSp32cY7IpSEgx__Ta2tdZJnJwNXvCOF4yX9eYnBLjfgKnsU5JcHfXWqrULS1iUA8iWa6du-Bh07RDTPO1KH3UOHHhogiU1bSvS2xF8OZKVbcgOly_bjVCz2emMPAmr",
    alt: "Luxury Maldives resort with overwater villas and ocean sunset views",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    label: "Hotels",
    icon: "apartment",
    hoverDescription:
      "Unify front office, housekeeping, and revenue decisions across every room and rate.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern tropical hotel facade with warm evening lights",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    label: "Guesthouses",
    icon: "holiday_village",
    hoverDescription:
      "Run lean operations with smart bookings, digital check-in, and automated guest messaging.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLj_OFbebQ4esMM7NMJLh8mMmYFGJSqsPMkXcCsEllNzY58xwZh_nj0Ert7Hg4tdFOE1ELJN6F60s1dz_QATdXHM3yf2a2S5xwI9_rLs45V0wYvHO4w2V7_bptUFFNO_gyHNgM74GV5F6gXPDXHFyTrcaY8kujcTdHwpTYNbP_XYpBJskVdRkqUOBqL07tq6UqbYjCPzylF6us5s37W7QM9WYJrgPRnZK1gEntndAzth7toH84US_zZZHmOlp5MmhNfBQJar4b07jI",
    alt: "Colorful island guesthouse with tropical garden path",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    label: "Liveaboards",
    icon: "directions_boat",
    hoverDescription:
      "Coordinate cabins, dives, manifests, and onboard billing from one marine command view.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6l6Fu-RiA5fN4IPFL7i0-YV7MjCLTEDysJg9U00MTgNT9lizzJb7rbGPqsDdWFUaQVSOFvSEjh0Kg_NlQ3Fen8xPL8pwMJsCUnWz-l73GJ-yWiwcK05lCejRQgIBiOpo5XfDHhA8dZuc3BOZ0flGtFzaOQRwTuCKUyDILGlc8RGAuEvLer5RoR8bNHtayXupDCHZgl46sKxu1Kp6Hu_jThw4X_E3HVAsw41SLyYJH4PcHHlJKTK4PddR-6JsNKO2ARll75QiSiJZt",
    alt: "Luxury liveaboard yacht cruising through deep blue Maldivian waters",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Yacht Marina",
    icon: "sailing",
    hoverDescription:
      "Manage berths, fueling, maintenance slots, and owner services with precision scheduling.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    alt: "Premium marina with yachts docked along a calm waterfront",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Bareboat",
    icon: "kayaking",
    hoverDescription:
      "Automate charter handovers, compliance checks, and fleet utilization in real time.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    alt: "Bareboat charter vessel anchored in crystal clear lagoon",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Homestay",
    icon: "home_work",
    hoverDescription:
      "Deliver personal island hospitality with simple tools for hosts, bookings, and payments.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    alt: "Cozy island homestay interior with warm local design touches",
    className: "md:col-span-12 md:row-span-1",
  },
];

const whyChooseItems = [
  {
    icon: "public",
    title: "Built for Islands",
    description:
      "Infrastructure designed to work across distributed islands with optimized sync and low-latency connectivity.",
    color: "bg-primary",
  },
  {
    icon: "cloud_sync",
    title: "Cloud-based",
    description:
      "Access your entire operation from anywhere in the world. Real-time updates and effortless synchronization.",
    color: "bg-secondary",
  },
  {
    icon: "psychology",
    title: "AI-Powered",
    description:
      "Predictive analytics and intelligent automation that handles repetitive tasks so your team can focus on the guest.",
    color: "bg-tertiary",
  },
  {
    icon: "trending_up",
    title: "Scalable",
    description:
      "From a single guest house to a portfolio of luxury resorts, our system grows with your ambition.",
    color: "bg-primary-container",
  },
];

function LandingPage() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="">
        <LandingHeroSection />

        <section className="bg-[#ffffff] px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center ">
              <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tighter">
                Our Ecosystem
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
                Integrated tools designed to streamline every touchpoint of the
                guest journey and back-office operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 [perspective:1000px]">
              {ecosystemCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative h-[310px] w-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)] rounded-xl shadow-md"
                >
                  {/* Front Face */}
                  <div className="glass-card absolute inset-0 flex flex-col justify-center rounded-xl p-8 [backface-visibility:hidden]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-primary-container">
                      <span className="material-symbols-outlined text-5xl">
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                      {card.description}
                    </p>
                    <div
                      className={`flex items-center text-xs font-bold uppercase tracking-widest ${card.textColor}`}
                    >
                      Learn More
                      <span className="material-symbols-outlined ml-2 text-sm">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  {/* Back Face (Hover State) */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-xl p-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{ backgroundColor: "#1A7A88" }}
                  >
                    <h3 className="mb-4 text-2xl font-bold">
                      Explore {card.title}
                    </h3>
                    <p className="mb-6 text-sm opacity-90">
                      Discover how our software solutions can transform your
                      business workflow.
                    </p>
                    <Link
                      to={card.route}
                      className="rounded-full mt-6 border-2 border-white px-6 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-[#1A7A88]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#ffffff] px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="mb-4 text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Industries We Serve
                </h2>
                <p className="text-lg text-on-surface-variant">
                  From luxury private islands to intimate homestays, our
                  technology adapts to your scale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={`icon-${industry.label}`}
                  className="cursor-default rounded-lg border border-transparent p-6 text-center transition-all duration-500 ease-out transform-gpu hover:scale-[1.1] hover:border-primary/5"
                >
                  <span className="material-symbols-outlined mb-4 block text-8xl text-[#1F8FA0]">
                    {industry.icon}
                  </span>
                  <span className="text-lg font-bold uppercase tracking-widest text-on-surface">
                    {industry.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-6 font-headline text-4xl md:text-5xl  font-bold tracking-tighter text-primary ">
                Designed for Every Horizon
              </h2>
              <p className="mx-auto max-w-2xl text-on-surface-variant">
                From boutique guesthouses to sprawling private island resorts,
                our platform scales with your ambition.
              </p>
            </div>

            <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 px-4 py-8 bg-stone-50">
              {industries.map((industry, index) => (
                <div
                  key={industry.label}
                  className="group relative break-inside-avoid overflow-hidden rounded-md bg-stone-100 transition-all duration-500 hover:shadow-2xl"
                >
                  <div
                    className={`relative w-full overflow-hidden 
          aspect-[1] 
          sm:aspect-[3/4] 
          md:${
            index % 3 === 0
              ? "aspect-[3/4]"
              : index % 2 === 0
                ? "aspect-square"
                : "aspect-[4/5]"
          }`}
                  >
                    {/* Base Image: Grayscale to Color Transition */}
                    <img
                      className="h-full w-full object-cover grayscale-[50%] brightness-90 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                      src={industry.image}
                      alt={industry.alt}
                    />

                    {/* 1. Minimalist Header */}
                    <div className="absolute top-0 left-0 p-6 hidden md:flex items-center gap-3 transition-opacity duration-500 group-hover:opacity-0">
                      <span className="material-symbols-outlined text-[#26AEBF] text-2xl font-light leading-none">
                        {industry.icon || "star"}
                      </span>
                      <h3 className="text-white font-semibold text-sm uppercase tracking-wide drop-shadow-md">
                        {industry.label}
                      </h3>
                    </div>

                    {/* 2. The "Royal Reveal" Overlay (Centered Hover State) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 md:opacity-0 transition-all duration-700 ease-out md:group-hover:opacity-100 bg-stone-900/40 backdrop-blur-[3px]">
                      <div className="text-center p-6 transform translate-y-0 md:translate-y-8 transition-transform duration-500 ease-out md:group-hover:translate-y-0">
                        {/* Elegant Icon or Symbol */}
                        <span className="material-symbols-outlined text-white text-7xl mb-3 block font-extralight">
                          {industry.icon || "star"}
                        </span>

                        <h3 className="text-3xl text-white mb-2 tracking-tight">
                          {industry.label}
                        </h3>

                        <p className="text-stone-200 text-md leading-relaxed max-w-[180px] mx-auto opacity-100 md:opacity-0 transition-opacity duration-700 delay-100 md:group-hover:opacity-100">
                          {industry.hoverDescription}
                        </p>
                      </div>
                    </div>

                    {/* 3. Royal Framing: Thin Interior Border */}
                    <div className="absolute inset-4 border border-white/0 transition-all duration-700 group-hover:border-white/20 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorksSection />

        <section className="bg-[#FCFBFA]  px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-32">
          <h2 className="mb-8 text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Industry Leaders{" "}
            <span className="text-primary">
              Choose <br className="hidden sm:block" /> LUSHWARE
            </span>
          </h2>

          <div className="grid grid-cols-1  max-w-6xl mt-20 mt:mt-28  mx-auto gap-12 lg:grid-cols-2 lg:gap-16">
            {whyChooseItems.slice(0, 4).map((item, index) => (
              <div
                key={item.title}
                className="group flex flex-col items-start gap-8 border-l border-secondary/50 pl-8 transition-all duration-500 hover:border-secondary"
              >
                {/* Subtle Label */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold tabular-nums tracking-widest text-secondary">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-8 bg-secondary/50 transition-all duration-500 group-hover:w-16 group-hover:bg-secondary" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {/* Ultra-Light Iconography */}
                    <span className="material-symbols-outlined text-4xl font-extralight text-primary group-hover:text-secondary transition-colors duration-500">
                      {item.icon}
                    </span>
                    <h3 className="text-3xl font-semibold tracking-tighter text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-md text-lg leading-relaxed text-on-surface-variant/80">
                    {item.description}
                  </p>
                </div>

                {/* Interactive "Service" Link Style */}
                <div className="flex items-center gap-2 overflow-hidden text-xs font-bold uppercase tracking-[0.2em] text-primary/90 transition-all duration-500 group-hover:gap-4 group-hover:text-primary">
                  Explore Solution
                  <span className="material-symbols-outlined text-sm">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 bg-[#ffffff] py-16 sm:px-6 mb-24 sm:py-20 md:px-8 md:py-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-6 text-center sm:rounded-3xl sm:p-12 md:p-16 lg:p-16">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDOhuteQmcK_zdeVItlnPL-Mj11GxM7RYUy0eF4FTZ8UwdIwaqbjH2hQabjr41IbhExmc9AQdef1p3lxiaeVFC_n9V9PpgeX1VgyqZob_lIvYtaAxMzEt8TwjzhYk8ZNahGIp1KbJdCsLgtppJDGVsiR8pIRcCmW8Wv18Ac3r59WZp0zWOMqrOnH38d7A91xjedgiWJUDmJcZlq2zaOj_w2z3NNbjjmJ0HJD-NSfuWqyhk2vwB55WyLmZoIxAUlKPDU_t5lheYEeY"
                alt="Abstract water ripple texture"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-4 text-2xl font-extrabold tracking-tighter text-on-primary sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
                Ready to transform your hospitality experience?
              </h2>
              <p className="mb-8 text-sm text-primary-fixed opacity-90 sm:text-base md:mb-12 md:text-lg">
                Join the growing network of Maldivian properties leading the
                digital revolution with Viduvaru.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                <button className="w-full rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-2xl transition-all hover:bg-primary-fixed sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
                  Get Started Now
                </button>
                <button className="w-full rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
