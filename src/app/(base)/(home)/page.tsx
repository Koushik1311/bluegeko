import { CircleDollarSign, Globe, Package, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="mt-28">
      {/* Hero section */}
      <section className="text-center">
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

        <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200">
          <Shield size={16} />
          <p>Zero Fees Until You&apos;re Funded</p>
        </div>
      </section>
    </div>
  );
}
