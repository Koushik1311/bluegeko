"use client";

import { motion, Variants } from "framer-motion";

export default function CTA() {
  const initialVarients: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: () => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 550,
        damping: 20,
      },
    }),
  };

  return (
    <section className="text-center mt-24">
      <motion.div
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-green-50 text-green-700 border-green-200"
      >
        Off-Market Access
      </motion.div>
      <motion.h1
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Stay Connected with Off-Market Deals
      </motion.h1>
      <motion.p
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg text-gray-600 mb-8"
      >
        Be the first to hear about exclusive startup investment opportunities
        from across our global network.
      </motion.p>

      <motion.div
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto px-3"
      >
        <input
          type="email"
          placeholder="youremail@domain.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-grays-500 bg-gray-50 text-gray-800 transition-colors"
        />
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-medium transition-colors cursor-pointer text-nowrap">
          Connect
        </button>
      </motion.div>
    </section>
  );
}
