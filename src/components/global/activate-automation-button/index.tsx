import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useQueryAutomation } from "@/hooks/use-queries";
import { useMutationData } from "@/hooks/use-mutations";
import { activateAutomation } from "@/actions/automations";
import { ActiveAutomation } from "@/icons/active-automation";

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );

  return (
    <Button
      disabled={isPending}
      //@ts-ignore
      onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
      {isPending ? <Loader2 className="animate-spin" /> : <ActiveAutomation />}

      <p className="lg:inline hidden">
        {/* @ts-ignore */}
        {data?.data?.active ? "Disable" : "Activate"}
      </p>
    </Button>
  );
};

export default ActivateAutomationButton;
