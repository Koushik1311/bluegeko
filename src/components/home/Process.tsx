"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ChartColumn,
  FileText,
  Lightbulb,
  Presentation,
  Rocket,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Container from "../global/Container";

export default function Process() {
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
        viewport={{ once: true, amount: 0.5 }}
        className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
      >
        <Zap size={16} />
        <>How It Actually Work</>
      </motion.div>
      <motion.h1
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        How We Get You Funded
      </motion.h1>
      <motion.p
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
      >
        From idea to investor-ready, we guide you through every critical stage
        with hands-on support.
      </motion.p>

      <Container>
        <div className="relative mt-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
          <div className="grid lg:grid-cols-5 gap-8 relative">
            {/* 1 */}
            <motion.div
              custom={0}
              variants={cardVariables}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-start">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border bg-blue-100 text-blue-600 border-blue-200">
                  <Lightbulb size={24} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  Review Your Idea
                </h2>
                <p className="text-sm text-gray-600">
                  We evaluate your startup&apos;s potential, market fit, and
                  alignment with investor interest.
                </p>
              </div>
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>

            {/* 2 */}
            <motion.div
              custom={1}
              variants={cardVariables}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-start">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border bg-purple-100 text-purple-600 border-purple-200">
                  <ChartColumn size={24} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  Build Your Investment Strategy
                </h2>
                <p className="text-sm text-gray-600">
                  Map out the funding journey—target rounds, valuation approach,
                  and capital needs.
                </p>
              </div>
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>

            {/* 3 */}
            <motion.div
              custom={2}
              variants={cardVariables}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-start">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border bg-green-100 text-green-600 border-green-200">
                  <Presentation size={24} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  Prepare a Winning Pitch Deck
                </h2>
                <p className="text-sm text-gray-600">
                  Craft a clear, compelling deck and narrative tailored for
                  enterprise investors.
                </p>
              </div>
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>

            {/* 4 */}
            <motion.div
              custom={3}
              variants={cardVariables}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-start">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border bg-orange-100 text-orange-600 border-orange-200">
                  <Users size={24} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  Connect with the Right Investors
                </h2>
                <p className="text-sm text-gray-600">
                  Get warm intros to high-conviction angels, VCs, and strategic
                  partners in your space.
                </p>
              </div>
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>

            {/* 5 */}
            <motion.div
              custom={4}
              variants={cardVariables}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-start">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </div>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 border bg-pink-100 text-pink-600 border-pink-200">
                  <FileText size={24} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  Navigate the Term Sheet
                </h2>
                <p className="text-sm text-gray-600">
                  We help you understand, negotiate, and close with terms that
                  support long-term success.
                </p>
              </div>
              <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0 }}
            >
              <Rocket size={32} className="text-blue-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <Zap size={32} className="text-violet-600" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <TrendingUp size={32} className="text-green-600" />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-bold mb-3"
          >
            We Also Invest in Future-Defining Startups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Beyond helping founders raise capital, Bluegeko actively partners
            with and invests in early-stage startups that are redefining the
            future of enterprise tech. We look for ambitious teams building
            defensible technology with global potential. Our investment focus
            includes cutting-edge sectors like AI, Machine Learning, Quantum
            Computing, Robotics, Advanced Materials, Cybersecurity, Space &
            Aerospace, Energy Innovation, and next-gen Enterprise Applications.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Submit your Startup
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
