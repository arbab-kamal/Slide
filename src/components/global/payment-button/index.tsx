"use client";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import { CreditCardIcon, Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="bg-gradient-to-br from-[#3352cc] via-[#3352cc] to-[#1C2D70] 
    text-white font-bold px-6 py-2.5 rounded-full 
    hover:opacity-80 transition-all duration-200
    shadow-md hover:shadow-lg
    text-base leading-normal tracking-wide
    antialiased"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
