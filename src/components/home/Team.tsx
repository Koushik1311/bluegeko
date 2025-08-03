"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Team() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.2,
        type: "spring",
        stiffness: 550,
        damping: 20,
      },
    }),
  };

  return (
    <section className="text-center mt-24 pt-20 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="mb-16">
        <motion.div
          variants={initialVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-purple-500/20 text-purple-300 border-purple-400"
        >
          Meet the Team Behind Bluegeko
        </motion.div>
        <motion.h1
          variants={initialVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          The Team Driving{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Capital & Growth
          </span>
        </motion.h1>
        <motion.p
          variants={initialVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          A lean, hands-on team built to support founders through capital,
          connections, and critical decisions.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-start">
          <motion.div
            custom={0}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/1.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/2.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/3.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/4.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/5.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>

          <motion.div
            custom={5}
            variants={cardVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="mb-4">
              <Image
                src={"/team/6.webp"}
                alt="CD"
                width={100}
                height={100}
                className="rounded-full w-10 h-10 object-cover border-1 border-blue-600"
              />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Ryan .T</div>
            <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
            <p className="text-gray-300 text-sm">
              Ryan is the Founder of Bluegeko. Over 20+ years enterprise IT
              experience with multiple successful exits as high as 9 figures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
