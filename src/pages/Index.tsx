import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Capabilities from "@/components/Capabilities";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Capabilities />
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Index;
