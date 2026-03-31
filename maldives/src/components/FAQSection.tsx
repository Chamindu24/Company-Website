import { useState } from "react";

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
    <section className={` bg-[#ffffff] px-6 py-24 md:px-8`}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl font-extrabold tracking-tight text-on-surface lg:text-5xl">
            {title}
          </h2>
          <p className="text-lg text-on-surface-variant">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              className="overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container-lowest transition-all hover:border-outline-variant/40"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-surface-container-low md:px-8"
              >
                <h3 className="pr-8 font-headline text-lg font-bold text-on-surface">
                  {item.question}
                </h3>
                <span
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    isOpen(item.id) ? "rotate-180" : ""
                  }`}
                >
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </span>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(item.id) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-outline-variant/20 px-6 py-5 text-on-surface-variant md:px-8">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-on-surface-variant">
            Didn't find what you're looking for?
          </p>
          <button className="rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-bold text-on-primary shadow-[0_10px_20px_rgba(0,104,116,0.15)] transition-transform hover:scale-105">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
