import React from "react";
import PaymentButton from "@/components/global/billing/payment-card";
import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";
import { CircleFadingArrowUp } from "lucide-react";

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to{" "}
        <span
          className="
        font-bold 
        bg-clip-text 
        "
        >
          Pro
        </span>
      </span>
      <p className="text-[#9B9CA0] font-light text-sm">
        Focus on Content Creation and let us take care of the rest
      </p>
      <p
        className="bg-gradient-to-br 
        from-[#3352cc] 
        to-[#3352cc] 
        font-bold 
        bg-clip-text 
        text-transparent
        text-5xl"
      >
        Smart AI
      </p>
      <p>$99.99month</p>
      <Button className="className=lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
        <Loader state={false}>
          <CircleFadingArrowUp />
          <p className="lg:inline hidden">Upgrade</p>
        </Loader>
      </Button>
    </div>
  );
};

export default UpgradeCard;
