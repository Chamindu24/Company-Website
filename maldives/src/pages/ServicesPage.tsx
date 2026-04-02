import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection.tsx";
import FAQSection from "../components/FAQSection";

const servicesFAQs = [
  {
    id: "services-faq-1",
    question: "What types of services does LushWare offer?",
    answer:
      "We specialize in digital transformation services tailored for Maldivian hospitality and enterprise businesses. Our offerings include CRM software, AI agents & chatbots, BPM automation, custom websites, and native mobile app development for iOS and Android.",
  },
  {
    id: "services-faq-2",
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on scope and complexity. A custom website typically takes 6-12 weeks, mobile apps 4-6 months, and enterprise CRM systems 8-16 weeks. We provide detailed timelines and milestone schedules during the initial consultation phase.",
  },
  {
    id: "services-faq-3",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely! We offer comprehensive post-launch support including regular updates, security patches, feature enhancements, and 24/7 technical assistance. Our support packages are customized to your needs and can be scaled as your business grows.",
  },
  {
    id: "services-faq-4",
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, integration is one of our core strengths. We connect new solutions with your existing systems, databases, and third-party tools seamlessly. Our APIs and custom integration work ensure smooth data flow across your entire technology stack.",
  },
  {
    id: "services-faq-5",
    question: "What happens if we need to scale our application?",
    answer:
      "Our solutions are built with scalability in mind from day one. Whether you need to handle more users, process more data, or expand to new features, our cloud-based architecture and modular design allow for seamless scaling without performance degradation.",
  },
];

