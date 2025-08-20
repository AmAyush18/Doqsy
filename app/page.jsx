import CTASection from "@/components/cta-section";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-background">
    <HeroSection />

    <FeatureSection />
    
    <PricingSection />
    
    <TestimonialsSection />

    <CTASection />
   </div>
  );
}
