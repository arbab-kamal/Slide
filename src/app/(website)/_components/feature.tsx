"use client";
import React from "react";
import {
  ArrowRight,
  BarChart2,
  MessageCircle,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

const Feature = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Smart Response",
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
    <div className="relative overflow-hidden">
      <div className="text-center mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="text-4xl font-bold text-white mb-4 translate-y-4 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">
          Revolutionize Your Instagram Strategy
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto translate-y-4 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
          Unlock the power of AI-driven engagement with Slide&apos;s
          cutting-edge features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-4 animate-[cardEntrance_0.6s_ease-out_forwards] bg-white/10 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-blue-500/50 group"
            style={{
              animationDelay: `${0.2 + index * 0.1}s`,
            }}
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
                transform
                transition-all
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              `}
            >
              <feature.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-blue-400">
              {feature.title}
            </h3>
            <p className="text-blue-200 text-sm mb-4 transition-colors duration-300 group-hover:text-blue-100">
              {feature.description}
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-300 flex items-center group/link"
            >
              Learn More
              <ArrowRight
                className="ml-2 transform transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:scale-110"
                size={18}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Feature;
