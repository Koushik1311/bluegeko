import CTA from "@/components/home/CTA";
import FeatureExplanation from "@/components/home/FeatureExplanation";
import Hero from "@/components/home/Hero";
import InvestorFocused from "@/components/home/InvestorFocused";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Team from "@/components/home/Team";

export default function HomePage() {
  return (
    <div className="mt-28">
      {/* Hero section */}
      <Hero />

      {/* Feature Explanation Section */}
      <FeatureExplanation />

      {/* Investor-Focused Section */}
      <InvestorFocused />

      {/* Process Section */}
      <Process />

      {/* Portfolio */}
      <Portfolio />

      {/* Team */}
      <Team />

      {/* CTA */}
      <CTA />
    </div>
  );
}
