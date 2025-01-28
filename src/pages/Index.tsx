import { useEffect } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import AnimatedWatermark from "@/components/AnimatedWatermark";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-primary">
      <AnimatedWatermark />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default Index;