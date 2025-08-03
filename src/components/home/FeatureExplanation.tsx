"use client";

import { Check, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function FeatureExplanation() {
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
    <section className="text-center mt-24 py-16 bg-gray-50 border-y border-gray-200">
      <motion.div
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-blue-50 text-blue-700 border-blue-200"
      >
        End-to-End Fundraising Support
      </motion.div>
      <motion.h1
        variants={initialVarients}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Solve Funding Blockers Fast
      </motion.h1>
      <motion.p
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-lg text-gray-600 mb-8"
      >
        We fix what&apos;s stopping you—pitch, access, or strategy—so you can
        close real investor deals.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6"
      >
        <div className="bg-red-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 rounded-full bg-red-600" />
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Challenges Founders Face
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                No access to the right investors
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                Weak or outdated pitch decks
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                Cold outreach with zero response
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                No clue what investors actually want
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                Stalled growth despite a great product
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                Lack of credibility or traction story
              </span>
            </li>
            <li className="flex items-center gap-2">
              <X size={22} className="text-red-500" />
              <span className="text-gray-700">
                Frustration with vague feedback
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-4 rounded-full bg-green-600" />
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              How Bluegeko Helps
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Warm intros to aligned investors
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Professional pitch deck support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Strategic positioning and storytelling
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Tailored feedback from ex-VCs & operators
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Access to high-net-worth individuals
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Investor-ready polish on messaging and metrics
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={22} className="text-green-500" />
              <span className="text-gray-700">
                Hands-on guidance from Pre-Seed to Series A
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-8 text-center max-w-xl mx-auto"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-4 inline-block">
          <p className="text-blue-800 font-medium">Typical Results</p>
          <p className="text-blue-900 font-bold text-lg">
            Raise faster with warm intros, polished decks, and expert VC
            feedback.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
