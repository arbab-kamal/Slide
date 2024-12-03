import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Slide transforms your Instagram engagement by automating responses, enhancing interaction, and converting audience connections into business growth opportunities",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "Connect Salesforce to streamline workflows, automate processes, and transform customer interactions into business opportunities.",
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
];
