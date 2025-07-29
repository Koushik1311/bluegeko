import {
  ChartSpline,
  Check,
  CircleDollarSign,
  Globe,
  Package,
  Rocket,
  Shield,
  Users,
  X,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="mt-28">
      {/* Hero section */}
      <section className="text-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center justify-center gap-4 text-sm font-medium mb-8">
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
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 max-w-6xl mx-auto leading-[60px] px-4 mb-8">
          From Pitch to Product—We Bridge Startups with Capital
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto px-4">
          We help founders refine their ideas, build world-class products, and
          connect with investors who believe in bold innovation. From Dubai to
          San Francisco, we&apos;re your partners in growth.
        </p>

        <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200 mb-8">
          <Shield size={16} />
          <p>Zero Fees Until You&apos;re Funded</p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 px-4">
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
        </div>
      </section>

      {/* Feature Explanation Section */}
      <section className="text-center mt-24 py-16 bg-gray-50 border-y border-gray-200">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-4 bg-green-50 text-green-700 border-green-200">
          Why Choose Bluegeko
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Solve Funding Blockers Fast
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We fix what&apos;s stopping you—pitch, access, or strategy—so you can
          close real investor deals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-red-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-red-600" />
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Challenges Founders Face
              </h3>
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
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                How Bluegeko Helps
              </h3>
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
        </div>
      </section>
    </div>
  );
}
