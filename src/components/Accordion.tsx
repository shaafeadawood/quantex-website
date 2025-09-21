"use client";

import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subtle rounded-xl border border-border-subtle bg-background-card">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl"
            >
              <span className="font-medium text-text-primary">{item.question}</span>
              <span
                className={`shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-border-subtle text-text-muted transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
