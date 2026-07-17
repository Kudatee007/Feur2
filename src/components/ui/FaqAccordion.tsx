import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-[#DBE9E6] rounded-lg overflow-hidden bg-[#F1F9FB] transition-shadow duration-200"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            >
              <span className="text-sm font-medium text-[#2F414F] leading-snug">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#C7DAD4] flex items-center justify-center text-[#3894A3] transition-colors duration-200 ${isOpen ? "bg-[#3894A3]/10" : "bg-white"}`}
              >
                {isOpen ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </span>
            </button>

            {/* Answer — animated expand */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}