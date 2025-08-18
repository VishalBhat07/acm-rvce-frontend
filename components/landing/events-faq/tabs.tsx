import React from "react";

interface TabsProps {
  activeTab: "events" | "faqs";
  setActiveTab: (tab: "events" | "faqs") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center mb-6 space-x-4">
    {["events", "faqs"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab as "events" | "faqs")}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === tab
            ? "bg-[#0466c8] text-white"
            : "bg-gray-100 dark:bg-gray-700 text-[#0466c8] dark:text-white"
          }`}
      >
        {tab.toUpperCase()}
      </button>
    ))}
  </div>
);

export default Tabs;
