"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// After the existing code, add a new section component
function AboutSection() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "CEO & Co-Founder",
      bio: "Tech innovator with a passion for AI-driven social media solutions.",
      image: "/elena.jpg",
      linkedIn: "https://linkedin.com/in/example",
    },
    {
      name: "Michael Chang",
      role: "CTO & Co-Founder",
      bio: "Machine learning expert with over a decade of experience in AI technologies.",
      image: "/michael.jpg",
      linkedIn: "https://linkedin.com/in/example",
    },
    {
      name: "Sophia Nakamura",
      role: "Head of Product",
      bio: "User experience design leader transforming how brands connect online.",
      image: "/sophia.jpg",
      linkedIn: "https://linkedin.com/in/example",
    },
  ];

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-24 relative bg-gradient-to-br from-slate-900 via-blue-900 to-black"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Meet the Minds Behind Slide
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Our mission is to empower creators and businesses with intelligent
          social media tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="
              bg-white/10 
              rounded-xl 
              p-6 
              text-center 
              transform 
              transition-all 
              duration-300 
              hover:scale-105 
              hover:bg-white/20 
              backdrop-blur-sm
              relative
              overflow-hidden
              group
            
            "
            //@ts-ignore
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div
              className="
                w-32 
                h-32 
                mx-auto 
                mb-4 
                rounded-full 
                bg-blue-500/20 
                border-4 
                border-blue-500/50 
                overflow-hidden 
                transition-transform 
                group-hover:scale-110
              "
            >
              <Image
                src={member.image || "/placeholder-avatar.png"}
                alt={member.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-blue-300 mb-4">{member.role}</p>

            {hoveredMember === index && (
              <div
                className="
                  absolute 
                  inset-0 
                  bg-blue-900/90 
                  p-4 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  text-center 
                  transition-all 
                  duration-300 
                  opacity-0 
                  group-hover:opacity-100
                "
              >
                <p className="text-white text-sm mb-4">{member.bio}</p>
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  className="
                    bg-white/20 
                    text-white 
                    px-4 
                    py-2 
                    rounded-full 
                    hover:bg-white/30 
                    transition-all
                  "
                >
                  View LinkedIn
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
        <p className="text-xl text-blue-200 max-w-4xl mx-auto">
          At Slide, we believe in the power of intelligent technology to
          transform social media interactions. Our AI-driven platform helps
          creators and businesses build meaningful connections, turning every
          interaction into an opportunity for growth and engagement.
        </p>
      </div>

      {/* Background Decorative Elements
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div> */}
    </section>
  );
}

export default AboutSection;
