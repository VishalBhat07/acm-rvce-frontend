"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { rvceSectionConfig } from "@/lib/config/about-page-config";

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

const item = {
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

export default function RvceSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl"
    >
      <motion.div variants={item} className="mb-16 text-center">
        <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {rvceSectionConfig.title}
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">
          {rvceSectionConfig.heading}
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
            src={rvceSectionConfig.image.src}
            alt={rvceSectionConfig.image.alt}
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
              {rvceSectionConfig.descriptionParagraphs.map((paragraph, index) => (
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
              {rvceSectionConfig.achievements.subheading}
            </h3>
            <motion.ul variants={container} className="space-y-3 md:space-y-4">
              {rvceSectionConfig.achievements.list.map((achievement, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-sky-500/20 text-sm font-medium text-blue-600 md:h-6 md:w-6 dark:text-blue-400">
                    ✓
                  </span>
                  <p className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                    {achievement}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-3 gap-4 md:gap-6"
          >
            {rvceSectionConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="rounded-xl border border-white/20 bg-white/40 p-4 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-2xl md:p-6 dark:border-gray-700/30 dark:bg-gray-800/40 dark:hover:bg-gray-800/60"
              >
                <div className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-gray-600 md:mt-2 md:text-sm dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 