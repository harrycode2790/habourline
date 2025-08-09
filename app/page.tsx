"use client";

import { motion, Variants } from "framer-motion";

import BlogPage from "@/components/BlogPage";
import FaqPage from "@/components/FaqPage";
import FooterPage from "@/components/FooterPage";
import Header from "@/components/Header";
import HeroPage from "@/components/HeroPage";
import IndustrialPage from "@/components/IndustrialPage";
import TestimonialPgae from "@/components/TestimonialPgae";

// Animation settings
const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export default function Page() {
  return (
    <>
      <Header />

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="px-6 py-12 md:py-20 md:px-50"
      >
        <HeroPage />
      </motion.div>

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <IndustrialPage />
      </motion.div>

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="px-6 py-12 md:py-20 md:px-50"
      >
        <TestimonialPgae />
      </motion.div>

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="px-6 py-12 md:py-20 md:px-50"
      >
        <BlogPage />
      </motion.div>

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
         className="px-6 py-12 md:py-20 md:px-50"
      >
        <FaqPage />
      </motion.div>

      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="px-6 py-12 md:py-20 md:px-50"
      >
        <FooterPage />
      </motion.div>
    </>
  );
}
