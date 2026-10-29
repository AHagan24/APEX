import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";

// "(site)" is a route group: it shares this layout (and the Footer) across
// /explore, /customize, and /about without adding a segment to their URLs.
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
