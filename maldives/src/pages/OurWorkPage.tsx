import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";

const stats = [
  {
    value: "+120",
    label: "Projects Delivered",
    valueColor: "text-primary",
    cardClass:
      "bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]",
    labelClass: "text-on-surface-variant",
  },
  {
    value: "+80",
    label: "Strategic Clients",
    valueColor: "text-on-primary",
    cardClass:
      "bg-gradient-to-br from-primary to-primary-container shadow-xl text-on-primary",
    labelClass: "text-white/80",
  },
  {
    value: "+99%",
    label: "Satisfaction Rate",
    valueColor: "text-tertiary",
    cardClass:
      "bg-surface-container-lowest shadow-[0_20px_40px_rgba(0,104,116,0.06)]",
    labelClass: "text-on-surface-variant",
  },
];

const projects = [
  {
    name: "Travel Booking Website",
    client: "Trip Sky Way",
    summary:
      "Trip Sky Way is a modern travel booking platform designed to help travelers discover destinations and plan seamless journeys.",
    description:
      "We built a responsive travel platform with intuitive navigation, fast performance, and seamless booking experiences tailored for modern travelers worldwide.",
    image: "/work/TripSkyWay.jpg",
    link: "https://tripskyway.com/",
  },
  {
    name: "Tour & Travel Website",
    client: "Holiday Vibes Tour",
    summary:
      "Holiday Vibes Tour is a travel website built to promote curated tours and immersive travel experiences.",
    description:
      "We created a vibrant platform enabling users to explore curated tour packages, detailed itineraries, and easily connect with travel experts seamlessly.",
    image: "/work/HolidayVibesTour.jpg",
    link: "https://holidayvibestour.com/",
  },
  {
    name: "B2B Portal for Travel Agents",
    client: "Yomaldives",
    summary:
      "Yomaldives, a B2B portal designed to help travel agents boost their revenue.",
    description:
      "We delivered a tailored B2B platform empowering travel agents to streamline operations, increase revenue, and efficiently manage bookings with ease daily.",
    image: "/work/yomaldives.png",
    link: "https://yomaldives.live/",
  },

  {
    name: "Speedboat Ticket Booking System",
    client: "Dream Speed",
    summary:
      "We're thrilled to showcase our latest project, the Dream Speed Speedboat Booking System. We developed this platform to help travelers effortlessly search routes, check availability, and book their island journeys in the Maldives.",
    description:
      "This project reflects our commitment to building bespoke platforms that simplify bookings, optimize operations, and deliver seamless experiences for travelers globally.",
    image: "/work/dreamspeed.png",
    link: "https://www.dreamspeedmaldives.com/",
  },
  {
    name: "All-in-one Travel Agency Web Application",
    client: "Islekey Holidays",
    summary:
      "We're excited to showcase a project close to our hearts: IsleKey Holdings, an all-in-one web application for a travel agency.",
    description:
      "We developed a comprehensive platform that streamlines bookings, enhances user experiences, and empowers travel agencies to manage operations efficiently and grow.",
    image: "/work/islekeyholidays.png",
    link: "https://islekeyholidays.com/",
  },
  {
    name: "Travel Agency Website",
    client: "Traveliccted",
    summary:
      "Traveliccted is a travel-focused website built to showcase curated travel experiences and destination packages.",
    description:
      "This project highlights our ability to create engaging platforms with strong storytelling, seamless navigation, and conversion-focused designs for travel businesses worldwide.",
    image: "/work/Traveliccted.jpg",
    link: "https://traveliccted.com/",
  },
  {
    name: "Travel E-Commerce Platform",
    client: "Crown Voyages",
    summary:
      "Crown Voyages is a travel-focused e-commerce platform designed to showcase and sell curated travel products and services.",
    description:
      "We built a scalable e-commerce platform featuring secure payments, dynamic product management, and a premium user experience tailored for travel businesses globally.",
    image: "/work/CrownVoyages.jpg",
    link: "https://crownvoyages.com/",
  },

  {
    name: "Travel Agency Websites",
    client: "Holiday Life",
    summary:
      "We're proud to showcase Holiday Life, a custom web application we developed for a travel agency.",
    description:
      "We created a seamless platform helping users discover ideal holidays while enabling businesses to deliver exceptional services and manage operations effectively every day.",
    image: "/work/holidaylife.jpg",
    link: "https://holidaylife.travel/",
  },
];

