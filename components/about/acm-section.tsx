"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { acmSectionConfig } from "@/lib/config/about-page-config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AcmSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto mb-24 max-w-6xl"
    >
      <motion.div variants={item} className="mb-16 text-center">
        <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {acmSectionConfig.title}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">
          {acmSectionConfig.heading}
        </h2>
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
      </motion.div>

      <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
        <motion.div
          variants={item}
          className="relative h-[40vh] min-h-[300px] rounded-2xl shadow-2xl lg:h-full"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-sky-500/10"></div>
          <Image
            src={acmSectionConfig.image.src}
            alt={acmSectionConfig.image.alt}
            fill
            className="transform rounded-2xl object-cover object-center transition-transform duration-700 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
        </motion.div>

        <motion.div variants={container} className="space-y-6 md:space-y-8">
          <motion.div
            variants={item}
            className="rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:border-gray-700/30 dark:bg-gray-800/40"
          >
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {acmSectionConfig.descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className={`text-base leading-relaxed md:text-lg ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:border-gray-700/30 dark:bg-gray-800/40"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900 md:mb-6 md:text-xl dark:text-gray-50">
              {acmSectionConfig.focusAreas.subheading}
            </h3>
            <motion.ul variants={container} className="space-y-3 md:space-y-4">
              {acmSectionConfig.focusAreas.list.map((area, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-sky-500/20 text-sm font-medium text-blue-600 md:h-6 md:w-6 dark:text-blue-400">
                    ✓
                  </span>
                  <p className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                    {area}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 