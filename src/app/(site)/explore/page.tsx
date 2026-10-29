import type { Metadata } from "next";
import Explore from "@/components/sections/Explore";

export const metadata: Metadata = {
  title: "Explore",
  description: "Inspect the APEX helmet from every angle.",
};

export default function ExplorePage() {
  return <Explore />;
}
