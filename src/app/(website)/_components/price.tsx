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

function Price() {
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
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
        <p className="text-xl text-blue-200">
          Select the perfect plan to boost your Instagram engagement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`
                flex flex-col justify-between 
                transition-all duration-300 
                ${
                  plan.highlighted
                    ? "border-2 border-blue-500 bg-blue-900/30 hover:bg-blue-900/40 scale-105"
                    : "bg-white/10 hover:bg-white/20"
                }
                backdrop-blur-sm 
                transform hover:scale-105
              `}
          >
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                {plan.name}
                {plan.highlighted && <TrendingUp className="text-blue-500" />}
              </CardTitle>
              <CardDescription className="text-blue-200">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-white">
                {plan.price}
                <span className="text-lg font-normal text-blue-300">
                  /month
                </span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-blue-100">
                    <CheckCircle className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`
                    w-full 
                    ${
                      plan.highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }
                    transition-all
                  `}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Price;
