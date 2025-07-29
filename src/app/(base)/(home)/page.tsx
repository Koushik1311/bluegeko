import Container from "@/components/global/Container";
import {
  ArrowRight,
  ChartColumn,
  ChartSpline,
  Check,
  CircleDollarSign,
  FileText,
  FileType,
  Globe,
  Lightbulb,
  Package,
  Presentation,
  Rocket,
  Shield,
  Users,
  X,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="mt-28 pb-10">
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Solve Funding Blockers Fast
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We fix what&apos;s stopping you—pitch, access, or strategy—so you can
          close real investor deals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="text-center mt-24">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Zap size={16} />
          <>How It Actually Work</>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How We Get You Funded
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From idea to investor-ready, we guide you through every critical stage
          with hands-on support.
        </p>

        <Container>
          <div className="relative mt-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
            <div className="grid lg:grid-cols-5 gap-8 relative">
              {/* 1 */}
              <div className="relative">
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
              </div>

              {/* 2 */}
              <div className="relative">
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
                    Map out the funding journey—target rounds, valuation
                    approach, and capital needs.
                  </p>
                </div>
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="relative">
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
              </div>

              {/* 4 */}
              <div className="relative">
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
                    Get warm intros to high-conviction angels, VCs, and
                    strategic partners in your space.
                  </p>
                </div>
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div className="relative">
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
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
