import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <>
      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-3 gap-4 relative z-10">
          <div className="col-span-2 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
            <Image
              src="/Ig-creators.png"
              alt="Instagram Creators"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white/10 rounded-lg backdrop-blur-sm p-4 flex items-center justify-center hover:bg-white/20 transition-all">
              <Instagram className="text-pink-500 w-12 h-12" />
              <div className="ml-4">
                <h3 className="text-white font-bold">100K+</h3>
                <p className="text-blue-200 text-sm">Active Users</p>
              </div>
            </div>
            <div className="bg-blue-900/30 rounded-lg backdrop-blur-sm p-4 flex items-center justify-center hover:bg-blue-900/40 transition-all">
              <div>
                <h3 className="text-white font-bold">2M+</h3>
                <p className="text-blue-200 text-sm">Engagement Boost</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>
    </>
  );
};

export default ImageSection;
