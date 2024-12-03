import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  return (
    <Button
      className="bg-gradient-to-br from-[#3352cc] via-[#3352cc] to-[#1C2D70] 
    text-white font-bold px-6 py-2.5 rounded-full 
    hover:opacity-80 transition-all duration-200
    shadow-md hover:shadow-lg
    text-base leading-normal tracking-wide
    antialiased"
    >
      Upgrade
    </Button>
  );
};

export default PaymentButton;
