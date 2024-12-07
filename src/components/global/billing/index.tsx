"use client";
import React from "react";
import PaymentCard from "./payment-card";
import { useQueryUser } from "@/hooks/use-queries";

const Billing = () => {
  const { data } = useQueryUser();
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PaymentCard current={data?.data?.subscription?.plan!} label="PRO" />
      <PaymentCard current={data?.data?.subscription?.plan!} label="FREE" />
    </div>
  );
};

export default Billing;
