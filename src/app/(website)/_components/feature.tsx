import {
  ArrowRight,
  BarChart2,
  MessageCircle,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

function Feature() {
  const features = [
    {
      icon: MessageCircle,
      title: "Smart Response ",
      description:
        "Craft intelligent, context-aware responses that engage your audience.",
      color: "text-blue-500",
    },
    {
      icon: BarChart2,
      title: "Advanced Analytics",
      description:
        "Gain deep insights into your audience's behavior and engagement patterns.",
      color: "text-green-500",
    },
    {
      icon: Target,
      title: "Targeted Messaging",
      description:
        "Personalize interactions to convert followers into loyal customers.",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Instant Engagement",
      description:
        "Respond in real-time, maintaining momentum in your social interactions.",
      color: "text-yellow-500",
    },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Revolutionize Your Instagram Strategy
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Unlock the power of AI-driven engagement with Slide&apos;s
          cutting-edge features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
                bg-white/10 
                rounded-xl 
                p-6 
                transform 
                transition-all 
                duration-300 
                hover:scale-105 
                hover:bg-white/20 
                backdrop-blur-sm 
                border 
                border-transparent 
                hover:border-blue-500/50
                group
              "
          >
            <div
              className={`
                mb-4 
                w-16 h-16 
                rounded-full 
                bg-white/10 
                flex 
                items-center 
                justify-center 
                ${feature.color}
                group-hover:rotate-12
                transition-transform
              `}
            >
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-blue-200 text-sm mb-4">{feature.description}</p>
            <Link
              href="#"
              className="
                  text-blue-400 
                  hover:text-blue-300 
                  flex 
                  items-center 
                  group
                "
            >
              Learn More
              <ArrowRight
                className="
                    ml-2 
                    transform 
                    transition-transform 
                    group-hover:translate-x-1
                  "
                size={18}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    </>
  );
}

export default Feature;
