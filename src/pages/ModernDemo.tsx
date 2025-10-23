import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConversationalAgent from "@/components/ConversationalAgent";

const ModernDemo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="portal">
        <CTASection />
      </div>
      <Footer />
      <ConversationalAgent />
    </div>
  );
};

export default ModernDemo;
