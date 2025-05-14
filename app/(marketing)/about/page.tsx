"use client";

import AcmSection from "@/components/about/acm-section";
import RvceSection from "@/components/about/rvce-section";


export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen">
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <AcmSection />
          <RvceSection />
        </div>
      </section>
    </div>
  );
}
