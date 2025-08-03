"use client";

import { motion, Variants } from "framer-motion";

export default function Portfolio() {
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

  const cardVariables: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
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
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-blue-50 text-blue-700 border-blue-200"
      >
        Built with Founders, Backed by Results
      </motion.div>
      <motion.h1
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        We Partner With Founders Who Build Boldly
      </motion.h1>
      <motion.p
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg text-gray-600 mb-8"
      >
        From acquisitions and capital raises to IPOs, we&apos;ve helped
        visionary teams scale and exit with impact.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.div
          custom={0}
          variants={cardVariables}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
        >
          <div className="mb-4 w-12 h-12 mx-auto border-2 rounded-full border-green-600 flex items-center justify-center text-green-600 font-extrabold text-xl">
            CD
          </div>
          <h2 className="font-semibold text-gray-900 mb-3">Crazy Domains</h2>
          <p className="text-gray-600 text-sm mb-3">
            Listed on the ASX (DN8) after DN8 was privatized in late 2019 and
            acquired in
          </p>
          <h3 className="font-medium text-gray-900">Private Acquisition</h3>
        </motion.div>

        <motion.div
          custom={1}
          variants={cardVariables}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
        >
          <div className="mb-4 w-12 h-12 mx-auto border-2 rounded-full border-red-600 flex items-center justify-center text-red-600 font-extrabold text-xl">
            V
          </div>
          <h2 className="font-semibold text-gray-900 mb-3">
            Vodien Cloud Hosting
          </h2>
          <p className="text-gray-600 text-sm mb-3">
            Singapore&apos;s #1 Web Hosting Provider, Data Center
          </p>
          <h3 className="font-medium text-gray-900">$30M - Raised Capital</h3>
        </motion.div>

        <motion.div
          custom={2}
          variants={cardVariables}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
        >
          <div className="mb-4 w-12 h-12 mx-auto border-2 rounded-full border-pink-600 flex items-center justify-center text-pink-600 font-extrabold text-xl">
            S
          </div>
          <h2 className="font-semibold text-gray-900 mb-3">Siteplus.com</h2>
          <p className="text-gray-600 text-sm mb-3">
            SaaS intuitive AI Website Builder Applciation
          </p>
          <h3 className="font-medium text-gray-900">$15M - Raised Capital</h3>
        </motion.div>
      </div>
    </section>
  );
}
