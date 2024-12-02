import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/2 transform -translate-x-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Instagram Engagement
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
          Slide revolutionizes how you connect with your audience. Automate
          responses, boost engagement, and turn interactions into business
          opportunities.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
