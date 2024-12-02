import React from "react";
import { Instagram, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Linkedin />, href: "#" },
    { icon: <Facebook />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press"],
    },
    {
      title: "Resources",
      links: ["Blog", "Support", "Documentation"],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your AI Platform</h2>
          <p className="text-slate-300">
            Empowering businesses with intelligent AI solutions.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-4">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-slate-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <p className="text-slate-300 mb-4">
            Subscribe to our newsletter for the latest AI insights
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-slate-800 text-white"
            />
            <Button variant="secondary" className="rounded-l-none">
              <Mail size={16} className="mr-2" /> Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-700 text-center">
        <p className="text-slate-400">
          © 2024 Your AI Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
