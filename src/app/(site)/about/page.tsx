import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description: "The developer behind APEX.",
};

export default function AboutPage() {
  return <About />;
}
