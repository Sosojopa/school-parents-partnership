
import NavigationBar from "@/components/ui/navigation-bar";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import Footer from "@/components/layout/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
