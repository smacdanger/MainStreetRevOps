'use client';

import Hero from '@/components/ui/Hero';
import ProblemSection from '@/components/ui/ProblemSection';
import SolutionSection from '@/components/ui/SolutionSection';
import OutcomesSection from '@/components/ui/OutcomesSection';
import SocialProofSection from '@/components/ui/SocialProofSection';
import BeyondLeadsSection from '@/components/ui/BeyondLeadsSection';
import FinalCTASection from '@/components/ui/FinalCTASection';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        badge="AI-Powered Revenue Growth"
        title="Turn More Leads Into Revenue — Without Hiring More Staff"
        description="We design and automate sales systems that capture, convert, and grow. You keep the system forever — bring us back only if you want continuous tuning."
        primaryCTA={{
          text: "Get Your Free Lead Flow Audit",
          href: "/assessment"
        }}
        secondaryCTA={{
          text: "See How It Works", 
          href: "#how-it-works"
        }}
        variant="gradient"
      />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Outcomes Section */}
      <OutcomesSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Beyond Leads Section */}
      <BeyondLeadsSection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
}
