"use client";

import {
  ChartSpline,
  CircleDollarSign,
  Globe,
  MoveRight,
  Package,
  Rocket,
  Shield,
  Users,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const itemVarients: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 550,
        damping: 20,
      },
    }),
  };

  return (
    <section className="text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 700, // Higher = snappier
          damping: 18, // Lower = more bounce
          mass: 0.4, // Lower = faster
        }}
        className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium mb-8"
      >
        {/* Motion */}
        <div className="inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-blue-50 text-blue-700 border-blue-200 text-xs sm:text-sm">
          <Package size={14} />
          <span>40+ AI & Fintech Products Built</span>
        </div>
        <div className="inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-purple-50 text-purple-700 border-purple-200 text-xs sm:text-sm">
          <Globe size={14} />
          <span>3 Global Innovation Hubs</span>
        </div>
        <div className="inline-flex gap-1 items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-green-50 text-green-700 border-green-200 text-xs sm:text-sm">
          <CircleDollarSign size={14} />
          <span>$150M+ Capital Invested</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 18,
          mass: 0.4,
        }}
        className="inline-block mb-8"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
          🚀 No Upfront Commitments – Just Results
        </div>
      </motion.div>

      <motion.h1
        custom={0}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-6xl mx-auto leading-[60px] px-4 mb-8"
      >
        From Pitch to Product—We Bridge Startups with Capital
      </motion.h1>
      <motion.p
        custom={1}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto px-4"
      >
        We help founders refine their ideas, build world-class products, and
        connect with investors who believe in bold innovation. From Dubai to San
        Francisco, we&apos;re your partners in growth.
      </motion.p>

      <motion.div
        custom={2}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200 mb-8"
      >
        <Shield size={16} />
        <p>Zero Fees Until You&apos;re Funded</p>
      </motion.div>

      <motion.div
        custom={3}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 px-4"
      >
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            120+
          </div>
          <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-1">
            <Rocket size={16} />
            <>Startups Backed</>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            500+
          </div>
          <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-1">
            <Users size={16} />
            <>Investor Introductions</>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            200%
          </div>
          <div className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-1">
            <ChartSpline size={16} />
            <>Avg. Portfolio Growth</>
          </div>
        </div>
      </motion.div>

      <motion.div
        custom={4}
        variants={itemVarients}
        initial="hidden"
        animate="visible"
        className="inline-flex"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
            Submit your Startup
          </button>

          <button className="inline-flex gap-1 items-center rounded-lg border px-8 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-blue-100 bg-blue-50 text-blue-700 border-blue-200 text-sm cursor-pointer">
            <span>Let&apos;s Talk</span>
            <MoveRight size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
