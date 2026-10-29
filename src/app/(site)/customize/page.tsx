import type { Metadata } from "next";
import Customize from "@/components/sections/Customize";

export const metadata: Metadata = {
  title: "Customize",
  description: "Spec your own APEX helmet: shell, visor, and finish.",
};

export default function CustomizePage() {
  return <Customize />;
}
