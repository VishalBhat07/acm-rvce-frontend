import React from "react";
import { FAQ } from "@/lib/config/eventsFAQS";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onClick, delay }) => (
  <div
    className="border-b border-gray-100 dark:border-[var(--card-foreground)]/10 pb-6 last:border-0 last:pb-0"
    style={{ animationDelay: `${delay}ms` }}
  >
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left focus:outline-none group"
    >
      <h3 className="text-lg font-semibold">{faq.question}</h3>
      <span className={`ml-4 flex-shrink-0 w-5 h-5 rounded-full bg-[#0466c810] flex items-center justify-center ${isOpen ? "bg-[#0466c8]" : ""}`}>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-white" : "text-[#0466c8]"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>

    <div className={`mt-3 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
      <p className="text-base leading-relaxed">{faq.answer}</p>
    </div>
  </div>
);

export default FAQItem;
