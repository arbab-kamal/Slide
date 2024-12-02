import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, TrendingUp } from "lucide-react";
import AboutSection from "./_components/about";
import Header from "./_components/header";
import Hero from "./_components/hero";
import ImageSection from "./_components/image";
import Feature from "./_components/feature";
import Price from "./_components/price";
import Footer from "./_components/footer";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
      highlighted: true,
    },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-black min-h-screen">
      <Header />
      <section className="container mx-auto px-4 py-16 relative">
        <Hero />
        <ImageSection />
      </section>
      <section className="container mx-auto px-4 py-16 relative">
        <Feature />
      </section>
      <section className="container mx-auto px-4 py-24">
        <Price />
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}
