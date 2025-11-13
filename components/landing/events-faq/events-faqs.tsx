"use client";

// Required libraries:
// npm install framer-motion lucide-react clsx tailwind-merge
import React, { useEffect, useId, useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, ChevronDown, X } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useOutsideClick } from "@/hooks/use-outside-click";

// --- Sanity & Local Types ---
export interface Event {
  _id: string;
  title?: string;
  slug?: { current?: string };
  date?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  registrationLink?: string;
  fullDescription?: ReactNode;
}

export interface FAQ {
  question: string;
  answer: string;
}

// --- Local utility functions ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDate(dateString?: string): string {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
    });
}

const CloseIcon = () => (
    <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.05 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-slate-100">
        <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
    </motion.svg>
);

const Tabs: React.FC<{ activeTab: string; setActiveTab: (tab: "events" | "faqs") => void }> = ({ activeTab, setActiveTab }) => {
    const tabs = [{id: "events", label: "Upcoming Events"}, {id: "faqs", label: "FAQs"}];
    return (
        <div className="flex space-x-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 w-full max-w-sm mx-auto mb-12">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as "events" | "faqs")}
                    className={cn("relative w-full rounded-full py-2.5 text-sm font-medium transition focus-visible:outline-2", activeTab === tab.id ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white/60")}
                >
                    {activeTab === tab.id && <motion.span layoutId="bubble" className="absolute inset-0 z-10 bg-white dark:bg-slate-700/50 rounded-full shadow-sm" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    <span className="relative z-20">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void; index: number; }> = ({ faq, isOpen, onClick, index }) => (
  <motion.div className="border-b border-slate-200 dark:border-slate-800 pb-4 last:border-0 last:pb-0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
    <button onClick={onClick} className="flex justify-between items-center w-full text-left py-2 focus:outline-none group">
      <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{faq.question}</h3>
      <motion.div className="ml-4 flex-shrink-0" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"}`} />
      </motion.div>
    </button>
    <AnimatePresence>
        {isOpen && <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
            </motion.div>}
    </AnimatePresence>
  </motion.div>
);

// --- Main EventsAndFAQs Component ---
interface EventsAndFAQsProps {
  events: Event[];
  faqs: FAQ[];
}

const EventsAndFAQs: React.FC<EventsAndFAQsProps> = ({ events, faqs }) => {
  const [activeTab, setActiveTab] = useState<"events" | "faqs">("events");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [activeCard, setActiveCard] = useState<Event | null>(null);
  const ref = useRef<HTMLDivElement>(null!);
  const layoutId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCard(null);
    };
    document.body.style.overflow = activeCard ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCard]);

  useOutsideClick(ref, () => setActiveCard(null));

  return (
    <div className="max-w-4xl mx-auto p-4">
        <AnimatePresence>
            {activeCard && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10"
                />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {activeCard ? (
                <div className="fixed inset-0 grid place-items-center z-[100]">
                    <motion.button
                        key={`button-${activeCard._id}-${layoutId}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                        onClick={() => setActiveCard(null)}
                    >
                        <CloseIcon />
                    </motion.button>
                    <motion.div
                        layoutId={`card-${activeCard._id}-${layoutId}`}
                        ref={ref}
                        className="w-full max-w-2xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-slate-900 sm:rounded-3xl overflow-hidden"
                    >
                        <motion.div layoutId={`image-${activeCard._id}-${layoutId}`}>
                            <img
                                width={200}
                                height={200}
                                src={activeCard.imageUrl}
                                alt={activeCard.title || ""}
                                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                            />
                        </motion.div>

                        <div>
                            <div className="flex justify-between items-start p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${activeCard._id}-${layoutId}`}
                                        className="font-bold text-neutral-700 dark:text-neutral-200"
                                    >
                                        {activeCard.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${activeCard._id}-${layoutId}`}
                                        className="text-neutral-600 dark:text-neutral-400 flex items-center gap-2 mt-2"
                                    >
                                        <CalendarDays className="w-4 h-4" />
                                        <span>{formatDate(activeCard.date)}</span>
                                    </motion.p>
                                </div>

                                <motion.a
                                    layoutId={`cta-${activeCard._id}-${layoutId}`}
                                    href={activeCard.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                >
                                    Register
                                </motion.a>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                    {activeCard.fullDescription || activeCard.description}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div>
        {activeTab === "events" ? (
          <ul className="max-w-2xl mx-auto w-full gap-4">
            {events.map((event) => (
              <motion.div
                layoutId={`card-${event._id}-${layoutId}`}
                key={`card-${event._id}-${layoutId}`}
                onClick={() => setActiveCard(event)}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${event._id}-${layoutId}`} className="w-full md:w-32 h-40 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={event.imageUrl} alt={event.title || ""} className="w-full h-full object-cover" />
                </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${event._id}-${layoutId}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {event.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${event._id}-${layoutId}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left flex items-center gap-2 mt-1"
                    >
                      <CalendarDays className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`cta-${event._id}-${layoutId}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                  Details
                </motion.button>
              </motion.div>
            ))}
             <div className="text-center pt-8">
                <a href="/events" className="px-6 py-3 text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-white transition-all duration-300 text-sm font-medium">
                    View All Events
                </a>
            </div>
          </ul>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} isOpen={openFAQIndex === index} onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsAndFAQs;

