import { useState } from "react";
import Navbar from "../components/landing/Navbar";
import AnnouncementBar from "../components/landing/AnnouncementBar";
import Hero from "../components/landing/Hero";
import SocialProof from "../components/landing/SocialProof";
import PainPoints from "../components/landing/PainPoints";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Pricing from "../components/landing/Pricing";
import PartnerBenefit from "../components/landing/PartnerBenefit";
import ComplementaryServices from "../components/landing/ComplementaryServices";
import FinalCTA from "../components/landing/FinalCTA";
import DemoScheduling from "../components/landing/DemoScheduling";
import UseCases from "../components/landing/UseCases";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";
import SocialFloating from "../components/landing/SocialFloating";

export default function LandingPage() {
  const [barVisible, setBarVisible] = useState(true);
  const barHeight = barVisible ? 44 : 0;

  return (
    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif", background: "#ffffff", color: "#111d2e", overflowX: "hidden" }}>
      {barVisible && <AnnouncementBar onClose={() => setBarVisible(false)} />}
      <SocialFloating />
      <Navbar barHeight={barHeight} />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Features />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <PartnerBenefit />
        <ComplementaryServices />
        <FAQ />
        <DemoScheduling />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}