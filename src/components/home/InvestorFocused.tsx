"use client";

import { motion, Variants } from "framer-motion";
import { Check, Shield, X } from "lucide-react";
import Container from "@/components/global/Container";

export default function InvestorFocused() {
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
    <section className="text-center pt-20 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <motion.div
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
      >
        <Shield size={16} />
        <>Trusted Co-Pilot for Founders</>
      </motion.div>
      <motion.h1
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        A New Standard in Investor{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Accountability & Support
        </span>
      </motion.h1>
      <motion.p
        variants={initialVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto"
      >
        From pitch to funding, we stay hands-on to drive real traction.
      </motion.p>

      <Container className="mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* left */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <X size={24} className="text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-red-400">
                Traditional Deal Flow
              </h2>
            </div>
            {/* Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Cold outreach</div>
                  <div className="text-gray-400 text-sm">
                    Chasing random leads through LinkedIn and emails.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">
                    Mixed startup quality
                  </div>
                  <div className="text-gray-400 text-sm">
                    Poor pitch decks, unclear goals, or wrong funding stage.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Weeks to book a call</div>
                  <div className="text-gray-400 text-sm">
                    Delayed intros, cold messages, low engagement rate.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">
                    No support for founders
                  </div>
                  <div className="text-gray-400 text-sm">
                    Investors handle all guidance post-intro themselves.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Low close rates</div>
                  <div className="text-gray-400 text-sm">
                    Only a small percent of conversations lead to investment.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Siloed deal flow</div>
                  <div className="text-gray-400 text-sm">
                    Limited to local networks and known VC groups.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Slow diligence</div>
                  <div className="text-gray-400 text-sm">
                    Weeks lost reviewing unqualified startup profiles.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <X size={20} className="text-red-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Uncertain ROI</div>
                  <div className="text-gray-400 text-sm">
                    Risky investments with limited founder readiness.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check size={24} className="text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-green-400">
                Bluegeko-Backed Deals
              </h2>
            </div>
            {/* Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Curated deal flow</div>
                  <div className="text-gray-400 text-sm">
                    Only vetted startups with clear roadmaps and growth plans.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Warm intros</div>
                  <div className="text-gray-400 text-sm">
                    Direct connections to founders ready for funding.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Faster timelines</div>
                  <div className="text-gray-400 text-sm">
                    Weeks faster from intro to pitch to decision.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Pitch-ready founders</div>
                  <div className="text-gray-400 text-sm">
                    Support given to build decks, plans, and clarity before
                    intro.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">
                    Higher conversion rates
                  </div>
                  <div className="text-gray-400 text-sm">
                    More deals close due to better matching and preparation.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Global reach</div>
                  <div className="text-gray-400 text-sm">
                    Access to international investor and founder networks.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">
                    Accelerated due diligence
                  </div>
                  <div className="text-gray-400 text-sm">
                    Investor-ready documentation prepared in advance.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5" />
                <div className="text-start">
                  <div className="font-semibold mb-1">Better ROI</div>
                  <div className="text-gray-400 text-sm">
                    Smarter capital deployment with higher-quality
                    opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
