import { HeroSection } from "@/components/HeroSection";
import { VSLSection } from "@/components/VSLSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InstructorSection } from "@/components/InstructorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VSLSection />
      <FeaturesSection />
      <InstructorSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
