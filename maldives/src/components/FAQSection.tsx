import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  items,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#ffffff] px-4 py-20 sm:px-6 sm:py-28 md:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header - Royal/Premium Centered Style */}
        <div className="mb-16 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
            Assistance
          </span>
          <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-on-surface sm:text-5xl lg:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant/80">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                // Hover functionality added here
                onMouseEnter={() => setOpenId(item.id)}
                onMouseLeave={() => setOpenId(null)}
                className={`group overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${
                  isOpen 
                    ? "border-primary/40 bg-surface-container-lowest shadow-2xl shadow-primary/10 translate-y-[-4px]" 
                    : "border-outline-variant/10 bg-white hover:border-primary/20"
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
                >
                  <span className={`font-headline text-lg font-bold transition-colors duration-300 sm:text-xl ${
                    isOpen ? "text-primary" : "text-on-surface"
                  }`}>
                    {item.question}
                  </span>

                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isOpen 
                      ? "bg-primary text-white rotate-180 border-primary shadow-lg " 
                      : "bg-surface-container-low text-primary border-outline-variant/20"
                  }`}>
                    <span className="material-symbols-outlined text-2xl font-light">
                      expand_more
                    </span>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 pt-2 sm:px-8 sm:pb-10">
                      {/* Premium Divider */}
                      <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent"></div>
                      <p className="text-base leading-loose text-on-surface-variant/90 sm:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-3xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm sm:flex-row sm:gap-12 sm:px-12">
            <p className="text-base font-medium text-on-surface-variant">
              Still have questions? We are here to help.
            </p>
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-sm font-bold tracking-widest uppercase text-on-primary transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30"
            >
              <span className="relative z-10">Contact Support</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}