function OurWorkPage() {
  return (
    <main className="bg-[#ffffff] pb-24 pt-32 text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <PinnedScrollHeadlineSection
        badge="Case Studies"
        titlePrefix="Empowering the"
        highlightText="Maldives Hospitality"
        titleSuffix="Ecosystem"
        description="We partner with the world's most prestigious island resorts and marine conservationists to redefine digital operations in paradise."
      />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Luxurious overwater bungalows in a Maldivian turquoise lagoon with crystal clear water and bright sunny skies"
              src="https://cdn.home-designing.com/wp-content/uploads/2011/12/maldives-resort-villa-1024x724.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold tracking-tight uppercase font-label">
                  Resort
                </span>
                <span className="text-white text-sm font-medium">
                  Flagship Implementation
                </span>
              </div>
              <h3 className="text-4xl font-headline font-bold mb-2">
                Velana Sapphire Estate
              </h3>
              <p className="text-white/90 max-w-md">
                Full-stack operational automation across 120 villas and private
                yacht concierge.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container rounded-xl p-10 flex flex-col justify-between text-on-primary-container relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-white/95 font-bold tracking-widest text-xs uppercase font-label">
                The Impact
              </span>
              <h3 className="text-3xl font-headline font-bold text-white mt-4 mb-6 leading-tight">
                Digital transformation beyond expectations.
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">
                    verified
                  </span>
                  <div>
                    <p className="text-white font-semibold">99.8% Uptime</p>
                    <p className="text-on-primary-container text-sm">
                      Critical hospitality infrastructure reliability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">
                    speed
                  </span>
                  <div>
                    <p className="text-white font-semibold">
                      35% Efficiency Gain
                    </p>
                    <p className="text-on-primary-container text-sm">
                      Reduced manual guest service overhead.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-headline font-bold transition-colors border border-white/10">
                Read Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-32 max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center rounded-xl p-10 text-center ${stat.cardClass}`}
            >
              <span
                className={`mb-2 font-headline text-5xl font-extrabold md:text-6xl ${stat.valueColor}`}
              >
                {stat.value}
              </span>
              <span
                className={`font-label text-sm font-medium uppercase tracking-widest ${stat.labelClass}`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-0 py-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">
            Recent Deployments
          </h2>
          <div className="flex gap-2">
            <span className="px-5 py-2 bg-surface-container-highest text-primary font-bold rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              All
            </span>
            <span className="px-5 py-2 bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Resorts
            </span>
            <span className="px-5 py-2 bg-surface-container-low text-on-surface-variant font-medium rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">
              Marine
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.client} className="flex flex-col  group">
              <div className="relative mb-6 overflow-hidden rounded-xl  bg-surface-container shadow-sm group-hover:shadow-lg transition-all">
                <img
                  className="w-full h-full aspect-video min-h-[350px]  transition-transform duration-500"
                  src={project.image}
                  alt={project.name}
                />
                <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-lg flex items-center justify-between border border-white/30">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-bold uppercase tracking-widest text-black font-label hover:text-primary-container transition-colors"
                  >
                    Live Project
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest font-label">
                  Travel
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-on-surface-variant text-xs">
                  {project.client}
                </span>
              </div>
              <h4 className="text-2xl font-headline font-bold mb-3 text-primary">
                {project.name}
              </h4>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                {project.description}
              </p>
              <div className="mt-auto border-t border-surface-container-highest pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      language
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-primary font-label uppercase tracking-tighter">
                      Live Website
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {project.link.replace("https://", "").replace(/\/$/, "")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-16 text-center md:p-24">
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
            <h2 className="mb-8 font-headline text-4xl font-bold leading-tight text-on-primary md:text-5xl">
              Ready to transform your resort experience?
            </h2>
            <p className="mb-12 text-lg text-white/80">
              Join the Maldives&apos; leading hospitality brands in the digital
              future.
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
  );
}

export default OurWorkPage;
