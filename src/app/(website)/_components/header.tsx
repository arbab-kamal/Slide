"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import ClerkAuthState from "@/components/global/clerk-auth-state";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/90 flex items-center justify-center font-bold text-blue-900 shadow-lg">
              sl
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Slide
            </span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm text-blue-200">
            <Link
              href="#features"
              className="hover:text-white transition-colors group flex items-center"
            >
              Features{" "}
              <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#pricing"
              className="hover:text-white transition-colors group flex items-center"
            >
              Pricing{" "}
              <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#about"
              className="hover:text-white transition-colors group flex items-center"
            >
              About{" "}
              <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/privacypolicy"
              className="hover:text-white transition-colors group flex items-center"
            >
              PrivacyPolicy{" "}
              <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </nav>
          <div>
            {isSignedIn ? (
              // Render when user is signed in
              <div>
                <ClerkAuthState />
              </div>
            ) : (
              <Button className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all">
                <Link href="/sign-in">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
