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
  backgroundColor?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  items,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const isOpen = (id: string) => openId === id || hoverId === id;

  return (
    <section className="bg-[#ffffff] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl lg:max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 font-headline text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-on-surface-variant sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              className="group overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-md hover:border-outline-variant/40"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-all duration-300 sm:px-6 sm:py-5 md:px-8 ${
                  isOpen(item.id)
                    ? "bg-[#26AEBF]/20"
                    : "group-hover:bg-surface-container-low"
                }`}
              >
                <h3 className="font-headline text-base font-bold leading-snug text-on-surface sm:text-lg md:text-xl">
                  {item.question}
                </h3>

                <span
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    isOpen(item.id) ? "rotate-180 scale-110" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    expand_more
                  </span>
                </span>
              </button>

              {/* Answer Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen(item.id)
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-outline-variant/20 px-4 py-4 text-sm text-on-surface-variant sm:px-6 sm:py-5 sm:text-base md:px-8">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="mb-5 text-sm text-on-surface-variant sm:text-base">
            Didn't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-gradient-to-br from-primary to-primary-container px-6 py-3 text-sm font-bold text-on-primary shadow-[0_10px_20px_rgba(0,104,116,0.15)] transition-all hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
          >
            Contact Our Support Team
          </Link>
        </div>

      </div>
    </section>
  );
}