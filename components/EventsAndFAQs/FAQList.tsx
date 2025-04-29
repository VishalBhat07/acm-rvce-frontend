import React from "react";
import FAQItem from "./FAQItem";
import { FAQ } from "@/lib/config/eventsFAQS";

interface FAQListProps {
  faqs: FAQ[];
  openFAQIndex: number | null;
  setOpenFAQIndex: (index: number | null) => void;
}

const FAQList: React.FC<FAQListProps> = ({ faqs, openFAQIndex, setOpenFAQIndex }) => (
  <div className="space-y-6">
    {faqs.map((faq, index) => (
      <FAQItem
        key={index}
        faq={faq}
        isOpen={openFAQIndex === index}
        onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
        delay={index * 100}
      />
    ))}
  </div>
);

export default FAQList;