function ServicesPage() {
  return (
    <main className="bg-[#ffffff] pb-24 pt-24 text-on-surface antialiased">
      <PinnedScrollHeadlineSection
        badge="Elevating Hospitality & Enterprise"
        titlePrefix="Expert Digital Services for"
        highlightText="Island Businesses"
        titleSuffix=""
        description="Transforming the Maldivian business landscape with tailored software solutions, automated intelligence, and premium digital experiences."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-semibold text-on-primary transition-all hover:opacity-90">
            Get Started{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary backdrop-blur-sm transition-all hover:bg-surface-container-highest">
            View Portfolio
          </button>
        </div>
      </PinnedScrollHeadlineSection>

      <section className="bg-surface px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {/* FEATURED CARD: CRM - Large Bento */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-3xl  border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group transition-all hover:shadow-[0_20px_50px_rgba(0,104,116,0.08)]">
              <div className="flex-1 z-10">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    groups
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 tracking-tight">
                  Advanced CRM Systems
                </h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-md">
                  Centralize guest experiences and property management with a
                  suite designed for the unique demands of high-end hospitality
                  and global operations.
                </p>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-full font-headline font-bold flex items-center gap-2 transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95">
                  Explore Features
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex-1 w-full h-full min-h-[300px] rounded-2xl  relative  border border-outline-variant/10">
                <img
                  alt="CRM Dashboard"
                  className="w-full h-full object-contain transform scale-110 transition-transform duration-1000"
                  src="https://www.power-crm.net/wp-content/uploads/2022/09/Power-CRM-Laptop-Sales-Dashboard-sm2.png"
                />
              </div>
            </div>

            {/* SECONDARY CARD: AI - Vertical Accent */}
            <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-container text-on-primary p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group ">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl transition-all group-hover:bg-white/20"></div>
              <div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-12 border border-white/30">
                  <span className="material-symbols-outlined text-3xl text-white">
                    psychology
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">
                  AI Agents & Chatbots
                </h3>
                <p className="text-white mb-8 leading-relaxed">
                  24/7 intelligent concierges that speak multiple languages and
                  handle bookings instantly across all digital channels.
                </p>
              </div>
              <button className="text-white font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all group/btn">
                Deploy Intelligence
                <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                  chevron_right
                </span>
              </button>
            </div>

            {/* TERTIARY CARD: BPM - Clean Square */}
            <div className="md:col-span-4  bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-outline-variant/60 flex flex-col justify-between hover:bg-surface-container-lowest transition-colors">
              <div>
                <div className="w-14 h-14  rounded-xl flex items-center justify-center mb-8 border border-secondary/10">
                  <span className="material-symbols-outlined text-4xl text-secondary">
                    schema
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">
                  BPM Automation
                </h3>
                <p className="text-on-surface-variant mb-10 leading-relaxed">
                  Optimize logistics, supply chains, and staff workflows with
                  powerful distributed process automation.
                </p>
              </div>
              <button className="w-full py-4 rounded-2xl border-2 border-outline-variant text-on-surface font-headline font-bold hover:bg-gradient-to-br from-primary to-primary-container hover:text-on-primary hover:border-primary duration-500 transition-all">
                Streamline Workflows
              </button>
            </div>

            {/* QUATERNARY CARD: Web - Inverted Horizontal */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 flex flex-col md:flex-row-reverse gap-8 items-center overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex-1">
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-8 border border-tertiary/10">
                  <span className="material-symbols-outlined text-4xl text-tertiary">
                    language
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
                  Corporate Design
                </h3>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Premium, editorial-grade web experiences that reflect the
                  luxury of your brand. Optimized for global visibility.
                </p>
                <button className="inline-flex items-center gap-2 font-headline font-bold text-primary group/link">
                  View Portfolio
                  <span className="material-symbols-outlined text-xl transition-transform group-hover/link:translate-x-1">
                    open_in_new
                  </span>
                </button>
              </div>
              <div className="flex-1 w-full h-full min-h-[300px] rounded-2xl overflow-hidden  border border-outline-variant/10">
                <img
                  alt="Web Design Project"
                  className="w-full h-full object-contain scale-110 transition-all duration-700"
                  src="https://img.freepik.com/premium-vector/responsive-website-design-with-laptop-computer-mobile-phone-tablet-pc-screen-illustration_47012-91.jpg"
                />
              </div>
            </div>

            {/* CTA CARD: Mobile App - Full Width Impact */}
            <div className="md:col-span-12 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,104,116,0.2),transparent)] pointer-events-none"></div>
              <div className="md:w-1/2 z-10">
                <span className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                  Native & Cross-Platform
                </span>
                <h3 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
                  Mobile Excellence
                </h3>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                  High-performance mobile apps for bookings, internal
                  communications, and digital concierge services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-10 border-2 border-outline-variant py-4 rounded-full font-headline font-extrabold shadow-xl hover:bg-primary hover:text-white transition-all active:scale-95">
                    Start Building
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 z-10">
                <div className="relative group">
                  <img
                    alt="Mobile App Preview"
                    className="relative z-10 rounded-[2.5rem]  scale-110 transition-transform duration-700"
                    src="https://woictech.in/wp-content/uploads/2024/04/Mobile-Apps-Development-2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={servicesFAQs}
        title="Services FAQs"
        subtitle="Common questions about our digital services and solutions"
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div
          className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl shadow-2xl
                  h-auto min-h-[360px] sm:min-h-[400px] md:h-[450px]"
        >
          {/* Background Image */}
          <img
            alt="Luxurious resort setting"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://t4.ftcdn.net/jpg/02/74/31/83/360_F_274318370_wBHOPOO8AYRapUFkxgkioO2xtCsZvkXi.jpg"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Gradient + Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-6 sm:p-10 md:p-12 text-center">
            <div className="relative z-10 max-w-3xl w-full">
              <h2 className="mb-4 sm:mb-5 md:mb-6 font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to start your digital journey?
              </h2>

              <p className="mb-7 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-slate-100 max-w-xl mx-auto">
                Join the leading resorts and businesses in the Maldives who
                trust Viduvaru for their digital transformation. Our solutions
                currently power operations for over 45 luxury island
                destinations.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:gap-6">
                <button className="w-full sm:w-auto rounded-full bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-primary shadow-xl transition-all hover:scale-105 active:scale-95">
                  Schedule a Free Consultation
                </button>
                <button className="w-full sm:w-auto rounded-full border border-white/30 bg-white/10 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl sm:-left-16 sm:-top-16 sm:h-52 sm:w-52 md:-left-24 md:-top-24 md:h-64 md:w-64" />
          <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-secondary/20 blur-3xl sm:-bottom-16 sm:-right-16 sm:h-52 sm:w-52 md:-bottom-24 md:-right-24 md:h-64 md:w-64" />
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
